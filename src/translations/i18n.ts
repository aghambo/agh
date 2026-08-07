import { Language } from '../types';

export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Top Bar & Nav
    'topbar.emergency': '24/7 Emergency Hotline:',
    'topbar.hours': 'Open 24 Hours / 7 Days a Week',
    'topbar.address': 'Ambo Town, West Shewa, Oromia, Ethiopia',
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.stem': 'STEM & IB Tech',
    'nav.services': 'Services',
    'nav.achievements': 'Achievements',
    'nav.triage': 'Symptom Checker',
    'nav.blog': 'News & Health',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact Us',
    'nav.portal': 'Get Started (Patient Portal)',
    'nav.emergencyCall': 'Call Emergency 907',

    // Hero Section
    'hero.badge': 'Excellence in Ethiopian Healthcare & Digital Innovation',
    'hero.title': 'Advanced Compassionate Healthcare for Ambo & Beyond',
    'hero.subtitle': 'Combining state-of-the-art medical technology, expert Ethiopian specialists, and modern digital health solutions powered by STEM Center & IB Tech.',
    'hero.ctaPrimary': 'Access Patient Portal',
    'hero.ctaSecondary': 'Explore Our Services',
    'hero.emergencyBtn': 'Emergency Assistance',
    'hero.statPatients': '500,000+',
    'hero.statPatientsLabel': 'Patients Treated',
    'hero.statBeds': '350+',
    'hero.statBedsLabel': 'Modern Hospital Beds',
    'hero.statDoctors': '85+',
    'hero.statDoctorsLabel': 'Specialists & Surgeons',
    'hero.statSatisfaction': '98.6%',
    'hero.statSatisfactionLabel': 'Patient Satisfaction',

    // STEM & IB Tech Spotlight
    'stem.badge': 'Digital Transformation & Capacity Building',
    'stem.title': 'Ambo General Hospital & STEM Center Intervention',
    'stem.subtitle': 'Through strategic intervention and specialized capacity-building training provided by IB Tech startup, Ambo General Hospital has modernized its health records, staff digital skills, and patient care workflows.',
    'stem.feature1.title': 'Staff Digital Health Training',
    'stem.feature1.desc': 'Over 150 medical professionals trained in digital record systems, telemedicine, and healthcare software tools by IB Tech.',
    'stem.feature2.title': 'STEM Center Innovation Hub',
    'stem.feature2.desc': 'Establishing a dedicated STEM digital health facility within the hospital campus for continuous learning and youth medical-tech research.',
    'stem.feature3.title': 'Modern Hospital Management Readiness',
    'stem.feature3.desc': 'Deploying real-time appointment scheduling, electronic medical records infrastructure, and automated patient queue management.',
    'stem.feature4.title': 'Local Tech Empowerment',
    'stem.feature4.desc': 'Developed locally by IB Tech startup to demonstrate how Ethiopian youth innovation can transform public healthcare delivery.',

    // About Section
    'about.badge': 'About Ambo General Hospital',
    'about.title': 'Pioneering Medical Excellence in West Shewa',
    'about.desc': 'Ambo General Hospital is a premier regional healthcare institution serving over 2.5 million residents in Ambo Town, West Shewa Zone, and neighboring regions. Founded on principles of compassionate care and medical innovation, our hospital provides round-the-clock comprehensive emergency, surgical, maternal, and specialized medical services.',
    'about.mission.title': 'Our Mission',
    'about.mission.desc': 'To provide equitable, high-quality, patient-centered healthcare services using modern technology, compassionate clinical practice, and continuous medical education.',
    'about.vision.title': 'Our Vision',
    'about.vision.desc': 'To become Ethiopia’s leading regional center of healthcare excellence, digital health integration, and medical research by 2030.',
    'about.values.title': 'Core Values',
    'about.values.desc': 'Compassion, Integrity, Clinical Excellence, Accessibility, Innovation, and Respect for Human Dignity.',
    'about.directorTitle': 'Message from Hospital Leadership',
    'about.directorName': 'Dr. Tokuma Bayisa (MD, MPH)',
    'about.directorRole': 'Medical Director, Ambo General Hospital',
    'about.directorMessage': '"Our partnership with IB Tech and the STEM Center intervention has accelerated our transition into a modern, technologically empowered hospital. We are committed to treating every patient with dignity, providing world-class surgical and emergency care, and building a healthier community across Oromia and Ethiopia."',

    // Services Section
    'services.badge': 'Comprehensive Medical Care',
    'services.title': 'Our Specialized Clinical & Diagnostic Services',
    'services.subtitle': 'Equipped with modern medical facilities, advanced diagnostic equipment, and experienced healthcare teams available 24 hours a day.',
    'services.filterAll': 'All Services',
    'services.filterEmergency': 'Emergency & ICU',
    'services.filterSurgical': 'Surgical Care',
    'services.filterMaternal': 'Maternal & Pediatrics',
    'services.filterDiagnostics': 'Laboratory & Imaging',
    'services.filterSpecialized': 'Specialized Clinics',
    'services.searchPlaceholder': 'Search services (e.g. Surgery, Pediatrics, CT Scan)...',
    'services.learnMore': 'View Service Details',
    'services.capacity': 'Capacity:',
    'services.availability': 'Availability:',
    'services.headDoctor': 'Department Head:',
    'services.roomLocation': 'Facility Location:',
    'services.keyFeatures': 'Key Features & Capabilities:',

    // Individual Service Titles & Short Descs
    'srv.emergency.title': '24/7 Emergency & Trauma Center',
    'srv.emergency.desc': 'Immediate life-saving emergency care, trauma triage, resuscitation, and critical care unit available round the clock.',
    'srv.emergency.full': 'Our Emergency Department is equipped with advanced life-support systems, dedicated trauma bays, immediate blood bank access, and rapid surgical intervention teams for immediate acute emergency treatment.',

    'srv.outpatient.title': 'Outpatient Department (OPD)',
    'srv.outpatient.desc': 'Comprehensive consultation, diagnosis, chronic disease management, and preventative health screenings for walk-in patients.',
    'srv.outpatient.full': 'Serving hundreds of patients daily across internal medicine, general practice, and specialist consultation clinics with streamlined registration and minimal wait times.',

    'srv.inpatient.title': 'Inpatient Care & ICU',
    'srv.inpatient.desc': 'Modern inpatient wards, private recovery rooms, and an Intensive Care Unit (ICU) with continuous patient monitoring.',
    'srv.inpatient.full': '350+ bed capacity supported by dedicated nursing care, sterile environment protocols, daily specialist rounds, and specialized nutritional support.',

    'srv.surgery.title': 'General & Laparoscopic Surgery',
    'srv.surgery.desc': 'State-of-the-art operating theaters for elective, emergency, and minimally invasive laparoscopic surgical procedures.',
    'srv.surgery.full': 'Performed by senior board-certified surgeons using modern anesthesia machines, laparoscopic towers, and rigorous infection control standards.',

    'srv.pediatrics.title': 'Pediatrics & NICU',
    'srv.pediatrics.desc': 'Specialized medical care for infants, children, and adolescents, including a Neonatal Intensive Care Unit (NICU).',
    'srv.pediatrics.full': 'Equipped with infant incubators, phototherapy units, specialized pediatric emergency equipment, and dedicated child-friendly recovery areas.',

    'srv.obgyn.title': 'Obstetrics & Gynecology',
    'srv.obgyn.desc': 'Complete maternal health care, prenatal screening, safe delivery, high-risk pregnancy management, and gynecological surgeries.',
    'srv.obgyn.full': 'Providing a warm, safe environment for mothers with 24/7 C-section availability, fetal monitoring, and comprehensive postnatal care.',

    'srv.orthopedics.title': 'Orthopedics & Trauma Surgery',
    'srv.orthopedics.desc': 'Advanced treatment for bone fractures, joint dislocations, sports injuries, and complex musculoskeletal reconstruction.',
    'srv.orthopedics.full': 'Featuring specialized C-arm fluoroscopy imaging, orthopedic implant surgery, post-operative casting, and rehabilitation alignment.',

    'srv.radiology.title': 'Radiology & Advanced Imaging',
    'srv.radiology.desc': 'Multi-slice CT Scan, Digital X-Ray, High-Resolution Ultrasound, Doppler Vascular Imaging, and Mammography.',
    'srv.radiology.full': 'Fast, accurate diagnostic imaging reported by expert radiologists to ensure precise clinical decision-making for complex conditions.',

    'srv.laboratory.title': 'Clinical Laboratory & Pathology',
    'srv.laboratory.desc': 'Fully automated clinical chemistry, hematology, microbiology, immunology, hormone assays, and blood bank service.',
    'srv.laboratory.full': 'Operating under strict ISO quality controls, delivering fast laboratory turnaround times for emergency and routine diagnostic testing.',

    'srv.dental.title': 'Dental Care & Maxillofacial Surgery',
    'srv.dental.desc': 'Comprehensive dental checkups, root canal therapy, tooth extractions, restorative dentistry, and oral surgery.',
    'srv.dental.full': 'Utilizing digital intraoral radiography, ultrasonic scaling, cosmetic dental restorations, and sterile surgical dental suites.',

    'srv.eyecare.title': 'Ophthalmology & Eye Care',
    'srv.eyecare.desc': 'Comprehensive vision exams, cataract surgery, glaucoma screening, diabetic retinopathy management, and optical prescriptions.',
    'srv.eyecare.full': 'Equipped with slit-lamp microscopes, phacoemulsification cataract equipment, and prescription lens fitting services.',

    'srv.mental.title': 'Mental Health & Psychiatry',
    'srv.mental.desc': 'Compassionate psychiatric evaluations, counseling, substance rehabilitation, and community mental health support.',
    'srv.mental.full': 'Providing confidential clinical therapy, mood disorder management, crisis intervention, and holistic psychological support.',

    'srv.cardiology.title': 'Cardiology & Diagnostic ECG',
    'srv.cardiology.desc': '12-lead ECG, Echocardiography, hypertension management, and cardiovascular risk assessments.',
    'srv.cardiology.full': 'Early detection and management of heart disease, heart failure, rheumatic heart conditions, and vascular health.',

    'srv.vaccination.title': 'Vaccination & Immunization',
    'srv.vaccination.desc': 'Routine childhood immunization, maternal vaccines, travel vaccines, and epidemic preventative inoculation programs.',
    'srv.vaccination.full': 'Maintaining WHO cold-chain standards for safe vaccine storage, distribution, and public immunization outreach.',

    'srv.pharmacy.title': '24/7 Full-Service Pharmacy',
    'srv.pharmacy.desc': 'In-hospital dispensing of high-quality essential medicines, prescription verification, and patient drug counseling.',
    'srv.pharmacy.full': 'Stocked with vital emergency drugs, specialized antibiotics, surgical consumables, and chronic disease medications.',

    'srv.physio.title': 'Physical Rehabilitation & Physiotherapy',
    'srv.physio.desc': 'Post-stroke recovery, accident rehabilitation, physical mobility therapy, and musculoskeletal pain relief.',
    'srv.physio.full': 'Guided by certified physiotherapists utilizing exercise therapy equipment, electrotherapy, ultrasound therapy, and mobility aids.',

    'srv.telemedicine.title': 'Telemedicine & Digital Health',
    'srv.telemedicine.desc': 'Remote specialist consultations, digital prescription renewal, and virtual follow-ups via mobile portal.',
    'srv.telemedicine.full': 'Connecting rural health posts and home-bound patients directly with Ambo General Hospital medical specialists.',

    'srv.ambulance.title': 'Ambulance & Mobile ICU',
    'srv.ambulance.desc': 'Fully equipped emergency response vehicles with oxygen support, defibrillators, and trained paramedics.',
    'srv.ambulance.full': 'Rapid patient transport across Ambo, West Shewa Zone, and referral transfers to national specialty hospitals in Addis Ababa.',

    'srv.healthedu.title': 'Public Health & Community Outreach',
    'srv.healthedu.desc': 'Health education campaigns, maternal awareness programs, nutrition guidance, and infectious disease prevention.',
    'srv.healthedu.full': 'Engaging local communities, schools, and rural kebeles to promote disease prevention, sanitation, and maternal health.',

    'srv.stemcenter.title': 'STEM Digital Health Innovation Unit',
    'srv.stemcenter.desc': 'In-hospital technology center established with IB Tech for hospital staff training, digital records management, and youth tech integration.',
    'srv.stemcenter.full': 'Fostering digital health literacy, software adoption, and continuous medical technology innovation within Ambo General Hospital.',

    // Triage / Symptom Checker
    'triage.badge': 'Interactive Patient Tool',
    'triage.title': 'Smart Symptom Checker & Triage Guidance',
    'triage.subtitle': 'Select your symptoms below to get instant guidance on whether you should visit Emergency, schedule an OPD appointment, or consult our Telemedicine service.',
    'triage.selectSymptom': 'Select your primary health concern:',
    'triage.highUrgency': 'Emergency Attention Required!',
    'triage.medUrgency': 'Urgent OPD / Same-Day Visit Recommended',
    'triage.lowUrgency': 'Routine Outpatient Consultation',
    'triage.actionCallEmergency': 'Call Emergency Hotline 907 Now',
    'triage.actionBookAppt': 'Open Patient Portal to Book',

    // Achievements Timeline
    'achieve.badge': 'Milestones & Excellence',
    'achieve.title': 'Our Journey of Service & Innovation',
    'achieve.subtitle': 'From foundational community healthcare to becoming a digitally empowered regional general hospital.',

    // Blog & News
    'blog.badge': 'News, Insights & Health Tips',
    'blog.title': 'Latest Updates from Ambo General Hospital',
    'blog.subtitle': 'Stay informed on hospital announcements, medical advancements, STEM training programs, and health tips.',
    'blog.filterAll': 'All News',
    'blog.filterNews': 'Hospital News',
    'blog.filterTech': 'STEM & Tech',
    'blog.filterHealth': 'Health Tips',
    'blog.readFull': 'Read Full Article',

    // Gallery
    'gallery.badge': 'Hospital Media Gallery',
    'gallery.title': 'Inside Ambo General Hospital',
    'gallery.subtitle': 'Take a visual tour of our modern facilities, medical staff, STEM training workshops, and community health initiatives.',
    'gallery.all': 'All Media',
    'gallery.campus': 'Hospital Campus',
    'gallery.facilities': 'Facilities & ICUs',
    'gallery.stem': 'STEM & IB Tech',
    'gallery.community': 'Community Care',

    // Statistics
    'stats.title': 'Impact & Excellence in Numbers',
    'stats.subtitle': 'Dedicated to serving our community with reliable healthcare and continuous innovation.',

    // Testimonials
    'test.badge': 'Patient Stories',
    'test.title': 'What Our Community Says',
    'test.subtitle': 'Real experiences from patients and families who received care at Ambo General Hospital.',

    // Partners
    'partners.title': 'Institutional Partners & Collaborators',
    'partners.subtitle': 'Working together with government health authorities, technology startups, and international organizations.',

    // Map & Location
    'map.badge': 'Location & Access',
    'map.title': 'Visit Ambo General Hospital',
    'map.subtitle': 'Conveniently located in Ambo Town, West Shewa Zone, Oromia Region, Ethiopia.',
    'map.address': 'Address: Main Hospital Road, Ambo Town, Oromia, Ethiopia',
    'map.distanceAddis': 'Distance from Addis Ababa: ~120 km West via Ambo Highway',
    'map.getDirections': 'Get Directions on Google Maps',
    'map.emergencyRoute': '24/7 Emergency Ambulance Gate open on North Highway entrance.',

    // Contact Form
    'contact.badge': 'Get in Touch',
    'contact.title': 'Contact Us & Appointment Inquiries',
    'contact.subtitle': 'Have questions or need assistance? Send us a message or contact our department direct lines.',
    'contact.nameLabel': 'Full Name',
    'contact.emailLabel': 'Email Address',
    'contact.phoneLabel': 'Phone Number',
    'contact.subjectLabel': 'Subject / Department',
    'contact.msgLabel': 'Your Message',
    'contact.submitBtn': 'Send Message',
    'contact.successMsg': 'Thank you! Your message has been sent successfully. Our team will contact you shortly.',

    // Footer
    'footer.desc': 'Ambo General Hospital is a regional center of healthcare excellence delivering compassionate emergency, surgical, maternal, and specialized medical care.',
    'footer.quickLinks': 'Quick Links',
    'footer.servicesHead': 'Top Services',
    'footer.emergencyHead': 'Emergency Contacts',
    'footer.developedBy': 'Designed & Developed by',
    'footer.ibTechCredit': 'IB Tech Startup (STEM Center Intervention)',
    'footer.rights': 'All rights reserved. Ambo General Hospital.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.patientRights': 'Patient Rights & Responsibilities',
    'footer.cookie': 'Cookie Policy',
    'footer.accessibility': 'Accessibility Statement',
  },
  am: {
    // Top Bar & Nav
    'topbar.emergency': 'የ24/7 ድንገተኛ አደጋ ስልክ፡',
    'topbar.hours': 'በቀን 24 ሰዓት / በሳምንት 7 ቀን ክፍት ነው',
    'topbar.address': 'አምቦ ከተማ፣ ምዕራብ ሸዋ፣ ኦሮሚያ፣ ኢትዮጵያ',
    'nav.home': 'ዋና ገጽ',
    'nav.about': 'ስለ ሆስፒታሉ',
    'nav.stem': 'STEM እና IB Tech',
    'nav.services': 'የሕክምና አገልግሎቶች',
    'nav.achievements': 'የተገኙ ስኬቶች',
    'nav.triage': 'የህመም ምልክት መመርመሪያ',
    'nav.blog': 'ዜና እና ጤና',
    'nav.gallery': 'ፎቶ እና ቪዲዮ',
    'nav.contact': 'ያግኙን',
    'nav.portal': 'አገልግሎት ይጀምሩ (የታካሚ ፖርታል)',
    'nav.emergencyCall': 'ወደ 907 ደውሉ',

    // Hero Section
    'hero.badge': 'በኢትዮጵያ የሕክምና አገልግሎት እና ዲጂታል ቴክኖሎጂ የላቀ የህክምና ማዕከል',
    'hero.title': 'ለአምቦ እና አካባቢዋ ህብረተሰብ የላቀ እና ርህራሄ የተሞላበት የህክምና አገልግሎት',
    'hero.subtitle': 'ዘመናዊ የህክምና ቴክኖሎጂን፣ ባለሙያ የኢትዮጵያ ስፔሻሊስቶችን እና በSTEM ማዕከልና IB Tech የተደገፈ ዲጂታል ጤና አገልግሎትን ያስተሳሰረ።',
    'hero.ctaPrimary': 'የታካሚ ፖርታል ይግቡ',
    'hero.ctaSecondary': 'አገልግሎቶችን ይመልከቱ',
    'hero.emergencyBtn': 'የድንገተኛ እርዳታ',
    'hero.statPatients': '500,000+',
    'hero.statPatientsLabel': 'የታከሙ ታካሚዎች',
    'hero.statBeds': '350+',
    'hero.statBedsLabel': 'ዘመናዊ የታካሚ አልጋዎች',
    'hero.statDoctors': '85+',
    'hero.statDoctorsLabel': 'ስፔሻሊስት ሐኪሞች',
    'hero.statSatisfaction': '98.6%',
    'hero.statSatisfactionLabel': 'የታካሚዎች እርካታ',

    // STEM & IB Tech Spotlight
    'stem.badge': 'ዲጂታል ትራንስፎርሜሽን እና የአቅም ግንባታ',
    'stem.title': 'አምቦ አጠቃላይ ሆስፒታል እና የSTEM ማዕከል ትብብር',
    'stem.subtitle': 'በIB Tech ስታርትአፕ በኩል በተሰጠ ልዩ ስልጠና እና የSTEM ማዕከል ድጋፍ፣ የአምቦ አጠቃላይ ሆስፒታል የህክምና መረጃዎችን እና የአገልግሎት አሰጣጥን በዘመናዊ ቴክኖሎጂ አዘምኗል።',
    'stem.feature1.title': 'የሰራተኞች ዲጂታል ጤና ስልጠና',
    'stem.feature1.desc': 'ከ150 በላይ የህክምና ባለሙያዎች በዲጂታል ሪኮርድ አያያዝ፣ ቴሌሜዲሲን እና በሶፍትዌር አጠቃቀም በIB Tech ሰልጥነዋል።',
    'stem.feature2.title': 'የSTEM ማዕከል ፈጠራ ክፍል',
    'stem.feature2.desc': 'በሆስፒታሉ ግቢ ውስጥ ቀጣይነት ያለው ትምህርት እና የህክምና-ቴክኖሎጂ ምርምር የሚያካሂድ የSTEM ማዕከል ተመስርቷል።',
    'stem.feature3.title': 'ዘመናዊ የሆስፒታል መረጃ ስርዓት',
    'stem.feature3.desc': 'የቀጠሮ ምዝገባ፣ የኤሌክትሮኒክስ ህክምና ሪኮርድ እና አውቶሜትድ የታካሚ ሰልፍ ማስተዳደሪያ ስርዓት ተተግብሯል።',
    'stem.feature4.title': 'የሀገር በቀል ቴክኖሎጂ አቅም',
    'stem.feature4.desc': 'በIB Tech ስታርትአፕ የሀገር ውስጥ ወጣቶች ፈጠራ እንዴት የህዝብ ህክምና አገልግሎትን ማዘመን እንደሚችል በተግባር ያሳየ።',

    // About Section
    'about.badge': 'ስለ አምቦ አጠቃላይ ሆስፒታል',
    'about.title': 'በምዕራብ ሸዋ የላቀ ህክምና መሪ ማዕከል',
    'about.desc': 'አምቦ አጠቃላይ ሆስፒታል በአምቦ ከተማ፣ በምዕራብ ሸዋ ዞን እና በአካባቢው ለሚኖሩ ከ2.5 ሚሊዮን በላይ ህዝቦች የህክምና አገልግሎት የሚሰጥ ታዋቂ የህዝብ ሆስፒታል ነው። ሆስፒታላችን በ24 ሰዓት የድንገተኛ፣ የቀዶ ጥገና፣ የእናት እና ህጻናት እንዲሁም የልዩ ህክምና አገልግሎቶችን ይሰጣል።',
    'about.mission.title': 'ተልዕኮአችን',
    'about.mission.desc': 'ዘመናዊ ቴክኖሎጂን እና ርህራሄ የተሞላበት ሙያዊ አገልግሎትን በመጠቀም ጥራት ያለው እና ተዳራሽ የህክምና አገልግሎት መስጠት።',
    'about.vision.title': 'ራዕያችን',
    'about.vision.desc': 'በ2022 ዓ.ም በኢትዮጵያ በዲጂታል ጤና እና በህክምና ጥራት ቀዳሚ የክልል ህክምና ማዕከል መሆን።',
    'about.values.title': 'መሰረታዊ እሴቶቻችን',
    'about.values.desc': 'ርህራሄ፣ ታማኝነት፣ ሙያዊ ብቃት፣ ተዳራሽነት፣ ፈጠራ እና ለሰው ልጅ ክብር መስጠት።',
    'about.directorTitle': 'የሆስፒታሉ ስራ አስኪያጅ መልእክት',
    'about.directorName': 'ዶ/ር ቶኩማ ባይሳ (MD, MPH)',
    'about.directorRole': 'የአምቦ አጠቃላይ ሆስፒታል ሜዲካል ዳይሬክተር',
    'about.directorMessage': '"ከIB Tech እና STEM ማዕከል ጋር ያደረግነው ትብብር ሆስፒታላችንን ወደ ዘመናዊ ዲጂታል ስርዓት ያሸጋገረ ነው። እያንዳንዱን ታካሚ በክብር ለማስተናገድ እና ጥራት ያለው የህክምና አገልግሎት ለመስጠት ቁርጠኞች ነን።"',

    // Services Section
    'services.badge': 'ሙሉ የህክምና አገልግሎቶች',
    'services.title': 'የእኛ ልዩ ልዩ የሕክምና እና የዲያግኖስቲክ አገልግሎቶች',
    'services.subtitle': 'በዘመናዊ መሳሪያዎች እና ልምድ ባላቸው የህክምና ባለሙያዎች በ24 ሰዓት የተደገፈ አገልግሎት።',
    'services.filterAll': 'ሁሉም አገልግሎቶች',
    'services.filterEmergency': 'ድንገተኛ እና ICU',
    'services.filterSurgical': 'የቀዶ ጥገና ህክምና',
    'services.filterMaternal': 'እናት እና ህጻናት',
    'services.filterDiagnostics': 'ላቦራቶሪ እና ኢሜጂንግ',
    'services.filterSpecialized': 'ልዩ ክሊኒኮች',
    'services.searchPlaceholder': 'አገልግሎት ይፈልጉ (ምሳሌ፡ ቀዶ ጥገና፣ ህጻናት፣ ኤክስሬይ)...',
    'services.learnMore': 'ዝርዝር መረጃ ይመልከቱ',
    'services.capacity': 'አቅም፡',
    'services.availability': 'የአገልግሎት ሰዓት፡',
    'services.headDoctor': 'የክፍሉ ኃላፊ፡',
    'services.roomLocation': 'የክፍሉ ቦታ፡',
    'services.keyFeatures': 'ዋና ዋና አገልግሎቶች፡',

    // Individual Services
    'srv.emergency.title': 'የ24/7 ድንገተኛ እና አደጋ ህክምና ማዕከል',
    'srv.emergency.desc': 'አጣዳፊ የድንገተኛ አደጋ ህክምና፣ የፅኑ ህክምና እና ፈጣን የህይወት አድን አገልግሎት።',
    'srv.emergency.full': 'በዘመናዊ የመተንፈሻ መሳሪያዎች፣ የደም ባንክ እና በ24 ሰዓት ዝግጁ በሆኑ የቀዶ ጥገና ቡድኖች የተደራጀ።',

    'srv.outpatient.title': 'የተመላላሽ ህክምና ክፍል (OPD)',
    'srv.outpatient.desc': 'ምርመራ፣ የረጅም ጊዜ ህመም ክትትል እና አጠቃላይ የህክምና ምክር ለአጠቃላይ ታካሚዎች።',
    'srv.outpatient.full': 'በቀን በመئات የሚቆጠሩ ታካሚዎችን በፈጣን እና ቀልጣፋ አስተናጋጅነት የሚያገለግል ክፍል፤',

    'srv.inpatient.title': 'የአልጋ ቁራኛ እና ICU ህክምና',
    'srv.inpatient.desc': 'ዘመናዊ የታካሚ ክፍሎች እና የፅኑ ህክምና መከታተያ (ICU) ክፍል ከሙሉ ክትትል ጋር።',
    'srv.inpatient.full': 'ከ350 በላይ አልጋዎች ያሉት እና በየቀኑ በስፔሻሊስቶች በሚደረግ ክትትል የሚመራ፤',

    'srv.surgery.title': 'አጠቃላይ እና የላፓሮስኮፒ ቀዶ ጥገና',
    'srv.surgery.desc': 'በዘመናዊ ቴክኖሎጂ የተደገፈ አጠቃላይ እና በትንሽ ቀዳዳ የሚደረግ (Laparoscopic) ቀዶ ጥገና።',
    'srv.surgery.full': 'በከፍተኛ ስፔሻሊስት ሰርጀኖች እና ዘመናዊ የማደንዘዣ መሳሪያዎች የሚከናወን፤',

    'srv.pediatrics.title': 'የህጻናት ህክምና እና NICU',
    'srv.pediatrics.desc': 'የህጻናት ህክምና እና አዲስ የተወለዱ ህጻናት ፅኑ ህክምና ክፍል (NICU)።',
    'srv.pediatrics.full': 'በዘመናዊ ኢንኩቤተሮች እና የህጻናት ስፔሻሊስቶች የተደራጀ ህይወት አድን ማዕከል፤',

    'srv.obgyn.title': 'የእናትነት እና ማህፀን ህክምና',
    'srv.obgyn.desc': 'የእናቶች እርግዝና ክትትል፣ በሰላም መገላገል፣ የቀዶ ጥገና ወሊድ እና የማህፀን ህክምና።',
    'srv.obgyn.full': 'ለእናቶች እና ህጻናት ደህንነት በ24 ሰዓት የተዘጋጀ አስተማማኝ ክፍል፤',

    'srv.orthopedics.title': 'የአጥንት እና መገጣጠሚያ ህክምና',
    'srv.orthopedics.desc': 'የአጥንት ስብራት፣ የመገጣጠሚያዎች ህክምና እና የቀዶ ጥገና እርማት።',
    'srv.orthopedics.full': 'በC-Arm ራጅ ቴክኖሎጂ የተደገፈ የላቀ የአጥንት ቀዶ ጥገና ህክምና፤',

    'srv.radiology.title': 'ሬዲዮሎጂ እና የላቀ ኢሜጂንግ',
    'srv.radiology.desc': 'CT Scan፣ ዲጂታል ኤክስሬይ (X-Ray)፣ አልትራሳውንድ እና የደም ስር ምርመራ።',
     me: 'srv.radiology.full',
    'srv.radiology.full': 'በከፍተኛ የሬዲዮሎጂ ባለሙያዎች የሚተነተን ፈጣን እና ትክክለኛ የራጅ እና የሲቲ ስካን ምስል ምርመራ፤',

    'srv.laboratory.title': 'ክሊኒካል ላቦራቶሪ እና ፓቶሎጂ',
    'srv.laboratory.desc': 'ሙሉ በሙሉ በአውቶሜሽን የተደገፈ የደም፣ የሽንት፣ የባክቴሪያ እና የሆርሞን ምርመራ።',
    'srv.laboratory.full': 'በISO ጥራት ደረጃ የተረጋገጠ ፈጣን እና አስተማማኝ የላቦራቶሪ ውጤት፤',

    'srv.dental.title': 'የጥርስ እና የአፍ ውስጥ ህክምና',
    'srv.dental.desc': 'የጥርስ ህክምና፣ የጥርስ መንቀል፣ የነርቭ ህክምና እና የጥርስ ማጽዳት።',
    'srv.dental.full': 'በዲጂታል ኤክስሬይ እና በዘመናዊ የጥርስ ህክምና ወንበሮች የተደራጀ፤',

    'srv.eyecare.title': 'የዓይን ህክምና (Ophthalmology)',
    'srv.eyecare.desc': 'የዓይን እይታ ምርመራ፣ የሞራ ቀዶ ጥገና እና የመነፅር ትእዛዝ።',
    'srv.eyecare.full': 'በዘመናዊ ማይክሮስኮፖች የተደገፈ የዓይን ህክምና እና የሞራ ቀዶ ጥገና ማዕከል፤',

    'srv.mental.title': 'የአእምሮ ጤና ህክምና',
    'srv.mental.desc': 'የአእምሮ ጤና ምርመራ፣ የስነ-ልቦና ምክር እና የማህበረሰብ ጤና ድጋፍ።',
    'srv.mental.full': 'ሚስጥራዊነቱ የተጠበቀ የስነ-ልቦና ምክር እና የስነ-አእምሮ ህክምና አገልግሎት፤',

    'srv.cardiology.title': 'የልብ ህክምና እና ECG',
    'srv.cardiology.desc': 'የልብ ምት መከታተያ (ECG)፣ ኢኮካርዲዮግራፊ እና የደም ግፊት ክትትል።',
    'srv.cardiology.full': 'የልብ ህመሞችን አስቀድሞ የመለየት እና የህክምና ክትትል የማድረግ አገልግሎት፤',

    'srv.vaccination.title': 'የክትባት እና የበሽታ መከላከያ ማዕከል',
    'srv.vaccination.desc': 'የህጻናት እና የእናቶች መደበኛ ክትባቶች እና የጉዞ ክትባቶች።',
    'srv.vaccination.full': 'በዓለም ጤና ድርጅት የመድሃኒት ቅዝቃዜ ማቀዝቀዣ ደረጃ የተጠበቀ የክትባት ማዕከል፤',

    'srv.pharmacy.title': 'የ24 ሰዓት የመድሃኒት ቤት',
    'srv.pharmacy.desc': 'በሆስፒታሉ ውስጥ ጥራት ያላቸው አስፈላጊ መድሃኒቶች ማከፋፈያ።',
    'srv.pharmacy.full': 'የድንገተኛ መድሃኒቶች፣ አንቲባዮቲክስ እና የህክምና ቁሳቁሶች በበቂ ሁኔታ የቀረቡበት፤',

    'srv.physio.title': 'የአካል पुनር ማገገሚያ (Physiotherapy)',
    'srv.physio.desc': 'ከአደጋ ወይም ከስትሮክ በኋላ የሚደረግ የአካል ብቃት እና የመንቀሳቀስ ማገገሚያ ህክምና።',
    'srv.physio.full': 'በሰለጠኑ የፊዚዮቴራፒ ባለሙያዎች የሚሰጥ የህመም ማስታገሻ እና የአካል ማገገሚያ፤',

    'srv.telemedicine.title': 'ቴሌሜዲሲን እና ዲጂታል ጤና',
    'srv.telemedicine.desc': 'በስልክ እና በኢንተርኔት የሚደረግ የሐኪም ምክር እና የመድሃኒት ማደስ አገልግሎት።',
    'srv.telemedicine.full': 'በሩቅ ለሚገኙ ታካሚዎች ከስፔሻሊስት ሐኪሞች ጋር በቪዲዮ የመገናኘት እድል፤',

    'srv.ambulance.title': 'አምቡላንስ እና ተንቀሳቃሽ ICU',
    'srv.ambulance.desc': 'በኦክስጅን እና በድንገተኛ ህክምና ቁሳቁስ የተደራጁ አምቡላንሶች።',
    'srv.ambulance.full': 'ታካሚዎችን ከአካባቢው ወደ ሆስፒታል እና ወደ አዲስ አበባ ለማጓጓዝ የተዘጋጀ፤',

    'srv.healthedu.title': 'የህዝብ ጤና ትምህርት እና ግንዛቤ',
    'srv.healthedu.desc': 'የእናቶች ጤና፣ የስነ-ምግብ እና የበሽታ መከላከያ ትምህርት ለማህበረሰቡ።',
    'srv.healthedu.full': 'በአካባቢው ትምህርት ቤቶች እና ገጠራማ ቀበሌዎች የሚደረግ የጤና ግንዛቤ ትምህርት፤',

    'srv.stemcenter.title': 'የSTEM ዲጂታል ጤና ፈጠራ ማዕከል',
    'srv.stemcenter.desc': 'ከIB Tech ጋር በመተባበር የተቋቋመ የሰራተኞች ቴክኖሎጂ ስልጠና እና የሶፍትዌር ልማት ማዕከል፤',
    'srv.stemcenter.full': 'የሆስፒታሉን ሰራተኞች ዲጂታል እውቀት የሚያሳድግ እና አዳዲስ ሶፍትዌሮችን የሚያለማ ማዕከል፤',

    // Triage
    'triage.badge': 'የታካሚዎች መመርመሪያ መሳሪያ',
    'triage.title': 'የህመም ምልክት መመርመሪያ እና ፈጣን መመሪያ',
    'triage.subtitle': 'የህመም ምልክትዎን በመምረጥ ድንገተኛ ክፍል መሄድ እንዳለብዎት ወይም ቀጠሮ መያዝ እንደሚገባዎት ይወቁ።',
    'triage.selectSymptom': 'ዋናውን የህመም አይነት ይምረጡ፡',
    'triage.highUrgency': 'አጣዳፊ የድንገተኛ ህክምና ያስፈልጋል!',
    'triage.medUrgency': 'የዛሬውኑ የታካሚ ህክምና (OPD) ይመረጣል',
    'triage.lowUrgency': 'መደበኛ የታካሚ ቀጠሮ መያዝ ይቻላል',
    'triage.actionCallEmergency': 'አሁኑኑ ወደ 907 ደውሉ',
    'triage.actionBookAppt': 'ቀጠሮ ለመያዝ ፖርታል ይክፈቱ',

    // Achievements
    'achieve.badge': 'ታሪክ እና ስኬቶቻችን',
    'achieve.title': 'የአገልግሎት እና የፈጠራ ጉዟችን',
    'achieve.subtitle': 'ከመደበኛ የህክምና አገልግሎት ወደ ዘመናዊ ዲጂታል ሆስፒታል ያደረግነው እድገት።',

    // Blog
    'blog.badge': 'ዜና እና የጤና መረጃዎች',
    'blog.title': 'ከአምቦ አጠቃላይ ሆስፒታል የተገኙ የቅርብ ጊዜ ዜናዎች',
    'blog.subtitle': 'ስለ ሆስፒታሉ እንቅስቃሴዎች፣ የSTEM ስልጠናዎች እና የጤና ምክሮች ይወቁ።',
    'blog.filterAll': 'ሁሉም ዜናዎች',
    'blog.filterNews': 'የሆስፒታል ዜና',
    'blog.filterTech': 'STEM እና ቴክኖሎጂ',
    'blog.filterHealth': 'የጤና ምክር',
    'blog.readFull': 'ሙሉውን ጽሑፍ ያንብቡ',

    // Gallery
    'gallery.badge': 'የሆስፒታሉ ፎቶዎች',
    'gallery.title': 'አምቦ አጠቃላይ ሆስፒታል በምስል',
    'gallery.subtitle': 'የሆስፒታሉን ህንፃዎች፣ ህክምና መሳሪያዎች፣ የSTEM ስልጠናዎች እና የህክምና እንቅስቃሴዎች ይመልከቱ።',
    'gallery.all': 'ሁሉም ምስሎች',
    'gallery.campus': 'የሆስፒታሉ ግቢ',
    'gallery.facilities': 'የህክምና ክፍሎች',
    'gallery.stem': 'STEM እና IB Tech',
    'gallery.community': 'የማህበረሰብ አገልግሎት',

    // Statistics
    'stats.title': 'የእኛ አሃዛዊ ስኬቶች',
    'stats.subtitle': 'ህብረተሰባችንን በጥራት እና በታማኝነት ለማገልገል የተደረጉ ጥረቶች።',

    // Testimonials
    'test.badge': 'የታካሚዎች አስተያየት',
    'test.title': 'የህብረተሰቡ ምስክርነት',
    'test.subtitle': 'በአምቦ አጠቃላይ ሆስፒታል የታከሙ ታካሚዎች እና የቤተሰብ አባላት የተናገሩት።',

    // Partners
    'partners.title': 'አጋር ተቋማት',
    'partners.subtitle': 'ከመንግስት፣ ከቴክኖሎጂ ተቋማት እና ከአለም አቀፍ ድርጅቶች ጋር ያለን ትብብር።',

    // Map
    'map.badge': 'አድራሻችን',
    'map.title': 'አምቦ አጠቃላይ ሆስፒታልን ይጎብኙ',
    'map.subtitle': 'በአምቦ ከተማ፣ ምዕራብ ሸዋ ዞን፣ ኦሮሚያ ክልል የሚገኝ።',
    'map.address': 'አድራሻ፡ ዋናው ሆስፒታል መንገድ፣ አምቦ ከተማ፣ ኦሮሚያ፣ ኢትዮጵያ',
    'map.distanceAddis': 'ከአዲስ አበባ ያለው ርቀት፡ ~120 ኪ.ሜ በሰሜን ምዕራብ አቅጣጫ',
    'map.getDirections': 'በGoogle Maps አቅጣጫ ይመልከቱ',
    'map.emergencyRoute': 'የ24 ሰዓት የአምቡላንስ መግቢያ በሰሜን አቅጣጫ ይገኛል።',

    // Contact
    'contact.badge': 'ያግኙን',
    'contact.title': 'የቀጠሮ እና የጥያቄ ቅጽ',
    'contact.subtitle': 'ጥያቄ ካለዎት ወይም ቀጠሮ መያዝ ከፈለጉ መልእክት ይላኩልን።',
    'contact.nameLabel': 'ሙሉ ስም',
    'contact.emailLabel': 'ኢሜይል አድራሻ',
    'contact.phoneLabel': 'ስልክ ቁጥር',
    'contact.subjectLabel': 'የጉዳዩ አይነት / ክፍል',
    'contact.msgLabel': 'መልእክትዎ',
    'contact.submitBtn': 'መልእክት ላክ',
    'contact.successMsg': 'እናመሰግናለን! መልእክትዎ በተሳካ ሁኔታ ተልኳል። በቅርብ ጊዜ እናገኝዎታለን።',

    // Footer
    'footer.desc': 'አምቦ አጠቃላይ ሆስፒታል በምዕራብ ሸዋ የላቀ የህክምና እና የድንገተኛ አደጋ አገልግሎት የሚሰጥ የህዝብ ተቋም ነው።',
    'footer.quickLinks': 'ፈጣን ማብራሪያዎች',
    'footer.servicesHead': 'ዋና አገልግሎቶች',
    'footer.emergencyHead': 'የድንገተኛ ስልኮች',
    'footer.developedBy': 'ዲዛይን የተደረገው እና የለማው በ',
    'footer.ibTechCredit': 'IB Tech Startup (በSTEM ማዕከል ድጋፍ)',
    'footer.rights': 'መብቱ በህግ የተጠበቀ ነው። አምቦ አጠቃላይ ሆስፒታል፤',
    'footer.privacy': 'የግላዊነት ፖሊሲ',
    'footer.terms': 'የአገልግሎት ውል',
    'footer.patientRights': 'የታካሚዎች መብት እና ግዴታ',
    'footer.cookie': 'የኩኪ ፖሊሲ',
    'footer.accessibility': 'የተዳራሽነት መግለጫ',
  },
  om: {
    // Top Bar & Nav
    'topbar.emergency': 'Sarma Hatattamaa 24/7:',
    'topbar.hours': 'Saa\'a 24 / Guyyaa 7 Banamaadha',
    'topbar.address': 'Magaalaa Amboo, Dhiha Shawaa, Oromiyaa, Itoophiyaa',
    'nav.home': 'Fuula Duraa',
    'nav.about': 'Waa\'ee Ospitaalaa',
    'nav.stem': 'STEM & IB Tech',
    'nav.services': 'Tajaajilawwan',
    'nav.achievements': 'Milkaa\'ina',
    'nav.triage': 'Madaala Dhukkubbii',
    'nav.blog': 'Oduu & Fayyaa',
    'nav.gallery': 'Galaari',
    'nav.contact': 'Nu Quunnamaa',
    'nav.portal': 'Jalqabaa (Poortaal Dhukkubsataa)',
    'nav.emergencyCall': 'Bilbilaa 907',

    // Hero Section
    'hero.badge': 'Gaa\'umsa Tajaajila Fayyaa fi Innooveeshinii Diijitaalaa Itoophiyaa',
    'hero.title': 'Tajaajila Fayyaa Waaltinaa fi Kabaja Qabu Magaalaa Amboo fi Naannoo Isheetif',
    'hero.subtitle': 'Teeknoolojii yaala fayyaa ammayyaa, ogeessota yaala speshaliistii fi furmaata fayyaa diijitaalaa giddu-gala STEM fi IB Tech\'n deeggarame qindoominaansuu.',
    'hero.ctaPrimary': 'Poortaala Dhukkubsataa Seenaa',
    'hero.ctaSecondary': 'Tajaajila Madaalaa',
    'hero.emergencyBtn': 'Gargaarsa Hatattamaa',
    'hero.statPatients': '500,000+',
    'hero.statPatientsLabel': 'Dhukkubsattoota Yaalaman',
    'hero.statBeds': '350+',
    'hero.statBedsLabel': 'Sireewwan Ammayyaa',
    'hero.statDoctors': '85+',
    'hero.statDoctorsLabel': 'Doktoroota Speshaliistii',
    'hero.statSatisfaction': '98.6%',
    'hero.statSatisfactionLabel': 'Gammoachisa Dhukkubsattootaa',

    // STEM & IB Tech Spotlight
    'stem.badge': 'Ceumsa Diijitaalaa fi Ijaarsa Dandeettii',
    'stem.title': 'Ospitaala Waliigala Amboo fi Deggersa Giddu-gala STEM',
    'stem.subtitle': 'Leenjii fi ijaarsa dandeettii dhaabbata IB Tech\'n kennameen, Ospitaalli Waliigala Amboo galmeewwan yaalaa fi tajaajila dhukkubsattootaa teeknoolojii ammayyaan haareffateera.',
    'stem.feature1.title': 'Leenjii Fayyaa Diijitaalaa Ogeessotaa',
    'stem.feature1.desc': 'Ogeessonni fayyaa 150 ol sirna galmee diijitaalaa, tiileemeedisiinii fi sooftiweerii yaalaatiin IB Tech\'n leenji\'aniiru.',
    'stem.feature2.title': 'Giddu-gala Innooveeshinii STEM',
    'stem.feature2.desc': 'Mooraa ospitaalaa keessatti giddu-gala STEM fayyaa diijitaalaa leenjii fi qorannoo teeknoolojii dargaggootaaf hundeeffame.',
    'stem.feature3.title': 'Qophii Sirna Bulchiinsa Ospitaala Ammayyaa',
    'stem.feature3.desc': 'Beellama galmeessuu, galmee yaalaa elektrooniiksii fi sirna dabareeyyii dhukkubsattootaa ofumaan socho\'u diriirsuu.',
    'stem.feature4.title': 'Dandeettii Teeknoolojii Biyya Keessaa',
    'stem.feature4.desc': 'Dhaabbata IB Tech\'n kan qophaa\'e, kalaaqni dargaggoota biyya keessaa tajaajila fayyaa uummataa akkamtitti ceysisuun danda\'amu kan agarsiise.',

    // About Section
    'about.badge': 'Waa\'ee Ospitaala Waliigala Amboo',
    'about.title': 'Dhiha Shawaa Keessatti Njisa Tajaajila Fayyaa Ol\'aanaa',
    'about.desc': 'Ospitaalli Waliigala Amboo dhaabbata fayyaa uummataa jiraattota miliyoona 2.5 ol Magaalaa Amboo, Godina Dhiha Shawaa fi naannoo isheetiif tajaajila kennudha. Ospitaalli keenya saa\'a 24 yaala hatattamaa, baqaqsanii yaaluu, haadhoolii fi daa\'immanii fi yaala addaa kenna.',
    'about.mission.title': 'Ergaa Keenya',
    'about.mission.desc': 'Teeknoolojii ammayyaa fi gocha yaala waaltinaa fayyadamchuun tajaajila fayyaa qulqullina qabu fi dhaqqabamaa ta\'e kennuu.',
    'about.vision.title': 'Mul\'ata Keenya',
    'about.vision.desc': 'Bara 2030ti giddu-gala fayyaa diijitaalaa fi qulqullina yaalaatiin Itoophiyaa keessatti njisa ta\'uu.',
    'about.values.title': 'Dudhaalee Keenya',
    'about.values.desc': 'Gargaarsa, Aminamummaa, Gaa\'umsa Yaalaa, Dhaqqabamummaa, Kalaqa fi Kabaja Namummaa.',
    'about.directorTitle': 'Ergaa Hoogganaa Ospitaalaa',
    'about.directorName': 'Dr. Tokumaa Baayisaa (MD, MPH)',
    'about.directorRole': 'Direktara Yaalaa, Ospitaala Waliigala Amboo',
    'about.directorMessage': '"Tumsi keenya IB Tech fi Giddu-gala STEM waliin taasisne ospitaala keenya gara sirna diijitaala ammayyaatti ceysisuuf nu gargaareera. Dhukkubsataa cunda kabajaan simachuu fi yaala qulqullina qabu kennuuf kutannoo qabna."',

    // Services Section
    'services.badge': 'Tajaajila Yaalaa Gutuu',
    'services.title': 'Tajaajilawwan Yaalaa fi Sakatta\'iinsa Addaa Keenya',
    'services.subtitle': 'Meeshaalee ammayyaa fi ogeessota fayyaa muuxannoo qabaniin saa\'a 24 kan deeggarame.',
    'services.filterAll': 'Tajaajilawwan Cunda',
    'services.filterEmergency': 'Hatattamaa & ICU',
    'services.filterSurgical': 'Baqaqsanii Yaaluu',
    'services.filterMaternal': 'Haadholii & Daa\'imman',
    'services.filterDiagnostics': 'Laaboraatorii & Imaging',
    'services.filterSpecialized': 'Kliinikoota Addaa',
    'services.searchPlaceholder': 'Tajaajila barbaadaa (fkn. Baqaqsanii yaaluu, Daa\'imman)...',
    'services.learnMore': 'Odeeffannoo Guutuu Ilaalaa',
    'services.capacity': 'Dandeettii:',
    'services.availability': 'Sa\'aatii Tajaajilaa:',
    'services.headDoctor': 'Itti Gaafatamaa Kutaa:',
    'services.roomLocation': 'Bakka Kutaa:',
    'services.keyFeatures': 'Tajaajilawwan Ijoo:',

    // Services Individual
    'srv.emergency.title': 'Giddu-gala Hatattamaa fi Balaa 24/7',
    'srv.emergency.desc': 'Tajaajila lubbuu baraarsaa hatattamaa, sakatta\'iinsa balaa fi kutaa yaala jabduu saa\'a 24 banamaa.',
    'srv.emergency.full': 'Meeshaalee hargansuu, baankii dhiigaa fi garee baqaqsanii yaaluu hatattamaatiin kan gurmaa\'e.',

    'srv.outpatient.title': 'Kutaa Yaala Deddeebii (OPD)',
    'srv.outpatient.desc': 'Madaallii yaalaa, hordoffii dhukkuba tiruu fi gorsa fayyaa waliigalaa.',
    'srv.outpatient.full': 'Guyyaatti dhukkubsattoota dhibbaa madaaluun tajaajila saffisaa fi gaa\'umsa qabu kennu.',

    'srv.inpatient.title': 'Yaala Ciisaa fi ICU',
    'srv.inpatient.desc': 'Kutaalee ciisaa ammayyaa fi kutaa yaala jabduu (ICU) hordoffii wal-irraa hostility qabuun.',
    'srv.inpatient.full': 'Sireewwan 350 ol kan qabu fi hordoffii speshaliistotaatiin kan geggeeffamu.',

    'srv.surgery.title': 'Baqaqsanii Yaaluu Waliigalaa fi Laparoscopic',
    'srv.surgery.desc': 'Kutaalee baqaqsanii yaaluu ammayyaa teeknoolojii Laparoscopic\'n deeggaraman.',
    'srv.surgery.full': 'Ogeessota baqaqsanii yaaluu speshaliistotaatiin meeshaalee sammuu qabbaneessaa ammayyaatiin kan raawwatamu.',

    'srv.pediatrics.title': 'Yaala Daa\'immanii fi NICU',
    'srv.pediatrics.desc': 'Yaala addaa daa\'immanii fi kutaa yaala jabduu daa\'imman daa\'imman da\'manii (NICU).',
    'srv.pediatrics.full': 'Inkoobeetaroota ammayyaa fi ogeessota yaala daa\'immaniitiin kan gurmaa\'e.',

    'srv.obgyn.title': 'Yaala Haadholii fi Ulfaa',
    'srv.obgyn.desc': 'Hordoffii ulfaa, da\'umsa nagaa, baqaqsanii da\'umsiisuu fi yaala fayyaa gadameessaa.',
    'srv.obgyn.full': 'Nageenya haadholii fi daa\'immaniif saa\'a 24 kan qophaa\'e.',

    'srv.orthopedics.title': 'Yaala Lafee fi Buusawwanii',
    'srv.orthopedics.desc': 'Yaala lafee cabee, madaa buusawwanii fi baqaqsanii yaaluu lafee.',
    'srv.orthopedics.full': 'Teeknoolojii C-Arm X-Ray\'n kan deeggarame yaala lafee ol\'aanaa.',

    'srv.radiology.title': 'Rraadiyoolojii fi Imaging Ammayyaa',
    'srv.radiology.desc': 'CT Scan, X-Ray Diijitaalaa, Ultrasroundii fi qorannoo dhiiga uumamaa.',
    'srv.radiology.full': 'Ogeessota raadiyoolojiitiin bu\'aa saffisaa fi sirrii ta\'e kennuu.',

    'srv.laboratory.title': 'Laaboraatorii Kliinikaalaa fi Paatoolojii',
    'srv.laboratory.desc': 'Qorannoo dhiigaa, waan miillaa, baakteeriyaa fi hoormoonii ofumaan raawwatamu.',
    'srv.laboratory.full': 'Qulqullina ISO\'n kan mirkanaa\'e bu\'aa laaboraatorii saffisaa.',

    'srv.dental.title': 'Yaala Ilkaanii fi Afaanii',
    'srv.dental.desc': 'Sakatta\'iinsa ilkaanii, ilkaan buqqisuu, yaala hidda ilkaanii fi qulqulleessuu.',
    'srv.dental.full': 'X-Ray diijitaalaa fi teessuma yaala ilkaanii ammayyaatiin kan gurmaa\'e.',

    'srv.eyecare.title': 'Yaala Ijaa (Ophthalmology)',
    'srv.eyecare.desc': 'Qorannoo argaa ijaa, baqaqsanii yaaluu mooraa ijaa fi ajaja manzaraii.',
    'srv.eyecare.full': 'Maikroskooppii ammayyaatiin yaala ijaa fi mooraa ijaa baqaqsanii yaaluu.',

    'srv.mental.title': 'Fayyaa Sammuu (Psychiatry)',
    'srv.mental.desc': 'Qorannoo fayyaa sammuu, gorsa sammuu fi deeggarsa hawaasaa.',
    'srv.mental.full': 'Gorsa sammuu fi yaala fayyaa sammuu iccitiin isaa eegame.',

    'srv.cardiology.title': 'Yaala Onnee fi ECG',
    'srv.cardiology.desc': 'Hordoffii dhaha onnee (ECG), Echocardiography fi dhiibbaa dhiigaa.',
    'srv.cardiology.full': 'Dhukkuba onnee dursee adda baasuu fi hordoffii yaalaa taasisuu.',

    'srv.vaccination.title': 'Talaallii fi Talaallii Ittisaa',
    'srv.vaccination.desc': 'Talaallii daa\'immanii, haadholii fi talaallii imala adda addaa.',
    'srv.vaccination.full': 'Sadarkaa dhaabbata fayyaa addunyaatiin bakka qabbanaawwaatti kan eegamu.',

    'srv.pharmacy.title': 'Qoricha Saa\'a 24 Banamaa',
    'srv.pharmacy.desc': 'Ospitaala keessatti qorichoota bu\'uuraa qulqullina qaban raabsuu.',
    'srv.pharmacy.full': 'Qorichoota hatattamaa, faalama dhibee fi meeshaalee yaalaa guutuu.',

    'srv.physio.title': 'Bayyanannaa Qaamaa (Physiotherapy)',
    'srv.physio.desc': 'Balaa ama Strokii booda yaala socho\'iinsa qaamaa fi sammuu bayyanachiisuu.',
    'srv.physio.full': 'Ogeessota fiiziyooteeraapiitiin yaala dhukkubbii hir\'isuu fi qaama sochoosu.',

    'srv.telemedicine.title': 'Tiileemeedisiinii fi Fayyaa Diijitaalaa',
    'srv.telemedicine.desc': 'Bilbilaan fi intarneetiin gorsa doktoraa fi qoricha haareffachuu.',
    'srv.telemedicine.full': 'Dhukkubsattoota fagoof viidiyoondoktoroota speshaliistii waliin wal-quunnamsiisuu.',

    'srv.ambulance.title': 'Ambuulaansii fi ICU Socho\'u',
    'srv.ambulance.desc': 'Ambuulaansii oksijiinii fi meeshaalee yaala hatattamaatiin gurmaa\'an.',
    'srv.ambulance.full': 'Dhukkubsattoota saffisaan gara ospitaalaa fi Finfinneetti geeffachuuf.',

    'srv.healthedu.title': 'Barnoota Fayyaa Uummataa',
    'srv.healthedu.desc': 'Fayyaa haadholii, nyaata madaalawaa fi ittisa dhibeewwaan daddarboo.',
    'srv.healthedu.full': 'Mannneen barnootaa fi gandoolee baadiyyaatti barnoota hubannoo fayyaa kennuu.',

    'srv.stemcenter.title': 'Giddu-gala Innooveeshinii Fayyaa STEM',
    'srv.stemcenter.desc': 'IB Tech waliin kan hundeeffame leenjii teeknoolojii hojjettootaa fi guddina sooftiweerii.',
    'srv.stemcenter.full': 'Dandeettii diijitaalaa hojjettoota ospitaalaa madaalchiisuu fi sooftiweerii haaraa misoomsuu.',

    // Triage
    'triage.badge': 'Meeshaa Madaallii Dhukkubsataa',
    'triage.title': 'Madaala Dhukkubbii fi Qajeelfama Saffisaa',
    'triage.subtitle': 'Mallattoilee dhukkubbii keessan filachuun hatattamaan kutaa balaa deemuu ammas beellama qabachuu akka qabdan beakaa.',
    'triage.selectSymptom': 'Dhukkubbii keessan isa ijoo filadhaa:',
    'triage.highUrgency': 'Yaala Hatattamaa Barbaachisa!',
    'triage.medUrgency': 'Gara OPD Deemuu/Guyyaa Sana Yaalamuu Filatamaa',
    'triage.lowUrgency': 'Beellama Yaala Deddeebii Qabachuun Danda\'ama',
    'triage.actionCallEmergency': 'Amma Bilbila 907\'tti Bilbilaa',
    'triage.actionBookAppt': 'Beellama Qabachuuf Poortaala Banaa',

    // Achievements
    'achieve.badge': 'Seenaa fi Milkaa\'ina Keenya',
    'achieve.title': 'Imala Tajaajilaa fi Kalaqa Keenya',
    'achieve.subtitle': 'Tajaajila yaala bu\'uuraa irraa gara ospitaala diijitaalaa ammayyaatti guddina taasifne.',

    // Blog
    'blog.badge': 'Oduu & Odeeffannoo Fayyaa',
    'blog.title': 'Oduuwwan Haaraa Ospitaala Waliigala Amboo Irraa',
    'blog.subtitle': 'Beeksisa ospitaalaa, guddina yaalaa, leenjii STEM fi gorsa fayyaa hubadhaa.',
    'blog.filterAll': 'Oduuwwan Cunda',
    'blog.filterNews': 'Oduu Ospitaalaa',
    'blog.filterTech': 'STEM & Teeknoolojii',
    'blog.filterHealth': 'Gorsa Fayyaa',
    'blog.readFull': 'Dubbisa Guutuu Ilaalaa',

    // Gallery
    'gallery.badge': 'Galaari Ospitaalaa',
    'gallery.title': 'Ospitaala Waliigala Amboo Suuraan',
    'gallery.subtitle': 'Gamoo ospitaalaa, meeshaalee yaalaa, leenjii STEM fi socho\'iinsa fayyaa hawaasaa dhihootti ilaalaa.',
    'gallery.all': 'Suuraawwan Cunda',
    'gallery.campus': 'Mooraa Ospitaalaa',
    'gallery.facilities': 'Kutaalee Yaalaa',
    'gallery.stem': 'STEM & IB Tech',
    'gallery.community': 'Tajaajila Hawaasaa',

    // Statistics
    'stats.title': 'Milkaa\'ina Keenya Lakkoofsaan',
    'stats.subtitle': 'Hawaasa keenya qulqullina fi amanamummaadhaan tajaajiluuf carraaqqii taasifame.',

    // Testimonials
    'test.badge': 'Ragaa Dhukkubsattootaa',
    'test.title': 'Dhugaa Ba\'umsa Hawaasa Keenyaa',
    'test.subtitle': 'Muuxannoo dhukkubsattootaa fi maatiiwwan Ospitaala Waliigala Ambootti yaalaman.',

    // Partners
    'partners.title': 'Dhaabbilee Tumsitoota Keenya',
    'partners.subtitle': 'Mooyyota fayyaa mootummaa, dhaabbilee teeknoolojii fi dhaabbilee addunyaa waliin hojjechuu.',

    // Map
    'map.badge': 'Teessoo Keenya',
    'map.title': 'Ospitaala Waliigala Amboo Daawwadhaa',
    'map.subtitle': 'Magaalaa Amboo, Godina Dhiha Shawaa, Naannoo Oromiyaa, Itoophiyaa keessatti kan argamu.',
    'map.address': 'Teessoo: Daandii Ospitaala Gudaa, Magaalaa Amboo, Oromiyaa, Itoophiyaa',
    'map.distanceAddis': 'Fageenya Finfinnee irraa: ~120 km Kallattii Dhihaatiin',
    'map.getDirections': 'Kallattii Google Maps\'n Ilaalaa',
    'map.emergencyRoute': 'Karra Ambuulaansii 24/7 Kallattii Kabaatiin Banamaadha.',

    // Contact
    'contact.badge': 'Nu Quunnamaa',
    'contact.title': 'Uunka Beellamaa fi Gaaffii',
    'contact.subtitle': 'Gaaffii qabduu ammas deeggarsa barbaaduu? Ergaa nuf ergaa.',
    'contact.nameLabel': 'Maqaa Guutuu',
    'contact.emailLabel': 'Teessoo Imeelii',
    'contact.phoneLabel': 'Lakkoofsa Bilbilaa',
    'contact.subjectLabel': 'Gosa Gaaffii / Kutaa',
    'contact.msgLabel': 'Ergaa Keessan',
    'contact.submitBtn': 'Ergaa Ergii',
    'contact.successMsg': 'Galatoomaa! Ergaan keessan milkaa\'inaan ergameera. Gareen keenya dhihootti isin quunnama.',

    // Footer
    'footer.desc': 'Ospitaalli Waliigala Amboo giddu-gala fayyaa ol\'aanaa tajaajila hatattamaa, baqaqsanii yaaluu, haadholii fi yaala addaa kennudha.',
    'footer.quickLinks': 'Liinkiilee Saffisaa',
    'footer.servicesHead': 'Tajaajilawwan Ijoo',
    'footer.emergencyHead': 'Bilbiloota Hatattamaa',
    'footer.developedBy': 'Kan Ddesigned fi Dijiitaalaan Misoomsame:',
    'footer.ibTechCredit': 'IB Tech Startup (Deeggarsa Giddu-gala STEM\'n)',
    'footer.rights': 'Mirgi Cundi Seeraan Kan Eegame. Ospitaala Waliigala Amboo.',
    'footer.privacy': 'Imaammata Iccitii',
    'footer.terms': 'Waliigaltee Tajaajilaa',
    'footer.patientRights': 'Mirga fi Dirqama Dhukkubsattootaa',
    'footer.cookie': 'Imaammata Kookii',
    'footer.accessibility': 'Ibsa Dhaqqabamummaa',
  }
};
