/**
 * @author César Costas Carrera
 *
 * CURRICULUM VITAE
 */

export default {
  name: 'César Costas Carrera',
  role: 'JavaScript Engineer',
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

My passion for frontend development begun through data visualization working as a data analyst in a research project.
Since then I've worked on high traffic sites for brands like Loveholidays, Volkswagen or Pull&Bear.

I'm fully competent with modern frameworks (like React, Angular and Polymer), frontend utilities (like NodeJs, Gulp, Git, Docker), testing (functional and A/B tests) and agile methodologies (like Scrum or Khanban).
	`,
  skills: [
    'Frontend enthusiast',
    'Fast learner',
    'Team builder',
    'Agile developer'
  ],
  experiences: [{

    is: 'Frontend web developer',
    at: 'Loveholidays',
    on: { start: '2018 May', end: "now" },
    tools: {
      main: [
        { name: 'React', version: 16 },
        { name: 'Redux' },
        { name: 'redux-sagas' },
        { name: 'Sass' },
        { name: 'styled-components' },
        { name: 'Jest' },
        { name: 'Karma' },
        { name: 'Git' },
        { name: 'Optimizely' },
        { name: 'Google Analytics' },
        { name: 'Google Optimize' }
      ],
    },
    portfolio: {
      released: [
        'https://Loveholidays.com'
      ]
    },
    description: `
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
    `
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
        { name: 'Git' },
        { name: 'Gulp', version: '4' },
        { name: 'jQuery', version: '3' }
      ],
      others: [
        { name: 'Node', version: '6' },
        'Handlebars',
        'Wordpress',
        'Aem',
        'Jahia',
        'Jira'
      ]
    },
    portfolio: {
      released: [
        'http://Lipton.com',
        'http://CarteDor.co.uk/maisoncartedor',
        'http://Volkswagen.co.uk'
      ]
    },
    description: `
Tribal is an hybrid Ad-Development agency that provides websites to their advertising clients.
Each project is handled by a small team of 1 to 4 specialists.

At Tribal I contributed to Wordpress, AEM and Polymer proyects, while mentoring a junior and an intern developers.

I took the lead rooting for reusable components, unit tests and understanding the problem and client needs before coding.
    `

  }, {

    was: 'Full stack web developer',
    at: 'Imatia innovation',
    on: { start: '2016 Jun', end: '2016 Dec' },
    tools: {
      main: [
        { name: 'Angular', version: '2' },
        { name: 'TypeScript', version: '2' },
        { name: 'Sass' },
        { name: 'Git' },
        { name: 'Docker' },
        { name: 'Gulp', version: '3' }
      ],
      others: [
        { name: 'Node', version: '6' },
        'Java',
        'Scala',
        'Hadoop'
      ]
    },
    description: `
At Imatia I worked on the design and implementation of a business analytics dashboard for local administrations.

Working with a team of 4 developers, I defined and implemented the data workflow and its visualization.

I used Docker and Jekins for automatic deploy, Java to serve REST decoupled services
and Angular2 with TypeScript for the web components based front-end development.

The workflow was to acomplish the tasks written on Redmine by the project manager,
commit the work every time it reaches a stable status
and to keep documented the time invested in every task through Elastic Projects.
    `

  }, {

    was: 'Full stack web developer',
    at: 'ViewNext',
    on: { start: '2015 Jun', end: '2016 Jun' },
    tools: {
      main: [
        { name: 'JSP' },
        { name: 'HTML', version: '4' },
        { name: 'CSS', version: '2' },
        { name: 'SVN' },
        { name: 'jQuery', version: '1' }
      ],
      others: [
        { name: 'Angular', version: '1' },
        { name: 'Backbone' },
        'Java',
        'DB2',
        'Jira'
      ]
    },
    portfolio: {
      dismissed: [
        '//MassimoDutti.com',
        '//Oysho.com',
        '//PullAndBear.com',
        '//ZaraHome.com',
        '//Stradivarius.com',
        '//Bershka.com',
        '//Uterque.com',
        '//Lefties.com'
      ]
    },
    description: `
I managed web maintenance for a range of international Inditex's websites including
MassimoDutti, ZaraHome, Oysho, Bershka, Stradivarius and PullAndBear.

I worked within a team of about 20 developers, 15 testers and 10 project managers,
with some remote team memebers.

I used IBM tools for the backend and jquery for the frontend.
While I was working there, we were migrating the web
to use a decoupled backend via REST and migrating to Angular1.4

The workflow was to implement the task,
written and assigned in Jira by one of the Projects Managers,
commit the code only once its finished and tested in a local machine,
then review the bugs found by the testers team
and submit the time spent on every task through an internal tool.

During my work at ViewNext, I developed an internal static site meant to share knowledge and scripting tools for the distributed team. I mentored two junior developers and three interns.
    `

  }, {

    was: 'Full stack web developer',
    at: 'University of Vigo',
    on: { start: '2013 Nov', end: '2015 May' },
    tools: {
      main: [
        { name: 'Ruby-on-Rails' },
        { name: 'HTML', version: '5' },
        { name: 'CSS', version: '3' },
        { name: 'D3' },
        { name: 'jQuery', version: '1' }
      ],
      others: [
        'Java',
        'Weka',
        'RapidMiner',
        'Python'
      ]
    },
    description: `
After a brief attempt of being a entrepreneur with a social e-classroom website
and due my background with data mining,

I worked for UVigo on a state-of-the-art
cloud based recommendation and prediction dashboard for e-learning.

We were a small team of 3 developers and 2 researchers,
my job goal was focused on data mining and data visualization.

We used D3js for the graphs and Undescore and Crossfilter to manage the data.

We were using Scrum, with daily meetings and weekly sprints.
    `

  }],
  education: [{

    titles: [
      'Time Management',
      'How to speak in public',
      'Strength Deployment Inventory'
    ], at: 'Tribal', on: '2018 - 2017'

  }, {

    titles: [
      'Full Stack Web Development especialization'
    ], at: 'Coursera', on: 2016

  }, {

    titles: [
      'Angular',
      'TDD',
      'eCommerce',
      'JavaEE'
    ], at: 'ViewNext', on: 2015

  }, {

    titles: [
      'Intro to Machine Learning'
    ], at: 'Udacity', on: 2012

  }, {

    titles: [
      'BSC. Physics'
    ], at: 'University of Vigo', on: 2005

  }]
};
