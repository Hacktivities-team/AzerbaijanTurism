export const regions = [
  {
    id: 'baku',
    name: 'Baku',
    description: 'Capital and largest city of Azerbaijan',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
    places: [
      {
        id: 'old-city',
        name: 'Old City (Icherisheher)',
        description: 'Ancient walled city of Baku',
        history: 'Built in the 12th century, this ancient fortress surrounded by walls is the historic core of Baku. Listed as a UNESCO World Heritage Site.',
        image: 'https://images.unsplash.com/photo-1542640244-6e050b8dae7b?w=600',
        coordinates: { lat: 40.3656, lng: 49.8379 }
      },
      {
        id: 'flame-towers',
        name: 'Flame Towers',
        description: 'Modern symbol of Baku',
        history: 'Completed in 2012, these three 190-meter tall towers are the most striking example of modern architecture in Azerbaijan.',
        image: 'https://images.unsplash.com/photo-1597149389594-c0a4b688b9a8?w=600',
        coordinates: { lat: 40.3629, lng: 49.8367 }
      },
      {
        id: 'maiden-tower',
        name: 'Maiden Tower',
        description: 'Most famous historic monument of Baku',
        history: 'Built in the 7th-8th centuries, this 29.5-meter stone tower holds a special place in Azerbaijani literature and culture.',
        image: 'https://images.unsplash.com/photo-1585747733457-bf3afde2bbca?w=600',
        coordinates: { lat: 40.3665, lng: 49.8417 }
      }
    ]
  },
  {
    id: 'ganja',
    name: 'Ganja',
    description: 'Second largest city of Azerbaijan',
    image: 'https://images.unsplash.com/photo-1541963463532-d68292c34d19?w=800',
    places: [
      {
        id: 'nizami-mausoleum',
        name: 'Nizami Mausoleum',
        description: 'Tomb of the great poet Nizami Ganjavi',
        history: 'Memorial to the 12th-century poet Nizami Ganjavi. The mausoleum complex was reconstructed in 1947.',
        image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600',
        coordinates: { lat: 40.6821, lng: 46.3604 }
      },
      {
        id: 'bottle-house',
        name: 'Bottle House',
        description: 'House built from 50,000 glass bottles',
        history: 'Built in 1966 by Ibrahim Jafarov, this unique house is constructed from 50,000 glass bottles and colorful stones.',
        image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600',
        coordinates: { lat: 40.6909, lng: 46.3518 }
      }
    ]
  },
  {
    id: 'sheki',
    name: 'Sheki',
    description: 'Ancient Silk Road city',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    places: [
      {
        id: 'sheki-palace',
        name: 'Sheki Khan Palace',
        description: '18th-century architectural masterpiece',
        history: 'Built in 1797 by Sheki Khan Mubariz Muhammad Khan. Famous for its intricate stained glass work and frescoes.',
        image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=600',
        coordinates: { lat: 41.2015, lng: 47.1705 }
      },
      {
        id: 'sheki-fortress',
        name: 'Sheki Fortress',
        description: 'Ancient defensive structure',
        history: 'Built between 15th-18th centuries, this defensive complex surrounds the historic center of the city.',
        image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600',
        coordinates: { lat: 41.2025, lng: 47.1695 }
      }
    ]
  },
  {
    id: 'gabala',
    name: 'Gabala',
    description: 'Among the peaks of the Caucasus',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    places: [
      {
        id: 'tufandag',
        name: 'Tufandag Mountain Resort',
        description: 'Premier winter sports center',
        history: 'Azerbaijan\'s most modern winter sports complex. Operating since 2013, it welcomes visitors year-round.',
        image: 'https://images.unsplash.com/photo-1551524164-687a55dd1126?w=600',
        coordinates: { lat: 40.9886, lng: 47.8544 }
      },
      {
        id: 'gabala-shooting-club',
        name: 'Gabala Shooting Club',
        description: 'International-level shooting complex',
        history: 'Opened in 2005, this modern shooting center hosts international competitions.',
        image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600',
        coordinates: { lat: 40.9766, lng: 47.8427 }
      }
    ]
  },
  {
    id: 'shamakhi',
    name: 'Shamakhi',
    description: 'Ancient capital of the Shirvanshah dynasty',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    places: [
      {
        id: 'juma-mosque',
        name: 'Juma Mosque',
        description: 'One of the largest mosques in the Caucasus',
        history: 'Built in the 8th century and reconstructed several times. The current building was opened in 2013.',
        image: 'https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=600',
        coordinates: { lat: 40.6314, lng: 48.6412 }
      },
      {
        id: 'yeddi-gumbez',
        name: 'Seven Domes',
        description: 'Shirvanshah dynasty cemetery',
        history: 'Cemetery complex where members of the Shirvanshah dynasty were buried during the 15th-18th centuries.',
        image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600',
        coordinates: { lat: 40.6198, lng: 48.6389 }
      }
    ]
  }
];

