import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Camera, Utensils, BookOpen, Plane, ArrowRight, Star, Users, Mountain, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const Home = () => {
  const features = [
    {
      icon: MapPin,
      title: 'Discover Regions',
      description: 'Explore beautiful regions and historic sites of Azerbaijan',
      link: '/discover',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Utensils,
      title: 'Authentic Cuisine',
      description: 'Taste traditional Azerbaijani dishes and learn recipes',
      link: '/gastronomy',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: BookOpen,
      title: 'Travel Phrasebook',
      description: 'Essential phrases and words for your journey',
      link: '/dictionary',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Plane,
      title: 'Visa Information',
      description: 'Visa requirements and travel procedures to Azerbaijan',
      link: '/visa',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const stats = [
    { number: '10+', label: 'Regions', icon: MapPin },
    { number: '50+', label: 'Historic Sites', icon: Camera },
    { number: '1000+', label: 'Happy Visitors', icon: Users },
    { number: '4.9', label: 'Rating', icon: Star }
  ];

  const highlights = [
    {
      title: 'Land of Fire',
      description: 'Ancient flames that have burned for thousands of years',
      icon: '🔥'
    },
    {
      title: 'Silk Road Heritage',
      description: 'Historic cities along the ancient Silk Road',
      icon: '🏛️'
    },
    {
      title: 'Caspian Coastline',
      description: 'Beautiful beaches along the Caspian Sea',
      icon: '🏖️'
    },
    {
      title: 'Mountain Adventures',
      description: 'Breathtaking Caucasus mountain landscapes',
      icon: '🏔️'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-green-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23e2e8f0%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 inline-flex items-center space-x-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <span className="text-2xl">🇦🇿</span>
              <span className="font-semibold text-primary">Welcome to Azerbaijan</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 bg-clip-text text-transparent leading-tight">
              The Pearl of the Caucasus
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              Discover the wonders of Azerbaijan - where ancient history meets modern elegance. 
              From the flames of Yanar Dag to the architectural marvels of Baku.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/discover">
                <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/gastronomy">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2 hover:bg-accent hover:scale-105 transition-all duration-300 shadow-lg">
                  Taste Our Culture
                  <Utensils className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            
            {/* Quick highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {highlights.map((highlight, index) => (
                <div key={index} className="text-center p-4 bg-white/60 dark:bg-slate-800/60 rounded-2xl backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl mb-2">{highlight.icon}</div>
                  <div className="font-semibold text-sm mb-1">{highlight.title}</div>
                  <div className="text-xs text-muted-foreground">{highlight.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/30 to-muted/60">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
              Plan Your Perfect Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Everything you need to explore Azerbaijan's rich heritage, stunning landscapes, and vibrant culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-4 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
                <CardHeader className="text-center pb-4">
                  <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold mb-2">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center px-6 pb-8">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <Link to={feature.link}>
                    <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 hover:scale-105 shadow-lg">
                      Explore More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto text-white">
            <div className="mb-6">
              <span className="text-6xl mb-4 block">✨</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Your Adventure Awaits
            </h2>
            <p className="text-xl mb-8 opacity-95 leading-relaxed">
              From the ancient streets of Sheki to the modern skyline of Baku, 
              discover the magic that makes Azerbaijan unforgettable
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/discover">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-white text-primary hover:bg-slate-100 hover:scale-105 transition-all duration-300 shadow-xl">
                  Start Exploring Now
                  <MapPin className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/visa">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300">
                  Check Visa Requirements
                  <Plane className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;