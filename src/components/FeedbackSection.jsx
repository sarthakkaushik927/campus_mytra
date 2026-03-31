import { useEffect, useRef, useState } from 'react';
import heroBg from '../assets/hero.png';

export default function FeedbackSection() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !rating) return;
    setSubmitted(true);
  };

  return (
    <section
      id="feedback"
      style={{
        background: '#050508',
        padding: '120px 40px 160px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative hero.png background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}>
        <img
          src={heroBg}
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            opacity: 0.03,
            filter: 'blur(10px)',
          }}
        />
      </div>

      {/* BG glow */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '700px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
      }} />

      <div
        ref={sectionRef}
        className="scroll-fade"
        style={{ maxWidth: '600px', margin: '0 auto', position: 'relative', zIndex: 1 }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <p style={{
            fontSize: '12px',
            fontWeight: 600,
            letterSpacing: '0.2em',
            color: '#7c3aed',
            textTransform: 'uppercase',
            marginBottom: '14px',
          }}>
            Your Voice Matters
          </p>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: '#fff',
            margin: '0 0 14px',
          }}>
            Share Feedback
          </h2>
          <p style={{
            fontSize: '16px',
            color: 'rgba(255,255,255,0.45)',
            lineHeight: 1.7,
          }}>
            Help us build the best campus app. Every suggestion shapes what comes next.
          </p>
        </div>

        {submitted ? (
          /* Success state */
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(124,58,237,0.3)',
            borderRadius: '24px',
            padding: '60px 40px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '52px', marginBottom: '20px' }}>🎉</div>
            <h3 style={{ fontSize: '22px', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
              Thanks for your feedback!
            </h3>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>
              We've received your message and will use it to make Campus Mytra even better.
            </p>
            <button
              onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }); setRating(0); }}
              style={{
                marginTop: '28px',
                background: 'none',
                border: '1px solid rgba(255,255,255,0.15)',
                borderRadius: '50px',
                padding: '10px 28px',
                color: 'rgba(255,255,255,0.55)',
                fontSize: '13px',
                cursor: 'none',
                transition: 'border-color 0.2s, color 0.2s',
              }}
            >
              Submit Another
            </button>
          </div>
        ) : (
          /* Form */
          <form
            onSubmit={handleSubmit}
            style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '24px',
              padding: '48px 40px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              backdropFilter: 'blur(20px)',
            }}
          >
            {/* Name & Email */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: '8px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Name
                </label>
                <input
                  className="dark-input"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  required
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: '8px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Email
                </label>
                <input
                  className="dark-input"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  required
                />
              </div>
            </div>

            {/* Star rating */}
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: '10px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Your Rating
              </label>
              <div style={{ display: 'flex', gap: '4px' }}>
                {[1, 2, 3, 4, 5].map(n => (
                  <button
                    key={n}
                    type="button"
                    className={`star-btn${n <= (hoverRating || rating) ? ' active' : ''}`}
                    onMouseEnter={() => setHoverRating(n)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setRating(n)}
                  >
                    ★
                  </button>
                ))}
                {rating > 0 && (
                  <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', alignSelf: 'center', marginLeft: '8px' }}>
                    {['', 'Poor', 'Fair', 'Good', 'Great', 'Excellent'][rating]}
                  </span>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: '8px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Message
              </label>
              <textarea
                className="dark-input"
                rows={5}
                placeholder="Tell us what you think, what you'd love to see, or what we can improve..."
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                style={{ resize: 'vertical', minHeight: '120px' }}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '14px 32px',
                borderRadius: '50px',
                background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                border: 'none',
                color: '#fff',
                fontSize: '15px',
                fontWeight: 700,
                letterSpacing: '0.04em',
                cursor: 'none',
                boxShadow: '0 4px 24px rgba(124,58,237,0.4)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(124,58,237,0.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 24px rgba(124,58,237,0.4)'; }}
            >
              Send Feedback
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
          </form>
        )}

        {/* Footer note */}
        <p style={{
          textAlign: 'center',
          marginTop: '28px',
          fontSize: '12px',
          color: 'rgba(255,255,255,0.2)',
          lineHeight: 1.6,
        }}>
          Campus Mytra · Built by KA-arma · Your data is never shared.
        </p>
      </div>
    </section>
  );
}
