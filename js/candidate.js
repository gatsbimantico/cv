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

    return '<ul class="skill-set">' +
      skills.map(templates.skill).join('') +
      '</ul>';

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

    var text = '<div class="experience-set"><h3>Experiences</h3>';
    experiences.forEach(experience => {

      var role = experience.is || experience.was;

      text += '<div class="job-experience">';
      text += `
				<h4>${role}</h4>
				<div class="job-experience__meta">
					<p class="job-experience__business">${experience.at}</p>
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

      if (experience.tools && experience.tools.main) {

        text += '<p class="job-experience__tool-set">';

        experience.tools.main.forEach(tool => {

          text += ' <span class="job-experience__tool">';

          if (tool.name) {

            text += `<span class="job-experience__tool-name">${tool.name}</span>`;

          }

          if (tool.version) {

            text += `<span class="job-experience__tool-version">${tool.version}</span>`;

          }

          text += '</span> ';

        });

        text += '</p>';

      }

      if (experience.portfolio) {

        text += '<p class="job-experience__portfolio column column--' + (function (length) {

          switch (length) {
            case 4:
            case 7:
            case 8:
            case 10:
            case 12:
              return "four";

            case 3:
            case 5:
            case 6:
            case 9:
            case 11:
              return "three";

            case 2:
              return "two";

            default:
              return "single";
          }

        }((experience.portfolio.released || '').length + (experience.portfolio.unreleased || '').length + (experience.portfolio.dismissed || '').length)) + '">';


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

      text += "</div>";

    });

    text += "</div>";

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

    return '<div class="education-set"><h3>Courses & Education</h3>' +
        educations.map(templates.education).join('') +
      '</div>';

  },

  themeStyles: function (color) {

    return `
<style>
  .header {
    background-color: ${color};
  }
  
  h3, h4, h5, h6,
  .job-experience__tool,
  a:hover,
  a:focus {
    color: ${color};
  }
</style>
    `;
  },

  url: function (url) {

    var siteName = url.match(/\/\/([^\.]*)\./)[1];

    return ` <span><a href="${url}" target="_blank">${siteName}</a></span> `;

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

    this.setFavouriteColor(config.color);

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

  }

  setRole(role) {

    this.role = role || '';

  }

  setSummary(summary) {

    this.summary = summary || '';

  }

  setFavouriteColor(color) {

    this.favouriteColor = color || 'steelblue';

  }

  addSkill(skill) {

    if (!skill) return;

    this._checkIsSimple(this.skills, skill, this.addSkill);

  }

  addPhone(phone) {

    if (!phone) return;

    this._checkIsSimple(this.contact.phones, phone, this.addPhone);

  }

  addEmail(email) {

    if (!email) return;

    this._checkIsSimple(this.contact.emails, email, this.addEmail);

  }

  addSite(site) {

    if (!site) return;

    this._checkIsSimple(this.contact.sites, site, this.addSite);

  }

  addExperience(experience) {


    if (!experience) return;


    this._checkIsSimple(this.experiences, experience, this.addExperience);

  }

  addEducation(education) {

    if (!education) return;

    this._checkIsSimple(this.education, education, this.addEducation);

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
    document.body.innerHTML += '<div class="page-intro">' +
        templates.header(this.name, this.role) +
        templates.contactSet(this.contact) +
      '</div>';
    document.body.innerHTML += templates.summary('summary', this.summary || '');
    document.body.innerHTML += templates.skillSet(this.skills);
    document.body.innerHTML += templates.experience(this.experiences);
    document.body.innerHTML += templates.educationSet(this.education);
    document.body.innerHTML += templates.themeStyles(this.favouriteColor);

    document
      .querySelector('meta[name="theme-color"]')
      .content = this.favouriteColor;
    document
      .querySelector('meta[name="msapplication-navbutton-color"]')
      .content = this.favouriteColor;
    document
      .querySelector('meta[name="msapplication-TileColor"]')
      .content = this.favouriteColor;
    document
      .querySelector('meta[name="apple-mobile-web-app-status-bar-style"]')
      .content = this.favouriteColor;

  }

}

export {Candidate};
