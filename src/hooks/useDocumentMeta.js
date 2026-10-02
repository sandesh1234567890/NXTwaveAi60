import { useEffect, useRef } from 'react';
import { useScene } from '../context/SceneContext';

/**
 * useDocumentMeta — Dynamic Meta Tags & Virtual Routing (History API)
 */

const ROOM_META = {
    null: {
        path: '/',
        title: 'Sandesh — NXTwave Ai 60min',
        description: 'Free 60-min NXTwave workshop by Sandesh: final-year engineers build their first AI project with certificate, live URL and referrals.',
    },
    about: {
        path: '/about',
        title: 'Outcomes — Sandesh NXTwave AI60',
        description: 'NxtWave Launchpad outcomes: 2500+ companies hired, 80L Apple, 66L, 57L offers, 15000+ IIT/IIIT community.',
    },
    gallery: {
        path: '/gallery',
        title: 'Workshop — Sandesh NXTwave AI60',
        description: 'Build your first AI project in 60 minutes: no-code build, live deploy, resume bullet and certificate. Free, 500 seats.',
    },
    studio: {
        path: '/studio',
        title: 'NxtWave — Sandesh NXTwave AI60',
        description: 'Real NxtWave company info: Launchpad, MAANG mentors, founders Forbes 30 Under 30, $33M funding.',
    },
    contact: {
        path: '/contact',
        title: 'Register — Sandesh NXTwave AI60',
        description: 'Claim your free AI60 seat in 20 seconds and get your referral link. Top 3 referrers win Rs 500.',
    },
};

// Map URL paths back to room IDs for deep linking
const PATH_TO_ROOM = {
    '/': null,
    '/about': 'about',
    '/gallery': 'gallery',
    '/studio': 'studio',
    '/contact': 'contact',
};

export function getInitialRoomFromUrl() {
    const path = window.location.pathname.replace(/\/+$/, '') || '/';
    return PATH_TO_ROOM[path] !== undefined ? PATH_TO_ROOM[path] : null;
}

export function useDocumentMeta() {
    const { currentRoom, teleportTo, hasEntered } = useScene();
    const isHandlingPopState = useRef(false);
    const lastPushedRoom = useRef(undefined); // Track what we last pushed to avoid duplicates

    // Update document meta and URL when room changes
    useEffect(() => {
        const roomKey = currentRoom === null ? 'null' : currentRoom;
        const meta = ROOM_META[roomKey] || ROOM_META['null'];

        // Update the page title
        document.title = meta.title;

        // Update meta description
        const descTag = document.querySelector('meta[name="description"]');
        if (descTag) {
            descTag.setAttribute('content', meta.description);
        }

        // Update OG meta tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', meta.title);

        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute('content', meta.description);

        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute('content', `https://nx-twave-ai60.vercel.app${meta.path}`);

        // Update canonical link
        const canonicalTag = document.querySelector('link[rel="canonical"]');
        if (canonicalTag) {
            canonicalTag.setAttribute('href', `https://nx-twave-ai60.vercel.app${meta.path}`);
        }

        // Push to browser history
        if (!isHandlingPopState.current && lastPushedRoom.current !== currentRoom) {
            if (lastPushedRoom.current === undefined) {
                window.history.replaceState({ room: currentRoom }, '', meta.path);
            } else {
                window.history.pushState({ room: currentRoom }, '', meta.path);
            }
            lastPushedRoom.current = currentRoom;
        }
        isHandlingPopState.current = false;
    }, [currentRoom]);

    // Handle browser back/forward buttons
    useEffect(() => {
        const handlePopState = (e) => {
            const room = e.state ? e.state.room : null;
            if (room !== undefined) {
                isHandlingPopState.current = true;
                lastPushedRoom.current = room;
                teleportTo(room);
            }
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, [teleportTo]);
}
