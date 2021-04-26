/**
 * @author César Costas Carrera
 *
 * CURRICULUM VITAE
 */

export default {
  name: 'César Costas Carrera',
  role: 'Software Engineer (SE2)',
  color: '#84425d',
  contact: {
    phone: '+447920158374',
    email: 'costascarrera.cesar@gmail.com',
    sites: [
      'https://github.com/gatsbimantico',
      'https://stackoverflow.com/users/2308745/gatsbimantico'
    ],
  },
  summary: `
I am a frontend web developer with over ${Math.floor((new Date() - new Date('11/15/2013')) / 3.1536e+9) / 10} years of experience.
This CV currently under maintenance.
  `,/**
7.0 - 7 years
7.1 - over 7 years
7.2 - over 7 years
7.3 - over 7 years
7.4 - over 7 years
7.5 - over 7 ½ years
7.6 - over 7 ½ years
7.7 - over 7 ½ years
7.8 - over 7 ½ years
7.9 - aproximately 8 years

My passion for frontend development begun through data visualization working as a data analyst in a research project.
Since then I've worked on high traffic sites for brands like Loveholidays, Volkswagen or Pull&Bear.

I'm fully competent with modern frameworks (like React, Angular and Polymer), frontend utilities (like NodeJs, Gulp, Git, Docker), testing (functional and A/B tests) and agile methodologies (like Scrum or Khanban).
	`, */
  skills: [
    // 'PLACEHOLDER_FOR_A_QUOTE',
  ],
  experiences: [{

    is: 'Software Engineer Ⅱ',
    at: 'Ocado',
    on: { start: '2020 Jan', end: "now" },
    tools: {
      main: [
        { name: 'React', version: '16' },
        { name: 'Redux' },
        { name: 'styled-components' },
        { name: 'Enzime' },
        { name: 'RTL' },
        { name: 'Node', version: '10' },
        { name: 'Gitlab' },
        { name: 'Jira Cloud' },
      ],
    },
    portfolio: {
      released: [
        'https://groceries.morrisons.com/browse',
      ]
    },
    description: `
Ocado's development culture relies on high autonomy.

I lead the engineering team to work on
 legal aspects of the site as compliance with cookies,
 and pushed for initiatives to prevent the project from becoming legacy or be exposed to security holes.

I worked with my colleagues on edge frontend responsibilities like accessibility, performance, and developing features designed by the UX team.
    `

  }, {

    was: 'Frontend web developer',
    at: 'Loveholidays',
    on: { start: '2018 May', end: "2020 Jan" },
    tools: {
      main: [
        { name: 'React', version: 16 },
        { name: 'Redux' },
        { name: 'redux-sagas' },
        { name: 'styled-components' },
        { name: 'Enzime' },
        { name: 'Github' },
        { name: 'Jira Cloud' },
      ],
      others: [
        { name: 'Sass' },
        { name: 'Karma' },
        { name: 'Optimizely' },
        { name: 'Google Analytics' },
        { name: 'Google Optimize' },
      ],
    },
    portfolio: {
      released: [
        'https://loveholidays.com'
      ]
    },
    description: `
My time at Loveholidays was completely in sync with the needs of their business.
I joined to help scale the business internationally and moving from django into a React frontend.

I lead by example the experiments team from its inception with two developers until its end with three frontend teams with around 15 developers.

The values that I induced in the team were: Speed (quick tasks, big impact, fast pipeline), quality, standards (close to native and semantic), and performance.
    `,

  }, {

    was: 'Frontend web developer',
    at: 'Tribal worldwide',
    on: { start: '2017 Jan', end: '2018 May' },
    tools: {
      main: [
        { name: 'Polymer', version: '1' },
        { name: 'Redux' },
        { name: 'Mocha' },
        { name: 'Sass' },
        { name: 'Gulp', version: '4' },
        { name: 'jQuery', version: '3' },
        { name: 'Node', version: '6' },
        { name: 'Git' },
        { name: 'Jira' },
      ],
      others: [
        'Handlebars',
        'Wordpress',
        'Aem',
        'Jahia',
      ]
    },
    portfolio: {
      released: [
        'http://lipton.com',
        'http://cartedor.co.uk/maisoncartedor',
        'http://volkswagen.co.uk',
      ]
    },
    description: `
    Tribal is an hybrid Ad-Development agency that provides websites to their advertising clients.
    Each project is handled by a small team of 1 to 4 specialists.

    At Tribal I contributed to Wordpress, AEM and Polymer proyects, while mentoring a junior and an intern developers.

    I took the lead rooting for reusable components, unit tests and understanding the problem and client needs before coding.
    `,

  }, {

    was: 'Full stack web developer',
    at: 'Imatia innovation',
    on: { start: '2016 Jun', end: '2016 Dec' },
    tools: {
      main: [
        { name: 'Angular', version: '2' },
        { name: 'TypeScript', version: '2' },
        { name: 'Sass' },
        { name: 'Gulp', version: '3' },
        { name: 'Gitlab' },
        { name: 'Docker' },
      ],
      others: [
        { name: 'Node', version: '6' },
        'Java',
        'Scala',
        'Hadoop',
      ]
    },
    description: `
    `,

  }, {

    was: 'Full stack web developer',
    at: 'ViewNext',
    on: { start: '2015 Jun', end: '2016 Jun' },
    tools: {
      main: [
        { name: 'Java' },
        { name: 'JSP' },
        { name: 'SVN' },
        { name: 'jQuery', version: '1' },
        { name: 'Jira' },
      ],
      others: [
        { name: 'HTML', version: '4' },
        { name: 'CSS', version: '2' },
        { name: 'Angular', version: '1' },
        { name: 'Backbone' },
        'DB2',
      ]
    },
    portfolio: {
      dismissed: [
        'https://www.massimodutti.com/',
        'https://www.oysho.com/',
        'https://www.pullandbear.com/',
        'https://www.zarahome.com/',
        'https://www.stradivarius.com/',
        'https://www.bershka.com/',
        'https://www.uterque.com/',
        'https://www.lefties.com/'
      ]
    },
    description: `
    `,

  }, {

    was: 'Full stack web developer',
    at: 'University of Vigo',
    on: { start: '2013 Nov', end: '2015 May' },
    tools: {
      main: [
        { name: 'Ruby-on-Rails' },
        { name: 'jQuery', version: '1' },
        { name: 'D3js' },
      ],
      others: [
        { name: 'HTML', version: '5' },
        { name: 'CSS', version: '3' },
        'Java',
        'Weka',
        'RapidMiner',
        'Python',
      ]
    },
    description: `
    `,

  }],
  education: [{
/*
    titles: [
      'Time Management',
      'How to speak in public',
      'Strength Deployment Inventory'
    ], at: 'Tribal', on: '2018 - 2017'

  }, {
*/
    titles: [
      'Full Stack Web Development especialization'
    ], at: 'Coursera', on: 2016

  }, {
/*
    titles: [
      'Angular',
      'TDD',
      'eCommerce',
      'JavaEE'
    ], at: 'ViewNext', on: 2015

  }, {
*/
    titles: [
      'Intro to Machine Learning'
    ], at: 'Udacity', on: 2012

  }, {

    titles: [
      'BSC. Physics'
    ], at: 'University of Vigo', on: 2005

  }]
};
