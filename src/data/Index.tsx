export const RedSanImages = {
  id: 1,
  image: require('../../assets/Images/RedSan.png'),
};
// Carousal Data>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

export interface CarousalItem {
  id: number;
  image: any;
  title: string;
  subTitle: string;
  location: string;
}
export const RedSanCarousalData: CarousalItem[] = [
  {
    id: 1,
    image: require('../../assets/Images/Gym.png'),
    title: 'GYM FREAKS',
    subTitle: 'Get a Gym Membership Now.',
    location: 'Balawala',
  },
  {
    id: 2,
    image: require('../../assets/Images/Donut.png'),
    title: 'TASTEBUDS TREAT',
    subTitle: 'Get Cakes. Donuts and more!',
    location: 'Bhaniyawala',
  },
  {
    id: 3,
    image: require('../../assets/Images/Burger.png'),
    title: 'BUNS AND BITES',
    subTitle: 'Get a Frosty Juicy Burger.',
    location: 'Jogiwala',
  },
];
// Places Data >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export interface PlacesData {
  id: number;
  image: any;
  title: string;
  location: string;
  description: string;
  streakNumber: number;
  streakColor: string;
}

export const PLACES: PlacesData[] = [
  {
    id: 4,
    image: require('../../assets/Images/645d5f28e26c7de2a280f71db15c2141.jpeg'),
    title: 'Cappadocia',
    location: 'Turkey',
    description:
      "Cappadocia's landscape includes dramatic expanses of soft volcanic rock, shaped by erosion into towers, cones, valleys, and caves. Rock-cut churches and underground tunnel complexes from the Byzantine and Islamic eras are scattered throughout the countryside.",
    streakNumber: 6,
    streakColor: 'orange',
  },
  {
    id: 5,
    image: require('../../assets/Images/eea622430834cb64b900c2f03e5be6b8.jpeg'),
    title: 'Capri',
    location: 'Italy',
    description:
      'Capri is an island of a thousand faces, where visitors can walk the trails skirting the cliffs above the Mediterranean in total solitude, dive into the crystalline waters of its rocky shore, or plunge into the vibrant crowds of the Piazzetta and shop in the most fashionable boutiques in the world.',
    streakNumber: 2,
    streakColor: 'skyblue',
  },
  {
    id: 6,
    image: require('../../assets/Images/0e627c12c05e4dd93ab122d618ea7849.jpeg'),
    title: 'Bora Bora',
    location: 'Polynesia',
    description:
      'Learn how you can travel Bora Bora on a budget and how overwater bungalows are possible for cheap plus tips on keeping Bora Bora trip costs low.',
    streakNumber: 7,
    streakColor: 'blue',
  },
  {
    id: 7,
    image: require('../../assets/Images/c2dcbb54ca9316831b0f6ed4d4136dda.jpeg'),
    title: 'Phuket',
    location: 'Thailand',
    description:
      'Phuket is the largest island in Thailand. It is located in the Andaman Sea in southern Thailand',
    streakNumber: 1,
    streakColor: 'yellow',
  },
];
export const TOP_PLACES = [
  {
    id: 1,
    image: require('../../assets/Images/2082f59465c39094ce90bebd0fcf8fa7.jpeg'),
    title: 'Amalfi',
    location: 'Italy',
    description:
      'The ultimate Amalfi Coast travel guide, where to stay, where to eat, and what areas to visit in the Amalfi Coast of Italy. Positano, Ravello, Amalfi and more',
  },
  {
    id: 2,
    image: require('../../assets/Images/922a0cb274208ccd234f6c14f2174b8b.jpeg'),
    title: 'Granada',
    location: 'Spain',
    description:
      'Granada is the capital city of the province of Granada, in the autonomous community of Andalusia, Spain',
  },
  {
    id: 3,
    image: require('../../assets/Images/e57a2a310330ee1d8928eb75d416a53d.jpeg'),
    title: 'Cherry blossoms',
    location: 'Japan',
    description:
      "Cherry blossoms usually bloom between mid-March and early May. In 2022, Tokyo's cherry blossom season officially began on March 20",
  },
];
