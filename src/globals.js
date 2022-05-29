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
export const projects = {
    games: {
        name: "Games",
        items: [
            // Also add the ungoing sea game
            {
                title: "Puncher",
                description: `In the game of Puncher and box, fun and competition go hand in hand.
                 Fun and contentious fights with cartoon characters await you. 
                 Enjoy the fun and competition with both multiplayer and levelers.`,
                detail: `Worked as a Unity Developer to create and publish the game for a Turkish design studio, OB Games.`,
                link: "https://play.google.com/store/apps/details?id=com.duslerevigamestudio.puncher&hl=en_US&gl=US",
                modal: "puncher",
                img: "puncher.png",
                gh_card: ""
            },
            {
                title: "Animal Match",
                description: `Save different types of animals from the approaching flood with the "match animals" game. 
                Collect rescued animal mates on your own island. 
                At each stage, add a new type of animal to your collection and multiply their numbers.`,
                detail: "Collabrated with a designer to build a hyper casual game for Voodoo game compatition",
                link: "https://play.google.com/store/apps/details?id=com.heyyouherodesignstudio.animalmatch&hl=en_US&gl=US",
                modal: "animal_match",
                img: "animal_match.png",
                gh_card: ""
            },
            {
                title: "Aquatic Ruination",
                description: `To teach users about different types of human-generated pollution that appears in the sea and its influence on marine life as a consequence.`,
                detail: "Collabrated with a team of student to create a education game for class porject",
                link: "https://github.com/mixemer/projectx",
                modal: "aquatic_ruination",
                img: "aquatic_ruination.png",
                gh_card: "projectx"
            },
            {
                title: "Set Game",
                description: ``,
                detail: "A project for cs193p - Stanford University Course ",
                link: "https://github.com/mixemer/set-game",
                modal: "set_game",
                img: "not_found.png",
                gh_card: "set-game"
            },
        ]
    },
    mobile_apps: {
        name: "Mobile Apps",
        items: [
            {
                title: "ChallengeMeUp",
                description: `This app allows you create and monitor your challenges. 
                As we know, challenges motivate us, show who we are and what we are capable of. 
                So, start using this app to be more productive by challenging yourself to be stronger and well-organized person.`,
                detail: "Collabrated with a designer to build a hybrit app for both app store and google play store using Flutter",
                link: "https://github.com/mixemer/challengemeup",
                modal: "challenge_me_up",
                img: "challenge_me_up.PNG",
                gh_card: ""
            },
            {
                title: "AR Book World",
                description: `As students, we always find notebooks and books boring. 
                There is lots of writing. Pictures do not help sometimes too. 
                So, we thought of creating a project that makes books interactive that will get students to engage as well as learn experientially.`,
                detail: "Selected as an Education Track winner out of 104 teams (340+ participants) at the HackNYU 2019",
                link: "https://devpost.com/software/ar-book-world",
                modal: "ar_book",
                img: "ar_book.jpg",
                gh_card: "AR-Book-World"
            },
            {
                title: "Emoji Art App",
                description: ``,
                detail: "Class project for Stanford cs193p: an app for creating art using emojis and background images",
                link: "https://github.com/mixemer/emoji-art",
                modal: "emoji_art",
                img: "not_found.png",
                gh_card: "emoji-art"
            },
        ]
    },
    web_apps: {
        name: "Web Apps",
        items: [
            {
                title: "Portfolio",
                description: ``,
                detail: "",
                link: "https://mixemer.github.io/portfolio/",
                modal: "portfolio",
                img: "not_found.png",
                gh_card: "portfolio"
            },
            {
                title: "Email Spam Database",
                description: ``,
                detail: "School project",
                link: "https://github.com/mixemer/email_spam_database",
                modal: "email_spam_database",
                img: "not_found.png",
                gh_card: "email_spam_database"
            },
            {
                title: "To do",
                description: ``,
                detail: "School project",
                link: "https://github.com/mixemer/cisc3650-todoapp",
                modal: "to_do",
                img: "not_found.png",
                gh_card: "cisc3650-todoapp"
            },
        ]
    },
    honors_research: {
        name: "Honors & Research",
        items: [
            {
                title: "Assistive Robot for Deaf-Hearing Communication using Microsoft Kinect and NAO Robot",
                description: ``,
                detail: "Assistive Robot for Deaf-Hearing Communication using Microsoft Kinect and NAO Robot",
                link: "https://docs.google.com/document/d/1smRE0nahRs23ShaHE_IpykG3tU1S5YVLQFhjCVI1KOg/edit?usp=sharing",
                modal: "deaf_hearing",
                img: "assistive_robot.png",
                gh_card: ""
            },
            {
                title: "Controlling a humanoid robot using non-verbal communication",
                description: ``,
                detail: "Controlling a humanoid robot using non-verbal communication",
                link: "https://drive.google.com/file/d/1R2WhlzfBzvARo67VwJegvixXTrSpPY27/view",
                modal: "deaf_hearing",
                img: "controlling_nao.png",
                gh_card: ""
            },
            {
                title: "LargeInt",
                description: ``,
                detail: "An honor project for the CSC331 - data structure class at BMCC",
                link: "https://github.com/mixemer/LargeInt",
                modal: "large_int",
                img: "large_int.jpeg",
                gh_card: "LargeInt"
            },
        ]
    },
    others: {
        name: "Other",
        items: [
            {
                title: "BeeSweeper",
                description: ``,
                detail: "School project at BMCC, Java",
                link: "https://github.com/mixemer/BeeSweeper-new",
                modal: "bee_sweeper",
                img: "bee_sweeper.jpg",
                gh_card: "BeeSweeper-new"
            },
            {
                title: "Explosion of Particles",
                description: ``,
                detail: "Created a small GUI (SDL) program in C++",
                link: "https://github.com/mixemer/Explosion-of-Particles",
                modal: "explosion_of_particles",
                img: "particle.png",
                gh_card: "Explosion-of-Particles"
            },
            {
                title: "Predict scale of satellite images using Neural Networks",
                description: ``,
                detail: "Predict scale of satellite images using Neural Networks",
                link: "https://github.com/mixemer/Summer2018Starter/tree/master/Project",
                modal: "predict_scale_of_satellite",
                img: "satellite.png",
                gh_card: "Summer2018Starter"
            },
        ]
    }
};

