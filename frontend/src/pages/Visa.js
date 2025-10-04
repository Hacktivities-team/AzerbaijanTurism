import React, { useState } from 'react';
import { Plane, CheckCircle, Clock, AlertCircle, Search, Globe, CreditCard, FileText, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { visaInfo } from '../data/mockData';

const Visa = () => {
  const [searchCountry, setSearchCountry] = useState('');

  const filterCountries = (countries) => {
    return countries.filter(country =>
      country.toLowerCase().includes(searchCountry.toLowerCase())
    );
  };

  const VisaStatusIcon = ({ type }) => {
    switch (type) {
      case 'visa_free':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'visa_on_arrival':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'e_visa':
        return <Globe className="w-5 h-5 text-blue-500" />;
      default:
        return <AlertCircle className="w-5 h-5 text-red-500" />;
    }
  };

  const getStatusColor = (type) => {
    switch (type) {
      case 'visa_free': return 'from-green-500 to-emerald-500';
      case 'visa_on_arrival': return 'from-yellow-500 to-orange-500';
      case 'e_visa': return 'from-blue-500 to-cyan-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl">
              <Plane className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Visa Information
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Complete visa requirements and travel information for visiting Azerbaijan
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search for your country..."
              value={searchCountry}
              onChange={(e) => setSearchCountry(e.target.value)}
              className="pl-12 h-14 text-lg rounded-full border-2 focus:border-primary shadow-lg"
            />
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="visa-free" className="mb-16">
          <TabsList className="grid w-full grid-cols-3 mb-12 h-auto p-2 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700">
            <TabsTrigger value="visa-free" className="flex flex-col items-center space-y-2 p-4 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-600">
              <CheckCircle className="w-6 h-6" />
              <span className="font-medium">Visa-Free Entry</span>
              <span className="text-xs text-muted-foreground">{visaInfo.countries.visa_free.length} countries</span>
            </TabsTrigger>
            <TabsTrigger value="visa-on-arrival" className="flex flex-col items-center space-y-2 p-4 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-600">
              <Clock className="w-6 h-6" />
              <span className="font-medium">Visa on Arrival</span>
              <span className="text-xs text-muted-foreground">{visaInfo.countries.visa_on_arrival.length} countries</span>
            </TabsTrigger>
            <TabsTrigger value="e-visa" className="flex flex-col items-center space-y-2 p-4 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-600">
              <Globe className="w-6 h-6" />
              <span className="font-medium">Electronic Visa</span>
              <span className="text-xs text-muted-foreground">{visaInfo.countries.e_visa.length} countries</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="visa-free">
            <Card className="border-0 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <CheckCircle className="w-8 h-8" />
                  <div>
                    <div>Visa-Free Entry</div>
                    <div className="text-sm font-normal opacity-90">
                      Citizens of these countries can enter Azerbaijan without a visa
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {filterCountries(visaInfo.countries.visa_free).map((country, index) => (
                    <div key={index} className="group">
                      <div className="flex items-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 border border-green-200 dark:border-green-800">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="font-medium text-green-700 dark:text-green-300">{country}</span>
                      </div>
                    </div>
                  ))}
                </div>
                {filterCountries(visaInfo.countries.visa_free).length === 0 && (
                  <div className="text-center py-12">
                    <Globe className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground text-lg">No countries found matching your search</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="visa-on-arrival">
            <Card className="border-0 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <Clock className="w-8 h-8" />
                  <div>
                    <div>Visa on Arrival</div>
                    <div className="text-sm font-normal opacity-90">
                      Citizens of these countries can obtain a visa upon arrival in Azerbaijan
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {filterCountries(visaInfo.countries.visa_on_arrival).map((country, index) => (
                    <div key={index} className="group">
                      <div className="flex items-center p-4 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 border border-yellow-200 dark:border-yellow-800">
                        <Clock className="w-5 h-5 text-yellow-500 mr-3 flex-shrink-0" />
                        <span className="font-medium text-yellow-700 dark:text-yellow-300">{country}</span>
                      </div>
                    </div>
                  ))}
                </div>
                {filterCountries(visaInfo.countries.visa_on_arrival).length === 0 && (
                  <div className="text-center py-12">
                    <Globe className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground text-lg">No countries found matching your search</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="e-visa">
            <Card className="border-0 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-3 text-2xl">
                  <Globe className="w-8 h-8" />
                  <div>
                    <div>Electronic Visa</div>
                    <div className="text-sm font-normal opacity-90">
                      Citizens of these countries can apply for an electronic visa online
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {filterCountries(visaInfo.countries.e_visa).map((country, index) => (
                    <div key={index} className="group">
                      <div className="flex items-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 border border-blue-200 dark:border-blue-800">
                        <Globe className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                        <span className="font-medium text-blue-700 dark:text-blue-300">{country}</span>
                      </div>
                    </div>
                  ))}
                </div>
                {filterCountries(visaInfo.countries.e_visa).length === 0 && (
                  <div className="text-center py-12">
                    <Globe className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground text-lg">No countries found matching your search</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Requirements and Processing */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Requirements */}
          <Card className="border-0 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center space-x-3">
                <FileText className="w-6 h-6" />
                <span>Visa Requirements</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-3">
                {visaInfo.requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start p-3 bg-muted/50 rounded-lg hover:bg-muted/70 transition-colors">
                    <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                    <span className="text-sm font-medium leading-relaxed">{requirement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Processing Time */}
          <Card className="border-0 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center space-x-3">
                <Clock className="w-6 h-6" />
                <span>Processing Time</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-xl">
                  <div>
                    <div className="font-semibold">Standard</div>
                    <div className="text-sm text-muted-foreground">Regular processing</div>
                  </div>
                  <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                    {visaInfo.processing_time.standard}
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 rounded-xl">
                  <div>
                    <div className="font-semibold">Urgent</div>
                    <div className="text-sm text-muted-foreground">Expedited processing</div>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300">
                    {visaInfo.processing_time.urgent}
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 rounded-xl">
                  <div>
                    <div className="font-semibold">Express</div>
                    <div className="text-sm text-muted-foreground">Same-day service</div>
                  </div>
                  <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    {visaInfo.processing_time.express}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Fees */}
          <Card className="border-0 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-t-lg">
              <CardTitle className="flex items-center space-x-3">
                <CreditCard className="w-6 h-6" />
                <span>Visa Fees</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 rounded-xl">
                  <div>
                    <div className="font-semibold">Single Entry</div>
                    <div className="text-sm text-muted-foreground">30-day validity</div>
                  </div>
                  <div className="text-lg font-bold text-green-600">{visaInfo.fees.single_entry}</div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-xl">
                  <div>
                    <div className="font-semibold">Multiple Entry</div>
                    <div className="text-sm text-muted-foreground">90-day validity</div>
                  </div>
                  <div className="text-lg font-bold text-blue-600">{visaInfo.fees.multiple_entry}</div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 rounded-xl">
                  <div>
                    <div className="font-semibold">Urgent Processing</div>
                    <div className="text-sm text-muted-foreground">Additional fee</div>
                  </div>
                  <div className="text-lg font-bold text-orange-600">{visaInfo.fees.urgent_processing}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Important Notice */}
        <Card className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-amber-950/30 dark:via-orange-950/30 dark:to-red-950/30 border-0 shadow-2xl">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 text-amber-700 dark:text-amber-300">Important Notice</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Visa information may change. Before your trip, please verify the latest requirements 
                  with the Embassy or Consulate of the Republic of Azerbaijan. This information is for 
                  reference purposes only and does not constitute official visa requirements.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
                    <Globe className="w-3 h-3 mr-1" />
                    Always verify current requirements
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                    <FileText className="w-3 h-3 mr-1" />
                    Contact embassy for updates
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Visa;