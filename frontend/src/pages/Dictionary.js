import React, { useState } from 'react';
import { Search, Volume2, BookOpen, Globe, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { dictionary } from '../data/mockData';

const Dictionary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...dictionary.map(cat => cat.category)];

  const filteredPhrases = dictionary.flatMap(category => 
    category.phrases.map(phrase => ({ ...phrase, category: category.category }))
  ).filter(phrase => {
    const matchesSearch = phrase.az.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         phrase.en.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || phrase.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const playPronunciation = (text) => {
    // Mock function for pronunciation
    console.log('Playing pronunciation for:', text);
    // In a real app, this would use speech synthesis
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'az-AZ';
      speechSynthesis.speak(utterance);
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Greetings': return '👋';
      case 'Directions': return '🗺️';
      case 'At the Restaurant': return '🍽️';
      case 'Numbers': return '🔢';
      default: return '💬';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Greetings': return 'from-blue-500 to-cyan-500';
      case 'Directions': return 'from-green-500 to-emerald-500';
      case 'At the Restaurant': return 'from-orange-500 to-red-500';
      case 'Numbers': return 'from-purple-500 to-pink-500';
      default: return 'from-slate-500 to-slate-600';
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Travel Phrasebook
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Essential Azerbaijani phrases and their pronunciation to help you communicate during your journey
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-6">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search for phrases..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-14 text-lg rounded-full border-2 focus:border-primary shadow-lg"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="lg"
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category 
                    ? 'shadow-lg' 
                    : 'hover:shadow-md'
                }`}
              >
                {category !== 'all' && (
                  <span className="mr-2 text-lg">
                    {getCategoryIcon(category)}
                  </span>
                )}
                {category === 'all' ? 'All Categories' : category}
              </Button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {filteredPhrases.length === 0 ? (
            <Card className="text-center py-16 border-0 shadow-lg">
              <CardContent>
                <BookOpen className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">No phrases found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms or select a different category
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {filteredPhrases.map((phrase, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-1 bg-gradient-to-r from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 bg-gradient-to-br ${getCategoryColor(phrase.category)} rounded-full flex items-center justify-center shadow-lg`}>
                          <span className="text-lg">{getCategoryIcon(phrase.category)}</span>
                        </div>
                        <Badge variant="secondary" className="text-sm font-medium">
                          {phrase.category}
                        </Badge>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => playPronunciation(phrase.az)}
                        className="text-primary hover:bg-primary/10 rounded-full p-3 hover:scale-110 transition-transform"
                      >
                        <Volume2 className="w-5 h-5" />
                      </Button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Globe className="w-4 h-4 text-red-500" />
                          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                            Azerbaijani
                          </h4>
                        </div>
                        <p className="text-2xl font-bold text-red-600">{phrase.az}</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <MessageCircle className="w-4 h-4 text-blue-500" />
                          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                            English
                          </h4>
                        </div>
                        <p className="text-2xl font-semibold text-blue-600">{phrase.en}</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Volume2 className="w-4 h-4 text-green-500" />
                          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                            Pronunciation
                          </h4>
                        </div>
                        <p className="text-2xl font-mono text-green-600 bg-green-50 dark:bg-green-950/30 px-3 py-1 rounded-lg">
                          [{phrase.pronunciation}]
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Tips */}
        <div className="mt-20">
          <Card className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/30 dark:to-green-950/30 border-0 shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
                <Globe className="w-6 h-6 mr-2 text-blue-500" />
                Pronunciation Tips
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg flex items-center">
                    📚 Basic Rules
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>"Ə"</strong> sounds like "a" in "about"</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>"X"</strong> sounds like "ch" in German "ach"</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>"Q"</strong> is a guttural sound from the throat</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span><strong>"Ü"</strong> sounds like "u" in French "tu"</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg flex items-center">
                    💡 Helpful Tips
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    When speaking with locals, speak slowly and don't hesitate to repeat. 
                    Azerbaijanis are hospitable people and will be happy to help you. 
                    A smile and effort to speak the language will be greatly appreciated!
                  </p>
                  <div className="mt-4 p-4 bg-white/60 dark:bg-slate-800/60 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      💭 <strong>Cultural Note:</strong> Azerbaijanis often use hand gestures while speaking. 
                      Don't worry if you don't understand everything - context and gestures will help!
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dictionary;