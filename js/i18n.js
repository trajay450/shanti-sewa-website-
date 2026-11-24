/* ===================== Shared: language + theme ===================== */
const I18N = {
  en: {
    topbar_tagline: "Your Health, Our Responsibility",
    topbar_hours: "Open 7 Days a Week",
    nav_home: "Home",
    nav_services: "Services",
    nav_about: "About",
    nav_book: "Book Appointment",
    nav_contact: "Contact",
    nav_admin: "Staff Login",
    nav_facility: "Our Facility",

    ticker_1: "Digital X-Ray Available",
    ticker_2: "Ultrasound Scanning",
    ticker_3: "ECG / Heart Checkup",
    ticker_4: "Full Lab Test Facility",
    ticker_5: "Plaster & Fracture Care",
    ticker_6: "Open All 7 Days",
    ticker_7: "Experienced Medical Staff",

    hero_badge: "Trusted Local Diagnostic Center",
    hero_title_1: "Shanti Health Care &",
    hero_title_2: "Diagnostic Center",
    hero_lead: "Modern diagnostic facilities — Digital X-Ray, Ultrasound, ECG, Laboratory and Plaster services — right here in Ramdhuni-7, Tetrachowk, Sunsari. Fast reports, caring staff, honest service.",
    hero_cta_book: "Book Appointment",
    hero_cta_call: "Call Now",
    hero_stat1_t: "Digital X-Ray",
    hero_stat1_s: "In-house imaging",
    hero_stat2_t: "7 Days Open",
    hero_stat2_s: "Always available",
    hero_stat3_t: "Quick Reports",
    hero_stat3_s: "Minimal waiting",
    hero_float1_t: "Trusted Center",
    hero_float1_s: "Quality diagnostics",
    hero_float2_t: "Call to Book",
    hero_float2_s: "9842359050",

    services_tag: "Our Services",
    services_title: "Complete Diagnostic & Healthcare Services Under One Roof",
    services_sub: "From OPD consultation to lab testing, imaging, emergency care and minor surgery — all the essential healthcare services your family needs, in one place.",
    s_opd_t: "OPD & Consultation",
    s_opd_np: "ओपीडी तथा परामर्श",
    s_opd_d: "General OPD, Consultant OPD, Gynae OPD, ENT OPD and Ortho OPD — expert consultation for the whole family.",
    s_pharmacy_t: "Pharmacy",
    s_pharmacy_np: "फार्मेसी",
    s_pharmacy_d: "In-house pharmacy stocked with essential and prescribed medicines, available on-site.",
    s_lab_t: "Laboratory (Lab Tests)",
    s_lab_np: "प्रयोगशाला (ल्याब जाँच)",
    s_lab_d: "Blood, urine, stool, H. Pylori, allergy test, thyroid, arthritis-related tests, ANC, serology and more.",
    s_imaging_t: "Imaging & Diagnostics",
    s_imaging_np: "इमेजिङ तथा डायग्नोस्टिक्स",
    s_imaging_d: "Digital X-Ray, Ultrasound and ECG for fast, accurate diagnosis.",
    s_emergency_t: "Emergency & Critical Care",
    s_emergency_np: "आपतकालीन तथा गम्भीर स्याहार",
    s_emergency_d: "Emergency care with patient monitor and oxygen, plus daycare and nebulizer services.",
    s_surgical_t: "Surgical & Minor Procedures",
    s_surgical_np: "शल्यक्रिया तथा साना प्रक्रिया",
    s_surgical_d: "Minor OT, general surgical procedures, suturing and plastering for fractures.",
    s_eyedental_t: "Eye & Dental Care",
    s_eyedental_np: "आँखा तथा दाँत स्याहार",
    s_eyedental_d: "General eye and dental checkups, plus an in-house glasses (चश्मा घर) counter.",
    s_chronic_t: "Chronic & Specialized Care",
    s_chronic_np: "दीर्घरोग तथा विशेष स्याहार",
    s_chronic_d: "Sugar, blood pressure, thyroid and heart disease treatment, skin treatment, and infertility treatment & advice.",
    s_essentials_t: "Everyday Essentials",
    s_essentials_np: "दैनिक उपभोग्य सामग्री",
    s_essentials_d: "Select food and cosmetic products also available at the center.",

    facility_tag: "Our Facility",
    facility_title: "A Look Inside Our Center",
    facility_sub: "Real photos from our treatment rooms, emergency ward, OPD and diagnostic sections.",
    f_procedure_t: "Treatment / Procedure Room",
    f_emergency_t: "Emergency & Critical Care Bed",
    f_consultation_t: "Doctor's Consultation Room",
    f_xray_t: "Digital X-Ray / Radiology Room",
    f_optical_t: "Emergency Ward & Glasses Counter",

    about_tag: "Meet the Team",
    about_title: "Managed With Care, Trusted by the Community",
    about_role: "Founder / In-Charge, Shanti Health Care & Diagnostic Center",
    about_p1: "Shanti Health Care & Diagnostic Center was started with one simple goal — to bring reliable, affordable diagnostic services close to home for the people of Ramdhuni and Tetrachowk. Every test and every patient is handled with honesty and care.",
    about_p2: "\"Health is our priority, service is our commitment.\" We believe timely checkups lead to a happier, healthier life — and we're here to make that easy for every family in our community.",
    about_point1: "Modern Equipment",
    about_point2: "Caring Staff",
    about_point3: "Fast Reports",
    about_point4: "Affordable Pricing",
    about_badge_t: "Verified Center",
    about_badge_s: "Community Trusted",

    feature_tag: "Why Choose Us",
    feature_title: "Simple, Honest, Dependable Healthcare",
    f1_t: "All-in-One Center",
    f1_s: "X-Ray, Ultrasound, ECG, Lab & Plaster — all under one roof.",
    f2_t: "Open 7 Days",
    f2_s: "We're here for you every day of the week.",
    f3_t: "Easy Booking",
    f3_s: "Book your appointment online in under a minute.",
    f4_t: "Local & Trusted",
    f4_s: "Serving the Ramdhuni-Tetrachowk community with care.",

    booking_tag: "Appointment",
    booking_title: "Book Your Appointment",
    booking_sub: "Fill the form below and our team will confirm your appointment by phone or email shortly.",
    booking_side_title: "Why book online?",
    booking_side_p: "Save time — reserve your slot in advance and skip the waiting. Our staff will contact you to confirm date and time.",
    booking_li1: "Instant confirmation email to our clinic",
    booking_li2: "Choose your preferred date & service",
    booking_li3: "Our staff calls you back to confirm",
    booking_li4: "No payment required to book",
    f_name: "Full Name",
    f_name_ph: "e.g. Ram Bahadur Thapa",
    f_phone: "Phone Number",
    f_phone_ph: "98XXXXXXXX",
    f_age: "Age (optional)",
    f_age_ph: "e.g. 32",
    f_service: "Service Needed",
    f_date: "Preferred Date",
    f_time: "Preferred Time",
    f_msg: "Message / Symptoms (optional)",
    f_msg_ph: "Briefly describe your concern...",
    f_submit: "Confirm Booking",
    f_note: "Your booking details will be sent to our clinic's email and our staff will call you to confirm the appointment.",
    svc_select: "-- Select a service --",
    toast_title: "Booking Received!",
    toast_msg: "Thank you! Our staff will call you shortly to confirm your appointment.",

    contact_tag: "Get In Touch",
    contact_title: "Visit or Contact Us",
    contact_sub: "We're located at Ramdhuni-7, Tetrachowk, Sunsari — easily reachable and open 7 days a week.",
    c_addr_t: "Address",
    c_addr_s: "Ramdhuni-7, Tetrachowk, Sunsari, Nepal",
    c_phone_t: "Phone",
    c_phone_s: "Call us anytime",
    c_hours_t: "Working Hours",
    c_hours_s: "Open 7 Days a Week",
    c_email_t: "Email",
    c_email_s: "Send us your query",

    foot_about: "A trusted local diagnostic center offering Digital X-Ray, Ultrasound, ECG, Lab and Plaster services to the Ramdhuni-Tetrachowk community.",
    foot_links: "Quick Links",
    foot_services: "Services",
    foot_contact: "Contact Us",
    foot_tagline: "Timely checkup, happy life!",
    foot_rights: "All rights reserved.",
    foot_staff: "Staff Login",

    admin_login_title: "Staff Login",
    admin_login_sub: "Sign in to manage appointment bookings",
    admin_id: "Admin ID",
    admin_pw: "Password",
    admin_login_btn: "Login",
    admin_err: "Incorrect Admin ID or Password. Please try again.",
    admin_hint: "Authorized clinic staff only. Contact the center administrator if you've forgotten your login details.",
    admin_back: "Back to Website",
    admin_dash: "Appointments Dashboard",
    admin_logout: "Logout",
    st_total: "Total Bookings",
    st_today: "Today's Bookings",
    st_week: "This Week",
    st_services: "Services Offered",
    search_ph: "Search by name or phone...",
    export_csv: "Export CSV",
    clear_all: "Clear All",
    th_name: "Patient Name",
    th_phone: "Phone",
    th_service: "Service",
    th_date: "Preferred Date",
    th_time: "Time",
    th_msg: "Message",
    th_submitted: "Booked On",
    th_action: "Action",
    empty_title: "No appointments yet",
    empty_sub: "New bookings made from the website will appear here.",
    admin_note: "Every booking is also emailed automatically to the clinic's Gmail inbox. This table shows bookings saved on this device/browser.",
    confirm_clear: "Are you sure you want to delete ALL bookings? This cannot be undone.",
    confirm_del: "Delete this booking?",
    dash_reg_summary: "Appointment Registration Summary",
    dash_by_service: "Bookings by Service",
    dash_live: "LIVE",
  },
  np: {
    topbar_tagline: "तपाईंको स्वास्थ्य, हाम्रो जिम्मेवारी",
    topbar_hours: "हप्ताको ७ दिन खुला",
    nav_home: "गृहपृष्ठ",
    nav_services: "सेवाहरू",
    nav_about: "हाम्रो बारे",
    nav_book: "अपोइन्टमेन्ट बुक गर्नुहोस्",
    nav_contact: "सम्पर्क",
    nav_facility: "हाम्रो सुविधा",
    nav_admin: "स्टाफ लगइन",

    ticker_1: "डिजिटल एक्स रे उपलब्ध छ",
    ticker_2: "अल्ट्रासाउन्ड स्क्यानिङ",
    ticker_3: "ECG / मुटुको जाँच",
    ticker_4: "पूर्ण ल्याब टेस्ट सुविधा",
    ticker_5: "प्लास्टर तथा हड्डी उपचार",
    ticker_6: "हप्ताको ७ दिन खुला",
    ticker_7: "अनुभवी मेडिकल स्टाफ",

    hero_badge: "विश्वसनीय स्थानीय डायग्नोस्टिक सेन्टर",
    hero_title_1: "शान्ति स्वास्थ्य उपचार तथा",
    hero_title_2: "डायग्नोस्टिक सेन्टर",
    hero_lead: "डिजिटल एक्स रे, अल्ट्रासाउन्ड, ECG, ल्याब र प्लास्टर सेवा — रामधुनी-७, तेत्रुचोक, सुनसरीमै उपलब्ध। छिटो रिपोर्ट, मायालु स्टाफ, इमानदार सेवा।",
    hero_cta_book: "अपोइन्टमेन्ट बुक गर्नुहोस्",
    hero_cta_call: "अहिले कल गर्नुहोस्",
    hero_stat1_t: "डिजिटल एक्स रे",
    hero_stat1_s: "आफ्नै इमेजिङ सुविधा",
    hero_stat2_t: "७ दिन खुला",
    hero_stat2_s: "सधैं उपलब्ध",
    hero_stat3_t: "छिटो रिपोर्ट",
    hero_stat3_s: "कम पर्खाइ समय",
    hero_float1_t: "विश्वसनीय सेन्टर",
    hero_float1_s: "गुणस्तरीय डायग्नोस्टिक्स",
    hero_float2_t: "बुकिङका लागि कल गर्नुहोस्",
    hero_float2_s: "9842359050",

    services_tag: "हाम्रा सेवाहरू",
    services_title: "एउटै छानामुनि पूर्ण डायग्नोस्टिक तथा स्वास्थ्य सेवा",
    services_sub: "ओपीडी परामर्शदेखि ल्याब जाँच, इमेजिङ, आपतकालीन स्याहार र सानो शल्यक्रियासम्म — तपाईंको परिवारलाई चाहिने सबै आवश्यक स्वास्थ्य सेवा एकै ठाउँमा।",
    s_opd_t: "ओपीडी तथा परामर्श",
    s_opd_np: "OPD & Consultation",
    s_opd_d: "जनरल ओपीडी, कन्सल्टेन्ट ओपीडी, स्त्री रोग ओपीडी, नाक-कान-घाँटी ओपीडी र हड्डी रोग ओपीडी — सम्पूर्ण परिवारका लागि विशेषज्ञ परामर्श।",
    s_pharmacy_t: "फार्मेसी",
    s_pharmacy_np: "Pharmacy",
    s_pharmacy_d: "आवश्यक र चिकित्सकले लेखिदिएका औषधिहरू उपलब्ध हुने आफ्नै फार्मेसी।",
    s_lab_t: "प्रयोगशाला (ल्याब जाँच)",
    s_lab_np: "Laboratory (Lab Tests)",
    s_lab_d: "रगत, पिसाब, दिसा, H. Pylori, एलर्जी जाँच, थाइरोइड, आर्थराइटिस सम्बन्धी जाँच, ANC, सेरोलोजी लगायत।",
    s_imaging_t: "इमेजिङ तथा डायग्नोस्टिक्स",
    s_imaging_np: "Imaging & Diagnostics",
    s_imaging_d: "छिटो र सही निदानका लागि डिजिटल एक्स रे, अल्ट्रासाउन्ड र ECG।",
    s_emergency_t: "आपतकालीन तथा गम्भीर स्याहार",
    s_emergency_np: "Emergency & Critical Care",
    s_emergency_d: "पेशेन्ट मोनिटर र अक्सिजनसहित आपतकालीन सेवा, साथै डेकेयर र नेबुलाइजर सेवा।",
    s_surgical_t: "शल्यक्रिया तथा साना प्रक्रिया",
    s_surgical_np: "Surgical & Minor Procedures",
    s_surgical_d: "सानो शल्यक्रिया (Minor OT), सामान्य शल्यक्रिया, सिउँदो (Suturing) र हड्डी भाँचिएमा प्लास्टर।",
    s_eyedental_t: "आँखा तथा दाँत स्याहार",
    s_eyedental_np: "Eye & Dental Care",
    s_eyedental_d: "सामान्य आँखा र दाँत जाँच, साथै आफ्नै चश्मा घर काउन्टर।",
    s_chronic_t: "दीर्घरोग तथा विशेष स्याहार",
    s_chronic_np: "Chronic & Specialized Care",
    s_chronic_d: "मधुमेह, रक्तचाप, थाइरोइड र मुटु रोगको उपचार, छाला उपचार, र बाँझोपन उपचार तथा सल्लाह।",
    s_essentials_t: "दैनिक उपभोग्य सामग्री",
    s_essentials_np: "Everyday Essentials",
    s_essentials_d: "केन्द्रमा छानिएका खाद्य तथा कस्मेटिक सामग्री पनि उपलब्ध।",

    facility_tag: "हाम्रो सुविधा",
    facility_title: "हाम्रो केन्द्रको एक झलक",
    facility_sub: "हाम्रो उपचार कक्ष, आपतकालीन वार्ड, ओपीडी र डायग्नोस्टिक सेक्सनका वास्तविक तस्बिरहरू।",
    f_procedure_t: "उपचार / प्रक्रिया कक्ष",
    f_emergency_t: "आपतकालीन तथा गम्भीर स्याहार बेड",
    f_consultation_t: "डाक्टर परामर्श कक्ष",
    f_xray_t: "डिजिटल एक्स रे / रेडियोलोजी कक्ष",
    f_optical_t: "आपतकालीन वार्ड र चश्मा घर काउन्टर",

    about_tag: "हामीलाई चिन्नुहोस्",
    about_title: "मायाले व्यवस्थापन, समुदायको विश्वास",
    about_role: "संस्थापक / इन्चार्ज, शान्ति स्वास्थ्य उपचार तथा डायग्नोस्टिक सेन्टर",
    about_p1: "शान्ति स्वास्थ्य उपचार तथा डायग्नोस्टिक सेन्टर रामधुनी र तेत्रुचोकका बासिन्दाहरूलाई घरनजिकै भरपर्दो र किफायती डायग्नोस्टिक सेवा पुर्‍याउने एउटै लक्ष्यका साथ सुरु भएको हो। हरेक जाँच र हरेक बिरामीलाई इमानदारी र स्याहारका साथ व्यवहार गरिन्छ।",
    about_p2: "\"स्वास्थ्य हाम्रो प्राथमिकता, सेवा हाम्रो प्रतिबद्धता।\" समयमै जाँचले सुखी र स्वस्थ जीवन दिन्छ भन्ने हामी विश्वास गर्छौं — र हाम्रो समुदायको हरेक परिवारका लागि यो सजिलो बनाउन हामी यहाँ छौं।",
    about_point1: "आधुनिक उपकरण",
    about_point2: "मायालु स्टाफ",
    about_point3: "छिटो रिपोर्ट",
    about_point4: "किफायती मूल्य",
    about_badge_t: "प्रमाणित सेन्टर",
    about_badge_s: "समुदायको विश्वास",

    feature_tag: "हामीलाई किन छान्ने",
    feature_title: "सरल, इमानदार, भरपर्दो स्वास्थ्य सेवा",
    f1_t: "सबै सेवा एकैठाउँ",
    f1_s: "एक्स रे, अल्ट्रासाउन्ड, ECG, ल्याब र प्लास्टर — सबै एउटै छानामुनि।",
    f2_t: "हप्ताको ७ दिन खुला",
    f2_s: "हामी हरेक दिन तपाईंको सेवामा छौं।",
    f3_t: "सजिलो बुकिङ",
    f3_s: "एक मिनेटभित्रै अनलाइन अपोइन्टमेन्ट बुक गर्नुहोस्।",
    f4_t: "स्थानीय र भरपर्दो",
    f4_s: "रामधुनी-तेत्रुचोक समुदायलाई मायाका साथ सेवा।",

    booking_tag: "अपोइन्टमेन्ट",
    booking_title: "आफ्नो अपोइन्टमेन्ट बुक गर्नुहोस्",
    booking_sub: "तलको फारम भर्नुहोस्, हाम्रो टिमले चाँडै फोन वा इमेलमार्फत पुष्टि गर्नेछ।",
    booking_side_title: "किन अनलाइन बुक गर्ने?",
    booking_side_p: "समय बचाउनुहोस् — आफ्नो पालो पहिले नै सुरक्षित गर्नुहोस् र पर्खन नपरोस्। हाम्रो स्टाफले मिति र समय पुष्टि गर्न तपाईंलाई सम्पर्क गर्नेछ।",
    booking_li1: "हाम्रो क्लिनिकमा तत्काल पुष्टि इमेल",
    booking_li2: "आफ्नो मन परेको मिति र सेवा छान्नुहोस्",
    booking_li3: "पुष्टिका लागि हाम्रो स्टाफले फोन गर्नेछ",
    booking_li4: "बुक गर्न कुनै भुक्तानी आवश्यक छैन",
    f_name: "पूरा नाम",
    f_name_ph: "जस्तै: राम बहादुर थापा",
    f_phone: "फोन नम्बर",
    f_phone_ph: "98XXXXXXXX",
    f_age: "उमेर (वैकल्पिक)",
    f_age_ph: "जस्तै: ३२",
    f_service: "आवश्यक सेवा",
    f_date: "मन पर्ने मिति",
    f_time: "मन पर्ने समय",
    f_msg: "सन्देश / लक्षणहरू (वैकल्पिक)",
    f_msg_ph: "आफ्नो समस्या छोटकरीमा लेख्नुहोस्...",
    f_submit: "बुकिङ पुष्टि गर्नुहोस्",
    f_note: "तपाईंको बुकिङ विवरण हाम्रो क्लिनिकको इमेलमा पठाइनेछ र हाम्रो स्टाफले अपोइन्टमेन्ट पुष्टि गर्न फोन गर्नेछ।",
    svc_select: "-- सेवा छान्नुहोस् --",
    toast_title: "बुकिङ प्राप्त भयो!",
    toast_msg: "धन्यवाद! हाम्रो स्टाफले तपाईंको अपोइन्टमेन्ट पुष्टि गर्न चाँडै फोन गर्नेछ।",

    contact_tag: "सम्पर्कमा रहनुहोस्",
    contact_title: "हामीलाई भेट्नुहोस् वा सम्पर्क गर्नुहोस्",
    contact_sub: "हामी रामधुनी-७, तेत्रुचोक, सुनसरीमा अवस्थित छौं — सजिलै पुग्न सकिने र हप्ताको ७ दिन खुला।",
    c_addr_t: "ठेगाना",
    c_addr_s: "रामधुनी-७, तेत्रुचोक, सुनसरी, नेपाल",
    c_phone_t: "फोन",
    c_phone_s: "जहिलेसुकै कल गर्नुहोस्",
    c_hours_t: "कार्य समय",
    c_hours_s: "हप्ताको ७ दिन खुला",
    c_email_t: "इमेल",
    c_email_s: "आफ्नो जिज्ञासा पठाउनुहोस्",

    foot_about: "रामधुनी-तेत्रुचोक समुदायलाई डिजिटल एक्स रे, अल्ट्रासाउन्ड, ECG, ल्याब र प्लास्टर सेवा प्रदान गर्ने विश्वसनीय स्थानीय डायग्नोस्टिक सेन्टर।",
    foot_links: "द्रुत लिङ्कहरू",
    foot_services: "सेवाहरू",
    foot_contact: "सम्पर्क गर्नुहोस्",
    foot_tagline: "समयमै जाँच, सुखी जीवन!",
    foot_rights: "सर्वाधिकार सुरक्षित।",
    foot_staff: "स्टाफ लगइन",

    admin_login_title: "स्टाफ लगइन",
    admin_login_sub: "अपोइन्टमेन्ट बुकिङ व्यवस्थापन गर्न लगइन गर्नुहोस्",
    admin_id: "एडमिन आईडी",
    admin_pw: "पासवर्ड",
    admin_login_btn: "लगइन",
    admin_err: "गलत एडमिन आईडी वा पासवर्ड। फेरि प्रयास गर्नुहोस्।",
    admin_hint: "अधिकृत क्लिनिक स्टाफका लागि मात्र। लगइन विवरण बिर्सनुभएमा सेन्टर प्रशासकलाई सम्पर्क गर्नुहोस्।",
    admin_back: "वेबसाइटमा फर्कनुहोस्",
    admin_dash: "अपोइन्टमेन्ट ड्यासबोर्ड",
    admin_logout: "लगआउट",
    st_total: "कुल बुकिङ",
    st_today: "आजको बुकिङ",
    st_week: "यो हप्ता",
    st_services: "उपलब्ध सेवाहरू",
    search_ph: "नाम वा फोनद्वारा खोज्नुहोस्...",
    export_csv: "CSV निर्यात गर्नुहोस्",
    clear_all: "सबै मेटाउनुहोस्",
    th_name: "बिरामीको नाम",
    th_phone: "फोन",
    th_service: "सेवा",
    th_date: "मन पर्ने मिति",
    th_time: "समय",
    th_msg: "सन्देश",
    th_submitted: "बुक मिति",
    th_action: "कार्य",
    empty_title: "अहिलेसम्म कुनै बुकिङ छैन",
    empty_sub: "वेबसाइटबाट गरिएका नयाँ बुकिङहरू यहाँ देखिनेछन्।",
    admin_note: "हरेक बुकिङ स्वतः क्लिनिकको Gmail मा पनि इमेल गरिन्छ। यो तालिकाले यही डिभाइस/ब्राउजरमा सुरक्षित बुकिङहरू देखाउँछ।",
    confirm_clear: "के तपाईं सबै बुकिङ मेटाउन निश्चित हुनुहुन्छ? यो फिर्ता गर्न सकिँदैन।",
    confirm_del: "यो बुकिङ मेटाउने हो?",
    dash_reg_summary: "अपोइन्टमेन्ट दर्ता सारांश",
    dash_by_service: "सेवा अनुसार बुकिङ",
    dash_live: "लाइभ",
  }
};

