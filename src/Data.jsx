import { FaHome, FaUser, FaFolderOpen, FaEnvelopeOpen } from 'react-icons/fa';
import skillsImg1 from './assets/html-logo.svg';
import skillsImg2 from './assets/css-logo.svg';
import skillsImg3 from './assets/javascript-logo.svg';
import skillsImg4 from './assets/react-logo.svg';
import skillsImg5 from './assets/tailwind-css-logo.svg';

import skillsImg6 from './assets/figma-logo.svg';
import skillsImg7 from './assets/sketch-logo.svg';
import skillsImg8 from './assets/adobe-xd-logo.svg';
import skillsImg9 from './assets/adobe-photoshop-logo.svg';
import skillsImg10 from './assets/invision-logo.svg';

import projectImg1 from './assets/project-1.jpg';
import projectImg2 from './assets/project-2.jpg';
import projectImg3 from './assets/project-3.jpg';
import projectImg4 from './assets/project-4.jpg';
import projectImg5 from './assets/project-5.jpg';

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
    title: 'Skype : ',
    description: 'ubaid ahmed',
  },

  {
    title: 'Langages : ',
    description: 'Urdu, English',
  },
];

export const stats = [
  {
    no: '4+',
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
    no: '10+',
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
    id: 5,
    img: skillsImg5,
    title: 'Tailwind',
    level: 'Intermediate',
    category: 'developer',
  },

  {
    id: 6,
    img: skillsImg6,
    title: 'Figma',
    level: 'Advanced',
    category: 'designer',
  },

  {
    id: 7,
    img: skillsImg7,
    title: 'Sketch',
    level: 'Basic',
    category: 'designer',
  },

  {
    id: 8,
    img: skillsImg8,
    title: 'Adobe XD',
    level: 'Intermediate',
    category: 'designer',
  },

  {
    id: 9,
    img: skillsImg9,
    title: 'Photoshop',
    level: 'Intermediate',
    category: 'designer',
  },

  {
    id: 10,
    img: skillsImg10,
    title: 'InvisionApp',
    level: 'Basic',
    category: 'designer',
  },
];


export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <RiBriefcase4Fill />,
    year: '2018 - Present',
    title: 'Web Developer <span> Envato </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <RiBriefcase4Fill />,
    year: '2013 - 2018',
    title: 'UI/UX Designer <span> Themeforest </span>',
    desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt.',
  },

  {
    id: 3,
    category: 'experience',
    icon: <RiBriefcase4Fill />,
    year: '2005 - 2013',
    title: 'Consultant <span> Videohive </span>',
    desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt.',
  },

  {
    id: 4,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: '2015',
    title: 'Engineering Degree <span> Oxford University </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore.',
  },

  {
    id: 5,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: '2012',
    title: 'Master Degree <span> KIEV University </span>',
    desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt.',
  },

  {
    id: 6,
    category: 'education',
    icon: <RiGraduationCapFill />,
    year: '2009',
    title: 'Bachelor Degree <span> Tunis High School </span>',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore.',
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
