import CandidatePage from "./candidate.js";

/**
 * Entry point for the application
 * 
 * @class App
 */
class App {

  /**
   * @constructor
   *
   * Initialize the app by
   * loading the Candidate page
   *
   * @memberOf App
   */
  constructor() {

    new CandidatePage();

  }

}

export const app = new App();
