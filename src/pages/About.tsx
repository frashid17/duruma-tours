import React from 'react';
import { Award, Users, Globe, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '500+', label: 'Happy Customers' },
    { number: '50+', label: 'Tour Packages' },
    { number: '10+', label: 'Years Experience' },
    { number: '15+', label: 'Destinations' },
  ];

  const values = [
    {
      icon: <Award className="h-8 w-8 text-safari-600" />,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our service, from planning to execution.'
    },
    {
      icon: <Users className="h-8 w-8 text-safari-600" />,
      title: 'Community',
      description: 'Supporting local communities and promoting sustainable tourism practices.'
    },
    {
      icon: <Globe className="h-8 w-8 text-safari-600" />,
      title: 'Conservation',
      description: 'Committed to wildlife conservation and environmental protection.'
    },
    {
      icon: <Heart className="h-8 w-8 text-safari-600" />,
      title: 'Passion',
      description: 'Our passion for Kenya\'s natural beauty drives everything we do.'
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop")'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              About Duruma Tours & Safari
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto px-4">
              Your trusted partner for authentic Kenyan safari experiences
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-earth-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2024, Duruma Tours & Safari was born from a deep love for Kenya's
                  incredible wildlife and rich cultural heritage. Named after the Duruma people, 
                  one of Kenya's coastal communities, we honor the local traditions while providing 
                  world-class safari experiences.
                </p>
                <p>
                  Our journey began with a simple mission: to share the magic of Kenya with 
                  travelers from around the world while supporting local communities and 
                  conservation efforts. Over the years, we've grown from a small local operator 
                  to a trusted name in Kenyan tourism.
                </p>
                <p>
                  Today, we continue to provide personalized, authentic safari experiences that 
                  create lasting memories while contributing to the preservation of Kenya's 
                  natural treasures for future generations.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Safari team"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-safari-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="font-display text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-safari-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-earth-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to exceptional safari experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-200">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="font-display text-xl font-semibold text-earth-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-earth-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600">
              Experienced professionals passionate about sharing Kenya's wonders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-safari-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-16 w-16 text-safari-600" />
              </div>
              <h3 className="font-display text-xl font-semibold text-earth-900 mb-2">
                James Mwangi
              </h3>
              <p className="text-safari-600 font-medium mb-2">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                20+ years of safari experience and wildlife conservation expert
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-safari-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-16 w-16 text-safari-600" />
              </div>
              <h3 className="font-display text-xl font-semibold text-earth-900 mb-2">
                Sarah Kimani
              </h3>
              <p className="text-safari-600 font-medium mb-2">Head Guide</p>
              <p className="text-gray-600 text-sm">
                Expert naturalist with deep knowledge of Kenya's ecosystems
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-safari-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-16 w-16 text-safari-600" />
              </div>
              <h3 className="font-display text-xl font-semibold text-earth-900 mb-2">
                David Ochieng
              </h3>
              <p className="text-safari-600 font-medium mb-2">Operations Manager</p>
              <p className="text-gray-600 text-sm">
                Ensures smooth operations and exceptional customer service
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;