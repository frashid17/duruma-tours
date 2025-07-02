import React from 'react';
import { ArrowRight, Star, Users, Calendar, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-safari-600" />,
      title: "Expert Guides",
      description: "Professional local guides with deep knowledge of Kenya's wildlife and culture"
    },
    {
      icon: <Calendar className="h-8 w-8 text-safari-600" />,
      title: "Flexible Scheduling",
      description: "Customizable tour packages that fit your timeline and preferences"
    },
    {
      icon: <Shield className="h-8 w-8 text-safari-600" />,
      title: "Safety First",
      description: "Modern vehicles and comprehensive safety measures for worry-free adventures"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "USA",
      rating: 5,
      comment: "An absolutely incredible experience! The Maasai Mara safari was beyond our expectations."
    },
    {
      name: "David Chen",
      location: "Canada",
      rating: 5,
      comment: "Professional service and amazing wildlife encounters. Highly recommended!"
    },
    {
      name: "Emma Wilson",
      location: "UK",
      rating: 5,
      comment: "Perfect organization from start to finish. The best way to explore Kenya!"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop")'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Discover Kenya's Wild Beauty
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Professional transport and guided tours to Kenya's most spectacular destinations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/tours"
                className="bg-safari-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-safari-700 transition-colors duration-200 flex items-center justify-center"
              >
                Explore Tours
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-safari-800 transition-colors duration-200"
              >
                Plan Your Adventure
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-earth-900 mb-4">
              Why Choose Duruma Tours?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine local expertise with international standards to create unforgettable safari experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="font-display text-xl font-semibold text-earth-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-earth-900 mb-4">
              Popular Destinations
            </h2>
            <p className="text-lg text-gray-600">
              Discover Kenya's most iconic wildlife reserves and national parks
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="http://bit.ly/3I5Jayt"
                alt="Maasai Mara"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="font-display text-xl font-semibold mb-2">Maasai Mara</h3>
                  <p className="text-sm text-gray-200">Home to the Great Migration</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Amboseli"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="font-display text-xl font-semibold mb-2">Amboseli</h3>
                  <p className="text-sm text-gray-200">Elephants & Mount Kilimanjaro views</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg">
              <img 
                src="https://images.pexels.com/photos/1424246/pexels-photo-1424246.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Tsavo"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="font-display text-xl font-semibold mb-2">Tsavo National Park</h3>
                  <p className="text-sm text-gray-200">Kenya's largest national park</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/tours"
              className="bg-safari-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-safari-700 transition-colors duration-200 inline-flex items-center"
            >
              View All Tours
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-earth-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-earth-900 mb-4">
              What Our Guests Say
            </h2>
            <p className="text-lg text-gray-600">
              Hear from travelers who experienced Kenya with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                <div>
                  <p className="font-semibold text-earth-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-safari-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready for Your African Adventure?
          </h2>
          <p className="text-xl text-safari-100 mb-8 max-w-3xl mx-auto">
            Contact us today to start planning your unforgettable Kenya safari experience
          </p>
          <Link
            to="/contact"
            className="bg-white text-safari-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;