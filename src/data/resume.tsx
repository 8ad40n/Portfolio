import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Badhon Nath Joy",
  initials: "BNJ",
  url: "https://badhonnathjoy.vercel.app/",
  location: "",
  locationLink: "",
  description: "Software Engineer | Full Stack Developer",
  summary:
    "I am a dedicated Full Stack Developer and Software Engineer with expertise in both front-end and back-end technologies, including TypeScript, JavaScript, Express.js, Next.js, React, Nest.js, and REST APIs. With hands-on experience in database management using MongoDB, PostgreSQL, Mongoose, and TypeORM, I have successfully developed and deployed several projects. Additionally, I possess knowledge of basic machine learning, which allows me to integrate advanced capabilities into my work. Currently pursuing a degree in Computer Science and Engineering at American International University-Bangladesh, I am eager to apply my skills to create innovative solutions in the tech industry.",
  avatarUrl: "/me.jpg",
  skills:
    // "Typescript",
    // "JavaScript",
    // "Express Js",
    // "Next.Js",
    // "React",
    // "Firebase",
    // "REST API",
    // "Nest Js",
    // "MongoDB",
    // "Mongoose",
    // "PostgreSQL",
    // "TypeORM",
    // "C++",
    {
      Programming: ["TyepScript", "JavaScript", "C++", "Python", "C#"],
      Frontend: ["Next.Js", "React", "HTML", "CSS", "Tailwind CSS"],
      Backend: ["Express Js", "Nest Js", "REST API"],
      Database: ["MongoDB", "PostgreSQL", "Mongoose", "TypeORM"],
      Others: ["Firebase", "Next Auth", "Git", "GitHub"],
    },

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/8ad40n",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/badhon-nath-joy-5ab740209/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Email: {
        name: "Email",
        url: "joy184110@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      Facebook: {
        name: "Facebook",
        url: "https://www.facebook.com/8ad40n/",
        icon: Icons.facebook,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/_myself_joy_/",
        icon: Icons.instagram,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      // email: {
      //   name: "Send Email",
      //   url: "joy184110@gmail.com",
      //   icon: Icons.email,

      //   navbar: false,
      // },
    },
  },

  work: [
    {
      company: "Atomic Finance",
      href: "https://atomic.finance",
      badges: [],
      location: "Remote",
      title: "Bitcoin Protocol Engineer",
      logoUrl: "/atomic.png",
      start: "May 2021",
      end: "Oct 2022",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Shopify",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/shopify.svg",
      start: "January 2021",
      end: "April 2021",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineer",
      logoUrl: "/splunk.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer",
      logoUrl: "/lime.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
  ],
  education: [
    {
      school: "American International University-Bangladesh",
      href: "https://www.aiub.edu/",
      degree: "BSc. in Computer Science and Engineering",
      logoUrl: "/AIUB_whole_logo.png",
      start: "2021",
      end: "2025",
    },
    // {
    //   school: "University of Waterloo",
    //   href: "https://uwaterloo.ca",
    //   degree: "Bachelor's Degree of Computer Science (BCS)",
    //   logoUrl: "/waterloo.png",
    //   start: "2016",
    //   end: "2021",
    // },
    // {
    //   school: "Wilfrid Laurier University",
    //   href: "https://wlu.ca",
    //   degree: "Bachelor's Degree of Business Administration (BBA)",
    //   logoUrl: "/laurier.png",
    //   start: "2016",
    //   end: "2021",
    // },
    // {
    //   school: "International Baccalaureate",
    //   href: "https://ibo.org",
    //   degree: "IB Diploma",
    //   logoUrl: "/ib.png",
    //   start: "2012",
    //   end: "2016",
    // },
  ],
  projects: [
    // project 1
    {
      title: "Cognitgem",
      href: "https://cognitgem.vercel.app/",
      dates: "Sept 2024 - Sept 2024",
      active: true,
      description:
        "Cognitgem is a generative AI chatbot with the ability to generate unique text.",
      technologies: [
        "Next.js",
        "Express Js",
        "Next Auth",
        "Javascript",
        "REST API",
        "MongoDB",
        "Mongoose",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://cognitgem.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/8ad40n/cognitgem-client",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/cognitgem.png",
      video: "",
    },

    // project 2
    {
      title: "JobNest",
      href: "https://github.com/8ad40n/JobNest",
      dates: "Mar 2024 - Apr 2024",
      active: true,
      description:
        "JobNest is a dynamic web application connecting task sellers with freelance buyers, offering a robust marketplace for earning and outsourcing.",
      technologies: [
        "TypeScript",
        "Next.js",
        "Nest js",
        "PostgreSQL",
        "TailwindCSS",
        "JWT",
        "TypeORM",
        "REST API",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://cognitgem.vercel.app/",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/8ad40n/JobNest",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/jobnest.png",
      video: "",
    },
    // project 3
    {
      title: "Faculty Course Allocation",
      href: "https://github.com/8ad40n/Faculty-Course-Allocation",
      dates: "Dec 2023 - Dec 2023",
      active: true,
      description:
        "The 'Faculty Course Allocation' project automates and simplifies course assignments for faculty, with an intuitive interface for administrators and faculty.",
      technologies: [
        "Php",
        "Mysqli",
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://cognitgem.vercel.app/",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/8ad40n/Faculty-Course-Allocation",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/faculty.png",
      video: "",
    },

    // project 4
    {
      title: "Green Dhaka-Software Test Plan",
      href: "https://drive.google.com/file/d/1l_3SWtU6Q60jy3KKv8WKkysX5kC9oVbe/view?usp=sharing",
      dates: "Apr 2024 - May 2024",
      active: true,
      description:
        "The Green Dhaka project addresses the lack of green spaces and high unemployment in Dhaka by transforming rooftops into gardens and offering vocational training. The software platform connects residents to gardening opportunities, promoting environmental sustainability and economic empowerment, while enhancing the city's aesthetics and livability.",
      technologies: [""],
      links: [
        // {
        //   type: "Website",
        //   href: "https://cognitgem.vercel.app/",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://drive.google.com/file/d/1l_3SWtU6Q60jy3KKv8WKkysX5kC9oVbe/view?usp=sharing",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/green-dhaka-test.png",
      video: "",
    },

    // project 5
    {
      title: "Restaurant Management System",
      href: "https://github.com/8ad40n/Restaurant-Management-System",
      dates: "May 2023 - May 2023",
      active: true,
      description:
        "The Restaurant Management System is a Windows app built with C# and SQL Server, allowing Admin, Staff, and Manager roles to manage food items, orders, billing, and sales reports with an intuitive Guna UI interface.",
      technologies: ["C#", ".NET", "Microsoft SQL Server", "Guna UI"],
      links: [
        // {
        //   type: "Website",
        //   href: "https://cognitgem.vercel.app/",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/8ad40n/Restaurant-Management-System",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/rms.png",
      video: "",
    },

    // project 6
    {
      title: "Smart Ticketing",
      href: "https://8ad40n.github.io/Smart-Ticketing/",
      dates: "Jan 2024 - Jan 2024",
      active: true,
      description:
        "Smart Ticketing is a frontend web application that enables users to select seats, claim offers, and confirm bus ticket bookings with ease.",
      technologies: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
      links: [
        {
          type: "Website",
          href: "https://8ad40n.github.io/Smart-Ticketing/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/8ad40n/Smart-Ticketing",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ticket.jpg",
      video: "",
    },
    // project 7
    {
      title: "Hockey Shop",
      href: "https://8ad40n.github.io/Hockeys/",
      dates: "Jan 2024 - Jan 2024",
      active: true,
      description:
        "This is a Frontend Hockey Shop website that allows users to browse hockey equipment seamlessly.",
      technologies: ["HTML", "CSS", "Tailwind CSS", "Daisy UI"],
      links: [
        {
          type: "Website",
          href: "https://8ad40n.github.io/Hockeys/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/8ad40n/Hockeys",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/hockey.jpg",
      video: "",
    },

    // project 8
    {
      title: "AdvenTour-Travel",
      href: "https://8ad40n.github.io/AdvenTour-Travel/",
      dates: "Jan 2024 - Jan 2024",
      active: true,
      description:
        "AdvenTour Travel is a frontend-only travel website designed to showcase destinations and experiences, providing an engaging and visually appealing platform for users to explore and plan their adventures.",
      technologies: ["HTML", "CSS"],
      links: [
        {
          type: "Website",
          href: "https://8ad40n.github.io/AdvenTour-Travel/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/8ad40n/AdvenTour-Travel",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/tour.jpg",
      video: "",
    },
    // project 9
    {
      title: "Book Vibe",
      href: "https://book-review-kappa.vercel.app/",
      dates: "July 2024 - July 2024",
      active: true,
      description:
        "Book Vibe is a frontend website designed for book enthusiasts to organize and track their reading journey. Users can mark books as 'Wishlist' or 'Read' and view detailed reading statistics, offering an interactive way to manage and analyze their reading habits.",
      technologies: ["React", "Tailwind", "Daisy UI"],
      links: [
        {
          type: "Website",
          href: "https://book-review-kappa.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/8ad40n/book-review",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/book.png",
      video: "",
    },
    // project 10
    {
      title: "Recipe Calories",
      href: "https://chef-recipes-omega.vercel.app/",
      dates: "June 2024 - June 2024",
      active: true,
      description:
        "Recipe Calories is a frontend website that provides detailed information about various recipes, including ingredients, cooking time, food details, and calorie content, making meal planning easier and more informed.",
      technologies: ["React", "Tailwind", "Daisy UI"],
      links: [
        {
          type: "Website",
          href: "https://chef-recipes-omega.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/8ad40n/Chef-Recipes",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/recipe.png",
      video: "",
    },
  ],
  award: [
    {
      title: "Dean's List Honors",
      href: "https://drive.google.com/drive/folders/1yyyqwyGSB5Yl4ZVbxUwYc5DMI56DnGLM?usp=sharing",
      dates: "2023",
      Associate: "American International University-Bangladesh",
      AssociateLogoUrl: "/AIUB_whole_logo.png",
      description: "Obtained the Dean's List Honors for academic excellence.",
      image: "/cognitgem.png",
      video: "",
    },
  ],
} as const;
