import { ServiceItem, NewsArticle, AchievementItem, GalleryItem, Testimonial, TriageOption, FAQItem } from '../types';
import { localImages } from '../assets/images';

export const servicesData: ServiceItem[] = [
  {
    id: 'emergency',
    titleKey: 'srv.emergency.title',
    category: 'emergency',
    icon: 'Ambulance',
    image: localImages.amboHospitalMain,
    capacity: '24 Beds / 4 Trauma Bays',
    availability: '24/7 Round-the-Clock',
    shortDescKey: 'srv.emergency.desc',
    fullDescKey: 'srv.emergency.full',
    features: ['Rapid Trauma Resuscitation', '24/7 Dedicated Emergency Surgical Team', 'Immediate On-Site Blood Bank Access', 'Advanced Cardiac Defibrillators & Monitors'],
    headDoctor: 'Dr. Tadesse Gemechu (Emergency Specialist)',
    locationRoom: 'Ground Floor, North Gate Entrance'
  },
  {
    id: 'outpatient',
    titleKey: 'srv.outpatient.title',
    category: 'general',
    icon: 'Users',
    image: localImages.amboHospitalMain,
    capacity: '800+ Consultations / Day',
    availability: 'Mon - Sun: 8:00 AM - 6:00 PM',
    shortDescKey: 'srv.outpatient.desc',
    fullDescKey: 'srv.outpatient.full',
    features: ['General Medical Consultations', 'Chronic Illness Follow-ups (Diabetes, Hypertension)', 'Digital Queue Management System', 'Same-Day Lab Diagnostics'],
    headDoctor: 'Dr. Mesfin Ayele (General Medicine)',
    locationRoom: 'Building A, OPD Block'
  },
  {
    id: 'inpatient',
    titleKey: 'srv.inpatient.title',
    category: 'general',
    icon: 'BedDouble',
    image: localImages.amboHospitalBuilding,
    capacity: '350 Inpatient Beds & 12 ICU Beds',
    availability: '24/7 Care & Specialist Rounds',
    shortDescKey: 'srv.inpatient.desc',
    fullDescKey: 'srv.inpatient.full',
    features: ['24-Hour Dedicated Nursing Care', 'Sterile Isolation Chambers', 'Daily Multi-Disciplinary Ward Rounds', 'Custom Medical Nutritional Services'],
    headDoctor: 'Dr. Bethlehem Haile (Internal Medicine)',
    locationRoom: 'Main Tower, Floors 2 - 4'
  },
  {
    id: 'surgery',
    titleKey: 'srv.surgery.title',
    category: 'surgical',
    icon: 'Scissors',
    image: localImages.amboHospitalBuilding,
    capacity: '5 Modern Major Surgical Suites',
    availability: 'Scheduled & 24/7 Emergency',
    shortDescKey: 'srv.surgery.desc',
    fullDescKey: 'srv.surgery.full',
    features: ['Minimally Invasive Laparoscopic Surgery', 'Major Abdominal & Vascular Surgery', 'Sterile HEPA Filtration Air Flow', 'Post-Anesthesia Care Unit (PACU)'],
    headDoctor: 'Dr. Workneh Regassa (Chief Surgeon)',
    locationRoom: 'Surgical Block, Floor 2'
  },
  {
    id: 'pediatrics',
    titleKey: 'srv.pediatrics.title',
    category: 'maternal',
    icon: 'Baby',
    image: localImages.amboHospitalMain,
    capacity: '40 Pediatric Beds & 15 NICU Incubators',
    availability: '24/7 Pediatric Care',
    shortDescKey: 'srv.pediatrics.desc',
    fullDescKey: 'srv.pediatrics.full',
    features: ['Neonatal Intensive Care Unit (NICU)', 'Pediatric Resuscitation & Phototherapy', 'Child-Friendly Playful Recovery Wards', 'Developmental Health Screening'],
    headDoctor: 'Dr. Senait Bekele (Pediatrician)',
    locationRoom: 'Building B, Pediatric Wing'
  },
  {
    id: 'obgyn',
    titleKey: 'srv.obgyn.title',
    category: 'maternal',
    icon: 'HeartHandshake',
    image: localImages.amboHospitalBuilding,
    capacity: '3 Maternity Delivery Suites & C-Section Theater',
    availability: '24/7 Maternal Unit',
    shortDescKey: 'srv.obgyn.desc',
    fullDescKey: 'srv.obgyn.full',
    features: ['Safe Childbirth & Delivery Suites', 'Emergency C-Section Availability', 'High-Risk Prenatal Ultrasonography', 'Postpartum Maternal Education'],
    headDoctor: 'Dr. Girma Tolessa (Obstetrician & Gynecologist)',
    locationRoom: 'Maternity Complex, Ground Floor'
  },
  {
    id: 'orthopedics',
    titleKey: 'srv.orthopedics.title',
    category: 'surgical',
    icon: 'Bone',
    image: localImages.amboHospitalBuilding,
    capacity: '20 Orthopedic Beds',
    availability: 'Mon - Sat: 8:30 AM - 5:00 PM (Emergency 24/7)',
    shortDescKey: 'srv.orthopedics.desc',
    fullDescKey: 'srv.orthopedics.full',
    features: ['Fracture Fixation & Implant Surgery', 'Joint Dislocation Alignment', 'C-Arm Fluoroscopy Intra-Operative Imaging', 'Orthopedic Casting & Traction'],
    headDoctor: 'Dr. Dawit Kassa (Orthopedic Surgeon)',
    locationRoom: 'Surgical Wing, Room 104'
  },
  {
    id: 'radiology',
    titleKey: 'srv.radiology.title',
    category: 'diagnostics',
    icon: 'Activity',
    image: localImages.amboHospitalBuilding,
    capacity: 'Full Imaging Suite',
    availability: '24/7 Emergency & Routine',
    shortDescKey: 'srv.radiology.desc',
    fullDescKey: 'srv.radiology.full',
    features: ['64-Slice High Speed CT Scanner', 'Low-Dose Digital X-Ray System', 'High-Resolution Color Doppler Ultrasound', 'Digital Mammography Unit'],
    headDoctor: 'Dr. Almaz Negash (Radiologist)',
    locationRoom: 'Diagnostic Center, Floor 1'
  },
  {
    id: 'laboratory',
    titleKey: 'srv.laboratory.title',
    category: 'diagnostics',
    icon: 'FlaskConical',
    image: localImages.ibTechStem,
    capacity: '500+ Tests processed / Hour',
    availability: '24/7 Continuous Operation',
    shortDescKey: 'srv.laboratory.desc',
    fullDescKey: 'srv.laboratory.full',
    features: ['Automated Clinical Chemistry & Hematology', 'Microbiology Culture & Drug Sensitivity', 'Hormone Assays & Tumor Markers', 'Whole Blood & Component Storage'],
    headDoctor: 'Mr. Elias Chala (Lead Pathologist)',
    locationRoom: 'Central Laboratory Block'
  },
  {
    id: 'dental',
    titleKey: 'srv.dental.title',
    category: 'specialized',
    icon: 'Smile',
    image: localImages.amboHospitalMain,
    capacity: '3 Dental Operatory Chairs',
    availability: 'Mon - Fri: 8:00 AM - 5:00 PM',
    shortDescKey: 'srv.dental.desc',
    fullDescKey: 'srv.dental.full',
    features: ['Digital Intraoral Radiography', 'Root Canal & Endodontic Therapy', 'Ultrasonic Dental Scaling & Polishing', 'Surgical Tooth Extractions'],
    headDoctor: 'Dr. Helen Desta (Dental Surgeon)',
    locationRoom: 'Specialty Clinic, Room 12'
  },
  {
    id: 'eyecare',
    titleKey: 'srv.eyecare.title',
    category: 'specialized',
    icon: 'Eye',
    image: localImages.amboHospitalMain,
    capacity: 'Eye Clinic & Optical Shop',
    availability: 'Mon - Sat: 8:30 AM - 4:30 PM',
    shortDescKey: 'srv.eyecare.desc',
    fullDescKey: 'srv.eyecare.full',
    features: ['Slit-Lamp Microscopic Examination', 'Phacoemulsification Cataract Surgery', 'Glaucoma & Diabetic Retinopathy Care', 'Custom Prescription Optical Glasses'],
    headDoctor: 'Dr. Solomon Belay (Ophthalmologist)',
    locationRoom: 'Specialty Clinic, Room 14'
  },
  {
    id: 'mental',
    titleKey: 'srv.mental.title',
    category: 'specialized',
    icon: 'Brain',
    image: localImages.amboHospitalMain,
    capacity: 'Outpatient & Counseling Suites',
    availability: 'Mon - Fri: 8:00 AM - 5:00 PM',
    shortDescKey: 'srv.mental.desc',
    fullDescKey: 'srv.mental.full',
    features: ['Confidential Psychotherapy & Counseling', 'Mood & Anxiety Disorder Management', 'Substance Abuse Rehabilitation Guidance', 'Community Mental Health Support'],
    headDoctor: 'Dr. Yared Assefa (Psychiatrist)',
    locationRoom: 'Wellness Wing, Room 8'
  },
  {
    id: 'cardiology',
    titleKey: 'srv.cardiology.title',
    category: 'specialized',
    icon: 'HeartPulse',
    image: localImages.amboHospitalBuilding,
    capacity: 'Cardiac Diagnostic Lab',
    availability: 'Mon - Sat: 8:00 AM - 5:00 PM',
    shortDescKey: 'srv.cardiology.desc',
    fullDescKey: 'srv.cardiology.full',
    features: ['12-Lead Diagnostic ECG Recording', 'Transthoracic Echocardiography', 'Hypertension & Rheumatic Heart Care', 'Cardiovascular Risk Stratification'],
    headDoctor: 'Dr. Kebede Abera (Cardiologist)',
    locationRoom: 'Cardiology Clinic, Floor 2'
  },
  {
    id: 'vaccination',
    titleKey: 'srv.vaccination.title',
    category: 'general',
    icon: 'Syringe',
    image: localImages.amboHospitalMain,
    capacity: 'Public Immunization Center',
    availability: 'Mon - Sat: 8:00 AM - 4:00 PM',
    shortDescKey: 'srv.vaccination.desc',
    fullDescKey: 'srv.vaccination.full',
    features: ['Routine Infant Immunization (EPI)', 'Maternal Tetanus & Hepatitis B Vaccines', 'International Travel Vaccination', 'Epidemic Outbreak Response Inoculation'],
    headDoctor: 'Nurse Tigist Mengistu (Immunization Lead)',
    locationRoom: 'Public Health Pavilion'
  },
  {
    id: 'pharmacy',
    titleKey: 'srv.pharmacy.title',
    category: 'general',
    icon: 'Pill',
    image: localImages.amboHospitalMain,
    capacity: '3 Dispensing Counters',
    availability: '24/7 Continuous Service',
    shortDescKey: 'srv.pharmacy.desc',
    fullDescKey: 'srv.pharmacy.full',
    features: ['Essential Medicine Inventory Control', 'Prescription Dosage Verification', 'Patient Drug Counseling & Advisory', 'Cold-Chain Biological Storage'],
    headDoctor: 'Pharm. Binyam Tekle (Head Pharmacist)',
    locationRoom: 'OPD Main Lobby'
  },
  {
    id: 'physio',
    titleKey: 'srv.physio.title',
    category: 'specialized',
    icon: 'Dumbbell',
    image: localImages.amboHospitalMain,
    capacity: 'Physiotherapy & Gym Unit',
    availability: 'Mon - Fri: 8:00 AM - 5:00 PM',
    shortDescKey: 'srv.physio.desc',
    fullDescKey: 'srv.physio.full',
    features: ['Stroke Mobility Rehabilitation', 'Post-Traumatic Joint Mobilization', 'Electrotherapy & Therapeutic Ultrasound', 'Ergonomic & Back Pain Relief Exercises'],
    headDoctor: 'Mr. Daniel Lema (Chief Physiotherapist)',
    locationRoom: 'Rehabilitation Center, Floor 1'
  },
  {
    id: 'telemedicine',
    titleKey: 'srv.telemedicine.title',
    category: 'specialized',
    icon: 'Video',
    image: localImages.ibTechStem,
    capacity: 'Digital Portal Consultation',
    availability: 'Mon - Sun: 8:00 AM - 8:00 PM',
    shortDescKey: 'srv.telemedicine.desc',
    fullDescKey: 'srv.telemedicine.full',
    features: ['Virtual Video Consultations', 'Remote Prescription Renewal', 'Secure Electronic Health Record Integration', 'Rural Health Post Specialist Linkage'],
    headDoctor: 'Eng. Yohannes Tesfaye & Medical Staff',
    locationRoom: 'STEM Digital Health Unit'
  },
  {
    id: 'ambulance',
    titleKey: 'srv.ambulance.title',
    category: 'emergency',
    icon: 'Truck',
    image: localImages.amboHospitalMain,
    capacity: '4 Advanced Life Support Ambulances',
    availability: '24/7 Mobile Response',
    shortDescKey: 'srv.ambulance.desc',
    fullDescKey: 'srv.ambulance.full',
    features: ['Mobile Oxygen & Ventilator Unit', 'Paramedic Emergency First Response', 'Inter-Hospital Patient Referral Transfer', 'GPS Fleet Tracking & Dispatch'],
    headDoctor: 'Paramedic Lead Chala Dida',
    locationRoom: 'Emergency Ambulance Fleet Yard'
  },
  {
    id: 'healthedu',
    titleKey: 'srv.healthedu.title',
    category: 'general',
    icon: 'GraduationCap',
    image: localImages.amboHospitalMain,
    capacity: 'Community Outreach Unit',
    availability: 'Ongoing Field Campaigns',
    shortDescKey: 'srv.healthedu.desc',
    fullDescKey: 'srv.healthedu.full',
    features: ['School Health & Sanitation Outreach', 'Maternal Health Awareness Workshops', 'Infectious Disease Prevention Programs', 'Community Nutrition Demonstrations'],
    headDoctor: 'Sister Aster Tolera (Public Health Lead)',
    locationRoom: 'Community Health Department'
  },
  {
    id: 'stemcenter',
    titleKey: 'srv.stemcenter.title',
    category: 'specialized',
    icon: 'Laptop',
    image: localImages.ibTechStem,
    capacity: '30 Computer Workstations & Lab',
    availability: 'Mon - Sat: 8:00 AM - 6:00 PM',
    shortDescKey: 'srv.stemcenter.desc',
    fullDescKey: 'srv.stemcenter.full',
    features: ['IB Tech Digital Skills Capacity Building', 'Hospital Electronic Medical Records Training', 'Youth STEM Medical Technology Workshops', 'Tele-Health Systems Research'],
    headDoctor: 'IB Tech Startup Engineering Team',
    locationRoom: 'STEM Innovation Pavilion'
  }
];

export const newsArticles: NewsArticle[] = [
  {
    id: 'stem-training-milestone',
    titleKey: 'Ambo General Hospital & IB Tech Complete Major Digital Transformation Training via STEM Center Intervention',
    categoryKey: 'STEM & Tech',
    date: 'August 2, 2026',
    authorKey: 'IB Tech & Hospital Admin',
    image: localImages.ibTechStem,
    summaryKey: 'Over 150 healthcare professionals at Ambo General Hospital have successfully graduated from the intensive digital health training program conducted by IB Tech startup through STEM Center intervention.',
    contentKey: 'In a landmark milestone for public healthcare in Oromia, Ambo General Hospital has officially launched its digital health readiness initiative. Developed by IB Tech startup with support from STEM Center intervention, the program provided comprehensive training in Electronic Medical Records (EMR), automated patient triage, queue management, and telemedicine workflow. The initiative empowers doctors, nurses, and laboratory technicians to deliver faster, error-free clinical care to over 2,500 daily visitors.',
    readTime: '4 min read',
    featured: true
  },
  {
    id: 'new-ct-scanner-launched',
    titleKey: 'Launch of Modern 64-Slice CT Scanner Enhances Diagnostic Capabilities in West Shewa Zone',
    categoryKey: 'Hospital News',
    date: 'July 18, 2026',
    authorKey: 'Department of Radiology',
    image: localImages.amboHospitalBuilding,
    summaryKey: 'Ambo General Hospital inaugurates a state-of-the-art 64-slice CT Scanner, eliminating the need for patients in West Shewa to travel to Addis Ababa for advanced neuro and vascular imaging.',
    contentKey: 'The installation of our new 64-slice CT Scanner marks a monumental leap forward for regional diagnostic healthcare. Capable of capturing high-resolution 3D images of brain trauma, chest pathologies, and complex bone fractures in seconds, this facility will save critical time during emergency trauma care. Hospital Director Dr. Tokuma Bayisa praised the Ministry of Health and local partners for making this project a reality.',
    readTime: '3 min read',
    featured: true
  },
  {
    id: 'maternal-health-campaign',
    titleKey: 'Free Maternal Health & Screening Campaign Reaches 1,200 Mothers in Ambo & Rural Kebeles',
    categoryKey: 'Health Tips',
    date: 'June 25, 2026',
    authorKey: 'Maternal Care Unit',
    image: localImages.amboHospitalMain,
    summaryKey: 'Our Obstetrics and Public Health teams conducted a week-long outreach offering free ultrasound scans, prenatal checkups, and nutritional counseling.',
    contentKey: 'To combat maternal mortality and promote safe childbirth practices, Ambo General Hospital dispatched mobile clinical teams to 12 rural kebeles across West Shewa. Over 1,200 expectant mothers received free ultrasound screening, iron supplementation, tetanus immunization, and direct scheduling for safe hospital delivery.',
    readTime: '5 min read',
    featured: false
  },
  {
    id: 'youth-stem-health-hackathon',
    titleKey: 'IB Tech & STEM Center Host Youth Medical Innovation Challenge at Ambo General Hospital',
    categoryKey: 'STEM & Tech',
    date: 'May 14, 2026',
    authorKey: 'IB Tech Team',
    image: localImages.ibTechStem,
    summaryKey: 'University students and young innovators built prototype digital health solutions for patient queue tracking and local pharmacy inventory management.',
    contentKey: 'Highlighting the transformative impact of the STEM Center intervention, IB Tech organized a 48-hour youth hackathon at Ambo General Hospital. Student teams collaborated with hospital technicians to build real-world software prototypes, showcasing the immense potential of Ethiopian youth in advancing healthcare innovation.',
    readTime: '4 min read',
    featured: false
  }
];

