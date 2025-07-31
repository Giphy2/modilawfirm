'use client';

import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-primary-600 text-white py-3">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between text-sm">
          {/* Contact Details */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="w-3 h-3" />
              <span>0722-857059</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-3 h-3" />
              <span>info@modiadvocates.co.ke</span>
            </div>
          </div>

          {/* Office Hours */}
          <div className="flex items-center space-x-2">
            <Clock className="w-3 h-3" />
            <span>Mon-Fri: 8:00 AM - 5:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo; 