const SERVICE_NAMES = {
  opd: { en: "OPD / Consultation", np: "ओपीडी / परामर्श" },
  pharmacy: { en: "Pharmacy", np: "फार्मेसी" },
  lab: { en: "Laboratory / Lab Test", np: "प्रयोगशाला / ल्याब जाँच" },
  imaging: { en: "Imaging (X-Ray/Ultrasound/ECG)", np: "इमेजिङ (एक्स रे/अल्ट्रासाउन्ड/ECG)" },
  emergency: { en: "Emergency / Critical Care", np: "आपतकालीन / गम्भीर स्याहार" },
  surgical: { en: "Surgical / Minor OT", np: "शल्यक्रिया / सानो OT" },
  eyedental: { en: "Eye & Dental Care", np: "आँखा तथा दाँत स्याहार" },
  chronic: { en: "Chronic & Specialized Care", np: "दीर्घरोग तथा विशेष स्याहार" },
  other: { en: "Other / General Checkup", np: "अन्य / सामान्य जाँच" }
};

function getLang(){ return localStorage.getItem('shc_lang') || 'en'; }
function setLang(l){ localStorage.setItem('shc_lang', l); applyLanguage(l); }

function applyLanguage(lang){
  document.body.setAttribute('data-lang', lang);
  document.documentElement.setAttribute('lang', lang === 'np' ? 'ne' : 'en');
  const dict = I18N[lang] || I18N.en;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(dict[key] !== undefined){
      el.textContent = dict[key];
    }
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
    const key = el.getAttribute('data-i18n-ph');
    if(dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });
  document.querySelectorAll('.lang-toggle button').forEach(b=>{
    b.classList.toggle('active', b.getAttribute('data-lang-btn') === lang);
  });
}

