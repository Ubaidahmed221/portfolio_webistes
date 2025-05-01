import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from 'react-icons/fa';
import skillsImg1 from './assets/html-logo.svg';
import skillsImg2 from './assets/css-logo.svg';
import skillsImg3 from './assets/javascript-logo.svg';
import skillsImg4 from './assets/react-logo.svg';
import skillsImg11 from './assets/vue-js-logo.png';
import skillsImg12 from './assets/php-logo.svg';
import skillsImg13 from './assets/laravel-logo.svg';
import skillsImg14 from './assets/C-sharpe-logo.svg';
import skillsImg15 from './assets/dot-net-core.png';
import skillsImg16 from './assets/express-js.webp';
import skillsImg5 from './assets/tailwind-css-logo.svg';

import skillsImg6 from './assets/figma-logo.svg';
import skillsImg7 from './assets/sketch-logo.svg';
// import skillsImg8 from './assets/adobe-xd-logo.svg';
// import skillsImg9 from './assets/adobe-photoshop-logo.svg';
// import skillsImg10 from './assets/invision-logo.svg';

import projectImg1 from './assets/project-1.jpg';
import projectImg2 from './assets/project-2.jpg';
import projectImg3 from './assets/project-3.jpg';
import projectImg4 from './assets/project-4.jpg';
import projectImg5 from './assets/project-5.jpg';

import Theme1 from './assets/red.png';
import Theme2 from './assets/blueviolet.png';
import Theme3 from './assets/blue.png';
import Theme4 from './assets/magenta.png';
import Theme5 from './assets/yellowgreen.png';
import Theme6 from './assets/orange.png';
import Theme7 from './assets/yellow.png';

import { RiBriefcase4Fill, RiGraduationCapFill } from 'react-icons/ri';

export const links = [
    {
      name: 'Home',
      icon: <FaHome className='nav-icon' />,
      path: '/',
    },
  
    {
      name: 'About',
      icon: <FaUser className='nav-icon' />,
      path: '/about',
    },
  
    {
      name: 'Portfolio',
      icon: <FaFolderOpen className='nav-icon' />,
      path: '/portfolio',
    },
  
    {
      name: 'Contact',
      icon: <FaEnvelopeOpen className='nav-icon' />,
      path: '/contact',
    },
  ];

  
// ========== INFO ==========
export const personalInfo = [
  {
    title: 'First Name : ',
    description: 'Ubaid',
  },

  {
    title: 'Last Name : ',
    description: 'Ahmed',
  },

  {
    title: 'Age : ',
    description: '22 Years',
  },

  {
    title: 'Nationality : ',
    description: 'Pakistan',
  },

  {
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    title: 'Address : ',
    description: 'Pakistan',
  },

  {
    title: 'Phone : ',
    description: '+92 3120003019',
  },

  {
    title: 'Email : ',
    description: 'ubaidahmed1282@gmail.com',
  },


  {
    title: 'Langages : ',
    description: 'Urdu, English',
  },
];

export const stats = [
  {
    no: '3+',
    title: 'Years of <br /> Experience',
  },

  {
    no: '10+',
    title: 'Completed <br /> Projects',
  },

  {
    no: '15+',
    title: 'Happy <br /> Customers',
  },

  {
    no: '5+',
    title: ' Awards <br /> Won',
  },
];

export const skill = [
  {
    id: 1,
    img: skillsImg1,
    title: 'HTML',
    level: 'Intermediate',
    category: 'developer',
  },

  {
    id: 2,
    img: skillsImg2,
    title: 'CSS',
    level: 'Advanced',
    category: 'developer',
  },

  {
    id: 3,
    img: skillsImg3,
    title: 'JavaScript',
    level: 'Intermediate',
    category: 'developer',
  },

  {
    id: 4,
    img: skillsImg4,
    title: 'React',
    level: 'Basic',
    category: 'developer',
  },
  
  {
    id: 4,
    img: skillsImg11,
    title: 'Vue Js',
    level: 'Intermediate',
    category: 'developer',
  },

  {
    id: 5,
    img: skillsImg5,
    title: 'Tailwind',
    level: 'Intermediate',
    category: 'developer',
  },

  {
    id: 6,
    img: skillsImg12,
    title: 'Php',
    level: 'Advanced',
    category: 'designer',
  },

  {
    id: 7,
    img: skillsImg13,
    title: 'Laravel',
    level: 'Advanced',
    category: 'designer',
  },

  {
    id: 8,
    img: skillsImg14,
    title: 'C #',
    level: 'Intermediate',
    category: 'designer',
  },

  {
    id: 9,
    img: skillsImg15,
    title: 'Dot Net Core',
    level: 'Intermediate',
    category: 'designer',
  },

  {
    id: 10,
    img: skillsImg16,
    title: 'Express Js',
    level: 'Basic',
    category: 'designer',
  },
  
];


export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <RiBriefcase4Fill />,
    year: '2023 - Present',
    title: 'Web Developer <span> Mimsoft </span>',
    desc: 'Designed and developed dynamic web applications using Laravel for backend logic and Vue.js for interactive frontend interfaces. Ensured efficient database management and seamless integration between frontend and backend systems.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <RiBriefcase4Fill />,
    year: '2023-Aug - 2023-Oct',
    title: 'Web Developer <span> The Provider Solution </span>',
    desc: 'Built and maintained scalable backend systems using Laravel, focusing on efficient database interactions and API development. Collaborated with frontend teams to deliver seamless web applications with optimized performance.',
  },

  

  {
    id: 4,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: '2025 - Present',
    title: 'Software Engineering Degree <span> Virtual University Of Pakistan </span>',
    desc: 'Pursuing a Software Engineering degree, focusing on core concepts like programming, database systems, and software development methodologies to build a strong foundation in technology.',
},
{
  id: 5,
  category: 'education',
  icon: <RiGraduationCapFill />,
  year: '2021 - 2024',
  title: 'Software Engineering Diploma <span> Aptech Pakistan </span>',
  desc: 'Completed a Software Engineering Diploma, gaining hands-on experience in programming, web development, and software design principles to build practical tech skills.',
},

 
];

export const portfolio = [
  {
    id: 1,
    img: projectImg1,
    title: 'Coffee Website',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [skillsImg4, skillsImg5],
    link: '',
  },

  {
    id: 2,
    img: projectImg2,
    title: 'Food Product Design',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [skillsImg6, skillsImg7],
    link: '',
  },

  {
    id: 3,
    img: projectImg3,
    title: 'Restaurant Landing Page',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [skillsImg1, skillsImg2, skillsImg3],
    link: '',
  },

  {
    id: 4,
    img: projectImg4,
    title: 'Barbershop Website',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [skillsImg4, skillsImg5],
    link: '',
  },

  {
    id: 5,
    img: projectImg5,
    title: 'Construction Landing Page',
    description:
      'Short description of the project that was carried out in this portfolio.',
    skills: [skillsImg1, skillsImg2, skillsImg3],
    link: '',
  },
];


export const themes = [
  {
    img: Theme1,
    hue: '4',
  },

  {
    img: Theme2,
    hue: '271',
  },

  {
    img: Theme3,
    hue: '225',
  },

  {
    img: Theme4,
    hue: '339',
  },

  {
    img: Theme5,
    hue: '80',
  },

  {
    img: Theme6,
    hue: '19',
  },

  {
    img: Theme7,
    hue: '42',
  },
];
