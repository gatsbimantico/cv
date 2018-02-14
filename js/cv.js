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
    ]
  },
  summary: `
I am a front end web developer with over 4 years of experience.

My passion for front end development begun while working on web data visualization as a data analyst. Since then I have worked on web development for a number of clients including Volkswagen, Lipton and Inditex Group.

I'm fully competent with modern frameworks (Angular and Polymer), frontend utilities (NodeJs, Gulp, Git, Docker) and agile methodologies (Scrum or Khanban).
	`,
  skills: [
    'FrontEnd enthusiast',
    'Fast learner',
    'Team builder',
    'Agile developer'
  ],
  experiences: [{

    is: 'FRONT END WEB DEVELOPER',
    at: 'TRIBAL WORLDWIDE',
    on: { start: '2017 JAN', end: 'present' },
    tools: {
      front: ['POLYMER', 'JQUERY', 'GULP', 'NODE', 'GIT', 'HANDELBARS', 'WORDPRESS', 'AEM', 'JAHIA'],
    },
    portfolio: {
      released: [
        '//lipton.com',
        '//cartedor.co.uk/maisoncartedor',
        '//vw.co.uk'
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

    was: 'FULL STACK WEB DEVELOPER',
    at: 'IMATIA INNOVATION',
    on: { start: '2016 JUN', end: '2016 DEC' },
    tools: {
      front: ['ANGULAR2', 'GULP', 'NODEjs', 'DOCKER', 'GIT'],
      back: []
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

    was: 'FULL STACK WEB DEVELOPER',
    at: 'INSA',
    on: { start: '2015 JUN', end: '2016 JUN' },
    tools: {
      front: ['JQUERY', 'HTML4', 'CSS2', 'SVN'],
      back: []
    },
    portfolio: {
      dismissed: [
        '//massimodutti.com',
        '//oysho.com',
        '//pullandbear.com',
        '//zarahome.com',
        '//stradivarius.com',
        '//bershka.com',
        '//uterque.com',
        '//lefties.com'
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

    was: 'WEB DEVELOPER',
    at: 'UNIVERSITY OF VIGO',
    on: { start: '2013 NOV', end: '2015 MAY' },
    tools: {
      front: ['JQUERY', 'HTML5', 'CSS3', 'UNDERSCOREjs', 'D3js', 'CROSSFILTERjs'],
      back: []
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
    ], at: 'TRIBAL', on: '2018 - 2017'

  }, {

    titles: [
      'Full Stack Web Development especialization'
    ], at: 'COURSERA', on: 2016

  }, {

    titles: [
      'ANGULAR',
      'TDD',
      'ECOMMERCE',
      'JAVAEE'
    ], at: 'VIEWNEXT', on: 2015

  }, {

    titles: [
      'Intro to Machine Learning'
    ], at: 'UDACITY', on: 2012

  }, {

    titles: [
      'BSC. PHYSICS'
    ], at: 'UNIVERSITY OF VIGO', on: 2005

  }]
};
