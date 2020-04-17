/**
 * @author César Costas Carrera
 *
 * CURRICULUM VITAE
 */

export default {
  name: 'César Costas Carrera',
  role: 'Software Engineer',
  color: '#84425d',
  contact: {
    phone: '+447920158374',
    email: 'costascarrera.cesar@gmail.com',
    sites: [
      '//github.com/gatsbimantico',
      '//stackoverflow.com/users/2308745/gatsbimantico'
    ],
  },
  summary: `
I am a frontend web developer with over ${Math.floor((new Date() - new Date('11/15/2013')) / 3.1536e+9) / 10} years of experience.
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

    is: 'Software Engineer',
    at: 'Ocado',
    on: { start: '2020 Jan', end: "now" },
    tools: {
      main: [
        { name: 'React', version: 16 },
        { name: 'Redux' },
        { name: 'styled-components' },
        { name: 'Jest' },
        { name: 'Git' },
      ],
    },
    description: `
    `

  }, {

    was: 'Frontend web developer',
    at: 'Loveholidays & Tribal worldwide',
    on: { start: '2017 Jan', end: '2020 Jan' },
    tools: {
      main: [
        { name: 'React', version: 16 },
        { name: 'Polymer', version: '1' },
        { name: 'Redux' },
        { name: 'redux-sagas' },
        { name: 'Sass' },
        { name: 'styled-components' },
        { name: 'Jest' },
        { name: 'Karma' },
        { name: 'Git' },
        { name: 'Optimizely' },
        { name: 'Google Analytics' },
        { name: 'Google Optimize' },
      ],
      others: [
        { name: 'Mocha' },
        { name: 'Gulp', version: '4' },
        { name: 'jQuery', version: '3' },
        { name: 'Node', version: '6' },
        'Handlebars',
        'Wordpress',
        'Aem',
        'Jahia',
        'Jira'
      ]
    },
    description: ``/**
    During my first year in the company, Loveholidays became
    one of the UK's top 100 private companies with the fastest-growing profit.
    
    After a couple of moths working at Loveholidays,
    two colleagues and I started the experiments team; where we design,
    code and excute A/B and MV tests to bring new features
    in a lean, continuous & fast paced delivery.
    
    Since the begining my focus was on reinforcing two pilars:
    <b>Speed</b>: by updating the Jira workflow to optimize communication and diminish interruptions and dashboards summarizing Github PR's status.
    And <b>Quality and standards</b>: by adding and creating linting rules to reinforce standards, producing less conflicts and reducing the code review feedback.
    
    A list to which lately I added: user segmentation, live style guide, server-side rendering and process automation.
    Voted internally the best team of 2018, I guided the experiments team since its conception to its current 10 developers.
        ` *//**
Tribal is an hybrid Ad-Development agency that provides websites to their advertising clients.
Each project is handled by a small team of 1 to 4 specialists.

At Tribal I contributed to Wordpress, AEM and Polymer proyects, while mentoring a junior and an intern developers.

I took the lead rooting for reusable components, unit tests and understanding the problem and client needs before coding.
    ` */

  }, {

    was: 'Full stack web developer',
    at: 'Imatia, ViewNext & UVigo',
    on: { start: '2013 Nov', end: '2016 Dec' },
    tools: {
      main: [
        { name: 'TypeScript', version: '2' },
        { name: 'D3js' },
        { name: 'HTML', version: '5' },
        { name: 'Sass' },
        { name: 'Git' },
        { name: 'Docker' },
        { name: 'Ruby-on-Rails' },
      ],
      others: [
        'Java',
        { name: 'jQuery', version: '1' },
        { name: 'Gulp', version: '3' },
        { name: 'JSP' },
        { name: 'Angular', version: '2' },
        { name: 'Backbone' },
        'DB2',
        'Jira',
        'Weka',
        'RapidMiner',
        'Python',
        { name: 'Node', version: '6' },
        'Scala',
        'Hadoop'
      ]
    },
    description: ``

  }],
  education: [{

    // titles: [
    //   'Time Management',
    //   'How to speak in public',
    //   'Strength Deployment Inventory'
    // ], at: 'Tribal', on: '2018 - 2017'

  // }, {

    titles: [
      'Full Stack Web Development especialization'
    ], at: 'Coursera', on: 2016

  }, {

  //   titles: [
  //     'Angular',
  //     'TDD',
  //     'eCommerce',
  //     'JavaEE'
  //   ], at: 'ViewNext', on: 2015

  // }, {

    titles: [
      'Intro to Machine Learning'
    ], at: 'Udacity', on: 2012

  }, {

    titles: [
      'BSC. Physics'
    ], at: 'University of Vigo', on: 2005

  }]
};
