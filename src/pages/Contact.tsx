import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tourType: '',
    numberOfPeople: '',
    preferredDate: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'contact',
          ...formData,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          tourType: '',
          numberOfPeople: '',
          preferredDate: '',
          message: '',
        });
      }, 3000);
    } catch (err) {
      console.error('Contact form error:', err);
      alert('There was an error sending your message. Please try again later.');
    }
  };


  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-safari-600" />,
      title: "Phone",
      details: ["+254 712 345 678", "+254 702 987 654"],
      subtitle: "Call us anytime"
    },
    {
      icon: <Mail className="h-6 w-6 text-safari-600" />,
      title: "Email",
      details: ["info@durumatours.com", "bookings@durumatours.com"],
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: <MapPin className="h-6 w-6 text-safari-600" />,
      title: "Office",
      details: ["Mombasa Road", "Nairobi, Kenya"],
      subtitle: "Visit our office"
    },
    {
      icon: <Clock className="h-6 w-6 text-safari-600" />,
      title: "Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat - Sun: 9:00 AM - 4:00 PM"],
      subtitle: "Kenya Time (EAT)"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop")'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto px-4">
              Ready to start your Kenyan adventure? Get in touch with us today
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-200">
                <div className="flex justify-center mb-4">{info.icon}</div>
                <h3 className="font-display text-xl font-semibold text-earth-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-sm text-safari-600 font-medium mb-3">{info.subtitle}</p>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-3xl font-bold text-earth-900 mb-6">
                Plan Your Safari
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you with a customized safari proposal.
              </p>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-green-800 mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-600">Thank you for your inquiry. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-500 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-500 focus:border-transparent"
                        placeholder="+254 xxx xxx xxx"
                      />
                    </div>
                    <div>
                      <label htmlFor="tourType" className="block text-sm font-medium text-gray-700 mb-2">
                        Tour Type
                      </label>
                      <select
                        id="tourType"
                        name="tourType"
                        value={formData.tourType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-500 focus:border-transparent"
                      >
                        <option value="">Select a tour</option>
                        <option value="maasai-mara">Maasai Mara Safari</option>
                        <option value="amboseli">Amboseli Elephant Paradise</option>
                        <option value="tsavo">Tsavo Adventure</option>
                        <option value="nakuru">Lake Nakuru</option>
                        <option value="samburu">Samburu Experience</option>
                        <option value="coastal">Coastal Safari & Beach</option>
                        <option value="custom">Custom Safari</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="numberOfPeople" className="block text-sm font-medium text-gray-700 mb-2">
                        Number of People
                      </label>
                      <select
                        id="numberOfPeople"
                        name="numberOfPeople"
                        value={formData.numberOfPeople}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-500 focus:border-transparent"
                      >
                        <option value="">Select group size</option>
                        <option value="1-2">1-2 people</option>
                        <option value="3-4">3-4 people</option>
                        <option value="5-8">5-8 people</option>
                        <option value="9+">9+ people</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-500 focus:border-transparent"
                      placeholder="Tell us about your dream safari experience..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-safari-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-safari-700 transition-colors duration-200 flex items-center justify-center"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Map/Additional Info */}
            <div>
              <h2 className="font-display text-3xl font-bold text-earth-900 mb-6">
                Visit Our Office
              </h2>
              <p className="text-gray-600 mb-8">
                Located along Mombasa Road in Nairobi, our office is easily accessible and we welcome 
                visitors who want to discuss their safari plans in person.
              </p>

              {/* Map placeholder */}
              <div className="bg-gray-200 rounded-lg h-64 mb-8 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">Mombasa Road, Nairobi</p>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-safari-50 rounded-lg p-6">
                <h3 className="font-display text-xl font-semibold text-earth-900 mb-4">
                  Quick FAQ
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-earth-800 mb-1">How far in advance should I book?</h4>
                    <p className="text-sm text-gray-600">We recommend booking at least 2-3 months in advance, especially for peak season (July-October).</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-earth-800 mb-1">Do you provide hotel pickups?</h4>
                    <p className="text-sm text-gray-600">Yes, we provide complimentary pickup and drop-off from most Nairobi hotels and the airport.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-earth-800 mb-1">What's included in the safari packages?</h4>
                    <p className="text-sm text-gray-600">All packages include transport, professional guide, park fees, and meals as specified in each tour description.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;