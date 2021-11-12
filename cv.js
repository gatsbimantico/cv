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
I am a problem solver with ${semanticYearsOfExperience('11/15/2013')} in the frontend.

Through my roles at different businesses, I have contributed to solving most scaling up and cutting edge issues related to web development including:
 performance, acessibility, analytics, internationalisation, building design systems, modularisation with version control, A/B testing, drag and drop page builders, and SSR/static/hybrid rendering methods.
 And I have carried out all kinds of testing: end to end, integration, contract, visual and unit tests.

I am a team player and I deeply care about the products I work on. I like to get involved in business solutions and enjoy collaborating with my colleagues.
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

    name: 'Ocado Technology',
    position: 'Software Engineer Ⅱ',
    startDate: 'Jan 2020', endDate: 'now',
    tools: [ 'React 17', 'Redux', 'styled-components 5', 'Node 14', /* 'RTL',  'Enzime', 'Gitlab', 'Jira Cloud', */ ],
    summary: `
Ocado's development culture relies on high autonomy.

I lead the engineering team to work on
 legal aspects of the site such as compliance with cookies,
 and pushed for initiatives to prevent the project from becoming legacy or being exposed to security holes.

I worked with my colleagues on cutting edge frontend responsibilities like accessibility, performance, and developing features designed by the UX team.
    `

  }, {

    name: 'Loveholidays',
    position: 'Frontend web developer',
    startDate: 'May 2018', endDate: '2020',
    tools: [ 'React 16', 'Redux', 'styled-components 5', /* 'Sass', 'redux-sagas', 'Enzime', 'Github', 'Jira Cloud', 'Karma', 'Optimizely', 'Google Analytics', 'Google Optimize', */ ],
    summary: `
My time at Loveholidays was completely in sync with the needs of their business.
I joined to help scale the business internationally and migrating from Django into a React frontend.

I lead by example the experiments team from its inception with two developers until its end with three frontend teams with around 15 developers.
The values that I induced in the team were: speed (quick tasks, big impact, fast pipeline), quality, standards (close to native and semantic), and performance.
    `,

  }, {

    name: 'Tribal worldwide',
    position: 'Frontend web developer',
    startDate: 'Jan 2017', endDate: 'May 2018',
    tools: [ 'Polymer 1', 'Redux', 'Mocha', 'Sass', 'Node 6', /* 'Gulp 4', 'jQuery 3', 'Git', 'Handlebars', 'Wordpress', 'Jira', 'Aem', 'Jahia', */ ],
    summary: `
Tribal is a hybrid ad-development agency that provides websites to their advertising clients.
Each project is handled by a small team of 1 to 4 specialists.

At Tribal I contributed to Wordpress, AEM and Polymer proyects, while mentoring a junior and an intern developers.

I took the initiative on improving performance through rooting for reusable components, unit tests and understanding the problem and the client needs before coding.
    `,

  }, {

    name: 'Imatia innovation',
    position: 'Full stack web developer',
    startDate: 'Jun 2016 Jun', endDate: '2017',
    tools: [ 'Angular 2', 'TypeScript 2', 'Sass', 'Node 6', /* 'Gulp 3', 'Gitlab', 'Docker', 'Scala', 'Java', 'Hadoop', */ ],

  }, {

    name: 'ViewNext',
    position: 'Full stack web developer',
    startDate: 'Jun 2015', endDate: 'Jun 2016',
    tools: [ 'Angular 1', 'jQuery 1', 'HTML 4', 'CSS 2', /* 'Backbone', 'Java 5', 'SVN', 'JSP', 'Jira', 'DB2', */ ],

  }, {

    name: 'University of Vigo',
    position: 'Full stack web developer',
    startDate: 'Nov 2013', endDate: 'May 2015',
    tools: [ 'D3js', 'jQuery 1', 'HTML 5', 'CSS 3', /* 'Ruby-on-Rails', 'Java', 'Weka', 'RapidMiner', 'Python', */ ],

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
