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

  get outerHTML () {

    return this.name || this.version ? `
<span class="job-experience__tool">
  ${this.nameInnerHTML}
  ${this.versionInnerHTML}
</span>
    ` : '';

  }

}
