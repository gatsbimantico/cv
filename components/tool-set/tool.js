export default class Tool {

  constructor (tool) {

    this.name = tool.name;
    this.version = tool.version;

  }

  get nameInnerHTML () {

    return this.name ? `
<span class="job-experience__tool-name">${this.name}</span>
    ` : '';

  }

  get versionInnerHTML () {

    return this.version ? `
<span class="job-experience__tool-version">${this.version}</span>
    ` : '';

  }

  toString() {

    return this.name || this.version ? `
<li class="job-experience__tool">
  ${this.nameInnerHTML}
  ${this.versionInnerHTML}
  <span aria-label=","></span>
</li>
    ` : '';

  }

}
