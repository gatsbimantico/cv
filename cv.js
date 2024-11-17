/**
 * @name CURRICULUM_VITAE
 * @author César Costas
 * 
 * Curriculum in JS meant to be used with this repo.
 * Based on the schema from https://github.com/jsonresume/resume-schema
 */

 export default {
  basics: {
    name: 'César Costas',
    label: 'Software Engineer',
    /* Optional, image. Otherwise it takes it from gravatar */
    phone: '+44-792-015-8374',
    email: 'hello@weareour.tech',
    summary: `
As a software engineer with ${semanticYearsOfExperience('2013-11-15')} in web development,
I have helped businesses to improve on:
 performance, acessibility, analytics, compliance,
 internationalisation, whitelabelling,
 micro-frontends, design systems, tokenisation,
 testing, C.I./C.D., I.a.C.,
 C.M.S., S.E.O., C.R.O., and others.
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
  defaultLanguage: 'en-GB',
  color: '#b3006a',
  work: [{

    name: 'Nutmeg',
    position: 'Backoffice Engineer VP2',
    startDate: '2024', endDate: 'now',
    tools: [
      'React 18', 'Node 20',
      'RTL', 'Jest', 'Storybook',
      'Playwright',
      'SASS', 'CSS 3',
      'Jenkins', 'Terraform', 'AWS',
    ],
    summary: `
Contributed from inception into a greenfield project
 with a lot of focus on security, maintainability and stakeholder experience.
 This project will replace all of the current back office operations of the company.
    `

  }, {

    position: 'Developer Experience VP2',
    startDate: 'Feb 2023', endDate: '2024',
    summary: `
Together with two colleagues, started the Developer Experience team.
 Since then we refreshed almost every tool in the stack, and we keep improving iteratively.
 Most notable are the efforts around npm dependencies and white labelling architecture.
    `

  }, {

    position: 'Frontend Engineer VP1',
    startDate: 'Feb 2022', endDate: 'Feb 2023',
    // tools: [ 'React 16', 'Node 16', 'SASS', 'RTL', 'Cypress', 'Jenkins', 'Terraform', 'AWS', /* 'Argo', 'Enzime', 'Gitlab', 'Jira Cloud', */ ],
    summary: `
I became part of the product team
 and was shortly promoted due my contributions to the design system.
 I collaborated company-wide beyond engineering teams,
 delivering features, tools, business ideas and architectural decisions.
    `

  }, {

    name: 'Ocado Technology',
    position: 'Frontend SE2',
    startDate: '2020', endDate: 'Jan 2022',
    tools: [ 'React 17', 'Node 14', 'styled-components 5', 'RTL', 'Redux', /* 'Enzime', 'Gitlab', 'Jira Cloud', */ ],
    summary: `
I was hired to join the e-commerce team.
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
 Soon after, I was invited with other two colleagues to form the C.R.O. team
 which we grew to 15 developers within a year.
 I improved the development process
 and cross-team communications
 with dashboards, metrics and documentation.
    `,

  }, {

    name: 'Tribal worldwide',
    position: 'Frontend web developer',
    startDate: '2017', endDate: 'May 2018',
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
    startDate: 'Jun 2016', endDate: '2017',
    /* tools: [ 'Angular 2', 'TypeScript 2', 'Sass', 'Node 6', 'Docker', 'Scala', 'Java', 'Hadoop', 'Gulp 3', 'Gitlab' ], */
    // summary: `    `,
  }, {

    name: 'IBM (ViewNext)',
    position: 'Full stack web developer',
    startDate: 'Jun 2015', endDate: 'Jun 2016',
    /* tools: [ 'Angular 1', 'Java 5', 'DB2', 'jQuery 1', 'HTML 4', 'CSS 2', 'Backbone', 'SVN', 'JSP', 'Jira' ], */
    // summary: `    `,
  }, {

    name: 'University of Vigo',
    position: 'Full stack web developer',
    startDate: 'Nov 2013', endDate: 'May 2015',
    /* tools: [ 'D3js', 'jQuery 1', 'Ruby-on-Rails',  'HTML 5', 'CSS 3', 'Java', 'Weka', 'RapidMiner', 'Python' ], */
    // summary: `    `,
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
  const decimal = 10 * (diff - int);
  
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
