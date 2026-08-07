import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ShieldAlert, Sparkles, MessageSquare } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations/i18n';
import { EthiopicPattern } from './EthiopicPattern';

interface ContactProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactProps> = ({ currentLang }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const t = (key: string) => translations[currentLang][key] || key;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Background Pattern */}
      <EthiopicPattern className="absolute inset-0 opacity-15" variant="subtle" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-100 text-[#059669] text-xs font-extrabold uppercase tracking-widest border border-emerald-200">
            <MessageSquare className="w-4 h-4" />
            <span>{t('contact.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {t('contact.title')}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-2xl relative">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#059669] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message Sent Successfully!</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">{t('contact.successMsg')}</p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-[#0B2545] text-white text-xs font-bold hover:bg-[#134074]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      {t('contact.nameLabel')} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Tolessa Abebe"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#059669] text-sm text-slate-900 shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      {t('contact.phoneLabel')} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +251 91 100 0000"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#059669] text-sm text-slate-900 shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      {t('contact.emailLabel')}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. patient@gmail.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#059669] text-sm text-slate-900 shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      {t('contact.subjectLabel')}
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#059669] text-sm text-slate-900 shadow-sm"
                    >
                      <option value="General Inquiry">General Hospital Inquiry</option>
                      <option value="Appointment Booking">Appointment Booking</option>
                      <option value="Surgery Department">Surgical Consultation</option>
                      <option value="Maternal & Child">Maternal Health & Delivery</option>
                      <option value="STEM Center & Training">STEM Center & IB Tech Training</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    {t('contact.msgLabel')} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message or inquiry details here..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#059669] text-sm text-slate-900 shadow-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#059669] via-[#0891B2] to-[#0B2545] text-white font-bold text-sm shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  {loading ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t('contact.submitBtn')}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Hospital Contact Directory */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-3xl p-8 border border-slate-200/80 shadow-xl space-y-6">
              <h3 className="text-xl font-extrabold text-slate-900 flex items-center space-x-2">
                <Phone className="w-5 h-5 text-[#059669]" />
                <span>Hospital Contact Directory</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start space-x-3 p-3 bg-slate-50 rounded-2xl border border-slate-200/60">
                  <Phone className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">24/7 Emergency Line</div>
                    <div className="text-amber-700 font-extrabold text-base">907 / +251 11 236 2028</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-slate-50 rounded-2xl border border-slate-200/60">
                  <Mail className="w-5 h-5 text-[#0891B2] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">Official Email</div>
                    <div className="text-slate-600">info@ambogeneralhospital.gov.et</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-slate-50 rounded-2xl border border-slate-200/60">
                  <MapPin className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">Physical Address</div>
                    <div className="text-slate-600">Main Hospital Road, Ambo Town, West Shewa Zone, Oromia, Ethiopia</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-slate-50 rounded-2xl border border-slate-200/60">
                  <Clock className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">Working Hours</div>
                    <div className="text-slate-600">Emergency & Inpatient: 24/7/365</div>
                    <div className="text-slate-600">Outpatient (OPD): Mon - Sun: 8:00 AM - 6:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Digital Portal Banner */}
            <div className="glass-panel-dark rounded-3xl p-6 border border-emerald-500/30 text-white space-y-3">
              <div className="flex items-center space-x-2 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Online Patient Portal</span>
              </div>
              <h4 className="text-lg font-bold">Prefer Online Booking & Records?</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Access your appointment schedules, prescription history, and telemedicine consultations anytime via our web portal.
              </p>
              <a
                href="https://aghcare.lovable.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-bold transition-colors"
              >
                <span>Launch Patient Portal</span>
                <Send className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
