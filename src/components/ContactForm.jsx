import React, { useState } from 'react';

const INK = '#1a1a1a';
const PAPER = '#fcf3c6';

function genCode() {
  return 'AI60-' + Math.random().toString(36).slice(2, 6).toUpperCase();
}

const YEARS = ['2026', '2027', '2028', 'Other'];
const BRANCHES = ['CSE', 'IT', 'ECE', 'EEE', 'Mech', 'Civil', 'Other'];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', college: '', branch: '', year: '', refBy: ''
  });
  const [errors, setErrors] = useState({});
  const [note, setNote] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success
  const [myCode, setMyCode] = useState('');
  const [myLink, setMyLink] = useState('');

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = 'Name is required *';
    if (!formData.email.trim()) e.email = 'Email is required *';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Enter a valid email *';
    if (!formData.phone.trim()) e.phone = 'WhatsApp number is required *';
    else if (!/^[6-9][0-9]{9}$/.test(formData.phone.trim())) e.phone = 'Enter a valid 10-digit mobile number *';
    if (!formData.college.trim()) e.college = 'College is required *';
    if (!formData.branch) e.branch = 'Branch is required *';
    if (!formData.year) e.year = 'Graduation year is required *';
    return e;
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }));
    if (name === 'year') {
      setNote((value === '2028' || value === 'Other')
        ? 'This batch is for final-year students (2026–27). You can still register for updates.'
        : '');
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const v = validate();
    if (Object.keys(v).length) { setErrors(v); return; }
    setStatus('loading');
    setTimeout(() => {
      const code = genCode();
      const link = window.location.origin + window.location.pathname + '?ref=' + code;
      try {
        const key = 'nxtwave_ai60_regs';
        const regs = JSON.parse(localStorage.getItem(key) || '[]');
        regs.push({ ...formData, code, refBy: (formData.refBy || 'DIRECT').toUpperCase(), ts: Date.now(), count: 0 });
        localStorage.setItem(key, JSON.stringify(regs));
      } catch { /* private mode */ }
      setMyCode(code);
      setMyLink(link);
      setStatus('success');
    }, 800);
  };

  const wa = myLink
    ? `https://wa.me/?text=${encodeURIComponent(`I registered for NxtWave FREE workshop: Build First AI Project in 60 Mins. Certificate + live project. Join: ${myLink}`)}`
    : '#';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ textAlign: 'center', borderBottom: `2px dashed ${INK}`, paddingBottom: '10px' }}>
        <div style={{ fontSize: '1.4rem', fontWeight: 800 }}>REGISTER NOW — FREE SEAT</div>
        <div style={{ fontSize: '0.85rem' }}>Sun 7PM IST • Online • Certificate + live project URL • 500 seats</div>
      </div>

      {status === 'success' ? (
        <div style={{ ...box, background: '#e9f9e9', textAlign: 'center' }}>
          <div style={{ fontSize: '1.1rem', fontWeight: 800 }}>Seat reserved! Your code: {myCode}</div>
          <div style={{ fontSize: '0.8rem', wordBreak: 'break-all', margin: '6px 0' }}>{myLink}</div>
          <a href={wa} target="_blank" rel="noreferrer" style={{ ...btn, background: '#25D366', color: '#062b16', textDecoration: 'none' }}>
            Share on WhatsApp — Top 3 win ₹500
          </a>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Field label="Full Name *" error={errors.name}>
            <input name="name" placeholder="e.g. Sandesh Surwase" value={formData.name} onChange={handleChange} style={inp} />
          </Field>
          <Field label="College Email *" error={errors.email}>
            <input name="email" type="email" placeholder="you@college.edu" value={formData.email} onChange={handleChange} style={inp} />
          </Field>
          <Field label="WhatsApp Number *" error={errors.phone}>
            <input name="phone" inputMode="numeric" placeholder="10-digit mobile" value={formData.phone} onChange={handleChange} style={inp} />
          </Field>
          <Field label="College Name *" error={errors.college}>
            <input name="college" placeholder="e.g. BIT" value={formData.college} onChange={handleChange} style={inp} />
          </Field>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <Field label="Branch *" error={errors.branch}>
              <select name="branch" value={formData.branch} onChange={handleChange} style={inp}>
                <option value="">Select</option>
                {BRANCHES.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
            </Field>
            <Field label="Graduation Year *" error={errors.year}>
              <select name="year" value={formData.year} onChange={handleChange} style={inp}>
                <option value="">Select</option>
                {YEARS.map((y) => <option key={y} value={y}>{y}</option>)}
              </select>
            </Field>
          </div>
          {note && <div style={{ fontSize: '0.8rem', background: '#fff4d6', border: `2px dashed ${INK}`, padding: '6px 10px' }}>{note}</div>}
          <Field label="Referral Code (optional)">
            <input name="refBy" placeholder="e.g. AI60-X7K2" value={formData.refBy} onChange={handleChange} style={{ ...inp, borderStyle: 'dashed' }} />
          </Field>
          <button type="submit" disabled={status === 'loading'} style={{ ...btn, opacity: status === 'loading' ? 0.7 : 1 }}>
            {status === 'loading' ? 'Reserving...' : 'Claim Free Seat + Get Referral Link'}
          </button>
        </form>
      )}
      <div style={{ fontSize: '0.75rem', textAlign: 'center' }}>
        Questions? <a href="mailto:media@nxtwave.tech" style={{ color: INK, fontWeight: 800 }}>media@nxtwave.tech</a>
      </div>
    </div>
  );
}

function Field({ label, error, children }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.85rem', fontWeight: 700 }}>
      {label}
      {children}
      {error && <span style={{ fontSize: '0.78rem', color: '#b00020' }}>{error}</span>}
    </label>
  );
}

const inp = {
  padding: '10px 12px',
  background: '#fffdf4',
  border: `2px solid ${INK}`,
  borderRadius: '2px 12px 2px 12px',
  fontFamily: "'Cabin Sketch', cursive",
  fontSize: '0.95rem',
  color: INK,
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box'
};

const btn = {
  padding: '12px',
  background: PAPER,
  border: `2px solid ${INK}`,
  boxShadow: `4px 4px 0 ${INK}`,
  borderRadius: '2px 12px 2px 12px',
  fontFamily: "'Cabin Sketch', cursive",
  fontWeight: 800,
  fontSize: '1rem',
  color: INK,
  cursor: 'pointer',
  display: 'inline-block',
  textAlign: 'center'
};

const box = {
  border: `2px solid ${INK}`,
  borderRadius: '2px 12px 2px 12px',
  boxShadow: `4px 4px 0 ${INK}`,
  padding: '14px',
  fontFamily: "'Cabin Sketch', cursive",
  color: INK
};
