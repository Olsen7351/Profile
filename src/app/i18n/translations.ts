export type Lang = 'en' | 'da';

export interface TimelineItem {
  role: string;
  company?: string;
  date: string;
  desc: string;
  location?: string;
}

export interface ProjectItem {
  name: string;
  desc: string;
  url?: string;
  urlLabel?: string;
}

export interface SkillItem {
  label: string;
  value: string;
}

export interface Translation {
  meta: {
    title: string;
  };
  hero: {
    title: string;
    tagline: string;
    nav: {
      about: string;
      education: string;
      experience: string;
      projects: string;
      skills: string;
      contact: string;
    };
    themeToLight: string;
    themeToDark: string;
  };
  about: {
    title: string;
    // p2 contains <strong> markup and is bound via [innerHTML]
    p1: string;
    p2: string;
    p3: string;
  };
  education: {
    title: string;
    items: TimelineItem[];
  };
  experience: {
    title: string;
    items: TimelineItem[];
  };
  projects: {
    title: string;
    items: ProjectItem[];
  };
  skills: {
    title: string;
    intro: string;
    items: SkillItem[];
  };
  contact: {
    title: string;
    name: string;
    location: string;
    email: string;
    phone: string;
    phoneHref: string;
    note: string;
  };
}

export const TRANSLATIONS: Record<Lang, Translation> = {
  en: {
    meta: {
      title: 'Jens Møller Olsen — Software Engineer',
    },
    hero: {
      title: 'Software Engineer',
      tagline:
        'I like solving problems — usually with software. I take pride in doing things properly: the code, the tests, the pipeline that ships it.',
      nav: {
        about: 'About',
        education: 'Education',
        experience: 'Experience',
        projects: 'Projects',
        skills: 'Skills',
        contact: 'Contact',
      },
      themeToLight: 'Switch to light mode',
      themeToDark: 'Switch to dark mode',
    },
    about: {
      title: 'About',
      p1: "I'm a software engineer based in Horsens. What I like best is solving problems — software is my favorite tool for it. I finish what I start, take initiative, work equally well solo or in a team.",
      p2: 'Day to day I write <strong>Java</strong>, <strong>TypeScript</strong>, modern web (Angular, Node.js). My bachelor project was built on <strong>machine learning</strong> and <strong>computer vision</strong>. Beyond that I use Spring Boot, PostgreSQL, Docker, Azure, CI/CD (GitLab, TeamCity), Bash/PowerShell.',
      p3: 'I know a bit about manufacturing: at Kamstrup I started as an operator on the production line, later joined the Software Manufacturing team. Off the clock: padel, cycling, running.',
    },
    education: {
      title: 'Education',
      items: [
        {
          role: 'Software Technology (Diplomingeniør)',
          company: 'VIA University College',
          date: '2022 – 2025',
          desc: 'Engineering degree in software technology: software development, system design, and engineering practice. My bachelor project used machine learning and computer vision to build an analytics model for padel.',
          location: 'Horsens, Denmark',
        },
        {
          role: 'Army Sergeant School',
          company: 'Forsvaret (Danish Armed Forces)',
          date: '2020 – 2021',
          desc: 'Sergeant training: leadership, structure, and working under pressure. The discipline and teamwork from that time still shape how I work.',
        },
      ],
    },
    experience: {
      title: 'Experience',
      items: [
        {
          role: 'Software Engineer',
          company: 'Systematic',
          date: 'Feb 2026 – Present',
          desc: 'I develop and maintain software in an enterprise environment with high demands on quality. Everyday work with TeamCity, Git, and code review in a structured, agile team.',
          location: 'Aarhus, Denmark · On-site',
        },
        {
          role: 'Junior Software Developer',
          company: 'Systematic',
          date: 'Aug 2024 – Feb 2026',
          desc: 'Started alongside my studies: feature development, bug fixing, and learning to work with version control and CI in a large codebase.',
          location: 'Aarhus, Denmark',
        },
        {
          role: 'Student Assistant – Software Manufacturing',
          company: 'Kamstrup',
          date: 'Jun 2023 – Aug 2024',
          desc: "Part of the team building software for Kamstrup's production. Migrated legacy projects to GitLab, built pipeline templates and automation; daily work in C# and Java.",
          location: 'Skanderborg, Denmark',
        },
        {
          role: 'Operator',
          company: 'Kamstrup',
          date: 'Oct 2022 – Jun 2023',
          desc: 'Operator on the electronics production line alongside my studies. Hands-on experience with production flow, quality checks, and keeping a line running.',
          location: 'Skanderborg, Denmark · Full-time, weekend shift',
        },
        {
          role: 'Sergeant',
          company: 'Forsvaret (Danish Armed Forces)',
          date: 'Feb 2020 – Aug 2022',
          desc: 'Leadership and training responsibility: planning, clear communication, and tasks done properly under pressure.',
          location: 'Full-time',
        },
      ],
    },
    projects: {
      title: 'Projects',
      items: [
        {
          name: 'Smash – Padel Club App (hobby project)',
          desc: 'A club app built in my spare time for the community around Smash Padelcenter. React and Node.js, live and in real use — a fun way to keep my full-stack skills sharp.',
          url: 'https://www.smash.rns-apps.dk',
          urlLabel: 'www.smash.rns-apps.dk',
        },
        {
          name: 'Padel Analytics (bachelor project)',
          desc: 'My bachelor project at VIA: a machine learning and computer vision model for analyzing padel. Gave me hands-on experience with training, evaluating, and improving a real model — not just theory.',
        },
        {
          name: 'Portfolio & CV',
          desc: 'This site: a small Angular app with Danish/English switching, built and deployed to GitHub Pages with GitHub Actions.',
          url: 'https://olsen7351.github.io/Profile/',
          urlLabel: 'olsen7351.github.io/Profile/',
        },
      ],
    },
    skills: {
      title: 'Skills',
      intro: 'What I use day to day, and what I have worked with along the way:',
      items: [
        { label: 'Languages', value: 'TypeScript, JavaScript, Java, C#, HTML/CSS' },
        { label: 'Backend', value: 'Node.js, Spring Boot, REST APIs' },
        { label: 'Frontend', value: 'Angular, React' },
        { label: 'Data & ML', value: 'PostgreSQL, MongoDB, data modeling; machine learning and computer vision from my bachelor project' },
        { label: 'Scripting', value: 'Bash, PowerShell' },
        { label: 'DevOps & CI/CD', value: 'Git, GitLab, TeamCity, Docker, Azure, Bicep (IaC), pipeline design' },
        { label: 'Practices', value: 'Agile/Scrum, unit & integration testing, code review, clean code' },
        { label: 'Tools', value: 'AI-assisted development (used with care — I stay responsible for the code)' },
      ],
    },
    contact: {
      title: 'Contact',
      name: 'Jens Møller Olsen',
      location: 'Horsens, Denmark',
      email: 'olsen7351@gmail.com',
      phone: '+45 21 12 59 50',
      phoneHref: 'tel:+4521125950',
      note: "Feel free to reach out if you'd like to talk — by phone or email.",
    },
  },
  da: {
    meta: {
      title: 'Jens Møller Olsen — Software Engineer',
    },
    hero: {
      title: 'Software Engineer',
      tagline:
        'Jeg kan lide at løse problemer — som regel med software. Jeg går op i at gøre tingene ordentligt: koden, testene, pipelinen der leverer det.',
      nav: {
        about: 'Om mig',
        education: 'Uddannelse',
        experience: 'Erfaring',
        projects: 'Projekter',
        skills: 'Kompetencer',
        contact: 'Kontakt',
      },
      themeToLight: 'Skift til lyst tema',
      themeToDark: 'Skift til mørkt tema',
    },
    about: {
      title: 'Om mig',
      p1: 'Jeg er softwareudvikler, bosat i Horsens. Jeg kan bedst lide at løse problemer — software er mit foretrukne værktøj til det. Jeg gør tingene færdige, tager initiativ, arbejder lige så godt selvstændigt som i team.',
      p2: "Til daglig skriver jeg <strong>Java</strong>, <strong>TypeScript</strong>, moderne web (Angular, Node.js). Mit bachelorprojekt var bygget på <strong>machine learning</strong> og <strong>computer vision</strong>. Derudover bruger jeg Spring Boot, PostgreSQL, Docker, Azure, CI/CD (GitLab, TeamCity), Bash/PowerShell.",
      p3: 'Jeg kender lidt til produktion: hos Kamstrup startede jeg som operatør ved produktionslinjen, senere kom jeg med i Software Manufacturing-teamet. I fritiden: padel, cykling, løb.',
    },
    education: {
      title: 'Uddannelse',
      items: [
        {
          role: 'Diplomingeniør, Softwareteknologi',
          company: 'VIA University College',
          date: '2022 – 2025',
          desc: 'Ingeniøruddannelse i softwareteknologi: softwareudvikling, systemdesign og ingeniørpraksis. Mit bachelorprojekt brugte machine learning og computer vision til at bygge en analysemodel til padel.',
          location: 'Horsens, Danmark',
        },
        {
          role: 'Hærens Sergentskole',
          company: 'Forsvaret',
          date: '2020 – 2021',
          desc: 'Sergentuddannelse: ledelse, struktur og arbejde under pres. Disciplinen og holdånden derfra præger stadig den måde, jeg arbejder på.',
        },
      ],
    },
    experience: {
      title: 'Erfaring',
      items: [
        {
          role: 'Software Engineer',
          company: 'Systematic',
          date: 'Feb 2026 – nu',
          desc: 'Jeg udvikler og vedligeholder software i et enterprise-miljø med høje krav til kvalitet. Hverdagen byder på TeamCity, Git og code review i et struktureret, agilt team.',
          location: 'Aarhus, Danmark · On-site',
        },
        {
          role: 'Junior Software Developer',
          company: 'Systematic',
          date: 'Aug 2024 – Feb 2026',
          desc: 'Startede sideløbende med studiet: featureudvikling, fejlrettelser og erfaring med versionsstyring og CI i en stor kodebase.',
          location: 'Aarhus, Danmark',
        },
        {
          role: 'Studentermedhjælper – Software Manufacturing',
          company: 'Kamstrup',
          date: 'Jun 2023 – Aug 2024',
          desc: 'En del af teamet, der bygger software til Kamstrups produktion. Migrerede legacy-projekter til GitLab, byggede pipeline-skabeloner og automatisering; dagligt arbejde i C# og Java.',
          location: 'Skanderborg, Danmark',
        },
        {
          role: 'Operatør',
          company: 'Kamstrup',
          date: 'Okt 2022 – Jun 2023',
          desc: 'Operatør ved elektronikproduktionslinjen sideløbende med studiet. Praktisk erfaring med produktionsflow, kvalitetskontrol og med at holde en linje kørende.',
          location: 'Skanderborg, Danmark · Fuldtid, weekendhold',
        },
        {
          role: 'Sergent',
          company: 'Forsvaret',
          date: 'Feb 2020 – Aug 2022',
          desc: 'Ledelses- og uddannelsesansvar: planlægning, klar kommunikation og opgaver løst ordentligt under pres.',
          location: 'Fuldtid',
        },
      ],
    },
    projects: {
      title: 'Projekter',
      items: [
        {
          name: 'Smash – Padelklub-app (hobbyprojekt)',
          desc: 'En klub-app bygget i fritiden til fællesskabet omkring Smash Padelcenter. React og Node.js, live og i reel brug — en sjov måde at holde fuldstack-færdighederne ved lige.',
          url: 'https://www.smash.rns-apps.dk',
          urlLabel: 'www.smash.rns-apps.dk',
        },
        {
          name: 'Padel Analytics (bachelorprojekt)',
          desc: 'Mit bachelorprojekt på VIA: en machine learning- og computer vision-model til at analysere padel. Gav mig praktisk erfaring med at træne, evaluere og forbedre en rigtig model — ikke kun teori.',
        },
        {
          name: 'Portfolio & CV',
          desc: 'Dette site: en lille Angular-app med dansk/engelsk sprogskifte, bygget og udgivet til GitHub Pages med GitHub Actions.',
          url: 'https://olsen7351.github.io/Profile/',
          urlLabel: 'olsen7351.github.io/Profile/',
        },
      ],
    },
    skills: {
      title: 'Kompetencer',
      intro: 'Det, jeg bruger til daglig, og det, jeg har arbejdet med undervejs:',
      items: [
        { label: 'Sprog', value: 'TypeScript, JavaScript, Java, C#, HTML/CSS' },
        { label: 'Backend', value: "Node.js, Spring Boot, REST API'er" },
        { label: 'Frontend', value: 'Angular, React' },
        { label: 'Data & ML', value: 'PostgreSQL, MongoDB, datamodellering; machine learning og computer vision fra mit bachelorprojekt' },
        { label: 'Scripting', value: 'Bash, PowerShell' },
        { label: 'DevOps & CI/CD', value: 'Git, GitLab, TeamCity, Docker, Azure, Bicep (IaC), pipeline-design' },
        { label: 'Metoder', value: 'Agile/Scrum, unit- og integrationstests, code review, clean code' },
        { label: 'Værktøjer', value: 'AI-assisteret udvikling (brugt med omtanke — ansvaret for koden er mit)' },
      ],
    },
    contact: {
      title: 'Kontakt',
      name: 'Jens Møller Olsen',
      location: 'Horsens, Danmark',
      email: 'olsen7351@gmail.com',
      phone: '+45 21 12 59 50',
      phoneHref: 'tel:+4521125950',
      note: 'Ræk endelig ud, hvis du vil tage en snak — telefon eller mail.',
    },
  },
};
