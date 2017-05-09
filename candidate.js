class Candidate {

	constructor (config) {

		if (!config) {

			return;

		}

		this.setName(config.name);
		
		this.setRole(config.role);
		
		this.skills = [];
		this.addSkill(config.skills || config.skill);
		
		this.contact = {
			phones: [],
			emails: [],
			sites : []
		};
		this.addPhone(config.phones || config.phone);
		this.addEmail(config.emails || config.email);
		this.addSite(config.sites || config.site);
		if (config.contact) {

			this.addPhone(config.contact.phones || config.contact.phone);
			this.addEmail(config.contact.emails || config.contact.email);
			this.addSite(config.contact.sites || config.contact.site);

		}
		
		this.setSummary(config.summary);
		
		this.experiences = [];
		this.addExperience(config.experiences || config.experience);
		
		this.education = [];
		this.addEducation(config.education);

		this.render();

	}

	setName (name) {

		this.name = name || 'Annon Candidate';

	}

	setRole (role) {

		this.role = role || '';

	}

	setSummary (summary) {

		this.summary = summary || '';

	}
	
	addSkill (skill) {

		this.skills = skill || '';

	}

	addPhone (phone) {

		this.contact.phones = phone || '';

	}

	addEmail (email) {

		this.contact.email = email || '';

	}

	addSite (site) {

		this.contact.site = site || '';

	}

	addExperience (experience) {

		this.experiences = experience || '';

	}

	addEducation (education) {

		this.education = education || '';

	}
	
	render() {

		console.log(this);

	}

}
