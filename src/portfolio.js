/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Tal Scheffer",
  title: "Hi, I'm Tal",
  subTitle: emoji(
    "A computer science student by day 💻, and an indie game developer by night 🎮 I aim to create experiences that make people smile."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Tiggle2002",
  gmail: "tal.scheffer13@gmail.com",
  discord: "tiggledev",
  display: false // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Indie Game Developer 🎮 | Student 👨‍🎓 | Artist 🎨 | Music Creator 🎵",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Unity",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "Rider",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Visual Studio",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "FL Studio",
      fontAwesomeClassname: "fas fa-music"
    },
    {
      skillName: "Aseprite",
      fontAwesomeClassname: "fas fa-paint-brush"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, // hide the old bars
  displayCodersrank: false, // hide codersrank
  coreStrengths: [
    "Worldbuilding and spatial storytelling",
    "Level design and environmental composition",
    "Creative coding in Unity (C#)",
    "Iterative design through playtesting and feedback",
    "Music and atmosphere design (FL Studio)",
    "Pixel art and animation (Aseprite)"
  ],
  display: true
};


// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const gamesSection = {
  title: emoji("My Games 🎮"),
  subtitle: "Watch trailers and gameplay footage of my games here!",
  gameVideos: [
    {
      title: "A Tale of Sand and Bone",
      description: (
        <>
          Check out the trailer for My Awesome Game.{" "}
          <a
            href="https://store.steampowered.com/app/2918070/A_Tale_of_Sand_and_Bone/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here to view on Steam!
          </a>
        </>
      ),
      videoUrl: "https://www.youtube.com/embed/GMYBbAnGA6g?si=chMvR-8EytiWrOLR",
    },
    {
      title: "Below",
      description: (
        <>
          A boy wakes at the edge of the world, and climbs in search of a home.{" "}
          <a
            href="https://tiggledev.itch.io/below"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here to play on itch.io!
          </a>
        </>
      ),
      videoUrl: "https://www.youtube.com/embed/jKQ_rTimxIc?si=oy3SiNS68YAievd0",
    },
    {
      title: "Duck Game",
      description: "A mother duck must lead her ducklings to safety!",
      videoUrl: "https://www.youtube.com/embed/75M_pLbMSxw?si=eACWGcpvV6bJ2MN3",
    },
    {
      title: "Truffle Keeper",
      description: "A 2D tower defense survival game",
      videoUrl:
        "https://www.youtube.com/embed/lzAvzk2hEeg?si=XUCM07wfk-x2l7zU",
    }
    // Add more as needed
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "...",
  displayMediumBlogs: "true",
  blogs: [],
  display: false
};

// Talks Sections

const talkSection = {
  title: "Showcases",
  subtitle: "Moments where I’ve shared my work and creative process.",
  talks: [
    {
        title: "Freshers’ Fair Showcase",
        image: require("./assets/images/showcase_1.jpg"),
        subtitle:
          "Represented the Game Dev Society at Newcastle’s Freshers’ Fair, where students played my game and competed for the fastest completion time.",
    },
    {
        title: "Welcome Week Showcase",
        image: require("./assets/images/showcase_0.jpg"),
        subtitle:
          "Hosted a stall in the School of Computing during Welcome Week, where new Computer Science students played my game and learned about joining the Game Dev Society.",
    },
    {
        title: "Newcastle University Inclusivity Game Jam 2025",
        image: require("./assets/images/gamejam_1.png"),
        subtitle:
          "Worked with staff to help run the Inclusivity Game Jam, supporting students as they designed games exploring social themes.",
    },
    {
        title: "Newcastle University Inclusivity Game Jam 2023",
        image: require("./assets/images/gamejam_3.png"),
        subtitle:
          "Worked with two other students to design a satirical, narrative game exploring social theme in a forty-eight-hour game jam. The project was later exhibited at the School of Computing showcase.",
    }
  ],
  display: true
};

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Newcastle University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Computer Science (Game Engineering)",
      duration: "September 2023 - Current",
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Come say hi.. my inbox is always open!",
  email_address: "talicostudios@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  gamesSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
