import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Camera, Info, Star, Navigation } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { regions } from '../data/mockData';

const RegionDetail = () => {
  const { regionId } = useParams();
  const region = regions.find(r => r.id === regionId);

  if (!region) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <MapPin className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Region Not Found</h1>
          <p className="text-muted-foreground mb-6">The region you're looking for doesn't exist.</p>
          <Link to="/discover">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              Back to Discover
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <img 
          src={region.image} 
          alt={region.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <div className="text-white max-w-4xl">
              <Link 
                to="/discover" 
                className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-all duration-200 hover:scale-105 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Discover
              </Link>
              
              <div className="mb-4">
                <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm mb-4">
                  <Navigation className="w-3 h-3 mr-1" />
                  Region of Azerbaijan
                </Badge>
              </div>
              
              <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text">
                {region.name}
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-3xl">
                {region.description}
              </p>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="font-medium">{region.places.length} Historic Sites</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Camera className="w-5 h-5 text-green-400" />
                  <span className="font-medium">Photo Opportunities</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="font-medium">Must Visit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Places Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-700 to-slate-900 dark:from-slate-100 dark:to-slate-300 bg-clip-text text-transparent">
              Must-Visit Attractions in {region.name}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover the most interesting and historically significant places in the {region.name} region
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {region.places.map((place, index) => (
              <Card key={place.id} className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
                {/* Place Image */}
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={place.image} 
                    alt={place.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Ranking badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-xl">
                    #{index + 1}
                  </div>
                  
                  {/* Place title on image */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-1">{place.name}</h3>
                    <p className="text-sm opacity-90">{place.description}</p>
                  </div>
                </div>

                <CardContent className="p-8">
                  <Separator className="mb-6" />

                  {/* History Section */}
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                        <Info className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-bold text-lg">Historical Background</h4>
                    </div>
                    <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/50 dark:to-slate-900/50 p-6 rounded-2xl">
                      <p className="text-muted-foreground leading-relaxed">
                        {place.history}
                      </p>
                    </div>
                  </div>

                  {/* Coordinates and Info */}
                  <div className="space-y-4">
                    {place.coordinates && (
                      <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="w-5 h-5 mr-3 text-primary" />
                          <span className="font-medium">GPS Coordinates</span>
                        </div>
                        <div className="font-mono text-sm bg-white dark:bg-slate-800 px-3 py-1 rounded-lg">
                          {place.coordinates.lat.toFixed(4)}, {place.coordinates.lng.toFixed(4)}
                        </div>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
                      <div className="flex items-center text-muted-foreground">
                        <Camera className="w-5 h-5 mr-3 text-primary" />
                        <span className="font-medium">Best for Photography</span>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                        <Star className="w-3 h-3 mr-1" />
                        Highly Recommended
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Travel Tips */}
          <div className="mt-20">
            <Card className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/30 dark:via-purple-950/30 dark:to-pink-950/30 border-0 shadow-2xl">
              <CardContent className="p-10 text-center">
                <div className="mb-6">
                  <span className="text-5xl">🎒</span>
                </div>
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Travel Tips for {region.name}
                </h3>
                <p className="text-muted-foreground mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                  Get helpful information before traveling to the {region.name} region and make the most of your visit
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                  <Link to="/gastronomy">
                    <Button variant="outline" size="lg" className="w-full h-auto p-6 hover:bg-orange-50 hover:text-orange-700 hover:border-orange-300 dark:hover:bg-orange-950/50 transition-all duration-300 hover:scale-105 shadow-lg">
                      <div className="flex flex-col items-center space-y-2">
                        <Camera className="w-6 h-6" />
                        <div className="text-sm font-medium">Local Cuisine</div>
                      </div>
                    </Button>
                  </Link>
                  <Link to="/dictionary">
                    <Button variant="outline" size="lg" className="w-full h-auto p-6 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 dark:hover:bg-blue-950/50 transition-all duration-300 hover:scale-105 shadow-lg">
                      <div className="flex flex-col items-center space-y-2">
                        <Info className="w-6 h-6" />
                        <div className="text-sm font-medium">Useful Phrases</div>
                      </div>
                    </Button>
                  </Link>
                  <Link to="/visa">
                    <Button variant="outline" size="lg" className="w-full h-auto p-6 hover:bg-green-50 hover:text-green-700 hover:border-green-300 dark:hover:bg-green-950/50 transition-all duration-300 hover:scale-105 shadow-lg">
                      <div className="flex flex-col items-center space-y-2">
                        <MapPin className="w-6 h-6" />
                        <div className="text-sm font-medium">Travel Info</div>
                      </div>
                    </Button>
                  </Link>
                  <Link to="/discover">
                    <Button variant="outline" size="lg" className="w-full h-auto p-6 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-300 dark:hover:bg-purple-950/50 transition-all duration-300 hover:scale-105 shadow-lg">
                      <div className="flex flex-col items-center space-y-2">
                        <Star className="w-6 h-6" />
                        <div className="text-sm font-medium">More Regions</div>
                      </div>
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionDetail;