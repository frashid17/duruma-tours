import React from 'react';
import { Compass, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-earth-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Compass className="h-8 w-8 text-safari-400" />
              <span className="font-display text-xl font-bold">
                Duruma Tours & Safari
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Experience the magic of Kenya with our professional transport and guided tours. 
              We create unforgettable adventures to Kenya's most spectacular destinations.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-safari-400 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-safari-400 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-safari-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-300 hover:text-safari-400 transition-colors">About Us</a></li>
              <li><a href="/tours" className="text-gray-300 hover:text-safari-400 transition-colors">Our Tours</a></li>
              <li><a href="/gallery" className="text-gray-300 hover:text-safari-400 transition-colors">Photo Gallery</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-safari-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-safari-400" />
                <span className="text-gray-300">+254 712 345 678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-safari-400" />
                <span className="text-gray-300">info@durumatours.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-safari-400 mt-1" />
                <span className="text-gray-300">
                  Mombasa Road, Nairobi<br />
                  Kenya
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-earth-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Duruma Tours & Safari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;