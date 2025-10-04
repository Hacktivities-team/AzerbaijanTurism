import React, { useState } from 'react';
import { ChefHat, Clock, MapPin, Utensils, Search, X, Star, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { gastronomy } from '../data/mockData';

const Gastronomy = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDish, setSelectedDish] = useState(null);

  const filteredDishes = gastronomy.filter(dish =>
    dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dish.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'from-green-500 to-emerald-500';
      case 'Medium': return 'from-yellow-500 to-orange-500';
      case 'Hard': return 'from-red-500 to-pink-500';
      default: return 'from-blue-500 to-cyan-500';
    }
  };

  const closeModal = () => {
    setSelectedDish(null);
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-2xl">
              <ChefHat className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Azerbaijani Cuisine
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the rich flavors and traditions of Azerbaijan's thousand-year-old culinary heritage
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search dishes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-lg rounded-full border-2 focus:border-primary shadow-lg"
            />
          </div>
        </div>

        {/* Dishes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredDishes.map((dish) => (
            <Card 
              key={dish.id} 
              className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden cursor-pointer hover:-translate-y-4 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900"
              onClick={() => setSelectedDish(dish)}
            >
              {/* Dish Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{dish.name}</h3>
                  <p className="text-sm opacity-90">{dish.region}</p>
                </div>
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                    <Clock className="w-3 h-3 mr-1" />
                    {dish.cookingTime}
                  </Badge>
                  <Badge className={`bg-gradient-to-r ${getDifficultyColor(dish.difficulty)} text-white border-0`}>
                    <Award className="w-3 h-3 mr-1" />
                    {dish.difficulty}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                  {dish.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Utensils className="w-4 h-4 mr-1" />
                      {dish.ingredients.length} ingredients
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10 group-hover:bg-primary group-hover:text-white transition-colors">
                    View Recipe
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recipe Modal */}
        {selectedDish && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
            <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300">
              <CardHeader className="relative pb-4">
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg"
                >
                  <X className="w-5 h-5" />
                </Button>
                <div className="pr-16">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`w-12 h-12 bg-gradient-to-br ${getDifficultyColor(selectedDish.difficulty)} rounded-full flex items-center justify-center`}>
                      <ChefHat className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold">{selectedDish.name}</CardTitle>
                      <p className="text-muted-foreground">{selectedDish.description}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6 pt-0">
                {/* Image */}
                <div className="mb-8 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={selectedDish.image} 
                    alt={selectedDish.name}
                    className="w-full h-80 object-cover"
                  />
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 p-4 rounded-xl text-center">
                    <Clock className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                    <div className="font-semibold text-sm text-blue-700 dark:text-blue-300">Cooking Time</div>
                    <div className="text-xs text-muted-foreground">{selectedDish.cookingTime}</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-4 rounded-xl text-center">
                    <Award className="w-6 h-6 mx-auto mb-2 text-green-600" />
                    <div className="font-semibold text-sm text-green-700 dark:text-green-300">Difficulty</div>
                    <div className="text-xs text-muted-foreground">{selectedDish.difficulty}</div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 p-4 rounded-xl text-center">
                    <MapPin className="w-6 h-6 mx-auto mb-2 text-orange-600" />
                    <div className="font-semibold text-sm text-orange-700 dark:text-orange-300">Origin</div>
                    <div className="text-xs text-muted-foreground">{selectedDish.region}</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-4 rounded-xl text-center">
                    <Utensils className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                    <div className="font-semibold text-sm text-purple-700 dark:text-purple-300">Ingredients</div>
                    <div className="text-xs text-muted-foreground">{selectedDish.ingredients.length} items</div>
                  </div>
                </div>

                <Separator className="my-8" />

                {/* Ingredients */}
                <div className="mb-8">
                  <h4 className="font-bold text-xl mb-4 flex items-center">
                    <Utensils className="w-5 h-5 mr-2 text-primary" />
                    Ingredients
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedDish.ingredients.map((ingredient, index) => (
                      <div key={index} className="flex items-center p-3 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors">
                        <div className="w-3 h-3 bg-primary rounded-full mr-3 flex-shrink-0" />
                        <span className="font-medium">{ingredient}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="my-8" />

                {/* Recipe */}
                <div>
                  <h4 className="font-bold text-xl mb-4 flex items-center">
                    <ChefHat className="w-5 h-5 mr-2 text-primary" />
                    Cooking Instructions
                  </h4>
                  <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/50 dark:to-slate-900/50 p-6 rounded-2xl">
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedDish.recipe}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Cultural Info */}
        <div className="mt-16">
          <Card className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 border-0 shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
                <Star className="w-6 h-6 mr-2 text-orange-500" />
                About Azerbaijani Cuisine
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3 text-lg">Cultural Influences</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Azerbaijani cuisine has been shaped by Turkish, Persian, and Caucasian culinary traditions. 
                    Meat, rice, and vegetables are the main ingredients, creating a rich and diverse food culture.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-lg">Traditional Beverages</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Azerbaijani tea, sherbet, and various herbal teas. Black tea served in traditional 
                    armudu glasses is especially a national tradition and symbol of hospitality.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Gastronomy;