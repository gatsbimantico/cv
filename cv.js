/**
 * CESAR COSTAS CARRRERA
 * ---------------------
 * CURRICULUM VITAE
 */

var Cesar = new Candidate({
	name: 'César Costas Carrera',
	role: 'Mid-Level JavaScript Engineer'
	skills: [
		'FrontEnd enthusiast',
		'Fast learner',
		'Team builder',
		'Agile developer'
	],
	contact: {
		phone: +447920158374,
		emails: [
			'costascarrera.cesar@gmail.com',
			'costascarrera.cesar@outlook.com'
		],
		sites: [
			'//github.com/gatsbimantico',
			'//stackoverflow.com/users/2308745/gatsbimantico'
		]
	},
	summary: `
		On 2010 I was finishing my degree while doing a work experience in a chemistry lab.

		I was introduced to data mining (neural networks),
		an experience that will lead me to work as data analyst in a different lab.

		During this job, I felt in love with data visualization and front-end web development.

		Thus I've been working as web developer since then.
	`
});

Cesar.addExperience(new Experience({

	is: 'FRONT END WEB DEVELOPER',
	at: 'TRIBAL WORLDWIDE',
	on: { start: '2017 JAN', end: undefined }
	tools: {
		front: ['POLYMER', 'JQUERY', 'GULP', 'GIT', 'Handlebars', 'WordPress', 'AEM'],
	},
	portfolio: {
		released: [
			'//lipton.com'
		],
		unreleased: [
			'//cartedor.co.uk/maisoncartedor',
			'//vw.co.uk'
		]
	},
	description: `
		I'm currently working at Tribal.
		This is an hybrid Ad-Development agency that provides websites to their advertising clients.
		On each project we are a small team of 2 to 4 specialists.

		We use gulp and git for the front end, then the backend supplies the data.
		Depending on the project I used Polymer, jQuery and Handlebars, or pure HTML and CSS.
		Also had to work with AEM and Jahia.

		The workflow is a ticket based board with JIRA and Scrum.
		The goal is to provide the maximum value within the stimated time for the ticket.
		The time management is done in JIRA and Projector PSA.
	`

}));

Cesar.addExperience(new Experience({

	was: 'FULL STACK WEB DEVELOPER',
	at: 'IMATIA INNOVATION',
	on: { start: '2016 JUN', end: '2016 DEC' }
	tools: {
		front: ['ANGULAR2', 'GULP', 'NODEjs', 'DOCKER', 'GIT'],
		back: []
	},
	description: `
		While I was working at Imatia,
		I was working on the design and implementation
		of a business analytics dashboard for local administrations.
		
		We were a small team of 4 developers
		and my job goal was to define and implement the data workflow and its visualization.

		We used Docker and Jekins for automatic deploy,
		Java to serve REST decoupled services
		and Angular2 with TypeScript for the web components based front-end development.

		The workflow was to acomplish the tasks written on Redmine by the project manager,
		commit the work every time it reaches an stable status
		and to keep documented the time invested in every task through Elastic Projects.
	`

}));

Cesar.addExperience(new Experience({

	was: 'FULL STACK WEB DEVELOPER',
	at: 'INSA',
	on: { start: '2015 JUN', end: '2016 JUN' }
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
		During this period I worked in web maintenance
		for some international Inditex's websites
		(MassimoDutti, ZaraHome, Oysho, Bershka, Stradivarius and PullAndBear).

		We were a medium size team of about 20 developers, 15 testers and 10 project managers,
		with people working on remote.

		We used IBM tools for the backend and jquery for the frontend.
		While I was working there, we were migrating the web
		to use a decoupled backend via REST and migrating to Angular1.4

		The workflow was to implement the task,
		written and assigned in Jira by one of the Projects Managers,
		commit the code only once its finished and tested in a local machine,
		then review the bugs found by the testers team
		and submit the time spent on every task through an internal tool.
	`

}));

Cesar.addExperience(new Experience({

	was: 'WEB DEVELOPER',
	at: 'UNIVERSITY OF VIGO',
	on: { start: '2013 NOV', end: '2015 MAY' }
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

}));

Cesar.addEducation([{

	titles: [
		'Time Management',
		'How to speak in public'
	], at: 'COURSERA', on: 2017

},{

	titles: [
		'Full Stack Web Development especialization'
	], at: 'COURSERA', on: 2016

},{

	titles: [
		'ANGULAR',
		'TDD',
		'ECOMMERCE',
		'JAVAEE'
	], at: 'INSA', on: 2015

},{

	titles: [
		'Intro to Machine Learning'
	], at: 'UDACITY', on: 2012

},{

	titles: [
		'BSC. PHYSICS'
	], at: 'UNIVERSITY OF VIGO', on: 2005

}]);