export const dictionary = [
  {
    category: 'Greetings',
    phrases: [
      { az: 'Salam', en: 'Hello', pronunciation: 'Sa-lam' },
      { az: 'Sağ olun', en: 'Thank you', pronunciation: 'Sagh o-lun' },
      { az: 'Bağışlayın', en: 'Excuse me', pronunciation: 'Ba-ghish-la-yin' },
      { az: 'Xoş gəlmisiniz', en: 'Welcome', pronunciation: 'Khosh gel-mi-si-niz' },
      { az: 'Sağ olun', en: 'Goodbye', pronunciation: 'Sagh o-lun' },
      { az: 'Necəsiniz?', en: 'How are you?', pronunciation: 'Ne-je-si-niz' }
    ]
  },
  {
    category: 'Directions',
    phrases: [
      { az: 'Haradadır?', en: 'Where is?', pronunciation: 'Ha-ra-da-dir' },
      { az: 'Sağa', en: 'Right', pronunciation: 'Sa-gha' },
      { az: 'Sola', en: 'Left', pronunciation: 'So-la' },
      { az: 'Düz irəli', en: 'Straight ahead', pronunciation: 'Duz i-rə-li' },
      { az: 'Yaxındadır', en: 'It\'s nearby', pronunciation: 'Ya-khin-da-dir' },
      { az: 'Uzaqdadır', en: 'It\'s far', pronunciation: 'U-zaq-da-dir' }
    ]
  },
  {
    category: 'At the Restaurant',
    phrases: [
      { az: 'Menyu', en: 'Menu', pronunciation: 'Men-yu' },
      { az: 'Hesabı gətirin', en: 'Bring the bill', pronunciation: 'He-sa-bi gə-ti-rin' },
      { az: 'Ləzzətlidir', en: 'It\'s delicious', pronunciation: 'Ləz-zət-li-dir' },
      { az: 'Su istəyirəm', en: 'I want water', pronunciation: 'Su is-tə-yi-rəm' },
      { az: 'Çay istəyirəm', en: 'I want tea', pronunciation: 'Chai is-tə-yi-rəm' },
      { az: 'Hesab, zəhmət olmasa', en: 'The check, please', pronunciation: 'He-sab zəh-mət ol-ma-sa' }
    ]
  },
  {
    category: 'Numbers',
    phrases: [
      { az: 'Bir', en: 'One', pronunciation: 'Bir' },
      { az: 'İki', en: 'Two', pronunciation: 'I-ki' },
      { az: 'Üç', en: 'Three', pronunciation: 'Uch' },
      { az: 'Dörd', en: 'Four', pronunciation: 'Dord' },
      { az: 'Beş', en: 'Five', pronunciation: 'Besh' },
      { az: 'Neçə?', en: 'How much?', pronunciation: 'Ne-che' }
    ]
  }
];

