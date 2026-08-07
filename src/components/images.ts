import React from 'react';

// Export bundled static image assets from src/components/images/
import amboHospitalMain from './images/ambo_general_hospital.jpg';
import amboHospitalBuilding from './images/ambo_general_hospital_building.jpg';
import directorTokumaBayisa from './images/director_of_ambo_general_hospital.jpg';
import ibTechStem from './images/ib_tech_stem.jpg';

export const localImages = {
  amboHospitalMain,
  amboHospitalBuilding,
  directorTokumaBayisa,
  ibTechStem,
};

// Fail-safe SVG Data URLs that never break regardless of server, host, or CORS restrictions
const createSvgDataUrl = (title: string, subtitle: string, bgGradient: [string, string], iconType: 'doctor' | 'hospital' | 'tech') => {
  const doctorSvg = `<circle cx="200" cy="110" r="45" fill="#E2E8F0"/><path d="M120 220 C120 165 280 165 280 220 Z" fill="#E2E8F0"/><circle cx="200" cy="160" r="16" fill="#059669"/><rect x="195" y="185" width="10" height="25" fill="#059669"/>`;
  const hospitalSvg = `<rect x="140" y="80" width="120" height="130" fill="#E2E8F0" rx="8"/><rect x="185" y="100" width="30" height="30" fill="#0B2545"/><rect x="195" y="90" width="10" height="50" fill="#0B2545"/><rect x="175" y="110" width="50" height="10" fill="#0B2545"/><rect x="160" y="150" width="20" height="20" fill="#059669" rx="3"/><rect x="220" y="150" width="20" height="20" fill="#059669" rx="3"/>`;
  const techSvg = `<rect x="120" y="80" width="160" height="110" fill="#0B2545" rx="10" stroke="#38BDF8" stroke-width="4"/><polygon points="200,100 220,130 180,130" fill="#38BDF8"/><circle cx="200" cy="150" r="12" fill="#34D399"/><path d="M100 210 L300 210" stroke="#38BDF8" stroke-width="6"/>`;

  const iconSvg = iconType === 'doctor' ? doctorSvg : iconType === 'tech' ? techSvg : hospitalSvg;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 400 300">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${bgGradient[0]}"/>
        <stop offset="100%" stop-color="${bgGradient[1]}"/>
      </linearGradient>
    </defs>
    <rect width="400" height="300" fill="url(#bg)"/>
    <g opacity="0.9">${iconSvg}</g>
    <rect x="0" y="210" width="400" height="90" fill="#0B2545" opacity="0.92"/>
    <text x="200" y="245" fill="#FFFFFF" font-family="sans-serif" font-size="15" font-weight="bold" text-anchor="middle">${title}</text>
    <text x="200" y="270" fill="#34D399" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">${subtitle}</text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export const fallbackDataUrls = {
  directorTokumaBayisa: createSvgDataUrl('Dr. Tokuma Bayisa (MD, MPH)', 'Medical Director - Ambo General Hospital', ['#0B2545', '#134074'], 'doctor'),
  amboHospitalMain: createSvgDataUrl('Ambo General Hospital', 'Main Campus - West Shewa, Oromia', ['#0B2545', '#059669'], 'hospital'),
  amboHospitalBuilding: createSvgDataUrl('New Inpatient & Surgical Complex', 'Ambo General Hospital', ['#1E293B', '#0F172A'], 'hospital'),
  ibTechStem: createSvgDataUrl('IB Tech & STEM Innovation Lab', 'Smart EHR & Telemedicine Platform', ['#0F172A', '#0284C7'], 'tech'),
};

/**
 * Universal error handler that gracefully switches to fail-safe SVG Data URL
 * if the network request for any image asset fails.
 */
export const handleImgError = (
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  fallbackType?: 'director' | 'main' | 'building' | 'stem' | string
) => {
  const target = e.currentTarget;
  if (target.dataset.failed === 'true') return;
  target.dataset.failed = 'true';

  if (fallbackType === 'director') {
    target.src = fallbackDataUrls.directorTokumaBayisa;
  } else if (fallbackType === 'building') {
    target.src = fallbackDataUrls.amboHospitalBuilding;
  } else if (fallbackType === 'stem') {
    target.src = fallbackDataUrls.ibTechStem;
  } else if (fallbackType === 'main') {
    target.src = fallbackDataUrls.amboHospitalMain;
  } else {
    target.src = fallbackDataUrls.amboHospitalMain;
  }
};
