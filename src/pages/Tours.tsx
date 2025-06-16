import React, { useState } from 'react';
import { Clock, Users, Star, Camera, Binary as Binoculars, Truck, X, Send, CheckCircle } from 'lucide-react';

const Tours = () => {
  const [selectedTour, setSelectedTour] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBookingSubmitted, setIsBookingSubmitted] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    adults: '1',
    children: '0',
    tourDate: '',
    specialRequests: ''
  });

  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const handleBookNow = (tour: any) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', { tour: selectedTour, booking: bookingData });
    setIsBookingSubmitted(true);
    setTimeout(() => {
      setIsBookingSubmitted(false);
      setIsModalOpen(false);
      setBookingData({
        name: '',
        email: '',
        adults: '1',
        children: '0',
        tourDate: '',
        specialRequests: ''
      });
      setSelectedTour(null);
    }, 3000);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTour(null);
    setIsBookingSubmitted(false);
    setBookingData({
      name: '',
      email: '',
      adults: '1',
      children: '0',
      tourDate: '',
      specialRequests: ''
    });
  };

  const tours = [
    {
      id: 1,
      title: "Maasai Mara Great Migration Safari",
      duration: "4 Days / 3 Nights",
      groupSize: "2-8 People",
      price: "$850",
      rating: 4.9,
      image: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      highlights: ["Great Migration", "Big Five", "Maasai Culture", "Hot Air Balloon"],
      description: "Experience the world's greatest wildlife spectacle as millions of wildebeest cross the Mara River."
    },
    {
      id: 2,
      title: "Amboseli Elephant Paradise",
      duration: "3 Days / 2 Nights",
      groupSize: "2-6 People",
      price: "$650",
      rating: 4.8,
      image: "https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      highlights: ["Large Elephant Herds", "Mount Kilimanjaro Views", "Swamp Exploration", "Bird Watching"],
      description: "Get up close with Kenya's largest elephant herds against the backdrop of Mount Kilimanjaro."
    },
    {
      id: 3,
      title: "Tsavo East & West Adventure",
      duration: "5 Days / 4 Nights",
      groupSize: "2-8 People",
      price: "$950",
      rating: 4.7,
      image: "https://images.pexels.com/photos/1424246/pexels-photo-1424246.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      highlights: ["Red Elephants", "Mzima Springs", "Lugard Falls", "Vast Landscapes"],
      description: "Explore Kenya's largest national park and witness the famous red elephants of Tsavo."
    },
    {
      id: 4,
      title: "Lake Nakuru Flamingo Spectacle",
      duration: "2 Days / 1 Night",
      groupSize: "2-10 People",
      price: "$450",
      rating: 4.6,
      image: "https://images.pexels.com/photos/3889742/pexels-photo-3889742.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      highlights: ["Pink Flamingos", "White Rhinos", "Baboon Cliff", "Waterfalls"],
      description: "Marvel at thousands of flamingos creating a pink carpet on the alkaline lake."
    },
    {
      id: 5,
      title: "Samburu Cultural Experience",
      duration: "4 Days / 3 Nights",
      groupSize: "2-6 People",
      price: "$750",
      rating: 4.8,
      image: "https://images.pexels.com/photos/1223649/pexels-photo-1223649.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      highlights: ["Unique Wildlife", "Samburu Culture", "Ewaso River", "Special Five"],
      description: "Discover unique wildlife species and experience authentic Samburu culture in northern Kenya."
    },
    {
      id: 6,
      title: "Coastal Safari & Beach Combo",
      duration: "6 Days / 5 Nights",
      groupSize: "2-8 People",
      price: "$1,200",
      rating: 4.9,
      image: "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      highlights: ["Safari & Beach", "Diani Beach", "Shimba Hills", "Swahili Culture"],
      description: "Perfect combination of wildlife safari and pristine white sand beaches of the Kenyan coast."
    }
  ];

  const services = [
    {
      icon: <Truck className="h-8 w-8 text-safari-600" />,
      title: "Transport Services",
      description: "Comfortable 4WD safari vehicles with professional drivers"
    },
    {
      icon: <Binoculars className="h-8 w-8 text-safari-600" />,
      title: "Expert Guides",
      description: "Knowledgeable local guides with wildlife expertise"
    },
    {
      icon: <Camera className="h-8 w-8 text-safari-600" />,
      title: "Photography Tours",
      description: "Specialized photography safaris for the perfect shot"
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.pexels.com/photos/1271179/pexels-photo-1271179.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop")'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Safari Tours & Packages
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto px-4">
              Choose from our carefully crafted safari experiences
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-earth-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Professional safari services tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-200">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="font-display text-xl font-semibold text-earth-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-earth-900 mb-4">
              Popular Safari Packages
            </h2>
            <p className="text-lg text-gray-600">
              Discover Kenya's wildlife through our expertly designed tour packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <div key={tour.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <div className="relative">
                  <img 
                    src={tour.image} 
                    alt={tour.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-lg text-sm font-semibold text-safari-600">
                    {tour.price}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-xl font-semibold text-earth-900">
                      {tour.title}
                    </h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{tour.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{tour.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {tour.groupSize}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-earth-900 mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {tour.highlights.map((highlight, index) => (
                        <span key={index} className="bg-safari-100 text-safari-700 px-2 py-1 rounded-full text-xs">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => handleBookNow(tour)}
                    className="w-full bg-safari-600 text-white py-2 rounded-lg font-semibold hover:bg-safari-700 transition-colors duration-200"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Tours CTA */}
      <section className="py-20 bg-earth-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Need a Custom Safari?
          </h2>
          <p className="text-xl text-earth-200 mb-8 max-w-3xl mx-auto">
            We can create a personalized safari experience tailored to your interests, budget, and schedule
          </p>
          <button className="bg-safari-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-safari-700 transition-colors duration-200">
            Plan Custom Tour
          </button>
        </div>
      </section>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-display text-2xl font-bold text-earth-900">
                  Book Your Safari
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {selectedTour && (
                <div className="mb-6 p-4 bg-safari-50 rounded-lg">
                  <h3 className="font-semibold text-safari-800 mb-1">
                    {selectedTour.title}
                  </h3>
                  <p className="text-sm text-safari-600">
                    {selectedTour.duration} • {selectedTour.price} per person
                  </p>
                </div>
              )}

              {isBookingSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-green-800 mb-2 text-lg">
                    Booking Request Sent!
                  </h3>
                  <p className="text-green-600">
                    Thank you for your booking request. We'll contact you within 24 hours to confirm your safari details.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={bookingData.name}
                      onChange={handleBookingChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={bookingData.email}
                      onChange={handleBookingChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="adults" className="block text-sm font-medium text-gray-700 mb-1">
                        Adults *
                      </label>
                      <select
                        id="adults"
                        name="adults"
                        required
                        value={bookingData.adults}
                        onChange={handleBookingChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-500 focus:border-transparent"
                      >
                        {[1,2,3,4,5,6,7,8,9,10].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="children" className="block text-sm font-medium text-gray-700 mb-1">
                        Children
                      </label>
                      <select
                        id="children"
                        name="children"
                        value={bookingData.children}
                        onChange={handleBookingChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-500 focus:border-transparent"
                      >
                        {[0,1,2,3,4,5,6,7,8,9,10].map(num => (
                          <option key={num} value={num}>{num}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="tourDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Tour Date *
                    </label>
                    <input
                      type="date"
                      id="tourDate"
                      name="tourDate"
                      required
                      value={bookingData.tourDate}
                      onChange={handleBookingChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
                      Special Requests
                    </label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      rows={3}
                      value={bookingData.specialRequests}
                      onChange={handleBookingChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-safari-500 focus:border-transparent"
                      placeholder="Any dietary requirements, accessibility needs, or special requests..."
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-safari-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-safari-700 transition-colors duration-200 flex items-center justify-center"
                    >
                      Send Booking Request
                      <Send className="ml-2 h-4 w-4" />
                    </button>
                  </div>

                  <p className="text-xs text-gray-500 text-center">
                    This is a booking request. We'll contact you to confirm availability and finalize your safari details.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tours;