export const headerIds = {
    about: "about",
    skills: "skills",
    projects: "projects",
    // timeline: "timeline",
    contact: "contact"
}

export const socialMediaLinks = {
    github: "https://github.com/mixemer",
    facebook: "",
    linkedin: "https://www.linkedin.com/in/mehmetshin",
    twitter: "https://twitter.com/mixemer"
}

// gh_card has to be generated on https://gh-card.dev/
// add more images for projects
export const projects = {
    games: {
        name: "Games",
        items: [
            // Also add the ungoing sea game
            {
                title: "Puncher",
                caption: `A 2D single-player and multi-player mobile boxing game.`,
                detail: `I created this game for a Turkish design studio. They provided all the designs of the game such as the images and animations. Using Unity, I creted the game in 3 months and published it on Google Play Store.`,
                tech: "Unity, C#, Photon Pun 2 for multi-player networking, Zenject for Dependency Injection, Firebase and local files for database",
                link: "https://play.google.com/store/apps/details?id=com.duslerevigamestudio.puncher&hl=en_US&gl=US",
                modal: "puncher",
                img: "/puncher/puncher.png",
                imgs: [
                    "/puncher/puncher2.jpg",
                    "/puncher/puncher3.jpg",
                    "/puncher/puncher4.jpg",
                    "/puncher/puncher5.jpg",
                ],
                gh_card: ""
            },
            {
                title: "Animal Match",
                caption: "A 2.5D endless runner and hypercasual mobile game.",
                detail: `I created this mobile game collabrating with a designer for the Voodoo 2021 hypercasual contest. We published it on both App Store and Google Play Store`,
                tech: "Unity, C#, Zenject for Dependency Injection, Firebase and local files for database",
                link: "https://play.google.com/store/apps/details?id=com.heyyouherodesignstudio.animalmatch&hl=en_US&gl=US",
                modal: "animal_match",
                img: "/animal_match/animal_match.png",
                imgs: [
                    "/animal_match/animalmatch2.jpg",
                    "/animal_match/animalmatch3.jpg",
                    "/animal_match/animalmatch4.jpg",
                    "/animal_match/animalmatch5.jpg",
                ],
                gh_card: ""
            },
            {
                title: "Aquatic Ruination",
                detail: `This game was created in collaboration with three of my classmates in the CISC 3667 Game Design class.
                We learned all of the essential stages to design and publish a game in class, with a special emphasis on User-Centered Design and extensive testing.
                The stages were: idea generation, design, implementation, and evaluation.`,
                caption: "A 2D educational web game to teach users about ocean pollution and ways to save sealife.",
                tech: "Unity, C#",
                link: "https://github.com/mixemer/projectx",
                modal: "aquatic_ruination",
                img: "/aquatic_ruination/aquatic_ruination.png",
                imgs: [
                    "/aquatic_ruination/aquatic_ruination2.PNG",
                    "/aquatic_ruination/aquatic_ruination3.PNG",
                    "/aquatic_ruination/aquatic_ruination4.PNG",
                    "/aquatic_ruination/aquatic_ruination5.PNG",
                ],
                gh_card: "projectx"
            },
            {
                title: "Set Game",
                detail: ``,
                caption: "A game project created for cs193p - Stanford University Course.",
                tech: "Swift, SwiftUI",
                link: "https://github.com/mixemer/set-game",
                modal: "set_game",
                img: "/not_found.png",
                imgs: [],
                gh_card: "set-game"
            },
        ]
    },
    mobile_apps: {
        name: "Mobile Apps",
        items: [
            {
                title: "ChallengeMeUp",
                detail: `This app allows you create and monitor your challenges. 
                As we know, challenges motivate us, show who we are and what we are capable of. 
                So, start using this app to be more productive by challenging yourself to be stronger and well-organized person.`,
                caption: "Mobile app for setting and tracking timed challenges to help people become more productive.",
                tech: "Flutter & Dart, Firebase",
                link: "https://github.com/mixemer/challengemeup",
                modal: "challenge_me_up",
                img: "/challengemeup/challenge_me_up_cover.PNG",
                imgs: [
                    "/challengemeup/challenge_me_up.PNG",
                    "/challengemeup/challenge_me_up2.PNG",
                    "/challengemeup/challenge_me_up3.PNG",
                    "/challengemeup/challenge_me_up4.PNG",
                ],
                gh_card: ""
            },
            {
                title: "AR Book World",
                detail: `As students, we always find notebooks and books boring. 
                There is lots of writing. Pictures do not help sometimes too. 
                So, we thought of creating a project that makes books interactive that will get students to engage as well as learn experientially.`,
                caption: "Augmented reality mobile app that makes textbooks more interactive.",
                tech: "Swift, UIKit and ARKit",
                link: "https://devpost.com/software/ar-book-world",
                modal: "ar_book",
                img: "/arbook/ar_book.jpg",
                imgs: [
                    "/arbook/arbook1.png",
                    "/arbook/arbook2.png",
                    "/arbook/arbook3.png",
                    "/arbook/arbook4.png",
                ],
                gh_card: "AR-Book-World"
            },
            {
                title: "Emoji Art App",
                detail: ``,
                caption: "Class project for Stanford cs193p: an app for creating art using emojis and background images",
                tech: "Swift and SwiftUI",
                link: "https://github.com/mixemer/emoji-art",
                modal: "emoji_art",
                img: "/not_found.png",
                imgs: [],
                gh_card: "emoji-art"
            },
        ]
    },
    web_apps: {
        name: "Web Apps",
        items: [
            {
                title: "Portfolio",
                detail: ``,
                caption: "My personal portfolio website.",
                tech: "HTML, CSS, React and Bootstrap",
                link: "https://mixemer.github.io/portfolio/",
                modal: "portfolio",
                img: "/not_found.png",
                imgs: [],
                gh_card: "portfolio"
            },
            {
                title: "Email Spam Database",
                detail: ``,
                caption: "Database and search engine website for spam emails. Its purpose is to help people who are targeted by spam emails.",
                tech: "HTML, CSS, Svelte and Bootstrap",
                link: "https://github.com/mixemer/email_spam_database",
                modal: "email_spam_database",
                img: "/not_found.png",
                imgs: [],
                gh_card: "email_spam_database"
            },
            {
                title: "To do",
                detail: ``,
                caption: "Simple website for creating and tracking tasks",
                tech: "HTML, CSS, Svelte and Bootstrap",
                link: "https://github.com/mixemer/cisc3650-todoapp",
                modal: "to_do",
                img: "/not_found.png",
                imgs: [],
                gh_card: "cisc3650-todoapp"
            },
        ]
    },
    honors_research: {
        name: "Honors & Research",
        items: [
            {
                title: "Assistive Robot for Deaf-Hearing Communication using Microsoft Kinect and NAO Robot",
                detail: ``,
                caption: "Research Project",
                tech: "NAO Robot, Microsoft Kinect, C# and C++",
                link: "https://docs.google.com/document/d/1smRE0nahRs23ShaHE_IpykG3tU1S5YVLQFhjCVI1KOg/edit?usp=sharing",
                modal: "deaf_hearing",
                img: "/project_imgs/assistive_robot.png",
                imgs: [],
                gh_card: ""
            },
            {
                title: "Controlling a humanoid robot using non-verbal communication",
                detail: ``,
                caption: "Honors Project",
                tech: "NAO Robot and C++",
                link: "https://drive.google.com/file/d/1R2WhlzfBzvARo67VwJegvixXTrSpPY27/view",
                modal: "deaf_hearing",
                img: "/project_imgs/controlling_nao.png",
                imgs: [],
                gh_card: ""
            },
            {
                title: "LargeInt",
                detail: ``,
                caption: "Honors project for Data Structures class at BMCC",
                tech: "C++",
                link: "https://github.com/mixemer/LargeInt",
                modal: "large_int",
                img: "/project_imgs/large_int.jpeg",
                imgs: [],
                gh_card: "LargeInt"
            },
        ]
    },
    others: {
        name: "Other",
        items: [
            {
                title: "BeeSweeper",
                detail: ``,
                caption: "Single-player puzzle video game similar to minesweeper",
                tech: "Java",
                link: "https://github.com/mixemer/BeeSweeper-new",
                modal: "bee_sweeper",
                img: "/project_imgs/bee_sweeper.jpg",
                imgs: [],
                gh_card: "BeeSweeper-new"
            },
            {
                title: "Predict scale of satellite images using Neural Networks",
                detail: ``,
                caption: "Project for 2018 Wolfram summer school",
                tech: "Wolfram Language",
                link: "https://github.com/mixemer/Summer2018Starter/tree/master/Project",
                modal: "predict_scale_of_satellite",
                img: "/project_imgs/satellite.png",
                imgs: [],
                gh_card: "Summer2018Starter"
            },
            {
                title: "Explosion of Particles",
                detail: ``,
                caption: "Created a small GUI (SDL) program in C++",
                tech: "C++",
                link: "https://github.com/mixemer/Explosion-of-Particles",
                modal: "explosion_of_particles",
                img: "/project_imgs/particle.png",
                imgs: [],
                gh_card: "Explosion-of-Particles"
            },
            
        ]
    }
};

