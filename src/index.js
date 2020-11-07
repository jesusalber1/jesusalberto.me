import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Chat from './Chat';

const data = {
  intro: {
    isMine: true, // I send the message (false means that visitor sends it)
    messages: [
      [`Hi there 👋`, `I'm Jesús Alberto and this is my personal chatbot 🤖`],
      [`I'm glad to see you here 😃`, `Tell me, what would you like to know about me? 🤔`],
    ]
  },
  options: [{
      icon: '🙋🏻‍♂️',
      question: 'Who are you?',
      messages: [
        [`Who are you? 🙋🏻‍♂️`]
      ],
      answer: [
        [
          `My name is Jesús Alberto Polo`,
          `👶🏻 Born in Vigo 🇪🇸`,
          `👦🏻 25 years old`,
          `📍 Currently living in Paris 🇫🇷`,
          `📡 Telecommunications Engineer`
        ]
      ]
    },
    {
      icon: '👨🏻‍🎓',
      question: 'Your education',
      messages: [
        [`Your education 👨🏻‍🎓`]
      ],
      answer: [
        [
          `🎓 Master's Degree, Telecommunications`,
          `⏳ Sep '17 - Present`,
          `🏛 Universidad Carlos III de Madrid`,
          `📍 Madrid 🇪🇸`,
          `📝 Double-degree program`
        ],
        [
          `🎓 Diplôme d'ingénieur, Telecommunications`,
          `⏳ Sep '16 - Present`,
          `🏛 IMT Atlantique (ex. Télécom Bretagne)`,
          `📍 Rennes 🇫🇷`,
          `📝 Double-degree program`
        ],
        [
          `🎓 Bachelor's Degree, Telematics Engineering`,
          `⏳ Sep '12 - Jun '17`,
          `🏛 Universidad Carlos III de Madrid`,
          `📍 Madrid 🇪🇸`
        ],
      ]
    },
    {
      icon: '👨🏻‍💻',
      question: 'Your experience',
      messages: [
        [`Your experience 👨🏻‍💻`]
      ],
      answer: [
        [
          `👨🏻‍💻 Software Engineer`,
          `⏳ Oct '19 - Present`,
          `🏭 Criteo`,
          `📍 Paris 🇫🇷`
        ],
        [
          `👨🏻‍💻 R&D Intern`,
          `⏳ Mar - Sep '18`,
          `🏭 Orange`,
          `📍 Paris 🇫🇷`
        ],
        [
          `👨🏻‍💻 Full-Stack web developer`,
          `⏳ Jul - Sep '17 and Feb - Apr '16`,
          `🏭 Clover Technologies`,
          `📍 Madrid 🇪🇸`
        ],
        [
          `👨🏻‍💻 Full-Stack web developer`,
          `⏳ Jul - Oct '15`,
          `🏭 pompeiibrand.com`,
          `📍 Madrid 🇪🇸`
        ],
        [
          `👨🏻‍💻 Research Internship`,
          `⏳ May '14 - Sep '15`,
          `🏭 Evalues Laboratory (Universidad Carlos III de Madrid)`,
          `📍 Madrid 🇪🇸`
        ],
        [
          `👨🏻‍💻 Technical Manager (side projects)`,
          `🖥 https://polikracia.com`,
          `🖥 https://focus.jesusalberto.me`
        ]
      ]
    },
    {
      icon: '📝',
      question: 'Download CV',
      download: {
        file: 'JesusAlbertoPolo.pdf',
        img: 'resume.png',
        alt: 'Curriculum Jesús Alberto'
      },
      messages: [
        [`📝 Download CV`]
      ],
      answer: [
        [`Here you go! I hope you like it 🙌`]
      ]
    }
  ],
  bye: {
    isMine: true,
    messages: [
      [`That's all! I hope you enjoyed 😃`, `Thanks for passing by!`],
      [`Don't hesitate to contact me on:`, `1️⃣ mailto:hello@jesusalberto.me`, `2️⃣ https://www.linkedin.com/in/jesusalbertopolo/`, `3️⃣ https://github.com/jesusalber1/`],
      [`Have a good day 🙋🏻‍♂️`],
    ]
  }
};

ReactDOM.render(<Chat time={new Date()} me='J' visitor='V' steps={data}/>, document.getElementById('root'));
