import React, { useState } from 'react';

function genCode() {
  return 'AI60-' + Math.random().toString(36).slice(2, 6).toUpperCase();
}

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', college: '', branch: 'CSE', refBy: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [myCode, setMyCode] = useState('');
  const [myLink, setMyLink] = useState('');

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = 'Name required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Valid email required';
    if (!/^[0-9]{10}$/.test(formData.phone.trim())) e.phone = '10-digit WhatsApp number required';
    if (!formData.college.trim()) e.college = 'College required';
    return e;
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }));
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
        regs.push({ ...formData, code, refBy: formData.refBy || 'DIRECT', ts: Date.now(), count: 0 });
        localStorage.setItem(key, JSON.stringify(regs));
      } catch {}
      setMyCode(code);
      setMyLink(link);
      setStatus('success');
    }, 800);
  };

  const wa = myLink ? `https://wa.me/?text=${encodeURIComponent(`I registered for NxtWave FREE workshop: Build First AI Project in 60 Mins. Certificate + live project. Join: ${myLink}`)}` : '#';

  return (
    <form onSubmit={handleSubmit} noValidate className="glass-panel"
      style={{ padding: 'clamp(24px,5vw,44px)', display: 'flex', flexDirection: 'column', gap: '14px', backgroundColor: 'rgba(16,16,16,0.6)', border: '1px solid var(--border-primary)', borderRadius: 'var(--radius-lg)', width: '100%' }}
      aria-label="NxtWave AI60 workshop registration">
      <div style={{ textAlign: 'left', borderBottom: '1px solid var(--border-primary)', paddingBottom: '12px' }}>
        <h3 style={{ fontSize: '1.25rem', margin: '0 0 4px' }}>Build First AI Project in 60 Mins — Free Seat</h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>Sun 7PM IST • Online • Certificate + live project URL • 500 seats</p>
      </div>
      {status === 'success' && (
        <div role="alert" style={{ padding: '14px', backgroundColor: 'rgba(52,211,153,0.12)', border: '1px solid var(--success)', borderRadius: '8px', fontSize: '0.9rem', textAlign: 'center' }}>
          Seat reserved! Code <b>{myCode}</b><br />
          <span style={{ fontSize: '0.8rem', wordBreak: 'break-all' }}>{myLink}</span><br />
          <a href={wa} target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: '8px', padding: '8px 14px', background: '#25D366', color: '#000', fontWeight: 800, borderRadius: '8px', textDecoration: 'none' }}>Share on WhatsApp — Top 3 win ₹500</a>
        </div>
      )}
      <input name="name" placeholder="Full Name*" value={formData.name} onChange={handleChange} className="form-input" style={inp} />
      {errors.name && <Err t={errors.name} />}
      <input name="email" placeholder="College Email*" value={formData.email} onChange={handleChange} className="form-input" style={inp} />
      {errors.email && <Err t={errors.email} />}
      <input name="phone" placeholder="WhatsApp Number (10-digit)*" value={formData.phone} onChange={handleChange} className="form-input" style={inp} />
      {errors.phone && <Err t={errors.phone} />}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        <input name="college" placeholder="College*" value={formData.college} onChange={handleChange} className="form-input" style={inp} />
        <select name="branch" value={formData.branch} onChange={handleChange} className="form-input" style={inp}>
          {['CSE','IT','ECE','EEE','Mech','Civil','Other'].map(b => <option key={b} value={b}>{b}</option>)}
        </select>
      </div>
      <input name="refBy" placeholder="Referral Code (optional)" value={formData.refBy} onChange={handleChange} className="form-input" style={{ ...inp, borderStyle: 'dashed' }} />
      <button type="submit" disabled={status === 'loading'} className="form-submit-btn"
        style={{ padding: '16px', background: 'linear-gradient(135deg,#06b6d4,#8b5cf6)', color: '#fff', borderRadius: '10px', fontWeight: 800, fontSize: '1rem', cursor: 'pointer', opacity: status==='loading'?0.7:1 }}>
        {status === 'loading' ? 'Reserving...' : 'Claim Free Seat + Get Referral Link'}
      </button>
      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0 }}>Real NxtWave info: <a href="https://nw-launchpad.nxtwave.tech/" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>nw-launchpad.nxtwave.tech</a> • 15k+ IIT/IIIT • 2500+ companies • Founders Forbes 30U30</p>
    </form>
  );
}
const inp = { padding: '14px 16px', backgroundColor: 'var(--background-secondary)', border: '1px solid var(--border-primary)', borderRadius: '8px', color: 'var(--text-primary)', fontSize: '0.95rem' };
const Err = ({ t }) => <span style={{ fontSize: '0.8rem', color: 'var(--error)' }}>{t}</span>;
