/**
 * @name CURRICULUM_VITAE
 * @author César Costas Carrera
 * 
 * Curriculum in JS meant to be used with this repo.
 * Based on the schema from https://github.com/jsonresume/resume-schema
 */

 export default {
  basics: {
    name: 'César Costas Carrera',
    label: 'Software Engineer',
    /* Optional, image. Otherwise it takes it from gravatar */
    phone: '+447920158374',
    email: 'costascarrera.cesar@gmail.com',
    summary: `
I am a software engineer with ${semanticYearsOfExperience('2013-11-15')} in web development.

I have helped businesses to improve on:
 performance, acessibility, analytics, compliance,
 internationalisation, whitelabelling,
 microfrontends, design systems, tokenisation,
 testing, CI/CD, IaC,
 CMS, SEO, CRO, and others.

I am a team player, and I deeply care about the products I contribute to.
    `,
    location: {
      city: 'London',
      countryCode: 'GB',
    },
    profiles: [{
      network: 'Github',
      username: 'gatsbimantico',
      url: 'https://github.com/gatsbimantico',
    }, {
      network: 'Stackoverflow',
      username: 'gatsbimantico',
      url: 'https://stackoverflow.com/users/2308745/gatsbimantico'
    }],
  },
  color: '#b3002a',
  work: [{

    name: 'Nutmeg',
    position: 'Senior Software Engineer',
    startDate: 'Feb 2022', endDate: 'now',
    tools: [ 'React 17', 'Node 18', 'SASS', 'RTL', 'Cypress', 'Jenkins', 'Terraform', 'AWS', /* 'Argo', 'Enzime', 'Gitlab', 'Jira Cloud', */ ],
    summary: `
I became part of the product team
 and was shortly promoted due my contributions to the design system.
 I collaborated company-wide beyond engineering teams,
 delivering features, tools, business ideas and architectural decisions. 
 In February 2023 I was selected to form the Developer Experience team.
 Since then we refreshed almost every tool in the stack, and we keep improving iteratively. 
    `

  }, {

    name: 'Ocado Technology',
    position: 'Software Engineer Ⅱ',
    startDate: 'Jan 2020', endDate: 'Jan 2022',
    tools: [ 'React 17', 'Node 14', 'styled-components 5', 'RTL', 'Redux', /* 'Enzime', 'Gitlab', 'Jira Cloud', */ ],
    summary: `
I was hired to join the ecommere team.
 In addition to my responsibilities I championed best practices on
 accessibility, performance, compliance,
 and created technical initiatives to keep the project evergreen.
    `

  }, {

    name: 'Loveholidays',
    position: 'Frontend web developer',
    startDate: 'May 2018', endDate: '2020',
    tools: [ 'React 16', 'styled-components 5', 'Redux', /* 'Sass', 'redux-sagas', 'Enzime', 'Github', 'Jira Cloud', 'Karma', 'Optimizely', 'Google Analytics', 'Google Optimize', */ ],
    summary: `
Loveholidays was migrating to React when I joined.
 Soon after, I was invited with other two colleagues to form the CRO team
 which we grew to 15 developers within a year.
 I improved the development process
 and cross-team communications
 with dashboards, metrics and documentation.
    `,

  }, {

    name: 'Tribal worldwide',
    position: 'Frontend web developer',
    startDate: 'Jan 2017', endDate: 'May 2018',
    tools: [ 'Polymer 1', 'Aem', 'Jahia', /* 'Redux', 'Mocha', 'Sass', 'Node 6', 'Gulp 4', 'jQuery 3', 'Git', 'Handlebars', 'Wordpress', 'Jira', */ ],
    summary: `
At this award-winning agency I developed features for multiple clients.
 While working for Volkswagen,
 I designed, together with backend developers,
 an SSR flow for Jahia and Polymer allowing us to migrate
 from a CMS server multi-page site,
 to a CMS driven SPA.
    `,

  }, {

    name: 'Imatia innovation',
    position: 'Full stack web developer',
    startDate: 'Jun 2016 Jun', endDate: '2017',
    /* tools: [ 'Angular 2', 'TypeScript 2', 'Sass', 'Node 6', 'Docker', 'Scala', 'Java', 'Hadoop', 'Gulp 3', 'Gitlab' ], */

  }, {

    name: 'ViewNext',
    position: 'Full stack web developer',
    startDate: 'Jun 2015', endDate: 'Jun 2016',
    /* tools: [ 'Angular 1', 'Java 5', 'DB2', 'jQuery 1', 'HTML 4', 'CSS 2', 'Backbone', 'SVN', 'JSP', 'Jira' ], */

  }, {

    name: 'University of Vigo',
    position: 'Full stack web developer',
    startDate: 'Nov 2013', endDate: 'May 2015',
    /* tools: [ 'D3js', 'jQuery 1', 'Ruby-on-Rails',  'HTML 5', 'CSS 3', 'Java', 'Weka', 'RapidMiner', 'Python' ], */

  }],
  education: [{

    institution: 'University of Vigo',
    studyType: 'Bachelor', area: 'Physics',
    startDate: '2005', endDate: '2013',

  }],
};

function semanticYearsOfExperience (startDate) {
  const diff = Math.floor((new Date() - new Date(startDate)) / 3.1536e+9) / 10;
  const int = Math.floor(diff);
  const decimal = Number(`${diff}`[2] || 0);
  
  let sem = '';
  if (diff < 0.5) {
    sem = `no`;
  } else if (diff === 0.5) {
    sem = `half a year of`;
  } else if (diff >= 0.5 && diff < 0.9) {
    sem = `over half a year of`;
  } else {
    if (decimal !== 0 && decimal !== 5 && decimal !== 9) {
      sem = `over `;
    } else if (decimal === 9) {
      sem = `approximately `;
    }

    if (diff < 1.9) {
      sem += `a`;
    } else if (diff >= 2 && decimal < 9) {
      sem += int;
    } else if (diff >= 1.9 && decimal === 9) {
      sem += int + 1;
    }

    if (diff > 2 && decimal >= 5 && decimal < 9) {
      sem += ` ½`;
    }

    sem += diff >= 1.9 ? ` years` : ` year`;

    if (diff < 2 && decimal >= 5 && decimal < 9) {
      sem += ` and a half`;
    }

    sem += ` of`;
  }
  sem += ` experience`;

  return sem;
}
