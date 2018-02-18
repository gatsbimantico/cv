export default class DateSet {

  constructor (period) {

    this.period = period || {};

  }

  get start () {

    return this.period.start ? `
<span>from ${this.period.start}</span>
    ` : '';

  }

  get end () {

    return this.period.end ? `
<span>to ${this.period.end}</span>
    ` : '';

  }

  get outerHTML () {

    return this.period.start || this.period.end ? `
<p class="job-experience__date">
  ${this.start}
  ${this.end}
</p>
    ` : '';

  }

}