function getTheme(){ return localStorage.getItem('shc_theme'); }
function setTheme(t){
  if(t){ localStorage.setItem('shc_theme', t); document.documentElement.setAttribute('data-theme', t); }
  else{ localStorage.removeItem('shc_theme'); document.documentElement.removeAttribute('data-theme'); }
  updateThemeIcon();
}
function toggleTheme(){
  const current = document.documentElement.getAttribute('data-theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  setTheme(current === 'dark' ? 'light' : 'dark');
}
function updateThemeIcon(){
  const isDark = (document.documentElement.getAttribute('data-theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')) === 'dark';
  document.querySelectorAll('.theme-toggle .sun').forEach(el=> el.style.display = isDark ? 'none' : 'block');
  document.querySelectorAll('.theme-toggle .moon').forEach(el=> el.style.display = isDark ? 'block' : 'none');
}

(function initThemeEarly(){
  const saved = getTheme();
  if(saved) document.documentElement.setAttribute('data-theme', saved);
})();

document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(getLang());
  updateThemeIcon();
  document.querySelectorAll('.theme-toggle').forEach(btn=>{
    btn.addEventListener('click', toggleTheme);
  });
  document.querySelectorAll('.lang-toggle button').forEach(btn=>{
    btn.addEventListener('click', ()=> setLang(btn.getAttribute('data-lang-btn')));
  });

  // Ripple effect on all .btn elements
  document.querySelectorAll('.btn').forEach(btn=>{
    btn.addEventListener('click', function(e){
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.left = (e.clientX - rect.left) + 'px';
      ripple.style.top = (e.clientY - rect.top) + 'px';
      this.appendChild(ripple);
      setTimeout(()=> ripple.remove(), 650);
    });
  });
});