export const achievementsData: AchievementItem[] = [
  {
    id: '1',
    year: '2026',
    titleKey: 'Complete Digital Transformation & IB Tech STEM Integration',
    descKey: 'Successfully digitized patient records, launched staff training, and established the STEM Digital Health Innovation Center in collaboration with IB Tech startup.',
    category: 'stem',
    image: localImages.ibTechStem
  },
  {
    id: '2',
    year: '2025',
    titleKey: 'Inauguration of New 4-Story Surgical & Inpatient Block',
    descKey: 'Expanded hospital bed capacity to 350+ beds with 5 major operating suites and a dedicated 12-bed ICU unit.',
    category: 'infrastructure',
    image: localImages.amboHospitalBuilding
  },
  {
    id: '3',
    year: '2024',
    titleKey: 'Regional Healthcare Quality Excellence Award',
    descKey: 'Recognized by Oromia Health Bureau for outstanding emergency trauma response, low maternal mortality rates, and patient safety protocols.',
    category: 'award',
    image: localImages.amboHospitalMain
  },
  {
    id: '4',
    year: '2023',
    titleKey: 'Establishment of Neonatal ICU (NICU) & Infant Care Center',
    descKey: 'Saved hundreds of premature infants by introducing modern incubators, phototherapy, and specialized neonatal nursing.',
    category: 'infrastructure',
    image: localImages.amboHospitalBuilding
  },
  {
    id: '5',
    year: '2021',
    titleKey: 'Community Public Health Campaign Expansion',
    descKey: 'Reached over 500,000 citizens in West Shewa with free vaccination drives, maternal education, and epidemic prevention programs.',
    category: 'community',
    image: localImages.amboHospitalMain
  }
];

