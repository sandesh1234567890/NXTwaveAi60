/**
 * NxtWave Workshop Content Data
 * Room 2: real company info + 60-min curriculum from nw-launchpad.nxtwave.tech
 */

export const PLATFORM_CONFIG = {
    youtube: {
        color: '#00D9FF',
        accentColor: '#5BE7FF',
        icon: '▶',
        label: 'Workshop',
        shape: 'tv',
    },
    blog: {
        color: '#5BE7FF',
        accentColor: '#00D9FF',
        icon: '📝',
        label: 'Launchpad',
        shape: 'monitor',
    },
    tiktok: {
        color: '#00D9FF',
        accentColor: '#5BE7FF',
        icon: '📱',
        label: 'Outcome',
        shape: 'phone',
    },
    linkedin: {
        color: '#00D9FF',
        accentColor: '#5BE7FF',
        icon: 'in',
        label: 'Hired',
        shape: 'monitor',
    },
    codrops: {
        color: '#00D9FF',
        accentColor: '#5BE7FF',
        icon: '💧',
        label: 'Founder',
        shape: 'monitor',
    },
};

const RAW_CONTENT_DATA = [
    {
        id: 'nxtwave-60min-plan',
        platform: 'blog',
        title: 'Build Your First AI Project in 60 Minutes — Free Workshop',
        description: '0-10 min: why AI projects beat marks. 10-35: build resume screener chatbot no-code. 35-50: deploy live URL. 50-60: certificate + referral unlock.',
        frontTexture: '/textures/studio/monitorfront_postnafbdoublewinner.webp',
        paintedFrontTexture: '/textures/studio/monitorfront_postnafbdoublewinner_painted.webp',
        thumbnail: null,
        url: '#register',
        date: '2026-10-05',
        readTime: '60 min',
    },
    {
        id: 'nxtwave-launchpad',
        platform: 'blog',
        title: 'NxtWave Launchpad: 15000+ IIT/IIIT community, Top 3% invited',
        description: 'DSA 1000+ problems, Gen AI, Web Dev, HFT/Quant, AI tutor, mock interviews with MAANG mentors, referrals + 2500+ companies hiring.',
        frontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego.webp',
        paintedFrontTexture: '/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp',
        thumbnail: null,
        url: 'https://nw-launchpad.nxtwave.tech/',
        date: '2026-09-01',
        readTime: '6 min',
    },
    {
        id: 'nxtwave-founders',
        platform: 'codrops',
        title: 'Founders: Rahul Attuluri • Sashank Gujjula • Anupam Pedarla',
        description: 'IIIT-H Ex-Amazon, IIT-B AIR 119, IIT-KGP. Forbes 30 Under 30, $33M funding, OpenAI Academy GenAI challenge. See floating photo in Outcomes room.',
        thumbnail: '/images/nxtwave-founders.png',
        url: 'https://nw-launchpad.nxtwave.tech/',
        date: '2026-08-19',
        readTime: '4 min',
    },
    {
        id: 'nxtwave-subhash-80l',
        platform: 'linkedin',
        title: 'Subhash • IIT KGP • 80L Apple + Mohith 57L, Nobin 66L',
        description: '2026 batch real offers. POTD, contests, LLD, CS quizzes + mock interviews = placement confidence. Full wall in Outcomes room.',
        thumbnail: null,
        url: 'https://nw-launchpad.nxtwave.tech/',
        date: '2026-07-10',
        readTime: '5 min',
    },
    {
        id: 'nxtwave-register',
        platform: 'tiktok',
        title: 'Free Seat + Referral: AI60-XXXX • Top 3 win Rs 500',
        description: 'Register in 20 sec, share WhatsApp link, climb leaderboard. T-3, T-1, T-1hr reminders cut no-show 40% to 15%. Go to REGISTER door.',
        frontTexture: '/textures/studio/phonefront_followmeontiktok.webp',
        paintedFrontTexture: '/textures/studio/phonefront_followmeontiktok_painted.webp',
        thumbnail: null,
        url: '#register',
        date: '2026-10-01',
        views: '500',
        likes: '150',
    },
];

const ytTextures = ['/textures/studio/tvfront_filmikprojektdlamultiego.webp', '/textures/studio/tvfront_filmikedytowaniezdjec.webp'];
const ytPaintedTextures = ['/textures/studio/tvfront_filmikprojektdlamultiego_painted.webp', '/textures/studio/tvfront_filmikedytowaniezdjec_painted.webp'];
const blogTextures = ['/textures/studio/monitorfront_postnafbdoublewinner.webp'];
const blogPaintedTextures = ['/textures/studio/monitorfront_postnafbdoublewinner_painted.webp'];
const ttTextures = ['/textures/studio/phonefront_followmeontiktok.webp'];
const ttPaintedTextures = ['/textures/studio/phonefront_followmeontiktok_painted.webp'];

let ytIdx = 0, blogIdx = 0, ttIdx = 0;
let ytPIdx = 0, blogPIdx = 0, ttPIdx = 0;

export const CONTENT_DATA = RAW_CONTENT_DATA.map((item) => {
    return {
        ...item,
        frontTexture: item.frontTexture || (
            item.platform === 'youtube' ? ytTextures[ytIdx++ % ytTextures.length] :
                item.platform === 'blog' ? blogTextures[blogIdx++ % blogTextures.length] :
                    ttTextures[ttIdx++ % ttTextures.length]
        ),
        paintedFrontTexture: item.paintedFrontTexture || (
            item.platform === 'youtube' ? ytPaintedTextures[ytPIdx++ % ytPaintedTextures.length] :
                item.platform === 'blog' ? blogPaintedTextures[blogPIdx++ % blogPaintedTextures.length] :
                    ttPaintedTextures[ttPIdx++ % ttPaintedTextures.length]
        )
    };
});

export const getContentByPlatform = (platform) => {
    if (platform === 'all') return CONTENT_DATA;
    return CONTENT_DATA.filter(item => item.platform === platform);
};

export const getLatestContent = () => {
    return [...CONTENT_DATA].sort((a, b) => new Date(b.date) - new Date(a.date))[0];
};
