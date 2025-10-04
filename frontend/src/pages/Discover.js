import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Clock, Camera, Mountain, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { regions } from '../data/mockData';

const Discover = () => {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <Mountain className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Discover Azerbaijan
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore the regions that showcase our country's rich historical and cultural heritage, 
            and discover the magnificent places they contain
          </p>
        </div>

        {/* Interactive Map Placeholder */}
        <div className="mb-16">
          <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900">
            <div className="relative h-96 flex items-center justify-center">
              {/* Map background pattern */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23e2e8f0%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M20%2020c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
              
              <div className="text-center relative z-10">
                <MapPin className="w-20 h-20 mx-auto mb-6 text-primary animate-bounce" />
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Interactive Map of Azerbaijan
                </h3>
                <p className="text-muted-foreground text-lg">Click on the regions below to explore their attractions</p>
              </div>
              
              {/* Animated region markers */}
              <div className="absolute top-1/4 left-1/3 group cursor-pointer">
                <div className="w-6 h-6 bg-red-500 rounded-full shadow-xl animate-pulse hover:scale-125 transition-transform"></div>
                <div className="absolute -top-10 -left-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white dark:bg-slate-800 px-3 py-1 rounded-lg shadow-lg border">
                    <span className="text-sm font-semibold text-red-600">Baku</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/3 left-1/4 group cursor-pointer">
                <div className="w-6 h-6 bg-green-500 rounded-full shadow-xl animate-pulse hover:scale-125 transition-transform delay-100"></div>
                <div className="absolute -top-10 -left-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white dark:bg-slate-800 px-3 py-1 rounded-lg shadow-lg border">
                    <span className="text-sm font-semibold text-green-600">Ganja</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/5 left-2/3 group cursor-pointer">
                <div className="w-6 h-6 bg-blue-500 rounded-full shadow-xl animate-pulse hover:scale-125 transition-transform delay-200"></div>
                <div className="absolute -top-10 -left-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white dark:bg-slate-800 px-3 py-1 rounded-lg shadow-lg border">
                    <span className="text-sm font-semibold text-blue-600">Sheki</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-2/5 right-1/4 group cursor-pointer">
                <div className="w-6 h-6 bg-purple-500 rounded-full shadow-xl animate-pulse hover:scale-125 transition-transform delay-300"></div>
                <div className="absolute -top-10 -left-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white dark:bg-slate-800 px-3 py-1 rounded-lg shadow-lg border">
                    <span className="text-sm font-semibold text-purple-600">Gabala</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-1/3 left-1/2 group cursor-pointer">
                <div className="w-6 h-6 bg-orange-500 rounded-full shadow-xl animate-pulse hover:scale-125 transition-transform delay-400"></div>
                <div className="absolute -top-10 -left-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white dark:bg-slate-800 px-3 py-1 rounded-lg shadow-lg border">
                    <span className="text-sm font-semibold text-orange-600">Shamakhi</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Regions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regions.map((region, index) => (
            <Card key={region.id} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-xl overflow-hidden hover:-translate-y-4 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
              {/* Region Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={region.image} 
                  alt={region.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{region.name}</h3>
                  <p className="text-sm opacity-90 leading-relaxed">{region.description}</p>
                </div>
                <Badge className="absolute top-4 right-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
                  <Camera className="w-3 h-3 mr-1" />
                  {region.places.length} attractions
                </Badge>
                <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
              </div>

              <CardContent className="p-6">
                {/* Places Preview */}
                <div className="mb-6">
                  <h4 className="font-bold mb-4 text-muted-foreground text-sm uppercase tracking-wider flex items-center">
                    <Star className="w-4 h-4 mr-2" />
                    Must-Visit Places
                  </h4>
                  <div className="space-y-3">
                    {region.places.slice(0, 3).map((place, placeIndex) => (
                      <div key={place.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                          {placeIndex + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium truncate">{place.name}</div>
                          <div className="text-sm text-muted-foreground truncate">{place.description}</div>
                        </div>
                      </div>
                    ))}
                    {region.places.length > 3 && (
                      <div className="flex items-center space-x-3 p-2 text-muted-foreground">
                        <div className="w-8 h-8 rounded-full border-2 border-dashed border-muted-foreground/30 flex items-center justify-center text-xs flex-shrink-0">
                          +{region.places.length - 3}
                        </div>
                        <span className="text-sm">and {region.places.length - 3} more places...</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <Link to={`/region/${region.id}`}>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                    <span>Explore {region.name}</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/50 dark:via-purple-950/50 dark:to-pink-950/50 border-0 shadow-2xl">
            <CardContent className="p-12">
              <div className="mb-6">
                <span className="text-4xl">🗺️</span>
              </div>
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Make Your Travel Dreams Reality
              </h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
                Get all the information you need to travel to your chosen regions and experience 
                the beauty, history, and culture of Azerbaijan
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/gastronomy">
                  <Button size="lg" variant="outline" className="hover:bg-orange-50 hover:text-orange-700 hover:border-orange-300 dark:hover:bg-orange-950/50 transition-colors shadow-lg">
                    <Camera className="mr-2 w-5 h-5" />
                    Traditional Cuisine
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/visa">
                  <Button size="lg" variant="outline" className="hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 dark:hover:bg-blue-950/50 transition-colors shadow-lg">
                    <MapPin className="mr-2 w-5 h-5" />
                    Visa Information
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/dictionary">
                  <Button size="lg" variant="outline" className="hover:bg-green-50 hover:text-green-700 hover:border-green-300 dark:hover:bg-green-950/50 transition-colors shadow-lg">
                    <Star className="mr-2 w-5 h-5" />
                    Learn Phrases
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Discover;