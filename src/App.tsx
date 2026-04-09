import React, { useState, useEffect } from 'react';
import { Scale, Menu, X, ChevronRight, Phone, Mail, MapPin, Clock, Briefcase, Building2, Gavel, Send, Linkedin, Twitter, Facebook, Award } from 'lucide-react';
import Maliki from './Maliki.jpeg';
import Ismail from './Ismail.jpeg';
import Nura from './Nura.jpeg';
import Idrees from './Idrees.jpeg';
import Hauwa from './Hauwa.jpeg';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    document.body.style.overflow = selectedMember !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedMember]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message. We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const navigation = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Team', href: 'team' },
    { name: 'Practice Areas', href: 'practice' },
    { name: 'Contact', href: 'contact' },
  ];

  const practiceAreas = [
    {
      icon: Gavel,
      title: 'Litigation & Advocacy',
      description: 'Robust representation in civil and criminal proceedings, including successful debt recovery and general advocacy.'
    },
    {
      icon: Briefcase,
      title: 'Corporate Services, Pre & Post Incorporation Matters',
      description: 'Business incorporation, registration, annual returns, and comprehensive corporate documentation.'
    },
    {
      icon: Building2,
      title: 'Company Secretaryship, Advisory & Compliance',
      description: 'Company secretarial services, professional guidance on tax matters, insurance law, government regulations, and labor relations.'
    },
    {
      icon: Scale,
      title: 'Maritime & Shipping',
      description: 'Expert legal services in maritime law, shipping transactions, and related regulatory compliance.'
    }
  ];

  const teamMembers = [
    {
      name: 'Maliki Kuliya Umar, mni',
      title: 'Managing Partner',
      called: 'Called to Bar in 1984',
      highlights: [
        'Former Attorney General/Commissioner for Justice, Kano State',
        'Notary Public',
        'Member Kano State Judicial Service Commission for 10 years'
      ],
      image: Maliki,
      bio: 'He was called to the Nigerian Bar in 1984. He was Attorney-General and Commissioner for Justice, Kano State from 2011 to 2015. He worked in the Legal Services Department of First Bank of Nigeria, Plc for about 23 years. He was appointed Secretary of the Business Support Group (BSG) under Vision 2020 by former President Umaru Musa \'Yar\'adua. He served as member of Kano State Judicial Service Commission for 10 years (1999–2009). He is a Certified Notary Public with deep expertise in banking laws and debt recovery.'
    },
    {
      name: 'Sani Ismail',
      title: 'Partner',
      called: 'Called to Bar in 1990',
      highlights: [
        'Former Chief Magistrate',
        'Former Secretary of Judicial Service Commission'
      ],
      image: Ismail,
      bio: 'He was called to the Bar in 1990 and heads the litigation section of the firm. He served in the Kano State Judiciary at various levels including Chief Magistrate and Secretary of Judicial Service Commission. He attended courses in Nigeria and abroad on human rights litigation, Alternative Dispute Resolution, Employment Law, and Judicial Administration.'
    },
    {
      name: "Muhammad B. Dan'azumi",
      title: 'Associate Partner',
      called: 'Called to Bar in 2003',
      highlights: [
        'Former Prosecutor, Kano State Ministry of Justice',
        'Former Judge of the High Court, Republic of The Gambia'
      ],
      image: null,
      initials: 'MD',
      bio: 'A graduate of University of Sokoto, called to the Bar in 2003. He worked as State Counsel at the Ministry of Justice, Kano, handling Public Prosecution and Civil Litigation. He served as a Judge of the High Court in the Republic of The Gambia (2015–2016). He currently heads the Criminal Litigations Department.'
    },
    {
      name: 'Idrees Kuliya',
      title: 'Junior Partner',
      called: 'Called to Bar in 2015',
      highlights: [
        'LL.M in Maritime Law (UK)',
        'MBA (Finance & Investment)',
        'Member Institute of Chartered Secretaries & Administrators of Nigeria (ICSAN)',
        'Member Chartered Institute of Taxation of Nigeria'
      ],
      image: Idrees,
      bio: 'A graduate of Bayero University Kano, called to the Bar in 2015. He holds an LL.M in Maritime Law from the University of Hertfordshire, UK, and an MBA from Ahmadu Bello University Zaria. He is a member of BRIPAN, CITN, AERMP, African Bar Association, and International Bar Association.'
    },
    {
      name: 'Umar Said',
      title: 'Senior Associate',
      called: 'Called to Bar in 2012',
      highlights: [
        'Seasoned Litigator',
        'Master of Laws (LL.M)'
      ],
      image: null,
      initials: 'US',
      bio: 'A graduate of Bayero University Kano, called to the Bar in 2012. He holds an LL.M (2018) from Ahmadu Bello University. He has been engaged in private legal practice and has acquired tremendous experience in litigation, attending several trainings to improve his knowledge and skills.'
    },
    {
      name: 'Nura Abubakar',
      title: 'Senior Associate',
      called: 'Called to Bar in 2015',
      highlights: [
        'Seasoned Litigator',
        'Vast experience across multiple Jurisdictions'
      ],
      image: Nura,
      bio: 'A graduate of Bayero University, Kano, called to the Bar in 2015. He has been in active practice across several jurisdictions particularly Kano, Abuja, Adamawa, Taraba and Katsina States.'
    },
    {
      name: 'Hauwa Muhammad',
      title: 'Junior Counsel',
      called: 'Called to Bar in 2025',
      highlights: [
        'Graduate of Common and Islamic Law, Bayero University Kano',
        'Committed to continuous learning across multiple areas of law'
      ],
      image: Hauwa,
      bio: 'She is a graduate of Bayero University, Kano where she studied Common and Islamic Law, and was called to the Bar in 2025. She is at the early stage of her legal career and is committed to building a strong foundation in legal practice. Hauwa Ahmad Muhd is dedicated to professional growth and has demonstrated a keen interest in developing her knowledge and skills across various areas of law through continuous learning and practical exposure.'
    }
  ];




  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-900 to-blue-700 p-2 rounded-lg">
                <Scale className="h-8 w-8 text-amber-400" />
              </div>
              <div>
                <h1 className="text-xl font-serif font-bold text-blue-900">M.K UMAR & CO</h1>
                <p className="text-xs text-gray-600">Barristers, Advocates, Notaries Public</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-blue-900 font-medium transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-900 rounded-lg transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20251023/pngtree-justice-scales-and-gavel-resting-on-open-law-book-ready-for-image_19965492.webp"
            alt="Law office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
            Excellence in Legal Practice Since 1993
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            M.K. UMAR & CO. is a full-service law firm dedicated to delivering strategic, high-quality legal solutions. We are committed to excellence, professionalism, and providing clients with trusted guidance and effective representation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-2"
            >
              Book a Consultation
              <ChevronRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="h-8 w-8 text-white rotate-90" />
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mb-4">About Us</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Excellence in Legal Practice Since 1993
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-6">
              <img
                src="https://images.pexels.com/photos/6077326/pexels-photo-6077326.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Legal team"
                className="rounded-lg shadow-2xl mb-6"
              />
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-4">Key Expertise Areas</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Gavel className="h-5 w-5 text-amber-500 mt-1" />
                    <span className="text-gray-700">Litigation & Advocacy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Briefcase className="h-5 w-5 text-amber-500 mt-1" />
                    <span className="text-gray-700">Corporate Services, Pre & Post Incorporation Matters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Building2 className="h-5 w-5 text-amber-500 mt-1" />
                    <span className="text-gray-700">Company Secretaryship, Advisory & Compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Scale className="h-5 w-5 text-amber-500 mt-1" />
                    <span className="text-gray-700">Maritime & Shipping</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="prose prose-lg">
                <h3 className="text-3xl font-serif font-bold text-gray-900 mb-6">Our Legacy</h3>
                <p className="text-gray-700 mb-4">
                  M.K. UMAR & CO. was established in 1993 as a firm of solicitors and advocates. Over the years, we have built a strong reputation for delivering reliable and effective legal services to clients across Nigeria.
                </p>
                <p className="text-gray-700 mb-4">
                  Our team of seasoned legal practitioners offers a broad range of expertise, bringing depth, precision, and strategic insight to every brief. We pride ourselves on our meticulous approach, strong advocacy, and unwavering commitment to professional excellence.
                </p>
                <p className="text-gray-700 mb-6">
                  Through consistent performance and dedicated service, we have earned the confidence of financial institutions, corporate organizations, and private clients, maintaining a proven track record of achieving successful outcomes.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-amber-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-4">About Us</h4>
                <p className="text-gray-700 leading-relaxed">
                  The firm was registered in 1993 as a partnership for solicitors and advocates and has its offices situate at Kano and Abuja. It provides services in various aspects of legal profession especially advocacy, drafting and perfection of various instruments, debt recovery and general legal advice. The firm has legal practitioners with diverse experiences, well trained and equipped to professionally handle its client's briefs meticulously and diligently. Its services are patronized by multiple Government Agencies, Financial institutions, Companies and private individuals.
                </p>
              </div>

              <blockquote className="border-l-4 border-amber-500 pl-4 italic text-lg text-gray-700">
                "We have the skills, competence and capabilities to deliver exceptional results for our clients, backed by 30 years of proven excellence in legal practice."
              </blockquote>
            </div>
          </div>

        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-600 font-semibold tracking-widest uppercase text-sm mb-3">Legal Professionals</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mb-4">Our Team</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Seasoned practitioners committed to delivering precise, strategic, and effective legal counsel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                {/* Photo */}
                <div className="relative h-[26rem] overflow-hidden bg-blue-900">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-white font-serif text-6xl font-bold opacity-30 select-none">
                        {(member as any).initials}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-900/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-white font-serif text-lg font-bold leading-tight drop-shadow">{member.name}</h3>
                    <p className="text-amber-400 text-sm font-semibold mt-0.5">{member.title}</p>
                  </div>
                </div>

                {/* Card body */}
                <div className="px-6 py-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="inline-block w-2 h-2 rounded-full bg-amber-500"></span>
                    <span className="text-sm text-blue-800 font-medium">{member.called}</span>
                  </div>
                  <div className="mt-auto">
                    <button
                      onClick={() => setSelectedMember(index)}
                      className="w-full bg-blue-900 hover:bg-blue-800 text-white text-sm font-semibold py-3 rounded-xl transition-colors duration-200 tracking-wide"
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {selectedMember !== null && (() => {
          const m = teamMembers[selectedMember];
          return (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedMember(null)}
            >
              {/* Backdrop */}
              <div className="absolute inset-0 bg-blue-950/70 backdrop-blur-sm" />

              {/* Panel */}
              <div
                className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header image strip */}
                <div className="relative h-[33rem] overflow-hidden rounded-t-2xl bg-blue-900">
                  {m.image ? (
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-white font-serif text-8xl font-bold opacity-20 select-none">
                        {(m as any).initials}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/85 via-blue-900/30 to-transparent" />
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-2 transition-colors"
                    aria-label="Close"
                  >
                    <X className="h-5 w-5" />
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-serif text-2xl font-bold drop-shadow">{m.name}</h3>
                    <p className="text-amber-400 font-semibold mt-1">{m.title}</p>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 space-y-6">
                  {/* Called to bar badge */}
                  <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-900 text-sm font-semibold px-4 py-2 rounded-full">
                    <Scale className="h-4 w-4 text-amber-500" />
                    {m.called}
                  </div>

                  {/* Bio */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Biography</h4>
                    <p className="text-gray-700 leading-relaxed text-sm">{m.bio}</p>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Career Highlights</h4>
                    <ul className="space-y-2">
                      {m.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Award className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => setSelectedMember(null)}
                    className="w-full border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white text-sm font-semibold py-3 rounded-xl transition-colors duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          );
        })()}
      </section>

      {/* Practice Areas Section */}
      <section id="practice" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mb-4">Practice Areas</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive legal services across multiple areas of law
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceAreas.map((area, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="bg-gradient-to-br from-blue-900 to-blue-700 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <area.icon className="h-7 w-7 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{area.description}</p>
                <button className="text-blue-900 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mb-4">Contact Us</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team for a consultation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all"
                    placeholder="+234801223445456"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your legal needs..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-blue-900" />
                    </div>
                   <div>
                    <h4 className="font-bold text-gray-900 mb-2">KANO HEAD OFFICE</h4>
                    <p className="text-gray-700">217 Ismaila Gano Street Behind Trade Fair Complex Adj. NSITF Gandu Kano</p>
                  </div>
                  </div>
                  <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-900" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">ABUJA OFFICE</h4>
                    <p className="text-gray-700">Suite B58, Area 11 Shopping centre. Ahmadu Way Area 11 Garki Abuja.</p>
                  </div>
                </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-blue-900" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600">+2348036526567<br />+2348039135223</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-blue-900" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">info@mkumarandco.com<br />mkumarandco@mkumarandco.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-blue-900" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Office Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 2:00 PM<br />Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t">
                  <h4 className="font-bold text-gray-900 mb-4">Follow Us</h4>
                  <div className="flex gap-4">
                    <a href="#" className="bg-blue-100 hover:bg-blue-200 p-3 rounded-lg transition-colors">
                      <Linkedin className="h-6 w-6 text-blue-900" />
                    </a>
                    <a href="#" className="bg-blue-100 hover:bg-blue-200 p-3 rounded-lg transition-colors">
                      <Twitter className="h-6 w-6 text-blue-900" />
                    </a>
                    <a href="#" className="bg-blue-100 hover:bg-blue-200 p-3 rounded-lg transition-colors">
                      <Facebook className="h-6 w-6 text-blue-900" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Maps - Kano */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.1!2d8.5167!3d12.0022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae8286b5f7b3b3%3A0x0!2sIsmaila+Gano+Street%2C+Kano!5e0!3m2!1sen!2sng!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-blue-900 to-blue-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-amber-500 p-2 rounded-lg">
                  <Scale className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold">MKUMAR & CO</h3>
                  <p className="text-xs text-gray-300">Barristers, Advocates, Notaries Public</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Delivering exceptional legal services with integrity and excellence since 1993. Based in Kano and Abuja, serving clients across Nigeria.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="text-gray-300 hover:text-amber-400 transition-colors"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Practice Areas</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-300">Litigation & Advocacy</li>
                <li className="text-gray-300">Corporate Services</li>
                <li className="text-gray-300">Company Secretaryship</li>
                <li className="text-gray-300">Advisory & Compliance</li>
                <li className="text-gray-300">Maritime & Shipping</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-gray-300">
                  <Phone className="h-4 w-4" />
                  +2348036526567
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Phone className="h-4 w-4" />
                  +2348039135223
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Mail className="h-4 w-4" />
                  idreeskuliya@gmail.com
                </li>
                <li className="flex items-start gap-2 text-gray-300">
                  <MapPin className="h-4 w-4 mt-1" />
                  217 Ismaila Gano Street, Kano
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                &copy; 2025 MKUMAR & CO. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm text-center md:text-right">
                Attorney Advertising. Prior results do not guarantee a similar outcome.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
