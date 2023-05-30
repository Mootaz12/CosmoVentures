import spacecraftspeed from "../assets/icons/spacecraft-speed.png";
import stellarsafety from "../assets/icons/stellar-safety.png";
import weigthlessness from "../assets/icons/weigthlessness.png";
import cosmicduration from "../assets/icons/cosmic-duration.png";
import heroImg from "../assets/rocket-img-nbg.png";
import aboutImg from "../assets/astronaut-img-nbg.png";
export const navbar = {
  logo: "CosmoVentures",
  navbarItems: [
    { id: "Home", name: "Home" },
    { id: "History", name: "History" },
    { id: "Features", name: "Features" },
    { id: "Testimonials", name: "Testimonials" },
    { id: "About US", name: "About US" },
    { id: "Contact", name: "Contact" },
  ],
};
export const hero = {
  heroTitle: "Discover the Wonders of the Cosmos",
  heroSubTitle: "Journey to the Stars and Beyond!",
  heroImg: heroImg,
  heroParagraphe:
    "At CosmoVentures, we believe that the wonders of space should be accessible to all. We offer a once-in-a-lifetime opportunity to take a ride on a rocket and experience the awe-inspiring beauty of outer space firsthand. Our mission is to make space travel an unforgettable adventure that opens up a whole new universe of possibilities.",
};
export const historyParagraphe =
  "CosmoVentures was founded in 2000 with a vision to revolutionize space travel and make it accessible to all. Since then, we have successfully launched numerous missions, enabling adventurers from around the world to witness the beauty and vastness of space. We continue to innovate and explore new frontiers, pushing the boundaries of what's possible.";
export const btnText = "Unleash Your Inner Astronaut";
export const featuresCards = [
  {
    id: "Spacecraft Speed",
    name: "Spacecraft Speed",
    description:
      " Reach speeds of up to 25,000 miles per hour as you traverse the heavens.",
    icon: spacecraftspeed,
  },
  {
    id: "Stellar Safety",
    name: "Stellar Safety",
    description:
      "Rest assured knowing that our experienced team of space professionals ensures your safety throughout the journey.",
    icon: stellarsafety,
  },
  {
    id: "Weightlessness",
    name: "Weightlessness",
    description:
      "Experience the thrill of weightlessness as you float in zero-gravity conditions.",
    icon: weigthlessness,
  },
  {
    id: "Cosmic Duration",
    name: "Cosmic Duration",
    description:
      "Enjoy an immersive space adventure with a duration of approximately 90 minutes.",
    icon: cosmicduration,
  },
];
export const testimonialsCards = [
  {
    id: "card1",
    text: "The rocket ride to space was absolutely mind-blowing! It's an experience that words can't describe. I highly recommend it.",
    author: "John D.",
  },
  {
    id: "card2",
    text: "Stellar Ventures made my dream of touching the stars come true. It was a surreal and awe-inspiring journey that I'll cherish forever.",
    author: "Sarah M.",
  },
  {
    id: "card3",
    text: "The team at Stellar Ventures ensured our safety and comfort throughout the entire trip. It exceeded all my expectations!",
    author: "Michael R.",
  },
];
export const aboutUs = {
  aboutImg: aboutImg,
  aboutUsCards: [
    {
      id: "Our mission",
      title: "Our mission :",
      text: "CosmoVentures makes space exploration accessible, inspiring people to embark on extraordinary space journeys.",
    },
    {
      id: "Our Vision",
      title: "Our Vision :",
      text: "We envision a futu re where anyone can pursue thrilling space travel adventures and witness the wonders of the cosmos.",
    },
    {
      id: "Expert Team ",
      title: "Expert Team :",
      text: " Our dedicated team of space travel and engineering experts ensures safe and unforgettable experiences.",
    },
    {
      id: "Sustainable Exploration",
      title: "Sustainable Exploration :",
      text: "We prioritize responsible and eco-friendly space exploration, minimizing our environmental impact.",
    },
  ],
};
export const contact =
  "Ready to Take the Leap? Get in Touch with CosmoVentures";
export const footer = `© ${new Date().getFullYear()} CosmoVentures. All rights reserved. Privacy Policy | Terms of Service`;