export const skills = [
    {
        name: "Unity, C#",
        detail: 
        `Over the past 2 years, I have had extensive experience with Unity. I created many games and I published 3 of them on Google Play Store and Apple App store.
        While creating amazing game experiences in Unity, I also learned and used Dependency Injection, Animation, Randomization, Networking (Photon Pun), 3D Models, Mesh, Textures, Sprites and more`,
        iconClassName: "fa-brands fa-unity"
    },
    {
        name: "iOS, Swift",
        detail: `
        In 2019, I began developing iOS apps for the first time.
        I studied Swift, UIKit, Cocoapods, Core Data, Realm, CoreML, and ARKit via an Udemy course called "iOS & Swift - The Complete iOS App Development Bootcamp."
        I've made over ten apps, and one of them (ARBook World), which with ARKit, was selected as a winner at HackNYU in 2019.
        I recently completed the Stanford CS193p course and began learning SwiftUI.`,
        iconClassName: "fa-brands fa-apple"
    },
    {
        name: "C++",
        detail: `
        Since 2017, C++ has been my primary programming language.
        I began learning C++ at my college, and due to my advanced knowledge of the language, I was appointed as a Supplemental Instruction Leader for Advance C++ classes at my college for two semesters.
        In addition, I used C++ extensively in some of my research and honors projects, particularly in my honors project "Controlling a humanoid robot utilizing non-verbal communication."`,
        iconClassName: "fa-solid fa-c"
    },
    {
        name: "JavaScript, HTML, CSS",
        detail: `
        In 2018, I began developing Web apps as a Software Engineer Intern in one of my school's programs called CUNYCodes.
        Since then, I've used HTML /JavaScript /CSS to develop a number of school projects and in my portfolio.
        I'm familiar with the following frameworks and libraries:
        Svelte and MERN (MongoDB, Express, React, Nodejs) `,
        iconClassName: "fa-solid fa-code"
    },
    {
        name: "Flutter, Dart",
        detail: `
        I started using Flutter for one of my productivty mobile app idea in 2020. I wanted to create the app and publish it for both iOS and Android. I was able to create and pubish the app called ChallengeMe`,
        iconClassName: "fa-solid fa-f"
    }
]