import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    csharp,
    python,
    game,
    store,
    people,
    weather,
    cost,
    brain,
    chat,
    c,
    cpp
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: c,
        name: "C",
        type: "Backend",
    },
    {
        imageUrl: cpp,
        name: "C++",
        type: "Backend",
    },
    {
        imageUrl: csharp,
        name: "C#",
        type: "Backend",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/kobi070',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/kobi-kuzi',
    }
];

export const projects = [
    {
        iconUrl: game,
        theme: 'btn-back-red',
        name: 'Othello',
        description: 'DThis is an implementation of the classic board game Othello (also known as Reversi) in C#. The game includes a graphical user interface and an AI opponent.',
        link: 'https://github.com/kobi070/Othello',
    },
    {
        iconUrl: store,
        theme: 'btn-back-green',
        name: 'Store Android App',
        description: 'A Store app developed during 3rd year of school under Android 2 class. This project consists of a React Native app with Expo, axios, Paper.js, and React Native. Along with an Express server using Node.js, axios, bcrypt, cors, dotenv, jsonwebtoken, express-session, nodemon, and MongoDB.',
        link: 'https://github.com/kobi070/Android2_Project',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Garage Management',
        description: 'The Garage Management System is a program designed to keep track of vehicles in a garage. It allows users to add and remove vehicles, view the list of vehicles in the garage, and search for specific vehicles in Rapier.',
        link: 'https://github.com/kobi070/GarageManagment-System-C-Sharp',
    },
    {
        iconUrl: people,
        theme: 'btn-back-pink',
        name: 'User Interface Management system',
        description: 'Hierarchical Menu Management System for Console Applications This project is a software component that assists in the display and management of hierarchical menus for console applications. It allows users to interact with various menus in a consistent and intuitive way.',
        link: 'https://github.com/kobi070/User-Interface-managment-system---in-cs',
    },
    {
        iconUrl: weather,
        theme: 'btn-back-black',
        name: 'Weather Application',
        description: 'Weather App is a web application that provides up-to-date weather information for a users location. It is built using modern web technologies, including React, Node.js',
        link: 'https://kobi070.github.io/WeatherApp/',
    },
    {
        iconUrl: cost,
        theme: 'btn-back-red',
        name: 'Cost Manager',
        description: 'This project is a RESTful web service for managing daily costs. The service is built using a MongoDB database and Express.js, and allows users to add new cost items and retrieve detailed reports of their expenses.',
        link: 'https://github.com/kobi070/Cost-Manager-RESTfull-webservice',
    },
    {
        iconUrl: brain,
        theme: 'btn-back-green',
        name: 'Anime Prediction',
        description: 'This is the final project of a Data Science course, which aims to predict whether an anime will be successful or not based on its members count and score. The project is written in Python, using a variety of libraries such as Pandas, Numpy, Seaborn, Matplotlib, Yellowbrick for Scikit-learn, BeautifulSoup, and Selenium.',
        link: 'https://github.com/kobi070/Data-Science-Project---HIT',
    },
    {
        iconUrl: chat,
        theme: 'btn-back-yellow',
        name: 'Chat Application',
        description: 'This is a simple chat application built using React, Express, and Socket.IO. The application allows users to join a chat room and send messages in real-time. The messages are displayed in the chat window and are always scrolled to the bottom.',
        link: 'https://github.com/kobi070/ChatApp',
    }
];

/// TODO: Update this to add my own Projects