export const galleryData: GalleryItem[] = [
  {
    id: 'g1',
    titleKey: 'Ambo General Hospital Main Courtyard',
    category: 'campus',
    type: 'image',
    url: localImages.amboHospitalMain,
    captionKey: 'Our spacious white hospital campus surrounded by greenery, pathways, and outdoor lamps in Ambo Town.'
  },
  {
    id: 'g2',
    titleKey: 'Modern Building Extension',
    category: 'campus',
    type: 'image',
    url: localImages.amboHospitalBuilding,
    captionKey: 'Newly constructed multi-story surgical and inpatient building extension with blue roofing.'
  },
  {
    id: 'g3',
    titleKey: 'STEM & IB Tech Capacity Building Workshop',
    category: 'stem',
    type: 'image',
    url: localImages.ibTechStem,
    captionKey: 'Hospital staff undergoing hands-on digital records and software training at the STEM center.'
  },
  {
    id: 'g4',
    titleKey: 'Hospital Executive Leadership',
    category: 'campus',
    type: 'image',
    url: localImages.directorTokumaBayisa,
    captionKey: 'Medical Director Dr. Tokuma Bayisa providing strategic guidance to hospital operations.'
  },
  {
    id: 'g5',
    titleKey: 'State-of-the-Art Surgical Suite',
    category: 'facilities',
    type: 'image',
    url: localImages.amboHospitalBuilding,
    captionKey: 'Sterile operating theater equipped with modern anesthesia and surgical monitors.'
  },
  {
    id: 'g6',
    titleKey: '24/7 Clinical Laboratory Unit',
    category: 'facilities',
    type: 'image',
    url: localImages.ibTechStem,
    captionKey: 'Automated analyzers delivering accurate chemistry and hematology test results.'
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    name: 'Ato Abebe Tadesse',
    locationKey: 'Ambo Town',
    roleKey: 'Patient Family Member',
    avatar: '',
    quoteKey: 'When my brother suffered a severe trauma, the emergency team at Ambo General Hospital acted within seconds. The surgeons saved his life, and the nursing staff cared for him like family.',
    rating: 5
  },
  {
    id: '2',
    name: 'W/ro Chaltu Gemeda',
    locationKey: 'Guder Town',
    roleKey: 'Maternal Care Patient',
    avatar: '',
    quoteKey: 'I delivered my baby girl at Ambo General Hospital. The maternity ward was exceptionally clean, the midwives were kind and patient, and the modern equipment gave me complete peace of mind.',
    rating: 5
  },
  {
    id: '3',
    name: 'Ato Worku Dires',
    locationKey: 'Ginchi Town',
    roleKey: 'Outpatient Visitor',
    avatar: '',
    quoteKey: 'The new digital registration system introduced by IB Tech has reduced waiting times dramatically. I got my lab test results on the same day without any hassle.',
    rating: 5
  }
];

