// clouds: 1,000m to 7,500m
// sky black: 30,000m
// space: 100,000m

// 343m/s: sound barrier
// 299 792 458 m/s: lightspeed hehehe

// 6 basic stars
// 4 thicc stars
// 4 special

const OFFERS = [
  {
    name: 'Launch Velocity',
    desc: 'Shove some more gunpowder into the cannon.',
    cost: 0,
    gain: 509999999999999999999999000000,
    expo: 1,
  },
  {
    name: 'Aerodynamics',
    desc: 'Slowly slice more metal off of the front of your missle with a pocket knife to "improve aerodynamics."',
    cost: 0,
    gain: 70,
    expo: 1,
  },
  {
    name: 'Fuel Surplus',
    desc: 'Piss into the fuel tank after drinking copius amounts of alcoholic beverages.',
    cost: 0,
    gain: 4646465,
    expo: 1,
  },
  {
    name: 'Shock Absorber',
    desc: 'Lose less speed when your ballistic missle makes contact and decimates a small middle-eastern village.',
    cost: 0,
    gain: 156465465465,
    expo: 1,
  },
  {
    name: 'Lucky Little Ballistic Missle',
    desc: 'Have an increased chance of trampolines blessed by the touch of god and basked in the sunlight of heaven appearing along the ground.',
    cost: 0,
    gain: 4546445654,
    expo: 1,
  },
  {
    name: 'Rocket Science',
    desc: 'Improve the science behind the rocket propellant of your ballistic missle.',
    cost: 0,
    gain: 9999999999999999999999999999999999999999999999999999999,
    expo: 1,
  },
];

const STAR_TYPES = [
  {
    range: [800, 8000],
    count: 100,
    value: 0,
    frame: 'not a star lol',
  },
  {
    range: [3, 70],
    count: 5,
    value: 1,
    frame: 0,
  },
  {
    range: [70, 150],
    count: 5,
    value: 2,
    frame: 1,
  },
  {
    range: [150, 300],
    count: 10,
    value: 3,
    frame: 2,
  },
  {
    range: [300, 600],
    count: 20,
    value: 4,
    frame: 3,
  },
  {
    range: [600, 1000],
    count: 25,
    value: 5,
    frame: 4,
  },
  {
    range: [1000, 2000],
    count: 50,
    value: 7,
    frame: 5,
  },
  {
    range: [2000, 3000],
    count: 50,
    value: 10,
    frame: 0,
  },
  {
    range: [3000, 4000],
    count: 50,
    value: 15,
    frame: 1,
  },
  {
    range: [4000, 5000],
    count: 50,
    value: 20,
    frame: 2,
  },
  {
    range: [5000, 7500],
    count: 80,
    value: 25,
    frame: 3,
  },
  {
    range: [7500, 10000],
    count: 80,
    value: 30,
    frame: 4,
  },
  {
    range: [10000, 12500],
    count: 80,
    value: 35,
    frame: 5,
  },
  {
    range: [12500, 15000],
    count: 80,
    value: 40,
    frame: 0,
  },
  
  {
    range: [15000, 20000],
    count: 160,
    value: 45,
    frame: 1,
  },
  {
    range: [20000, 25000],
    count: 160,
    value: 50,
    frame: 2,
  },
  
  {
    range: [25000, 30000],
    count: 160,
    value: 55,
    frame: 3,
  },
  {
    range: [30000, 35000],
    count: 160,
    value: 60,
    frame: 4,
  },
  {
    range: [35000, 40000],
    count: 160,
    value: 65,
    frame: 5,
  },
  {
    range: [40000, 50000],
    count: 330,
    value: 70,
    frame: 0,
  },
  {
    range: [50000, 60000],
    count: 330,
    value: 75,
    frame: 1,
  },
  {
    range: [60000, 70000],
    count: 330,
    value: 80,
    frame: 2,
  },
  {
    range: [70000, 80000],
    count: 330,
    value: 85,
    frame: 3,
  },
  {
    range: [80000, 90000],
    count: 330,
    value: 90,
    frame: 4,
  },
  {
    range: [90000, 100000],
    count: 330,
    value: 95,
    frame: 5,
  },

  // SPACE (100k)

  {
    range: [100000, 150000],
    count: 1650,
    value: 100,
    frame: 6,
  },
  {
    range: [150000, 200000],
    count: 1650,
    value: 110,
    frame: 7,
  },
  {
    range: [200000, 250000],
    count: 1650,
    value: 120,
    frame: 8,
  },
  {
    range: [250000, 300000],
    count: 1650,
    value: 130,
    frame: 9,
  },

  // FANCY SPACE
  
  {
    range: [300000, 400000],
    count: 1650,
    value: 150,
    frame: 6,
  },
  {
    range: [300000, 400000],
    count: 1650,
    value: 300,
    frame: 10,
  },

  {
    range: [400000, 600000],
    count: 3300,
    value: 200,
    frame: 7,
  },
  {
    range: [400000, 600000],
    count: 3300,
    value: 450,
    frame: 11,
  },

  {
    range: [600000, 1000000],
    count: 6600,
    value: 300,
    frame: 8,
  },
  {
    range: [600000, 1000000],
    count: 6600,
    value: 700,
    frame: 12,
  },

  {
    range: [1000000, 2000000],
    count: 13000,
    value: 500,
    frame: 9,
  },
  {
    range: [1000000, 2000000],
    count: 13000,
    value: 1200,
    frame: 13,
  },
];
