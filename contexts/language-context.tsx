"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "id"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.skills": "Skills",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title": "Professional Data Entry Specialist",
    "hero.subtitle": "Transforming raw data into valuable insights with precision and efficiency",
    "hero.viewWork": "View My Work",
    "hero.getInTouch": "Get In Touch",
    "hero.yearsExp": "Years Experience",
    "hero.projectsCompleted": "Projects Completed",
    "hero.accuracyRate": "Accuracy Rate",

    // About Section
    "about.title": "About Me",
    "about.subtitle":
      "Dedicated data entry professional with over 5 years of experience in transforming complex data into organized, actionable information.",
    "about.name": "Rizky Taufiq Aditya Ridwan",
    "about.role": "Data Entry Specialist",
    "about.description1":
      "Driving operational efficiency and digital growth through a unique blend of data analytics and web development. As a certified MOS, I excel at optimizing business processes using data-driven strategies. Technically, I architect and build functional websites that boost customer engagement and strengthen market position.",
    "about.description2":
      "With a keen eye for detail and proficiency in advanced data processing tools, I help businesses streamline their operations and make data-driven decisions with confidence.",
    "about.achievement1.title": "Certified Professional",
    "about.achievement1.desc": "Microsoft Office Specialist",
    "about.achievement2.title": "Fast Turnaround",
    "about.achievement2.desc": "Average project completion within 24-48 hours",
    "about.achievement3.title": "High Accuracy",
    "about.achievement3.desc": "98.8% accuracy rate with quality assurance protocols",
    "about.achievement4.title": "Client Satisfaction",
    "about.achievement4.desc": "100% client satisfaction with repeat business rate of 85%",

    // Services Section
    "services.title": "My Services",
    "services.subtitle": "Comprehensive data entry and management solutions tailored to your business needs",
    "services.service1.title": "Document Digitization",
    "services.service1.desc":
      "Convert physical documents, forms, and records into digital formats with 99.9% accuracy.",
    "services.service1.feature1": "PDF to Excel/Word",
    "services.service1.feature2": "Handwritten text conversion",
    "services.service1.feature3": "Form processing",
    "services.service1.feature4": "Document indexing",
    "services.service2.title": "Database Management",
    "services.service2.desc": "Organize, clean, and maintain databases for optimal performance and accessibility.",
    "services.service2.feature1": "Data cleaning",
    "services.service2.feature2": "Database design",
    "services.service2.feature3": "Record updates",
    "services.service2.feature4": "Data migration",
    "services.service3.title": "Spreadsheet Services",
    "services.service3.desc": "Create, format, and manage complex spreadsheets with advanced formulas and analysis.",
    "services.service3.feature1": "Excel automation",
    "services.service3.feature2": "Formula creation",
    "services.service3.feature3": "Data visualization",
    "services.service3.feature4": "Report generation",
    "services.service4.title": "Data Analysis",
    "services.service4.desc":
      "Transform raw data into meaningful insights through comprehensive analysis and reporting.",
    "services.service4.feature1": "Statistical analysis",
    "services.service4.feature2": "Trend identification",
    "services.service4.feature3": "Custom reports",
    "services.service4.feature4": "Data visualization",
    "services.service5.title": "Data Research",
    "services.service5.desc": "Comprehensive online research and data collection from various sources.",
    "services.service5.feature1": "Market research",
    "services.service5.feature2": "Lead generation",
    "services.service5.feature3": "Contact information",
    "services.service5.feature4": "Product research",
    "services.service6.title": "Quality Assurance",
    "services.service6.desc": "Rigorous quality control processes to ensure data accuracy and integrity.",
    "services.service6.feature1": "Double verification",
    "services.service6.feature2": "Error detection",
    "services.service6.feature3": "Data validation",
    "services.service6.feature4": "Quality reports",
    "services.guarantee1.title": "Fast Delivery",
    "services.guarantee1.desc": "24-48 hour turnaround",
    "services.guarantee2.title": "Secure Process",
    "services.guarantee2.desc": "Confidential & encrypted",
    "services.guarantee3.title": "Quality Guaranteed",
    "services.guarantee3.desc": "99.9% accuracy rate",

    // Skills Section
    "skills.title": "Skills & Expertise",
    "skills.subtitle": "Proficient in industry-standard tools and methodologies for efficient data management",
    "skills.technicalTitle": "Technical Proficiency",
    "skills.categoriesTitle": "Skill Categories",
    "skills.certificationsTitle": "Certifications & Training",
    "skills.skill1": "Microsoft Excel",
    "skills.skill2": "Google Sheets",
    "skills.skill3": "Data Analysis",
    "skills.skill4": "Database Management",
    "skills.skill5": "Quality Assurance",
    "skills.skill6": "Document Processing",
    "skills.skill7": "Research Skills",
    "skills.skill8": "Time Management",
    "skills.skill9": "Web Development", // Added this line
    "skills.category1": "Software",
    "skills.category2": "Technical",
    "skills.category3": "Process",
    "skills.category4": "Analytical",
    "skills.category5": "Soft Skills",
    "skills.cert1": "Microsoft Office Specialist",
    "skills.cert2": "Google Workspace Certified",
    "skills.cert3": "Data Analysis Certificate",
    "skills.cert4": "Quality Management ISO 9001",

    // Portfolio Section
    "portfolio.title": "Portfolio",
    "portfolio.subtitle": "Showcasing successful data entry and management projects across various industries",
    "portfolio.filter.all": "All",
    "portfolio.filter.database": "Database",
    "portfolio.filter.document": "Document Processing",
    "portfolio.filter.analysis": "Analysis",
    "portfolio.filter.research": "Research",
    "portfolio.filter.business": "Business",
    "portfolio.project1.title": "E-commerce Product Catalog",
    "portfolio.project1.desc":
      "Digitized and organized 1,000+ product entries, including specifications, pricing, and inventory data.",
    "portfolio.project1.duration": "3 weeks",
    "portfolio.project1.client": "Personal Project",
    "portfolio.project1.results": "99.8% accuracy, 40% faster product searches",
    "portfolio.project2.title": "Digital Order Management System",
    "portfolio.project2.desc":
      "Initiated and built a web-based system to digitize the store's order recording process, serving as a data center to improve tracking efficiency and ensure data accuracy for every transaction.",
    "portfolio.project2.duration": "1 week",
    "portfolio.project2.client": "Villa Parfum",
    "portfolio.project2.results": "70% increase in tracking efficiency, 100% data accuracy",
   "portfolio.project3.title": "Founder & Manager of Kyexchanger",
    "portfolio.project3.desc":
      "Founded and scaled Kyexchanger, a digital currency exchange platform, from the ground up. Architected all business facets, from market strategy and financial oversight to customer acquisition, driving significant growth in a competitive market.",
    "portfolio.project3.duration": "2019 - 2023",
    "portfolio.project3.client": "Kyexchanger (Founder)",
    "portfolio.project3.results": "Established profitable operations & significant user growth",
    "portfolio.project4.title": "Goods Database Migration",
    "portfolio.project4.desc":
      "Executing the migration of 1,000+ products to the new Warehouse System seamlessly without disrupting operations.",
    "portfolio.project4.duration": "2 weeks",
    "portfolio.project4.client": "Villa Parfum",
    "portfolio.project4.results": "Zero data loss, 50% improved query performance",
    "portfolio.project5.title": "Market Research Compilation",
    "portfolio.project5.desc":
      "Conducted comprehensive market research across 15 industries, compiling data from 200+ sources into actionable insights.",
    "portfolio.project5.duration": "8 weeks",
    "portfolio.project5.client": "Strategic Insights LLC",
    "portfolio.project5.results": "95% client satisfaction, 3 new market opportunities",
    "portfolio.project6.title": "Inventory Management System",
    "portfolio.project6.desc":
      "Digitized warehouse inventory records and implemented automated tracking system for 15,000+ SKUs.",
    "portfolio.project6.duration": "4 weeks",
    "portfolio.project6.client": "Villa Parfum",
    "portfolio.project6.results": "30% reduction in stock discrepancies, real-time tracking",
    "portfolio.viewDetails": "View Details",
    "portfolio.stats.projects": "Projects Completed",
    "portfolio.stats.clients": "Happy Clients",
    "portfolio.stats.accuracy": "Accuracy Rate",
    "portfolio.stats.turnaround": "Average Turnaround",

    // Contact Section
    "contact.title": "Get In Touch",
    "contact.subtitle": "Ready to transform your data? Let's discuss your project requirements and how I can help.",
    "contact.info.title": "Contact Information",
    "contact.info.email.title": "Email",
    "contact.info.email.value": "rizkyopentowork@gmail.com",
    "contact.info.email.desc": "Send me an email anytime",
    "contact.info.phone.title": "Phone",
    "contact.info.phone.value": "+62 898-6228-080",
    "contact.info.phone.desc": "Mon-Fri from 8am to 6pm",
    "contact.info.location.title": "Location",
    "contact.info.location.value": "Bandung, Indonesia",
    "contact.info.location.desc": "Available for remote work",
    "contact.info.response.title": "Response Time",
    "contact.info.response.value": "Within 24 hours",
    "contact.info.response.desc": "Quick turnaround guaranteed",
    "contact.whyChoose.title": "Why Choose Me?",
    "contact.whyChoose.point1": "3+ years of professional experience",
    "contact.whyChoose.point2": "98.8% accuracy rate guaranteed",
    "contact.whyChoose.point3": "Fast 24-48 hour turnaround",
    "contact.whyChoose.point4": "Confidential and secure process",
    "contact.whyChoose.point5": "Competitive pricing",
    "contact.form.title": "Send a Message",
    "contact.form.name": "Name *",
    "contact.form.namePlaceholder": "Your full name",
    "contact.form.email": "Email *",
    "contact.form.emailPlaceholder": "your.email@example.com",
    "contact.form.subject": "Subject *",
    "contact.form.subjectPlaceholder": "Project subject or type",
    "contact.form.message": "Message *",
    "contact.form.messagePlaceholder": "Describe your project requirements, timeline, and any specific needs...",
    "contact.form.send": "Send Message",

    // Footer
    "footer.brand": "Rizky Taufiq Aditya Ridwan",
    "footer.description":
      "Professional data entry specialist transforming raw data into valuable insights with precision and efficiency.",
    "footer.quickLinks": "Quick Links",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.service1": "Document Digitization",
    "footer.service2": "Database Management",
    "footer.service3": "Data Analysis",
    "footer.service4": "Quality Assurance",
    "footer.email": "rizkyopentowork@gmail.com",
    "footer.phone": "+62 898-6228-080",
    "footer.location": "Bandung, Indonesia",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
  },
  id: {
    // Navigation
    "nav.home": "Beranda",
    "nav.about": "Tentang",
    "nav.services": "Layanan",
    "nav.skills": "Keahlian",
    "nav.portfolio": "Portofolio",
    "nav.contact": "Kontak",

    // Hero Section
    "hero.title": "Spesialis Data Entry Profesional",
    "hero.subtitle": "Mengubah data mentah menjadi wawasan berharga dengan presisi dan efisiensi",
    "hero.viewWork": "Lihat Karya Saya",
    "hero.getInTouch": "Hubungi Saya",
    "hero.yearsExp": "Tahun Pengalaman",
    "hero.projectsCompleted": "Proyek Selesai",
    "hero.accuracyRate": "Tingkat Akurasi",

    // About Section
    "about.title": "Tentang Saya",
    "about.subtitle":
      "Profesional data entry berdedikasi dengan pengalaman lebih dari 5 tahun dalam mengubah data kompleks menjadi informasi yang terorganisir dan dapat ditindaklanjuti.",
    "about.name": "Rizky Taufiq Aditya Ridwan",
    "about.role": "Spesialis Data Entry",
    "about.description1":
      "Mendorong efisiensi operasional dan pertumbuhan digital melalui keahlian ganda dalam analisis data dan pengembangan web. Dengan sertifikasi Microsoft Office Specialist, saya ahli dalam mengoptimalkan proses bisnis menggunakan data. Di sisi teknis, saya merancang dan membangun situs web yang fungsional untuk meningkatkan engagement pelanggan dan memperkuat posisi pasar.",
    "about.description2":
      "Dengan mata yang tajam untuk detail dan kemahiran dalam alat pemrosesan data canggih, saya membantu bisnis merampingkan operasi mereka dan membuat keputusan berdasarkan data dengan percaya diri.",
    "about.achievement1.title": "Profesional Bersertifikat",
    "about.achievement1.desc": "Microsoft Office Specialist",
    "about.achievement2.title": "Penyelesaian Cepat",
    "about.achievement2.desc": "Rata-rata penyelesaian proyek dalam 24-48 jam",
    "about.achievement3.title": "Akurasi Tinggi",
    "about.achievement3.desc": "Tingkat akurasi 98.8% dengan protokol jaminan kualitas",
    "about.achievement4.title": "Kepuasan Klien",
    "about.achievement4.desc": "100% kepuasan klien dengan tingkat bisnis berulang 85%",

    // Services Section
    "services.title": "Layanan Saya",
    "services.subtitle": "Solusi data entry dan manajemen komprehensif yang disesuaikan dengan kebutuhan bisnis Anda",
    "services.service1.title": "Digitalisasi Dokumen",
    "services.service1.desc":
      "Mengkonversi dokumen fisik, formulir, dan catatan ke format digital dengan akurasi 99.9%.",
    "services.service1.feature1": "PDF ke Excel/Word",
    "services.service1.feature2": "Konversi teks tulisan tangan",
    "services.service1.feature3": "Pemrosesan formulir",
    "services.service1.feature4": "Pengindeksan dokumen",
    "services.service2.title": "Manajemen Database",
    "services.service2.desc":
      "Mengorganisir, membersihkan, dan memelihara database untuk kinerja dan aksesibilitas optimal.",
    "services.service2.feature1": "Pembersihan data",
    "services.service2.feature2": "Desain database",
    "services.service2.feature3": "Pembaruan catatan",
    "services.service2.feature4": "Migrasi data",
    "services.service3.title": "Layanan Spreadsheet",
    "services.service3.desc":
      "Membuat, memformat, dan mengelola spreadsheet kompleks dengan formula dan analisis canggih.",
    "services.service3.feature1": "Otomasi Excel",
    "services.service3.feature2": "Pembuatan formula",
    "services.service3.feature3": "Visualisasi data",
    "services.service3.feature4": "Pembuatan laporan",
    "services.service4.title": "Analisis Data",
    "services.service4.desc":
      "Mengubah data mentah menjadi wawasan bermakna melalui analisis dan pelaporan komprehensif.",
    "services.service4.feature1": "Analisis statistik",
    "services.service4.feature2": "Identifikasi tren",
    "services.service4.feature3": "Laporan khusus",
    "services.service4.feature4": "Visualisasi data",
    "services.service5.title": "Riset Data",
    "services.service5.desc": "Riset online komprehensif dan pengumpulan data dari berbagai sumber.",
    "services.service5.feature1": "Riset pasar",
    "services.service5.feature2": "Generasi prospek",
    "services.service5.feature3": "Informasi kontak",
    "services.service5.feature4": "Riset produk",
    "services.service6.title": "Jaminan Kualitas",
    "services.service6.desc": "Proses kontrol kualitas yang ketat untuk memastikan akurasi dan integritas data.",
    "services.service6.feature1": "Verifikasi ganda",
    "services.service6.feature2": "Deteksi kesalahan",
    "services.service6.feature3": "Validasi data",
    "services.service6.feature4": "Laporan kualitas",
    "services.guarantee1.title": "Pengiriman Cepat",
    "services.guarantee1.desc": "Penyelesaian 24-48 jam",
    "services.guarantee2.title": "Proses Aman",
    "services.guarantee2.desc": "Rahasia & terenkripsi",
    "services.guarantee3.title": "Kualitas Terjamin",
    "services.guarantee3.desc": "Tingkat akurasi 99.9%",

    // Skills Section
    "skills.title": "Keahlian & Expertise",
    "skills.subtitle": "Mahir dalam alat dan metodologi standar industri untuk manajemen data yang efisien",
    "skills.technicalTitle": "Kemahiran Teknis",
    "skills.categoriesTitle": "Kategori Keahlian",
    "skills.certificationsTitle": "Sertifikasi & Pelatihan",
    "skills.skill1": "Microsoft Excel",
    "skills.skill2": "Google Sheets",
    "skills.skill3": "Analisis Data",
    "skills.skill4": "Manajemen Database",
    "skills.skill5": "Jaminan Kualitas",
    "skills.skill6": "Pemrosesan Dokumen",
    "skills.skill7": "Keahlian Riset",
    "skills.skill8": "Manajemen Waktu",
    "skills.skill9": "Pengembangan Web", // Added this line
    "skills.category1": "Software",
    "skills.category2": "Teknis",
    "skills.category3": "Proses",
    "skills.category4": "Analitis",
    "skills.category5": "Soft Skills",
    "skills.cert1": "Microsoft Office Specialist",
    "skills.cert2": "Google Workspace Certified",
    "skills.cert3": "Sertifikat Analisis Data",
    "skills.cert4": "Manajemen Kualitas ISO 9001",


    // Portfolio Section
    "portfolio.title": "Portofolio",
    "portfolio.subtitle": "Menampilkan proyek data entry dan manajemen yang sukses di berbagai industri",
    "portfolio.filter.all": "Semua",
    "portfolio.filter.database": "Database",
    "portfolio.filter.document": "Pemrosesan Dokumen",
    "portfolio.filter.analysis": "Analisis",
    "portfolio.filter.research": "Riset",
    "portfolio.filter.business": "Bisnis",
    "portfolio.project1.title": "Katalog Produk E-commerce",
    "portfolio.project1.desc":
      "Mendigitalkan dan mengorganisir 1.000+ entri produk, termasuk spesifikasi, harga, dan data inventori.",
    "portfolio.project1.duration": "3 minggu",
    "portfolio.project1.client": "Proyek Pribadi",
    "portfolio.project1.results": "Akurasi 99.8%, pencarian produk 40% lebih cepat",
    "portfolio.project2.title": "Sistem Digital untuk Manajemen Pesanan",
    "portfolio.project2.desc":
      "Menginisiasi dan membangun sistem berbasis web untuk mendigitalkan proses pencatatan pesanan toko, berfungsi sebagai pusat data untuk meningkatkan efisiensi pelacakan dan memastikan akurasi data setiap transaksi.",
    "portfolio.project2.duration": "1 minggu",
    "portfolio.project2.client": "Villa Parfum",
    "portfolio.project2.results": "Efisiensi pelacakan +70%, 100% akurasi data transaksi",
   "portfolio.project3.title": "Pendiri & Pengelola Kyexchanger",
    "portfolio.project3.desc":
      "Mendirikan dan mengembangkan Kyexchanger, platform jual beli mata uang digital, dari konsep awal hingga beroperasi penuh. Mengarsiteki seluruh aspek bisnis, mulai dari strategi pasar, pengawasan keuangan, hingga akuisisi pelanggan untuk mendorong pertumbuhan signifikan.",
    "portfolio.project3.duration": "2019 - 2023",
    "portfolio.project3.client": "Kyexchanger (Pendiri)",
    "portfolio.project3.results": "Membangun operasi yang profitabel & pertumbuhan pengguna yang signifikan",
    "portfolio.project4.title": "Migrasi Database Barang",
    "portfolio.project4.desc":
      "Mengeksekusi migrasi database 1.000+ produk ke Sistem Gudang yang baru secara mulus tanpa mengganggu operasional.",
    "portfolio.project4.duration": "2 minggu",
    "portfolio.project4.client": "Villa Parfum",
    "portfolio.project4.results": "0 kehilangan data, peningkatan performa query 50%",
    "portfolio.project5.title": "Kompilasi Riset Pasar",
    "portfolio.project5.desc":
      "Melakukan riset pasar komprehensif di 15 industri, mengkompilasi data dari 200+ sumber menjadi wawasan yang dapat ditindaklanjuti.",
    "portfolio.project5.duration": "8 minggu",
    "portfolio.project5.client": "Strategic Insights LLC",
    "portfolio.project5.results": "95% kepuasan klien, 3 peluang pasar baru",
    "portfolio.project6.title": "Sistem Manajemen Inventori",
    "portfolio.project6.desc":
      "Mendigitalkan catatan inventori gudang dan mengimplementasikan sistem pelacakan otomatis untuk 15.000+ SKU.",
    "portfolio.project6.duration": "4 minggu",
    "portfolio.project6.client": "Villa Parfum",
    "portfolio.project6.results": "Pengurangan ketidaksesuaian stok 30%, pelacakan real-time",
    "portfolio.viewDetails": "Lihat Detail",
    "portfolio.stats.projects": "Proyek Selesai",
    "portfolio.stats.clients": "Klien Puas",
    "portfolio.stats.accuracy": "Tingkat Akurasi",
    "portfolio.stats.turnaround": "Rata-rata Penyelesaian",

    // Contact Section
    "contact.title": "Hubungi Saya",
    "contact.subtitle":
      "Siap mengubah data Anda? Mari diskusikan kebutuhan proyek Anda dan bagaimana saya dapat membantu.",
    "contact.info.title": "Informasi Kontak",
    "contact.info.email.title": "Email",
    "contact.info.email.value": "rizkyopentowork@gmail.com",
    "contact.info.email.desc": "Kirim email kapan saja",
    "contact.info.phone.title": "Telepon",
    "contact.info.phone.value": "+62 898-6228-080",
    "contact.info.phone.desc": "Sen-Jum dari 8 pagi sampai 6 sore",
    "contact.info.location.title": "Lokasi",
    "contact.info.location.value": "Bandung, Indonesia",
    "contact.info.location.desc": "Tersedia untuk kerja remote",
    "contact.info.response.title": "Waktu Respon",
    "contact.info.response.value": "Dalam 24 jam",
    "contact.info.response.desc": "Penyelesaian cepat terjamin",
    "contact.whyChoose.title": "Mengapa Memilih Saya?",
    "contact.whyChoose.point1": "3+ tahun pengalaman profesional",
    "contact.whyChoose.point2": "Tingkat akurasi 98.8% terjamin",
    "contact.whyChoose.point3": "Penyelesaian cepat 24-48 jam",
    "contact.whyChoose.point4": "Proses rahasia dan aman",
    "contact.whyChoose.point5": "Harga kompetitif",
    "contact.form.title": "Kirim Pesan",
    "contact.form.name": "Nama *",
    "contact.form.namePlaceholder": "Nama lengkap Anda",
    "contact.form.email": "Email *",
    "contact.form.emailPlaceholder": "email.anda@contoh.com",
    "contact.form.subject": "Subjek *",
    "contact.form.subjectPlaceholder": "Subjek atau jenis proyek",
    "contact.form.message": "Pesan *",
    "contact.form.messagePlaceholder": "Jelaskan kebutuhan proyek, timeline, dan kebutuhan khusus lainnya...",
    "contact.form.send": "Kirim Pesan",

    // Footer
    "footer.brand": "Rizky Taufiq Aditya Ridwan",
    "footer.description":
      "Spesialis data entry profesional yang mengubah data mentah menjadi wawasan berharga dengan presisi dan efisiensi.",
    "footer.quickLinks": "Tautan Cepat",
    "footer.services": "Layanan",
    "footer.contact": "Kontak",
    "footer.service1": "Digitalisasi Dokumen",
    "footer.service2": "Manajemen Database",
    "footer.service3": "Analisis Data",
    "footer.service4": "Jaminan Kualitas",
    "footer.email": "rizkyopentowork@gmail.com",
    "footer.phone": "+62 898-6228-080",
    "footer.location": "Bandung, Indonesia",
    "footer.rights": "Semua hak dilindungi.",
    "footer.privacy": "Kebijakan Privasi",
    "footer.terms": "Syarat Layanan",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "id")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