export const skills = [
    {
        name: "Unity, C#",
        description: 
        `Over the past 2 years, I have had extensive experience with Unity. I created many games and I published 3 of them on Google Play Store and Apple App store.
        While creating amazing game experiences in Unity, I also learned and used Dependency Injection, Animation, Randomization, Networking (Photon Pun), 3D Models, Mesh, Textures, Sprites and more`,
        iconClassName: "fa-brands fa-unity"
    },
    {
        name: "iOS, Swift",
        description: `
        In 2019, I began developing iOS apps for the first time.
        I studied Swift, UIKit, Cocoapods, Core Data, Realm, CoreML, and ARKit via an Udemy course called "iOS & Swift - The Complete iOS App Development Bootcamp."
        I've made over ten apps, and one of them (ARBook World), which with ARKit, was selected as a winner at HackNYU in 2019.
        I recently completed the Stanford CS193p course and began learning SwiftUI.`,
        iconClassName: "fa-brands fa-apple"
    },
    {
        name: "C++",
        description: `
        Since 2017, C++ has been my primary programming language.
        I began learning C++ at my college, and due to my advanced knowledge of the language, I was appointed as a Supplemental Instruction Leader for Advance C++ classes at my college for two semesters.
        In addition, I used C++ extensively in some of my research and honors projects, particularly in my honors project "Controlling a humanoid robot utilizing non-verbal communication."`,
        iconClassName: "fa-solid fa-c"
    },
    {
        name: "JavaScript, HTML, CSS",
        description: `
        In 2018, I began developing Web apps as a Software Engineer Intern in one of my school's programs called CUNYCodes.
        Since then, I've used HTML /JavaScript /CSS to develop a number of school projects and in my portfolio.
        I'm familiar with the following frameworks and libraries:
        Svelte and MERN (MongoDB, Express, React, Nodejs) `,
        iconClassName: "fa-solid fa-code"
    },
    {
        name: "Flutter, Dart",
        description: `
        I started using Flutter for one of my productivty mobile app idea in 2020. I wanted to create the app and publish it for both iOS and Android. I was able to create and pubish the app called ChallengeMe`,
        iconClassName: "fa-solid fa-f"
    }
]