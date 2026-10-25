// Dhunki Restaurant - Authentic Menu Data directly extracted from restaurant tariff cards
export const menuCategories = [
  { id: 'all', name: 'Full Menu' },
  { id: 'tandoor', name: 'Tandoor & Kabab' },
  { id: 'biryani', name: 'Biryani & Rice' },
  { id: 'mutton', name: 'Mutton Handi & Curry' },
  { id: 'chicken', name: 'Chicken Specialties' },
  { id: 'veg', name: 'Paneer & Veg Main' },
  { id: 'dal', name: 'Dal & Tadka' },
  { id: 'breads', name: 'Tandoor & Breads' },
  { id: 'rolls', name: 'Rolls & Fast Food' },
  { id: 'pizza-pasta', name: 'Pizza, Pasta & Sandwiches' },
  { id: 'momos', name: 'Momos' },
  { id: 'beverages', name: 'Beverages & Mojitos' }
];

export const menuItems = [
  // Tandoor & Kabab
  {
    category: 'tandoor',
    name: 'Reshmi Tikka',
    description: 'Tender chicken morsels marinated in cashew, cream, and gentle Indian spices cooked over charcoal.',
    price: 'Rs. 340',
    type: 'non-veg',
    highlight: true
  },
  {
    category: 'tandoor',
    name: 'Chicken Tikka',
    description: 'Boneless chicken cubes spiced with hung curd, roasted cumin, and Kashmiri chili.',
    price: 'Rs. 340',
    type: 'non-veg'
  },
  {
    category: 'tandoor',
    name: 'Chicken Pahadi Kabab',
    description: 'Fresh mint, coriander, ginger, and green chili marinated succulent chicken skewers.',
    price: 'Rs. 340',
    type: 'non-veg'
  },
  {
    category: 'tandoor',
    name: 'Chicken Tandoor',
    description: 'Whole spring chicken marinated overnight in aromatic clay oven tandoori spices.',
    price: 'Half: Rs. 280 / Full: Rs. 520',
    type: 'non-veg',
    highlight: true
  },
  {
    category: 'tandoor',
    name: 'Paneer Tikka',
    description: 'Fresh farm cottage cheese cubes skewered with bell peppers, onion petals, and tandoori rub.',
    price: 'Rs. 340',
    type: 'veg'
  },
  {
    category: 'tandoor',
    name: 'Seekh Kabab',
    description: 'Minced spiced meat blend skewered and broiled over smoldering coals.',
    price: 'Rs. 350',
    type: 'non-veg'
  },
  {
    category: 'tandoor',
    name: 'Lasooni Chicken Tikka',
    description: 'Infused with roasted garlic essence, crushed coriander seeds, and creamy marinade.',
    price: 'Rs. 350',
    type: 'non-veg'
  },

  // Biryani & Rice
  {
    category: 'biryani',
    name: 'Chicken Dum Biryani',
    description: 'Fragrant long-grain aged basmati layered with spiced chicken, fried onions, and saffron essence.',
    price: 'Half: Rs. 149 / Full: Rs. 240',
    type: 'non-veg',
    highlight: true
  },
  {
    category: 'biryani',
    name: 'Mutton Biryani',
    description: 'Slow-cooked succulent mutton cuts dum-sealed with spiced basmati rice and whole spices.',
    price: 'Half: Rs. 199 / Full: Rs. 349',
    type: 'non-veg',
    highlight: true
  },
  {
    category: 'biryani',
    name: 'Veg Biryani',
    description: 'Assorted garden vegetables and aromatic basmati rice cooked on slow dum.',
    price: 'Rs. 230',
    type: 'veg'
  },
  {
    category: 'biryani',
    name: 'Egg Biryani',
    description: 'Golden shallow-fried boiled eggs simmered in rich biryani spices and fragrant rice.',
    price: 'Rs. 220',
    type: 'egg'
  },
  {
    category: 'biryani',
    name: 'Paneer Biryani',
    description: 'Grilled paneer cubes layered with biryani masala and saffron basmati.',
    price: 'Rs. 240',
    type: 'veg'
  },
  {
    category: 'biryani',
    name: 'Jeera Rice',
    description: 'Basmati rice tempered with golden roasted cumin seeds and desi ghee.',
    price: 'Half: Rs. 80 / Full: Rs. 120',
    type: 'veg'
  },
  {
    category: 'biryani',
    name: 'Veg Fried Rice',
    description: 'Wok-tossed rice with crisp diced bell peppers, carrots, beans, and spring onion.',
    price: 'Half: Rs. 120 / Full: Rs. 199',
    type: 'veg'
  },
  {
    category: 'biryani',
    name: 'Chicken Egg Fried Rice',
    description: 'Fluffy scrambled eggs and shredded chicken tossed with seasoned long-grain rice.',
    price: 'Half: Rs. 130 / Full: Rs. 210',
    type: 'non-veg'
  },
  {
    category: 'biryani',
    name: 'Matar Pulao',
    description: 'Delicate basmati pulao flavored with tender green peas and sweet whole spices.',
    price: 'Rs. 180',
    type: 'veg'
  },

  // Mutton Specialties
  {
    category: 'mutton',
    name: 'Mutton Handi',
    description: 'Traditional slow clay pot earthen preparation with rich bone-in mutton in rustic gravy.',
    price: '2 Pcs: Rs. 289 / 4 Pcs: Rs. 520',
    type: 'non-veg',
    highlight: true
  },
  {
    category: 'mutton',
    name: 'Mutton Rogan Josh',
    description: 'Aromatic Kashmiri delicacy flavored with alkanet root, fennel powder, and dry ginger.',
    price: '2 Pcs: Rs. 289 / 4 Pcs: Rs. 520',
    type: 'non-veg',
    highlight: true
  },
  {
    category: 'mutton',
    name: 'Mutton Kassa',
    description: 'Rich, thick caramelized onion and garlic reduction coating juicy mutton cuts.',
    price: '2 Pcs: Rs. 240 / 4 Pcs: Rs. 449',
    type: 'non-veg'
  },
  {
    category: 'mutton',
    name: 'Mutton Curry',
    description: 'Homestyle slow-simmered goat meat in flavorful spiced gravy.',
    price: '2 Pcs: Rs. 220 / 4 Pcs: Rs. 410',
    type: 'non-veg'
  },
  {
    category: 'mutton',
    name: 'Mutton Do Pyaza',
    description: 'Prepared with two stages of sweet onion addition and whole crushed coriander.',
    price: '2 Pcs: Rs. 279 / 4 Pcs: Rs. 489',
    type: 'non-veg'
  },

  // Chicken Specialties
  {
    category: 'chicken',
    name: 'Murga Musallam',
    description: 'Royal Mughlai centerpiece dish featuring rich gravy, eggs, and ground spice blend.',
    price: '2 Pcs: Rs. 350 / 4 Pcs: Rs. 599',
    type: 'non-veg',
    highlight: true
  },
  {
    category: 'chicken',
    name: 'Handi Chicken',
    description: 'Clay-pot earthen cooked chicken with whole crushed spices and buttery tomato onion base.',
    price: '4 Pcs: Rs. 299 / 8 Pcs: Rs. 550',
    type: 'non-veg',
    highlight: true
  },
  {
    category: 'chicken',
    name: 'Dehati Chicken',
    description: 'Rustic Jharkhand countryside style chicken stewed in cold-pressed mustard oil with whole garlic bulbs.',
    price: '12 Pcs: Rs. 649',
    type: 'non-veg',
    highlight: true
  },
  {
    category: 'chicken',
    name: 'Chicken Butter Masala',
    description: 'Charcoal-grilled chicken pieces simmered in silky smooth butter-tomato makhani sauce.',
    price: '4 Pcs: Rs. 330',
    type: 'non-veg'
  },
  {
    category: 'chicken',
    name: 'Chicken Tikka Butter Masala',
    description: 'Smoky chicken tikka folded into decadent fenugreek-infused cream sauce.',
    price: '8 Pcs: Rs. 380',
    type: 'non-veg'
  },
  {
    category: 'chicken',
    name: 'Kadai Chicken',
    description: 'Wok-cooked chicken with chunky bell peppers, onions, and freshly pounded kadai spices.',
    price: '4 Pcs: Rs. 290 / 8 Pcs: Rs. 540',
    type: 'non-veg'
  },
  {
    category: 'chicken',
    name: 'Chicken Kassa',
    description: 'Spicy brown caramelized onion and tomato sauce cooked down until deeply savory.',
    price: '4 Pcs: Rs. 270',
    type: 'non-veg'
  },
  {
    category: 'chicken',
    name: 'Chicken Lababdar',
    description: 'Creamy Mughlai gravy with grated paneer and spiced chicken chunks.',
    price: '8 Pcs: Rs. 799',
    type: 'non-veg'
  },
  {
    category: 'chicken',
    name: 'Chicken Curry',
    description: 'Classic homestyle Indian chicken curry with light balanced spice profile.',
    price: '2 Pcs: Rs. 140 / 4 Pcs: Rs. 240',
    type: 'non-veg'
  },

  // Paneer & Veg Main Course
  {
    category: 'veg',
    name: 'Dhunki Special Mushroom Masala',
    description: 'Chef signature fresh button mushrooms sautéed in a fragrant secret spiced gravy.',
    price: 'Rs. 290',
    type: 'veg',
    highlight: true
  },
  {
    category: 'veg',
    name: 'Paneer Butter Masala',
    description: 'Velvety rich tomato butter cream reduction with melt-in-mouth cottage cheese cubes.',
    price: 'Half: Rs. 120 / Full: Rs. 230',
    type: 'veg',
    highlight: true
  },
  {
    category: 'veg',
    name: 'Paneer Tikka Butter Masala',
    description: 'Char-grilled cottage cheese tikka tossed into a rich, luscious buttery masala sauce.',
    price: 'Rs. 370',
    type: 'veg'
  },
  {
    category: 'veg',
    name: 'Paneer Malai Kofta',
    description: 'Stuffed cottage cheese and dry fruit dumplings in a velvety cashew cream gravy.',
    price: 'Rs. 320',
    type: 'veg'
  },
  {
    category: 'veg',
    name: 'Kadai Paneer',
    description: 'Cottage cheese cubes tossed with capsicum and roasted coriander in a brass wok.',
    price: 'Rs. 270',
    type: 'veg'
  },
  {
    category: 'veg',
    name: 'Shahi Paneer',
    description: 'Royal white cashew and almond gravy flavored with cardamom and kewra.',
    price: 'Rs. 280',
    type: 'veg'
  },
  {
    category: 'veg',
    name: 'Mix Veg',
    description: 'Assorted seasonal vegetables prepared in homestyle north Indian masala.',
    price: 'Rs. 199',
    type: 'veg'
  },

  // Dal & Tadka
  {
    category: 'dal',
    name: 'Dal Makhani',
    description: 'Slow-simmered whole black lentils and kidney beans cooked overnight with butter and cream.',
    price: 'Rs. 170',
    type: 'veg',
    highlight: true
  },
  {
    category: 'dal',
    name: 'Dal Fry (Yellow)',
    description: 'Golden toor dal cooked with onion, tomato, garlic, and fresh green chilies.',
    price: 'Half: Rs. 75 / Full: Rs. 130',
    type: 'veg'
  },
  {
    category: 'dal',
    name: 'Butter Dal Tadka',
    description: 'Smoky yellow dal tempered with golden garlic, cumin seeds, and generous desi butter.',
    price: 'Rs. 160',
    type: 'veg'
  },
  {
    category: 'dal',
    name: 'Paneer Tadka',
    description: 'Flavorful tempered dal infused with soft paneer cubes.',
    price: 'Rs. 180',
    type: 'veg'
  },

  // Breads
  {
    category: 'breads',
    name: 'Butter Naan',
    description: 'Soft leavened refined flour flatbread cooked in tandoor and brushed with farm butter.',
    price: 'Rs. 50',
    type: 'veg'
  },
  {
    category: 'breads',
    name: 'Garlic Naan',
    description: 'Tandoori naan topped with roasted chopped garlic, fresh coriander, and melted butter.',
    price: 'Rs. 70',
    type: 'veg',
    highlight: true
  },
  {
    category: 'breads',
    name: 'Lachha Paratha',
    description: 'Multi-layered crispy whole wheat flatbread baked golden in the clay oven.',
    price: 'Rs. 50',
    type: 'veg'
  },
  {
    category: 'breads',
    name: 'Masala Kulcha',
    description: 'Stuffed flatbread with spiced potatoes, herbs, and carom seeds.',
    price: 'Rs. 69',
    type: 'veg'
  },
  {
    category: 'breads',
    name: 'Paneer Kulcha',
    description: 'Crumbled cottage cheese and herb stuffed oven-baked kulcha.',
    price: 'Rs. 79',
    type: 'veg'
  },
  {
    category: 'breads',
    name: 'Tandoori Roti',
    description: 'Traditional crisp whole wheat bread baked against the hot walls of the clay tandoor.',
    price: 'Rs. 15 (Plain) / Rs. 25 (Butter)',
    type: 'veg'
  },

  // Rolls & Fast Food
  {
    category: 'rolls',
    name: 'Dhunki Special Roll',
    description: 'Chef special jumbo roll stuffed with assorted tandoori fillings, sauces, and fresh onions.',
    price: 'Rs. 170',
    type: 'non-veg',
    highlight: true
  },
  {
    category: 'rolls',
    name: 'Egg Chicken Roll',
    description: 'Egg-layered flaky paratha wrap filled with spiced sautéed chicken and tangy chutneys.',
    price: 'Rs. 130',
    type: 'non-veg'
  },
  {
    category: 'rolls',
    name: 'Paneer Roll',
    description: 'Crisp paratha wrap loaded with spiced cottage cheese cubes and mint sauce.',
    price: 'Rs. 90',
    type: 'veg'
  },
  {
    category: 'rolls',
    name: 'Veg Roll',
    description: 'Crispy wrap filled with seasoned vegetables, potatoes, and spices.',
    price: 'Rs. 60',
    type: 'veg'
  },

  // Pizza, Pasta & Sandwiches
  {
    category: 'pizza-pasta',
    name: 'Loaded Pizza',
    description: 'Generously loaded with cheese, bell peppers, onions, mushrooms, and choice toppings.',
    price: 'Medium: Rs. 350 / Large: Rs. 400',
    type: 'veg'
  },
  {
    category: 'pizza-pasta',
    name: 'Paneer Pizza',
    description: 'Stone-baked pizza crust topped with spiced paneer cubes and melted mozzarella.',
    price: 'Rs. 290',
    type: 'veg'
  },
  {
    category: 'pizza-pasta',
    name: 'Chicken White Sauce Pasta',
    description: 'Creamy Italian alfredo penne pasta with garlic herbs, parmesan, and roasted chicken.',
    price: 'Rs. 220',
    type: 'non-veg'
  },
  {
    category: 'pizza-pasta',
    name: 'Paneer Grill Sandwich',
    description: 'Toasted multi-tier sandwich filled with spiced marinated paneer and cheese.',
    price: 'Rs. 160',
    type: 'veg'
  },

  // Momos
  {
    category: 'momos',
    name: 'Chicken Steamed Momos',
    description: 'Delicate hand-folded dumplings packed with juicy minced chicken served with spicy chutney.',
    price: '8 Pcs: Rs. 120',
    type: 'non-veg'
  },
  {
    category: 'momos',
    name: 'Kurkure Momos',
    description: 'Crunchy battered momos fried golden crisp and dusted with peri-peri masala.',
    price: '8 Pcs: Rs. 180 (Veg) / Rs. 200 (Non-Veg)',
    type: 'veg',
    highlight: true
  },

  // Beverages & Mojitos
  {
    category: 'beverages',
    name: 'Virgin Mojito',
    description: 'Refreshing crushed fresh mint leaves, lime wedges, simple syrup, and sparkling soda.',
    price: 'Rs. 140',
    type: 'veg'
  },
  {
    category: 'beverages',
    name: 'Blue Lagoon',
    description: 'Vibrant citrus curacao mocktail with lemon juice and fizzy club soda.',
    price: 'Rs. 130',
    type: 'veg'
  },
  {
    category: 'beverages',
    name: 'Cold Coffee',
    description: 'Thick and creamy blended espresso with chilled milk and chocolate drizzle.',
    price: 'Rs. 120',
    type: 'veg'
  },
  {
    category: 'beverages',
    name: 'Masala Cold Drink',
    description: 'Chilled cola or soda spiked with roasted cumin, black salt, and tangy chaat spices.',
    price: 'Rs. 60',
    type: 'veg'
  }
];
