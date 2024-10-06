import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Bhuvanesh',
    lastName:  'Bonde',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Full Stack Developer And ML AI Enthusiast',
    avatar:    '/images/avatar.jpeg',
    location:  'Asia/Calcutta',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Hindi']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/devnev39',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/bhuvanesh-bonde',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'bhuvaneshbonde9@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>{person.role}</>,
    subline: <>Hi! I’m Bhuvanesh, a Backend Developer. In my free time, I work on personal projects and enjoy exploring and experimenting with new open-source libraries.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: false,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Bhuvanesh is a highly motivated backend developer with a strong foundation in full stack development, machine learning, and cloud computing. With experience in building dynamic applications and streamlining deployment processes, he has successfully contributed to various projects that showcase his adaptability and problem-solving skills.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Resolute AI',
                timeframe: 'March 2023 - Oct 2023 | Aug 2024 - Present',
                role: 'Backend Developer',
                achievements: [
                    <>Developed a robust security application with a well-structured RBAC system, ensuring secure and efficient access management.</>,
                    <>Implemented a data retrieval system from a BLAST database, adding specific features that enhanced the functionality of the bioinformatics project.</>,
                    <>Currently working on a project with extensive hierarchical data structure utilizing fastapi for both backend and ai model inference.</>,
                    <>Extensively used cloud platforms like GCP, Azure to deploy applications.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    
                ]
            },
            {
                company: 'Rampushpa Electricals',
                timeframe: 'Dec 2022 - Jan 2023',
                role: 'Trainee Engineer',
                achievements: [
                    <>Developed an inventory management application for an electrical company, improving tracking accuracy by 20%</>,
                    <>Integrated reporting features into the inventory management app, improving task reporting accuracy by 30% and providing valuable insights for decision-making</>
                ],
                images: [ ]
            },
            {
                company: 'E Baja - Resonance Racing',
                timeframe: 'Jan 2023 - Jun 2023',
                role: 'DAQ Engineer',
                achievements: [
                    <>Designed and implemented a Data Acquisition System for a college club's vehicle using Arduino Uno, integrating sensors for real-time monitoring and data logging.Implemented a WiFi server for remote data access</>,
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'AISSMS College Of Engineering, Pune',
                description: <>Studied electrical engineering.</>,
                percentage: "7.8 GPA"
            },
            {
                name: 'Pratap College, Amalner',
                description: <>General Science</>,
                percentage: "75%"
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Python - FastAPI | Django | Tensorflow',
                description: <>Able to build backend services with django and fastapi. Also built some machine learning models along with inference service writeen in fastapi.</>,
                images: [
                    
                ]
            },
            {
                title: 'Node.js - Next.js | React.js | Express.js',
                description: <>Experience with next.js and react.js. Also used express.js for backend services</>,
                images: [
                ]
            },
            {
                title: "Docker | GCP",
                description: <>Used docker and gcp to deploy services</>,
                images: []
            },
            {
                title: "Databases - MongoDB | MySQL | Firestore",
                description: <>Used mongodb and mysql for backend services</>,
                images: []
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    images: [
        { 
            src: '/images/gallery/img-1.png', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-2.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-3.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-4.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-5.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-6.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-7.jpg',  
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };