import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Modi & Company</h3>
                <p className="text-sm text-gray-300">Advocates LLP</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              With 24 years of experience and a 90% success rate, we provide comprehensive 
              legal solutions across Kenya.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-4 h-4" />
                <span>0722-857059</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>info@modiadvocates.co.ke</span>
              </div>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Practice Areas</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/practice-areas/conveyancing-land-law" className="text-gray-300 hover:text-white transition-colors">
                  Conveyancing & Land Law
                </Link>
              </li>
              <li>
                <Link href="/practice-areas/commercial-law" className="text-gray-300 hover:text-white transition-colors">
                  Commercial Law
                </Link>
              </li>
              <li>
                <Link href="/practice-areas/insurance-law" className="text-gray-300 hover:text-white transition-colors">
                  Insurance Law
                </Link>
              </li>
              <li>
                <Link href="/practice-areas/labour-law" className="text-gray-300 hover:text-white transition-colors">
                  Labour Law
                </Link>
              </li>
              <li>
                <Link href="/practice-areas/civil-litigation" className="text-gray-300 hover:text-white transition-colors">
                  Civil Litigation
                </Link>
              </li>
              <li>
                <Link href="/practice-areas/trust-estate-law" className="text-gray-300 hover:text-white transition-colors">
                  Trust & Estate Law
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/team" className="text-gray-300 hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Legal Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Office Locations */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Office Locations</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium mb-2">Nairobi Office</h5>
                <div className="flex items-start space-x-2 text-gray-300">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <p>NHC House, 1st Floor</p>
                    <p>Opp. Co-operative Bank House</p>
                    <p>Nairobi</p>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="font-medium mb-2">Narok Branch</h5>
                <div className="flex items-start space-x-2 text-gray-300">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <p>Nenkai Plaza, 2nd Floor</p>
                    <p>Suite 316, Narok</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Clock className="w-4 h-4" />
                <span>Mon-Fri: 8:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 Modi & Company Advocates LLP. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-300 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 