export const gastronomy = [
  {
    id: 'plov',
    name: 'Plov (Pilaf)',
    description: 'The crown jewel of Azerbaijani cuisine',
    image: 'https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?w=600',
    ingredients: ['Rice', 'Meat (lamb or beef)', 'Onions', 'Butter', 'Spices', 'Saffron'],
    recipe: 'First, the meat is browned, then rice is added and cooked using a special method that creates a golden crust at the bottom.',
    region: 'National Dish',
    cookingTime: '2 hours',
    difficulty: 'Medium'
  },
  {
    id: 'dolma',
    name: 'Dolma',
    description: 'Grape leaves stuffed with delicious filling',
    image: 'https://images.unsplash.com/photo-1551326844-4df70f78d0e9?w=600',
    ingredients: ['Grape leaves', 'Ground meat', 'Rice', 'Fresh herbs', 'Spices', 'Onions'],
    recipe: 'Ground meat and rice are mixed with herbs and spices, wrapped in grape leaves, and slow-cooked.',
    region: 'National Dish',
    cookingTime: '1.5 hours',
    difficulty: 'Medium'
  },
  {
    id: 'kebab',
    name: 'Kebab',
    description: 'Traditional grilled meat delicacy',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600',
    ingredients: ['Lamb meat', 'Onions', 'Spices', 'Salt', 'Black pepper'],
    recipe: 'Meat is specially prepared with spices and grilled on skewers over an open flame.',
    region: 'National Dish',
    cookingTime: '45 minutes',
    difficulty: 'Easy'
  },
  {
    id: 'qutab',
    name: 'Qutab',
    description: 'Thin flatbread with savory filling',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600',
    ingredients: ['Thin dough', 'Herbs', 'Cheese', 'Meat (optional)', 'Onions'],
    recipe: 'Thin dough is filled with herbs, cheese, or meat, then cooked on a griddle until crispy.',
    region: 'Popular snack',
    cookingTime: '30 minutes',
    difficulty: 'Easy'
  },
  {
    id: 'dushbara',
    name: 'Dushbara',
    description: 'Tiny dumplings in clear broth',
    image: 'https://images.unsplash.com/photo-1557909114-f43f324c3f45?w=600',
    ingredients: ['Small pasta dough', 'Ground meat', 'Onions', 'Clear broth', 'Herbs'],
    recipe: 'Tiny dumplings are filled with seasoned meat and cooked in a clear, flavorful broth.',
    region: 'Winter favorite',
    cookingTime: '1 hour',
    difficulty: 'Hard'
  },
  {
    id: 'baklava',
    name: 'Baklava',
    description: 'Sweet pastry with nuts and honey',
    image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=600',
    ingredients: ['Phyllo dough', 'Walnuts', 'Almonds', 'Honey', 'Sugar syrup', 'Butter'],
    recipe: 'Layers of thin pastry are filled with nuts, baked until golden, then soaked in sweet syrup.',
    region: 'Traditional dessert',
    cookingTime: '1 hour',
    difficulty: 'Hard'
  }
];

export const visaInfo = {
  countries: {
    visa_free: [
      'Turkey', 'Russia', 'Georgia', 'Iran', 'Belarus', 'Moldova', 
      'Ukraine', 'Kazakhstan', 'Kyrgyzstan', 'Uzbekistan', 'Tajikistan'
    ],
    visa_on_arrival: [
      'India', 'Thailand', 'Maldives', 'Nepal', 'Sri Lanka', 'Indonesia'
    ],
    e_visa: [
      'United States', 'China', 'Germany', 'France', 'United Kingdom', 
      'Italy', 'Spain', 'Canada', 'Australia', 'Japan', 'South Korea'
    ]
  },
  requirements: [
    'Valid passport (at least 6 months validity)',
    'Completed visa application',
    'Color photograph',
    'Travel insurance',
    'Hotel confirmation',
    'Financial documents',
    'Return ticket (for some nationalities)'
  ],
  processing_time: {
    standard: '5-10 business days',
    urgent: '2-3 business days',
    express: '24 hours'
  },
  fees: {
    single_entry: '$20',
    multiple_entry: '$35',
    urgent_processing: '+$25'
  }
};