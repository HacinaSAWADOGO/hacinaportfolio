import React, { useState } from 'react';
import SectionHeader from './SectionHeader';

// ==========================================
// CONFIGURATION : REMPLACEZ PAR VOS COORDONNÉES RÉELLES
// ==========================================
const CONTACT_INFO = {
  phone: "+226 70 00 00 00",
  email: "hacinasawadogo@gmail.com",
  location: "Ouagadougou, Burkina Faso",
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    tiktok: "https://tiktok.com",
    youtube: "https://youtube.com"
  }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple front-end validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }
    
    setLoading(true);
    setStatus(null);

    // Mocking form submission behavior
    setTimeout(() => {
      setLoading(false);
      setStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact">
      <div className="bg-wave-container">
        <div className="bg-wave" style={{ width: '500px', height: '500px', bottom: '-10%', left: '-5%' }} />
      </div>

      <div className="app-container">
        <SectionHeader 
          badge="Contactez-moi"
          title="Discutons de votre projet"
          subtitle="Vous avez une idée en tête, besoin d'une formation ou d'une vidéo publicitaire ? Laissez-moi un message !"
        />

        <div className="contact-grid">
          {/* Left Column: Coordinates */}
          <div className="contact-info-col">
            <h3 className="contact-info-title">Coordonnées professionnelles</h3>
            <p className="contact-info-desc">
              N'hésitez pas à me joindre directement par téléphone ou par e-mail. Je réponds généralement dans les 24 heures ouvrées.
            </p>

            <div className="contact-details-list">
              {/* Phone */}
              <div className="contact-detail-item">
                <div className="contact-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className="contact-detail-content">
                  <span className="contact-detail-label">Téléphone</span>
                  <a href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} className="contact-detail-value">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="contact-detail-item">
                <div className="contact-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="contact-detail-content">
                  <span className="contact-detail-label">E-mail</span>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="contact-detail-value">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="contact-detail-item">
                <div className="contact-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="contact-detail-content">
                  <span className="contact-detail-label">Localisation</span>
                  <span className="contact-detail-value">{CONTACT_INFO.location}</span>
                </div>
              </div>
            </div>

            {/* Social icons bottom */}
            <div>
              <p className="contact-detail-label" style={{ marginBottom: '0.75rem' }}>Suivez-moi :</p>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {Object.entries(CONTACT_INFO.socials).map(([name, url], idx) => (
                  <a 
                    key={idx}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-circle-btn"
                    aria-label={name}
                    title={name}
                  >
                    {/* Simplified selection rendering for icons */}
                    {name === 'facebook' && (
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor">
                        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8v-6.9h-2.5V12H10V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.9l-.5 2.9H13v6.9c4.56-.93 8-4.96 8-9.8z"/>
                      </svg>
                    )}
                    {name === 'instagram' && (
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    )}
                    {name === 'linkedin' && (
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    )}
                    {name === 'tiktok' && (
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.63 4.19 1.13 1.25 2.72 1.95 4.4 2.05v3.82c-1.31-.05-2.61-.53-3.65-1.35-.91-.71-1.57-1.74-1.87-2.83-.1-.08-.12-.07-.12.06-.06 2.37-.03 4.75-.05 7.12-.02 1.13-.19 2.27-.61 3.32-.93 2.3-3.08 3.98-5.54 4.19-2.22.18-4.52-.72-5.74-2.58-1.22-1.8-1.23-4.27-.03-6.07 1.04-1.61 2.82-2.63 4.74-2.67.24-.01.48-.01.72.02v3.74c-1.04.14-1.99.78-2.45 1.72-.51 1.01-.39 2.3.31 3.19.78.96 2.11 1.28 3.23.77 1.01-.45 1.67-1.51 1.71-2.61.04-2.31.02-4.63.03-6.94.01-3.23.01-6.46.01-9.69-.36-.02-.73-.02-1.09-.01z"/>
                      </svg>
                    )}
                    {name === 'youtube' && (
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor">
                        <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-panel">
            <form onSubmit={handleSubmit}>
              {status === 'success' && (
                <div className="form-status-msg success">
                  Merci ! Votre message a été envoyé avec succès. Je vous recontacterai rapidement.
                </div>
              )}
              {status === 'error' && (
                <div className="form-status-msg error">
                  Veuillez remplir tous les champs obligatoires correctement.
                </div>
              )}

              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Nom complet *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input" 
                    placeholder="Votre nom"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">E-mail *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input" 
                    placeholder="Votre e-mail"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Sujet</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input" 
                  placeholder="Objet de votre message"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Votre message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input form-textarea" 
                  placeholder="Décrivez votre projet ou votre demande..."
                  required
                ></textarea>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? 'Envoi en cours...' : 'Envoyer le message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
