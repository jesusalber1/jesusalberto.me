import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';
import Chat from './Chat';

const age = moment().diff(moment('1994-06-04'), 'years');

const data = {
  intro: {
    isMine: true, // I send the message (false means that visitor sends it)
    messages: [
      [`Hi there 👋`, `I'm Jesús Alberto and this is my personal chatbot 🤖`],
      [
        `I'm glad to see you here 😃`,
        `Tell me, what would you like to know about me? 🤔`,
      ],
    ],
  },
  options: [
    {
      icon: '🙋🏻‍♂️',
      question: 'Who are you?',
      messages: [[`Who are you? 🙋🏻‍♂️`]],
      answer: [
        [
          `My name is Jesús Alberto Polo`,
          `👶🏻 Born in Vigo 🇪🇸`,
          `👦🏻 ${age} years old`,
          `📍 Currently living in Paris 🇫🇷`,
          `📡 Telecommunications Engineer`,
        ],
      ],
    },
    {
      icon: '👨🏻‍🎓',
      question: 'Your education',
      messages: [[`Your education 👨🏻‍🎓`]],
      answer: [
        [
          `🎓 Master's Degree, Telecommunications`,
          `🏛 Universidad Carlos III de Madrid`,
          `⏳ Sep 2017 - Jan 2020`,
          `📍 Madrid 🇪🇸`,
          `📝 Double-degree program`,
        ],
        [
          `🎓 Diplôme d'ingénieur, Telecommunications`,
          `🏛 IMT Atlantique (ex. Télécom Bretagne)`,
          `⏳ Sep 2016 - Jan 2020`,
          `📍 Rennes 🇫🇷`,
          `📝 Double-degree program`,
        ],
        [
          `🎓 Bachelor's Degree, Telematics Engineering`,
          `🏛 Universidad Carlos III de Madrid`,
          `⏳ Sep 2012 - Jun 2017`,
          `📍 Madrid 🇪🇸`,
        ],
      ],
    },
    {
      icon: '👨🏻‍💻',
      question: 'Your experience',
      messages: [[`Your experience 👨🏻‍💻`]],
      answer: [
        [
          `👨🏻‍💻 Solutions Engineer`,
          `🏭 Cloudflare ⛅️`,
          `⏳ Jan 2024 - Present`,
          `📍 Paris 🇫🇷 | Hybrid`,
        ],
        [
          `👨🏻‍💻 Systems Engineer`,
          `🏭 Cloudflare ⛅️`,
          `⏳ Nov 2021 - Dec 2023`,
          `📍 Paris 🇫🇷 | Hybrid`,
        ],
        [
          `👨🏻‍💻 Founder in Residence`,
          `🏭 Entrepreneur First`,
          `⏳ Apr 2021 - Jun 2021`,
          `📍 Paris 🇫🇷`,
        ],
        [
          `👨🏻‍💻 Software Engineer`,
          `🏭 Criteo`,
          `⏳ Oct 2019 - Apr 2021 | Jul 2021 - Sept 2021`,
          `📍 Paris 🇫🇷`,
        ],
        [`👨🏻‍💻 R&D Intern`, `🏭 Orange`, `⏳ Mar - Sep 2018`, `📍 Paris 🇫🇷`],
        /*[
          `👨🏻‍💻 Full-Stack web developer`,
          `🏭 Clover Technologies`,
          `⏳ Jul - Sep 2017 | Feb - Apr 2016`,
          `📍 Madrid 🇪🇸`,
        ],
        [
          `👨🏻‍💻 Full-Stack web developer`,
          `🏭 pompeiibrand.com`,
          `⏳ Jul - Oct 2015`,
          `📍 Madrid 🇪🇸`,
        ],
        [
          `👨🏻‍💻 Research Internship`,
          `🏭 Evalues Laboratory (Universidad Carlos III de Madrid)`,
          `⏳ May 2014 - Sep 2015`,
          `📍 Madrid 🇪🇸`,
        ],
        [
          `👨🏻‍💻 Technical Manager (side projects)`,
          `🖥 https://polikracia.com`,
          `🖥 https://focus.jesusalberto.me`,
        ],*/
      ],
    },
    {
      icon: '📝',
      question: 'Download CV',
      download: {
        file: 'JesusAlbertoPolo.pdf',
        img: 'resume.png',
        alt: 'Curriculum Jesús Alberto',
      },
      messages: [[`📝 Download CV`]],
      answer: [[`Here you go! I hope you like it 🙌`]],
    },
  ],
  bye: {
    isMine: true,
    messages: [
      [`That's all! I hope you enjoyed 😃`, `Thanks for passing by!`],
      [
        `You can also visit my personal blog`,
        `👉 https://blog.jesusalberto.me`,
      ],
      [
        `Don't hesitate to contact me on:`,
        `1️⃣ mailto:hello@jesusalberto.me`,
        `2️⃣ https://www.linkedin.com/in/jesusalbertopolo/`,
        `3️⃣ https://github.com/jesusalber1/`,
      ],
      [`Have a good day 🙋🏻‍♂️`],
    ],
  },
};

ReactDOM.render(
  <Chat time={new Date()} me='J' visitor='V' steps={data} />,
  document.getElementById('root')
);
