import avatar from './avatar.png'
import icon1 from './icon1.png'
import icon2 from './icon2.png'
import icon3 from './icon3.png'
import card_img1 from './card_img1.png'
import card_img2 from './card_img2.png'
import card_img3 from './card_img3.png'
import expierence_img from './expierence.png'
export const homeData = {
  h1: 'Join the Game',
  p: `Welcome to Nexus Arcade, where gaming meets endless possibilities! Immerse yourself in a nexus of entertainment, featuring a diverse array of games that cater to every player's passion. From classic arcade nostalgia to cutting-edge virtual worlds, Nexus Arcade is your gateway to thrilling adventures. Explore our curated selection, stay updated on gaming trends, and join a community of like-minded players. Level up your gaming experience at Nexus Arcade, where the next adventure awaits with every click. Get ready to embrace the nexus of fun and excitement!`,
  button: 'Explore'
}
export const featuredData = {
  h1: 'Featured',
  card_h1: 'Martian Quest',
  card_p: `Embark on the ultimate adventure in 'Maritan Quest.' Explore Martian mysteries, solve puzzles, and unveil the secrets of an ancient civilization in this groundbreaking video game.`,
  button: 'Play now',
  video_url: 'https://video.wixstatic.com/video/ea26fd_8ed7dc63397c45969e1d658cb28c5a7b/480p/mp4/file.mp4'
}
export const awardData = {
  h1: 'Martian Quest Wins Mobile Game Awards',
  p: `Martian Quest' triumphs at the Mobile Game Awards, hailed for its innovative gameplay and captivating narrative. Explore the mysteries of the red planet in this award-winning mobile adventure.`,
  img_url: avatar
}

export const gamesData = {
  h1: 'More Games',
  cards: [
    {
      img: icon1,
      bg_img: card_img1,
      card_h1: 'The Unknown',
      card_type: 'Adventure',
      card_p: "Embark on a thrilling journey in 'The Unknown' where every step leads to discovery and danger. Navigate through mysterious landscapes, solve puzzles, and unveil the secrets of an enigmatic world.",
      button: 'Play now',
      delay: 0.4
    },
    {
      img: icon2,
      bg_img: card_img2,
      card_h1: 'Dragons Lair',
      card_type: 'RPG',
      card_p: "Dive into the epic fantasy realm of 'Dragon's Lair,' where you forge your destiny as a hero facing dragons, magic, and treacherous quests. Immerse yourself in a rich RPG experience filled with mythical creatures and gripping storytelling.",
      button: 'Play now',
      delay: 0.8
    },
    {
      img: icon3,
      bg_img: card_img3,
      card_h1: 'Atactic',
      card_type: 'Strategy',
      card_p: "Command your forces and conquer new territories in 'Atactic,' a strategic masterpiece. With tactical brilliance, build your empire, engage in intense battles, and shape the fate of your civilization in this gripping strategy game.",
      button: 'Play now',
      delay: 1.2
    },
  ]
}
export const aboutData = {
  h1: 'About us',
  p: `Welcome to Nexus Arcade! We're passionate about gaming and dedicated to providing a curated space for enthusiasts. As a community-driven platform, we offer diverse and thrilling titles, aiming to be your go-to source for gaming joy. Join us in this epic adventure at Nexus Arcade!`,
  button: 'Learn more'
}

export const experienceData = {
  h1: 'A Perfect Gaming Experience',
  p: `Immerse yourself in unparalleled gaming experiences at Nexus Arcade! With a carefully curated selection of titles ranging from classic nostalgia to cutting-edge adventures, our platform offers a thrilling journey for every player. Navigate through a vibrant community, discover hidden gems, and unleash the joy of gaming like never before. Join us at Nexus Arcade, where each click is a portal to excitement!`,
  button: 'Explore',
  img: expierence_img
}
export const workWithUs = {
  h1: 'Work with us',
  p: `Join the Nexus Arcade team! We're on the lookout for passionate individuals who share our love for gaming. Whether you're a skilled developer, creative designer, or marketing maven, we welcome diverse talents. Together, let's elevate the gaming experience. Explore exciting opportunities and collaborate with us to shape the future of Nexus Arcade!`,
  button: 'Open Positions',
}

export const subscribe = {
  h1: 'Subscribe',
  p: `Be the first to know about new games, exclusive previews & special promotions`,
}
export const footer = {
  h1: 'NexusArcade',
  p: `Thanks for being part of the Nexus Arcade community, where gaming dreams come to life. Dive into an immersive world of excitement and adventure with our curated selection of games. Your journey is our mission, and we're thrilled to have you on board. Explore, connect, and game on at Nexus Arcade – where every click sparks a new level of joy!`,
  contact: {
    h1: 'Contact',
    others: [
      '500 Terry Francois Street',
      'San Francisco, CA 94158',
      "info@mysite.com",
      'Tel: 123-456-7890'
    ]
  },
  quickMenu: {
    h1: 'Quick Menu',
    others: [
      'Games', 'Company', 'Careers', 'Contact'
    ]
  },
  socials: {
    h1: 'Socials',
    others: [
      'Facebook', 'Instagram', 'Twitter', 'Youtube'
    ]
  },
}

export const navbar = {
  logo: 'NexusArcade',
  links: [
    {
      url: '#home',
      text: 'Home'
    },
    {
      url: '#games',
      text: 'Games'
    },
    {
      url: '#company',
      text: 'Company'
    },
    {
      url: '#careers',
      text: 'Careers'
    },
    {
      url: '#contact',
      text: 'Contact'
    },
  ]
}