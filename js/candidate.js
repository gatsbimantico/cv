var templates = {

  header: function (name, role) {

    return `<div class="header">
			<img class="header__pic" src="http://www.gravatar.com/avatar/e6deefe7eb4c5f22991e392cc720fed5.jpg?s=512&r=x" />
			<h1 class="header__name">${name}</h1>
			<h2 class="header__role">${role}</h2>
		</div>`;

  },

  skill: function (skill) {

    return `<li class="skill-set__item">${skill}</li>`;

  },

  skillSet: function (skills) {

    return '<div class="skill-set">' +
      skills.map(templates.skill).join('') +
      '</div>';

  },

  email: function (email) {

    return `<span><a href="mailto:${email}">&#9993; ${email}</a></span>`;

  },

  phone: function (phone) {

    return `<span><a href="tel:${phone}">&#9990; ${phone}</a></span>`;

  },

  contactSet: function (contact) {

    return '<div class="contact-set">' +
      '<div class="contact-set__row">' +
      contact.emails.map(templates.email).join('') +
      '</div><div class="contact-set__row">' +
      contact.phones.map(templates.phone).join('') +
      '</div><div class="contact-set__row">' +
      contact.sites.map(templates.url).join('') +
      '</div>' +
      '</div>';

  },

  experience: function (experiences) {

    var text = '<h3>Experiences</h3><div class="experience-set">';
    experiences.forEach(experience => {

      var role = experience.is || experience.was;

      text += '<div class="job-experience">';
      text += `
				<h4>${role}</h4>
				<div class="job-experience__meta">
					<p>${experience.at}</p>
			`;

      if (experience.on) {

        text += '<p class="job-experience__date">';

        if (experience.on.start) {

          text += `<span>from ${experience.on.start}</span> `;

        }

        if (experience.on && experience.on.end) {

          text += ` <span>to ${experience.on.end}</span>`;

        }

        text += '</p>';

      }
      text += '</div>';

      if (experience.tools && experience.tools.front) {

        text += '<p class="job-experience__tool-set">';

        experience.tools.front.forEach(tool => {

          text += ` <span class="job-experience__tool">${tool}</span> `;

        });

        text += '</p>';

      }

      if (experience.portfolio) {

        text += '<p class="job-experience__portfolio">';

        if (experience.portfolio.released) {

          text += experience.portfolio.released.map(templates.url).join('');

        }

        if (experience.portfolio.unreleased) {

          text += experience.portfolio.unreleased.map(templates.url).join('');

        }

        if (experience.portfolio.dismissed) {

          text += experience.portfolio.dismissed.map(templates.url).join('');

        }

        text += "</p>";

      }

      text += templates.summary('job-experience__summary', experience.description);

      text += "</div></div>";

    });

    return text;

  },

  education: function (education) {

    var text = '<div class="education-experience">';

    if (education.titles) {

      education.titles.forEach(title => {

        text += `<h4 class="education-experience__title">${title}</h4>`;

      });

    }

    text += `
    <span>${education.on}</span>
    <span>@ ${education.at}</span>
		`;

    text += '</div>';

    return text;

  },

  educationSet: function (educations) {

    return '<h3>Education</h3><div class="education-set">' +
      educations.map(templates.education).join('') +
      '</div>';

  },

  url: function (url) {

    var siteName = url.match(/\/\/([^\.]*)\./)[1];

    return ` <span><a href="${url}" target="_blank">&#707; ${siteName}</a></span> `;

  },

  summary: function (className, summary) {

    var text = summary.replace(/(\n)(\n)/g, '$1<br><br>$2');

    return `<p class="${className}">${text}</p>`;

  }

};

class Candidate {

  constructor(config) {

    this.skills = [];
    this.contact = {
      phones: [],
      emails: [],
      sites: []
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

  setName(name) {

    this.name = name || 'Annon Candidate';

    this.render();

  }

  setRole(role) {

    this.role = role || '';

    this.render();

  }

  setSummary(summary) {

    this.summary = summary || '';

    this.render();

  }

  addSkill(skill) {

    if (!skill) return;

    this._checkIsSimple(this.skills, skill, this.addSkill);
    this.render();

  }

  addPhone(phone) {

    if (!phone) return;

    this._checkIsSimple(this.contact.phones, phone, this.addPhone);
    this.render();

  }

  addEmail(email) {

    if (!email) return;

    this._checkIsSimple(this.contact.emails, email, this.addEmail);
    this.render();

  }

  addSite(site) {

    if (!site) return;

    this._checkIsSimple(this.contact.sites, site, this.addSite);
    this.render();

  }

  addExperience(experience) {


    if (!experience) return;


    this._checkIsSimple(this.experiences, experience, this.addExperience);
    this.render();

  }

  addEducation(education) {

    if (!education) return;

    this._checkIsSimple(this.education, education, this.addEducation);
    this.render();

  }

  _checkType(obj) {

    return Object.prototype.toString.call(obj).match(/\s(.*)\]/)[1].toLowerCase();

  }

  _checkIsSimple(oldObj, newObj, method) {

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

    document.body.innerHTML = '';
    document.body.innerHTML += templates.header(this.name, this.role);
    document.body.innerHTML += templates.contactSet(this.contact);
    document.body.innerHTML += templates.summary('summary', this.summary || '');
    document.body.innerHTML += templates.skillSet(this.skills);
    document.body.innerHTML += templates.experience(this.experiences);
    document.body.innerHTML += templates.education(this.education);

  }

}
