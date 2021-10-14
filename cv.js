/**
 * @author César Costas Carrera
 *
 * CURRICULUM VITAE
 */

export default {
  name: 'César Costas Carrera',
  role: 'Software Engineer',
  color: '#b3002a',
  contact: {
    phone: '+447920158374',
    email: 'costascarrera.cesar@gmail.com',
    sites: [
      'https://github.com/gatsbimantico',
      'https://stackoverflow.com/users/2308745/gatsbimantico'
    ],
  },
  summary: `
I am a frontend web developer with ${semanticYearsOfExperience('11/15/2013')}.
This CV currently under maintenance.
  `,/**

My passion for frontend development begun through data visualization working as a data analyst in a research project.
Since then I've worked on high traffic sites for brands like Loveholidays, Volkswagen or Pull&Bear.

I'm fully competent with modern frameworks (like React, Angular and Polymer), frontend utilities (like NodeJs, Gulp, Git, Docker), testing (functional and A/B tests) and agile methodologies (like Scrum or Khanban).
	`, */
  skills: [
    // 'PLACEHOLDER_FOR_A_QUOTE',
  ],
  experiences: [{

    is: 'Software Engineer Ⅱ',
    at: 'Ocado Technology',
    on: { start: 'Jan 2020', end: "now" },
    tools: {
      main: [
        { name: 'React', version: '17' },
        { name: 'Redux' },
        { name: 'styled-components', version: 5 },
        { name: 'RTL' },
        { name: 'Node', version: '14' },
      ],
      others: [
        { name: 'Enzime' },
        { name: 'Gitlab' },
        { name: 'Jira Cloud' },
      ]
    },
    // portfolio: {
    //   released: [
    //     'https://groceries.morrisons.com/browse',
    //   ]
    // },
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
    on: { start: 'May 2018', end: "2020" },
    tools: {
      main: [
        { name: 'React', version: 16 },
        { name: 'redux-sagas' },
        { name: 'styled-components', version: 5 },
        { name: 'Enzime' },
      ],
      others: [
        { name: 'Redux' },
        { name: 'Github' },
        { name: 'Jira Cloud' },
        { name: 'Sass' },
        { name: 'Karma' },
        { name: 'Optimizely' },
        { name: 'Google Analytics' },
        { name: 'Google Optimize' },
      ],
    },
    // portfolio: {
    //   released: [
    //     'https://loveholidays.com'
    //   ]
    // },
    description: `
My time at Loveholidays was completely in sync with the needs of their business.
I joined to help scale the business internationally and moving from django into a React frontend.

I lead by example the experiments team from its inception with two developers until its end with three frontend teams with around 15 developers.

The values that I induced in the team were: Speed (quick tasks, big impact, fast pipeline), quality, standards (close to native and semantic), and performance.
    `,

  }, {

    was: 'Frontend web developer',
    at: 'Tribal worldwide',
    on: { start: 'Jan 2017', end: 'May 2018' },
    tools: {
      main: [
        { name: 'Polymer', version: '1' },
        { name: 'Redux' },
        { name: 'Mocha' },
      ],
      others: [
        { name: 'Sass' },
        { name: 'Gulp', version: '4' },
        { name: 'jQuery', version: '3' },
        { name: 'Node', version: '6' },
        { name: 'Git' },
        { name: 'Jira' },
        'Handlebars',
        'Wordpress',
        'Aem',
        'Jahia',
      ]
    },
    // portfolio: {
    //   released: [
    //     'http://lipton.com',
    //     'http://cartedor.co.uk/maisoncartedor',
    //     'http://volkswagen.co.uk',
    //   ]
    // },
    description: `
    Tribal is an hybrid Ad-Development agency that provides websites to their advertising clients.
    Each project is handled by a small team of 1 to 4 specialists.

    At Tribal I contributed to Wordpress, AEM and Polymer proyects, while mentoring a junior and an intern developers.

    I took the lead rooting for reusable components, unit tests and understanding the problem and client needs before coding.
    `,

  }, {

    was: 'Full stack web developer',
    at: 'Imatia innovation',
    on: { start: 'Jun 2016 Jun', end: '2017' },
    tools: {
      main: [
        { name: 'Angular', version: '2' },
        { name: 'TypeScript', version: '2' },
        { name: 'Docker' },
        'Scala',
      ],
      others: [
        { name: 'Sass' },
        { name: 'Gulp', version: '3' },
        { name: 'Gitlab' },
        { name: 'Node', version: '6' },
        'Java',
        'Hadoop',
      ]
    },
    description: `
    `,

  }, {

    was: 'Full stack web developer',
    at: 'ViewNext',
    on: { start: 'Jun 2015', end: 'Jun 2016' },
    tools: {
      main: [
        { name: 'Java', version: 5 },
        { name: 'jQuery', version: '1' },
      ],
      others: [
        { name: 'JSP' },
        { name: 'SVN' },
        { name: 'Jira' },
        { name: 'HTML', version: '4' },
        { name: 'CSS', version: '2' },
        { name: 'Angular', version: '1' },
        { name: 'Backbone' },
        'DB2',
      ]
    },
    // portfolio: {
    //   dismissed: [
    //     'https://www.massimodutti.com/',
    //     'https://www.oysho.com/',
    //     'https://www.pullandbear.com/',
    //     'https://www.zarahome.com/',
    //     'https://www.stradivarius.com/',
    //     'https://www.bershka.com/',
    //     'https://www.uterque.com/',
    //     'https://www.lefties.com/'
    //   ]
    // },
    description: `
    `,

  }, {

    was: 'Full stack web developer',
    at: 'University of Vigo',
    on: { start: 'Nov 2013', end: 'May 2015' },
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
*//*
    titles: [
      'Intro to Machine Learning'
    ], at: 'Udacity', on: 2012

  }, {
*/
    titles: [
      'BSC. Physics'
    ], at: 'University of Vigo', on: 2005

  }]
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
      sem = `aproximately `;
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

    sem += ` of experience`;
  }

  return sem;
}