export const partnersData = [
  { name: 'Ministry of Health Ethiopia', logoText: 'MOH ETHIOPIA' },
  { name: 'Oromia Health Bureau', logoText: 'OROMIA HEALTH' },
  { name: 'STEM Center Intervention', logoText: 'STEM CENTER' },
  { name: 'IB Tech Startup', logoText: 'IB TECH' },
  { name: 'Ambo University', logoText: 'AMBO UNIVERSITY' },
  { name: 'World Health Organization (WHO)', logoText: 'WHO' },
  { name: 'UNICEF Ethiopia', logoText: 'UNICEF' }
];

export const triageOptions: TriageOption[] = [
  {
    id: 'severe-chest-pain',
    labelKey: 'Severe Chest Pain, Difficulty Breathing, or Unconsciousness',
    urgency: 'high',
    recommendationKey: 'CRITICAL EMERGENCY: Please call our 24/7 Emergency Line (907) or come immediately to the Ambo General Hospital Emergency Gate.'
  },
  {
    id: 'major-trauma',
    labelKey: 'Severe Bleeding, Bone Fracture, or Major Accidental Injury',
    urgency: 'high',
    recommendationKey: 'CRITICAL EMERGENCY: Immediate surgical and trauma care required. Call 907 or use our Ambulance Service immediately.'
  },
  {
    id: 'high-fever-child',
    labelKey: 'High Fever in Infants, Severe Vomiting, or Dehydration',
    urgency: 'medium',
    recommendationKey: 'URGENT CARE: Visit our Pediatric Emergency / Same-Day Outpatient Department (OPD) as soon as possible.'
  },
  {
    id: 'maternal-labor',
    labelKey: 'Maternal Labor Contractions or Pregnancy Complications',
    urgency: 'high',
    recommendationKey: 'URGENT MATERNAL CARE: Proceed directly to our Maternity Delivery Unit available 24/7.'
  },
  {
    id: 'routine-checkup',
    labelKey: 'Routine Medical Checkup, Prescription Renewal, or Mild Cold',
    urgency: 'low',
    recommendationKey: 'ROUTINE OPD: Book an appointment through our Patient Portal or visit our Outpatient Department during regular hours.'
  }
];

