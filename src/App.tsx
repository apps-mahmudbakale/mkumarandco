import React, { useState } from 'react';
import { Scale, Menu, X, ChevronRight, Phone, Mail, MapPin, Clock, Award, Users, Shield, Briefcase, Home as HomeIcon, UserCheck, Building2, Heart, Lightbulb, Gavel, Star, Send, Linkedin, Twitter, Facebook } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

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
    { name: 'Testimonials', href: 'testimonials' },
    { name: 'Contact', href: 'contact' },
  ];

  const practiceAreas = [
    {
      icon: Building2,
      title: 'Documentation & Property',
      description: 'Expert preparation and perfection of security documents, conveyances, leases, mortgages, and property instruments.'
    },
    {
      icon: Briefcase,
      title: 'Corporate Services',
      description: 'Business incorporation, company secretarial services, annual returns, and comprehensive corporate documentation.'
    },
    {
      icon: Shield,
      title: 'Legal Advisory',
      description: 'Professional guidance on tax matters, insurance law, government regulations, and labor relations.'
    },
    {
      icon: Gavel,
      title: 'Litigation',
      description: 'Robust representation in civil and criminal proceedings, including successful debt recovery.'
    },
    {
      icon: UserCheck,
      title: 'Business Support',
      description: 'Attendance at business meetings, contract negotiations, and corporate governance matters.'
    },
    {
      icon: Scale,
      title: 'Dispute Resolution',
      description: 'Expert handling of settlements, arbitration procedures, and alternative dispute resolution.'
    }
  ];

  const teamMembers = [
    {
      name: 'James Bakale',
      title: 'Senior Partner',
      specialties: ['Corporate Law', 'Commercial Litigation'],
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800',
      bio: 'Over 25 years of experience in corporate law and commercial litigation.'
    },
    {
      name: 'Sarah Mitchell',
      title: 'Partner',
      specialties: ['Family Law', 'Real Estate'],
      image: 'https://images.pexels.com/photos/3760607/pexels-photo-3760607.jpeg?auto=compress&cs=tinysrgb&w=800',
      bio: 'Dedicated advocate with 15 years specializing in family and property matters.'
    },
    {
      name: 'David Chen',
      title: 'Partner',
      specialties: ['Criminal Defense', 'Immigration'],
      image: 'https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=800',
      bio: 'Former prosecutor bringing unique insights to criminal defense cases.'
    },
    {
      name: 'Emily Rodriguez',
      title: 'Associate Partner',
      specialties: ['Intellectual Property', 'Labour Law'],
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800',
      bio: 'Tech-savvy attorney specializing in IP protection and employment matters.'
    }
  ];

  const testimonials = [
    {
      name: 'Michael Thompson',
      company: 'Thompson Industries',
      text: 'Bakale & Partners provided exceptional guidance through our merger. Their professionalism and expertise made a complex process seamless.',
      rating: 5
    },
    {
      name: 'Jennifer Adams',
      company: 'Private Client',
      text: 'During my divorce proceedings, Sarah Mitchell was compassionate yet strong. I felt supported every step of the way.',
      rating: 5
    },
    {
      name: 'Robert Chen',
      company: 'Tech Innovations Ltd',
      text: 'Outstanding IP protection services. They secured our patents efficiently and provided strategic advice for our business.',
      rating: 5
    }
  ];

  const milestones = [
    { year: '1993', event: 'Firm registered as partnership for solicitors and advocates' },
    { year: '1995', event: 'Established office in Kano' },
    { year: '2000', event: 'Expanded operations to Abuja' },
    { year: '2010', event: 'Grew to 5 legal practitioners' },
    { year: '2023', event: 'Celebrating 30 years of legal excellence' }
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
                <h1 className="text-xl font-serif font-bold text-blue-900">MKUMARANDCO</h1>
                <p className="text-xs text-gray-600">Legal Chambers</p>
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
            src="https://images.pexels.com/photos/8111831/pexels-photo-8111831.jpeg?auto=compress&cs=tinysrgb&w=1920"
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
            M.K. UMAR & CO. has been providing exceptional legal services from our offices in Kano and Abuja, 
            with a commitment to professionalism and client success.
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
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mb-4">About Our Firm</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A legacy of legal excellence, professional integrity, and comprehensive client service
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
                    <Scale className="h-5 w-5 text-amber-500 mt-1" />
                    <span className="text-gray-700">Security and property documentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Building2 className="h-5 w-5 text-amber-500 mt-1" />
                    <span className="text-gray-700">Corporate services and business registration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-amber-500 mt-1" />
                    <span className="text-gray-700">Legal advisory and compliance</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="prose prose-lg">
                <h3 className="text-3xl font-serif font-bold text-gray-900 mb-6">Our Legacy</h3>
                <p className="text-gray-700 mb-4">
                  M.K. UMAR & CO. was established in 1993 as a partnership for solicitors and advocates. With offices in Kano and Abuja, 
                  we have built a reputation for excellence in legal services across Nigeria.
                </p>
                <p className="text-gray-700 mb-4">
                  Our team of 5 distinguished legal practitioners brings diverse expertise and extensive experience to every case. 
                  We take pride in our meticulous approach to client briefs and our commitment to professional excellence.
                </p>
                <p className="text-gray-700 mb-6">
                  Over the years, we have earned the trust of financial institutions, companies, and private individuals through our 
                  dedicated service and proven track record of success.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-amber-50 p-6 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-4">Our Professional Services Include:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Briefcase className="h-5 w-5 text-amber-500 mt-1" />
                    <span className="text-gray-700">Comprehensive documentation services including conveyances, leases, assignments, and security instruments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Building2 className="h-5 w-5 text-amber-500 mt-1" />
                    <span className="text-gray-700">Business registration, incorporation, and corporate compliance services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-amber-500 mt-1" />
                    <span className="text-gray-700">Expert representation in civil and criminal litigation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-amber-500 mt-1" />
                    <span className="text-gray-700">Advisory services in tax, insurance, and labor relations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Scale className="h-5 w-5 text-amber-500 mt-1" />
                    <span className="text-gray-700">Professional debt recovery and collection services</span>
                  </li>
                </ul>
              </div>

              <blockquote className="border-l-4 border-amber-500 pl-4 italic text-lg text-gray-700">
                "We have the skills, competence and capabilities to deliver exceptional results for our clients, backed by 30 years of proven excellence in legal practice."
              </blockquote>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-serif font-bold text-center text-blue-900 mb-12">Our Journey</h3>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center gap-6 group">
                  <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white font-bold px-6 py-3 rounded-lg shadow-lg min-w-[100px] text-center group-hover:scale-110 transition-transform duration-300">
                    {milestone.year}
                  </div>
                  <div className="flex-1 bg-white p-4 rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300">
                    <p className="text-gray-800 font-medium">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mb-4">Our Team</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced legal professionals dedicated to protecting your interests
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-amber-600 font-semibold mb-3">{member.title}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="space-y-2">
                    {member.specialties.map((specialty, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Scale className="h-4 w-4 text-blue-900" />
                        <span className="text-sm text-gray-700">{specialty}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Client Testimonials</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              What our clients say about working with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
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
                    placeholder="+1 (555) 123-4567"
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
                      <h4 className="font-bold text-gray-900 mb-1">Office Address</h4>
                      <p className="text-gray-600">123 Justice Avenue, Suite 500<br />Financial District, New York, NY 10004</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-blue-900" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                      <p className="text-gray-600">+1 (555) 123-4567<br />+1 (555) 123-4568</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-blue-900" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">info@bakalepartners.com<br />consult@bakalepartners.com</p>
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

              {/* Google Maps */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00601368459391!3d40.71312797933044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a165bedccab%3A0x2cb2ddf003b67021!2sFinancial%20District%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890"
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
                  <h3 className="text-lg font-serif font-bold">MKUMARANDCO</h3>
                  <p className="text-xs text-gray-300">Legal Chambers</p>
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
                <li className="text-gray-300">Corporate Law</li>
                <li className="text-gray-300">Criminal Defense</li>
                <li className="text-gray-300">Family Law</li>
                <li className="text-gray-300">Real Estate</li>
                <li className="text-gray-300">Intellectual Property</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-gray-300">
                  <Phone className="h-4 w-4" />
                  +1 (555) 123-4567
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Mail className="h-4 w-4" />
                  info@bakalepartners.com
                </li>
                <li className="flex items-start gap-2 text-gray-300">
                  <MapPin className="h-4 w-4 mt-1" />
                  123 Justice Avenue, Suite 500<br />New York, NY 10004
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                &copy; 2025 MKUMARANDCO Legal Chambers. All rights reserved.
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
