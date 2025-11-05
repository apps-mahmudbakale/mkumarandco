import React from 'react';
import { Scale, Building2, Shield, Users, Briefcase, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const sections = [
    {
      title: "Documentation & Security Services",
      content: [
        "Preparation and perfection of various security documents",
        "Conveyances, leases, and sub-leases",
        "Assignments and Power of Attorney",
        "Debentures and Guarantees",
        "Mortgage Deeds and Loan Agreements",
        "Loan Syndications and Trust Deeds",
        "Deed of Surrender and Release",
      ]
    },
    {
      title: "Corporate & Business Services",
      content: [
        "Incorporation of Companies",
        "Registration of Business Names",
        "Patents and Designs Registration",
        "Trade Mark Registration",
        "Industrial Properties Protection",
        "Copyright Registration",
        "Annual Returns Filing",
        "Company Secretarial Services"
      ]
    },
    {
      title: "Advisory & Consultation",
      content: [
        "Tax Matters and Compliance",
        "Insurance Law and Practice",
        "Government Regulations",
        "Labour Relations Laws",
        "Settlement/Arbitration Procedures",
        "Corporate Practice",
        "General Legal Counselling"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">About M.K. UMAR & CO.</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Established in 1993, delivering excellence in legal services across Nigeria
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Introduction */}
            <div className="md:col-span-2 space-y-6">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-serif font-bold text-blue-900 mb-6">Our Legacy of Excellence</h2>
                <p>
                  M.K. UMAR & CO. was registered in 1993 as a partnership for solicitors and advocates, with strategic office locations in Kano and Abuja. Over the decades, we have established ourselves as a leading law firm, serving diverse clients across Nigeria.
                </p>
                <p>
                  Our team consists of 5 distinguished legal practitioners, each bringing unique expertise and extensive experience to our practice. We pride ourselves on our meticulous approach to client briefs and our unwavering commitment to professional excellence.
                </p>
                <p>
                  The firm has built a strong reputation in various aspects of legal practice, particularly in advocacy, drafting, perfection of instruments, debt recovery, and general legal advice. Our services are trusted by financial institutions, corporations, and private individuals alike.
                </p>
              </div>

              {/* Detailed Services */}
              <div className="space-y-8 mt-12">
                {sections.map((section, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">{section.title}</h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {section.content.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-amber-500 flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Scale className="h-6 w-6 text-amber-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">30 Years Experience</h4>
                      <p className="text-gray-600">Three decades of proven excellence in legal practice</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="h-6 w-6 text-amber-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Expert Team</h4>
                      <p className="text-gray-600">5 specialized legal practitioners at your service</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Building2 className="h-6 w-6 text-amber-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Strategic Locations</h4>
                      <p className="text-gray-600">Offices in Kano and Abuja serving all of Nigeria</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">Need Legal Assistance?</h3>
                <p className="text-gray-200 mb-6">Contact us for a consultation about your legal matters</p>
                <Link 
                  to="/contact" 
                  className="block bg-amber-500 hover:bg-amber-600 text-center py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
