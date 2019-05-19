/**
 * @author César Costas Carrera
 *
 * CURRICULUM VITAE
 */

export const cv = {
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
    skype: 'https://join.skype.com/invite/nVxw0Bw8XoyS'
  },
  summary: `
I am a front end web developer with over ${Math.floor((new Date() - new Date('11/15/2013')) / 3.1536e+9) / 10} years of experience.

My passion for front end development begun while working on web data visualization as a data analyst. Since then I have worked on web development for a number of clients including Loveholidays, Volkswagen, Lipton and Inditex Group.

I'm fully competent with modern frameworks (like React, Angular and Polymer), frontend utilities (like NodeJs, Gulp, Git, Docker), testing (functional and A/B tests) and agile methodologies (like Scrum or Khanban).
	`,
  skills: [
    'Front end enthusiast',
    'Fast learner',
    'Team builder',
    'Agile developer'
  ],
  experiences: [{

    is: 'Front end web developer',
    at: 'Loveholidays',
    on: { start: '2018 May', end: "now" },
    tools: {
      main: [
        { name: 'React', version: 16 },
        { name: 'Redux' },
        { name: 'Sass' },
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
Loveholidays is a fast growing ecommerce startup.
There's three main teams related to the search engine,
the booking process and testing the user experience.

As part of the experience team I design, code and excute
A/B and MV tests to add successful new features into the site,
in a continuous & fast paced delivery.

We use Github & Jira Server for version control and management.
Doing weekly sprints to plan daily releases.
    `
  }, {

    was: 'Front end web developer',
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
        'Jahia'
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
Each project is handled by a small team of 2 to 4 specialists.

We use gulp and git for the front end, then the backend supplies the data.
I managed front-end development using my expertise in Polymer, jQuery and Handlebars, or pure HTML and CSS.
Also had to work with AEM and Jahia.

The workflow is a ticket based board with JIRA and Scrum.
The goal is to provide the maximum value within the estimated time for the ticket.
The time management is done in JIRA and Projector PSA.
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

We were using Scrum, with daily and weekly meetings,
so the workflow was to write and select the tasks with the client,
choose my own tasks, commit soon even unfinished
and register the time I spend in every task.
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