export const faqItems: FAQItem[] = [
  {
    id: 'faq1',
    questionKey: 'What are the emergency hours at Ambo General Hospital?',
    answerKey: 'Our Emergency Department, ICU, Surgery, Maternity Unit, Laboratory, and Pharmacy operate 24 hours a day, 7 days a week, 365 days a year.',
    category: 'emergency'
  },
  {
    id: 'faq2',
    questionKey: 'How do I access the online Patient Portal?',
    answerKey: 'You can click the "Get Started" or "Patient Portal" button in our top menu or visit https://aghcare.lovable.app/ to schedule appointments, check medical records, and access telemedicine.',
    category: 'appointment'
  },
  {
    id: 'faq3',
    questionKey: 'What is the STEM Center & IB Tech intervention program?',
    answerKey: 'It is a collaborative initiative where IB Tech startup provided specialized digital health training and software capacity building to Ambo General Hospital staff, creating a modern, tech-enabled healthcare ecosystem.',
    category: 'stem'
  },
  {
    id: 'faq4',
    questionKey: 'Where is Ambo General Hospital located?',
    answerKey: 'We are located on the Main Hospital Road in Ambo Town, West Shewa Zone, Oromia Region, approximately 120 km west of Addis Ababa.',
    category: 'general'
  }
];
