import { nanoid } from 'nanoid';

// get the sum of those to determine compatibility
const desktop = 1;
const tablet = 2;
const phone = 4;

// HEAD DATA
export const headData = {
  title: 'Madalin Preda | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: "Madalin's portofolio", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Madalin Preda',
  subtitle: 'I am currently working as a Full Stack Developer.',
  cta: 'See more',
};

// ABOUT DATA
export const aboutData = {
  img: '',
  paragraphOne: 'I graduated with a First class Degree in Computer Science in 2020.',
  paragraphTwo: `I am passionate about web development and I often work on personal projects that
  I am trying to convert into teaching materials to pass the knowledge further.`,
  paragraphThree: `I am familiar with various programming languages, but I have more experience with c#, and js for both frontend and backend.
  I have worked with both relational and non-relational databases. My expertise consists of databases such as MySql, Sql Server and MongoDb.
  I also have good understanding of blockchain technologies and AI related fields such as machine learning, deep learning, and image recognition.`,
  resume:
    'https://onedrive.live.com/?authkey=%21APMyE%5Fgctl6wPIU&cid=24FE1D9F44D88D5B&id=24FE1D9F44D88D5B%2125795&parId=24FE1D9F44D88D5B%2112187&action=locate', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'real-time-chat.png',
    title: 'React Real-time Chat Web Application',
    info: ' A realtime chat application with private and public rooms where users can communicate.',
    info2: '',
    url: 'https://react-real-time-chat.herokuapp.com',
    repo: 'https://github.com/mdLn1/ReactRealtimeChat', // if no repo, the button will not show up
    screenCompatibility: desktop,
    technologies: [
      {
        value: 'React.JS',
        technologyId: nanoid(),
        iconLink: 'https://simpleicons.org/icons/react.svg',
      },
      {
        value: 'HTML5',
        technologyId: nanoid(),
        iconLink: 'https://simpleicons.org/icons/html5.svg',
      },
      {
        value: 'CSS3',
        technologyId: nanoid(),
        iconLink: 'https://simpleicons.org/icons/css3.svg',
      },
      {
        value: 'Heroku',
        technologyId: nanoid(),
        iconLink: 'https://simpleicons.org/icons/heroku.svg',
      },
      {
        value: 'Node.JS',
        technologyId: nanoid(),
        iconLink: 'https://simpleicons.org/icons/node-dot-js.svg',
      },
      {
        value: 'Socket.io',
        technologyId: nanoid(),
        iconLink: 'https://simpleicons.org/icons/socket-dot-io.svg',
      },
      {
        value: 'MongoDB',
        technologyId: nanoid(),
        iconLink: 'https://simpleicons.org/icons/mongodb.svg',
      },
    ],
  },
  {
    id: nanoid(),
    img: 'car-crash-game.png',
    title: 'Car Crash Game',
    info: `A game to play in the browser to drive a car so that it avoids the cars coming from the opposite direction.
    There are three difficulty levels and if you get a high score for that level you can get in TOP 10.`,
    info2: '',
    url: 'https://traffic-game.herokuapp.com',
    repo: 'https://github.com/mdLn1/TrafficGame', // if no repo, the button will not show up
    screenCompatibility: desktop,
    technologies: [
      {
        value: 'React.JS',
        technologyId: nanoid(),
        iconLink: 'https://simpleicons.org/icons/react.svg',
      },
      {
        value: 'HTML5',
        technologyId: nanoid(),
        iconLink: 'https://simpleicons.org/icons/html5.svg',
      },
      {
        value: 'CSS3',
        technologyId: nanoid(),
        iconLink: 'https://simpleicons.org/icons/css3.svg',
      },
      {
        value: 'Heroku',
        technologyId: nanoid(),
        iconLink: 'https://simpleicons.org/icons/heroku.svg',
      },
      {
        value: 'Node.JS',
        technologyId: nanoid(),
        iconLink: 'https://simpleicons.org/icons/node-dot-js.svg',
      },
      {
        value: 'MongoDB',
        technologyId: nanoid(),
        iconLink: 'https://simpleicons.org/icons/mongodb.svg',
      },
    ],
  },
  {
    id: nanoid(),
    img: 'weather-app.png',
    title: 'Weather App',
    info: `An application that provides information regarding current weather in various capital cities around the world.
    It is making use of open weather api to fetch that data, also it uses cookies to store user preferences.`,
    info2: `Notice that the message regarding left free queries might be inaccurate since heroku 
    sends the instance to sleep if there is inactivity, the issue can be mitigated by implementing a permanent storage, for simplicity it was left like this.`,
    url: 'https://cities-weather-app.herokuapp.com/"',
    repo: 'https://github.com/mdLn1/ReactWeatherApp', // if no repo, the button will not show up
    screenCompatibility: desktop + tablet + phone,
    technologies: [
      {
        value: 'React.JS',
        technologyId: nanoid(),
        iconLink: 'https://simpleicons.org/icons/react.svg',
      },
      {
        value: 'Socket.io',
        technologyId: nanoid(),
        iconLink: 'https://simpleicons.org/icons/socket-dot-io.svg',
      },
      {
        value: 'HTML5',
        technologyId: nanoid(),
        iconLink: 'https://simpleicons.org/icons/html5.svg',
      },
      {
        value: 'CSS3',
        technologyId: nanoid(),
        iconLink: 'https://simpleicons.org/icons/css3.svg',
      },
      {
        value: 'Heroku',
        technologyId: nanoid(),
        iconLink: 'https://simpleicons.org/icons/heroku.svg',
      },
      {
        value: 'Node.JS',
        technologyId: nanoid(),
        iconLink: 'https://simpleicons.org/icons/node-dot-js.svg',
      },
    ],
  },
  {
    id: nanoid(),
    img: 'react-chat-form.png',
    title: 'Chat look-alike form',
    info: `A form that appears like a conversation, but it also has data validation before submission.`,
    info2: '',
    url: 'https://react-chat-form.herokuapp.com/',
    repo: 'https://github.com/mdLn1/ReactChatForm', // if no repo, the button will not show up
    screenCompatibility: desktop + tablet + phone,
    technologies: [
      {
        value: 'React.JS',
        technologyId: nanoid(),
        iconLink: 'https://simpleicons.org/icons/react.svg',
      },
      {
        value: 'HTML5',
        technologyId: nanoid(),
        iconLink: 'https://simpleicons.org/icons/html5.svg',
      },
      {
        value: 'CSS3',
        technologyId: nanoid(),
        iconLink: 'https://simpleicons.org/icons/css3.svg',
      },
      {
        value: 'Heroku',
        technologyId: nanoid(),
        iconLink: 'https://simpleicons.org/icons/heroku.svg',
      },
    ],
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'If you wish to contact me please click the button below or mail me at ',
  btn: 'Send mail',
  email: 'no-reply@kodezor.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/madalin-preda-b24a67151',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/mdLn1',
    },
    {
      id: nanoid(),
      name: 'stack-overflow',
      url: 'https://stackoverflow.com/users/10826029/mdln97',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
