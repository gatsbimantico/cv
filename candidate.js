class Candidate {

	constructor (config) {

		this.skills = [];
		this.contact = {
			phones: [],
			emails: [],
			sites : []
		};
		this.experiences = [];
		this.education = [];

		if (!config) {

			return;

		}

		this.setName(config.name);
		
		this.setRole(config.role);
		
		this.addSkill(config.skills || config.skill);
		
		this.addPhone(config.phones || config.phone);
		this.addEmail(config.emails || config.email);
		this.addSite(config.sites || config.site);
		if (config.contact) {

			this.addPhone(config.contact.phones || config.contact.phone);
			this.addEmail(config.contact.emails || config.contact.email);
			this.addSite(config.contact.sites || config.contact.site);

		}
		
		this.setSummary(config.summary);
		
		this.addExperience(config.experiences || config.experience);
		
		this.addEducation(config.education);

		this.render();

	}

	setName (name) {

		this.name = name || 'Annon Candidate';

		this.render();

	}

	setRole (role) {

		this.role = role || '';

		this.render();

	}

	setSummary (summary) {

		this.summary = summary || '';

		this.render();

	}
	
	addSkill (skill) {

		if (!skill) return;

		this._checkIsSimple(this.skills, skill, this.addSkill);
		this.render();

	}

	addPhone (phone) {

		if (!phone) return;

		this._checkIsSimple(this.contact.phones, phone, this.addPhone);
		this.render();

	}

	addEmail (email) {

		if (!email) return;

		this._checkIsSimple(this.contact.emails, email, this.addEmail);
		this.render();

	}

	addSite (site) {

		if (!site) return;

		this._checkIsSimple(this.contact.sites, site, this.addSite);
		this.render();

	}

	addExperience (experience) {

		
		if (!experience) return;
		

		this._checkIsSimple(this.experiences, experience, this.addExperience);
		this.render();

	}

	addEducation (education) {

		if (!education) return;

		this._checkIsSimple(this.education, education, this.addEducation);
		this.render();

	}

	_checkType (obj) {

		return Object.prototype.toString.call(obj).match(/\s(.*)\]/)[1].toLowerCase();

	}

	_checkIsSimple (oldObj, newObj, method) {

		switch (this._checkType(newObj)) {
		case 'object':
		case 'string':
		case 'number':
			oldObj.push(newObj);
			break;
		case 'array':
			newObj.forEach(each => method.call(this, each));
			break;
		}

	}
	
	render() {

		document.title = this.name + ' - CV';
		// console.log(this);

		var text = `

<h1>${this.name}</h1>
<h2>${this.role}</h2>
<p>${this.summary}</p>

		`;

		text += '<div class="skill-set">';
		this.skills.forEach(skill => {

			text += `

<li>${skill}</li>

			`;

		});
		text += '</div>';

		text += '<div class="contact-set">';
		this.contact.phones.forEach(phone => {

			text += `<div><a href="tel:${phone}">&#9990;: ${phone}</a></div>`;

		});

		this.contact.emails.forEach(email => {

			text += `<div><a href="mailto:${email}">&#9993;: ${email}</a></div>`;

		});

		this.contact.sites.forEach(site => {

			var siteName = site.match(/\/\/([^\.]*)\./)[1];
			text += `<div><a href="${site}" target="_blank">&#707; ${siteName}</a></div>`;

		});
		text += '</div>';

		text += '<h3>Experiences</h3>';
		this.experiences.forEach(experience => {

			var role = experience.is || experience.was;

			text += '<div class="job-experience">';
			text += `
				<h4>${role}</h4>
				<p>${experience.at}</p>
			`;

			if (experience.on) {

				text += '<p>';

				if (experience.on.start) {

					text += `<span>from ${experience.on.start}</span> `;

				}

				if (experience.on && experience.on.end) {

					text += ` <span>to ${experience.on.end}</span>`;

				}

				text += '</p>';

			}

			if (experience.tools && experience.tools.front) {

				text += '<p>';

				experience.tools.front.forEach(tool => {

					text += ` <span>${tool}</span> `;

				});

				text += '</p>';

			}

			text += (function () {
				var description = experience.description.replace(/(\n)(\n)/g, '$1<br><br>$2');
				return `<p>${description}</p>`;
			}());

			if (experience.portfolio) {

				text += "<p>";

				if (experience.portfolio.released) {

					experience.portfolio.released.forEach(url => {

						var siteName = url.match(/\/\/([^\.]*)\./)[1];
						text += ` <span><a href="${url}" target="_blank">&#707; ${siteName}</a></span> `;

					});

				}

				if (experience.portfolio.unreleased) {

					experience.portfolio.unreleased.forEach(url => {

						var siteName = url.match(/\/\/([^\.]*)\./)[1];
						text += ` <span><a href="${url}" target="_blank">&#707; ${siteName}</a></span> `;

					});

				}

				if (experience.portfolio.dismissed) {

					experience.portfolio.dismissed.forEach(url => {

						var siteName = url.match(/\/\/([^\.]*)\./)[1];
						text += ` <span><a href="${url}" target="_blank">&#707; ${siteName}</a></span> `;

					});

				}

				text += "</p>";

			}
			text += "</div>";

		});

		text += '<h3>Education</h3>';
		this.education.forEach(education => {

			text += '<div class="education-experience">';
			if (education.titles) {

				education.titles.forEach(title => {

					text += `<h4>${title}</h4>`;

				});

			}

			text += `
				<span>${education.on}</span>
				<span>@ ${education.at}</span>
			`;
			text += "</div>";

		});

		document.body.innerHTML = text;

	}

}
