import List from '../list/list.js';
import Tool from './tool.js';

const stackIcon = (height = 8) => `<svg height="${height}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612"><path fill="currentColor" d="M306 561.072L40.793 438.806c.918.554-23.466-10.461-40.793-20.368 0 14.784 3.71 41.884 17.5 49.189l259.641 116.72c22.95 10.825 32.837 10.825 57.7 0l259.641-116.72C607.314 461.66 612 433.565 612 418.438c-16.696 8.357-40.335 20.272-40.794 20.368L306 561.072zm0-509.433c1.912 2.238 1.415.459 0 0zM17.5 345.361l259.641 116.72c22.95 10.824 32.837 10.824 57.7 0l259.641-116.72C607.314 339.394 612 311.3 612 296.171c-16.696 8.358-40.335 20.273-40.794 20.369L306 438.806 40.793 316.54c.918.555-23.466-10.462-40.793-20.369 0 14.784 3.71 41.885 17.5 49.19zm0-122.266l259.641 116.72c22.95 10.825 32.837 10.825 57.7 0l259.641-116.72c19.125-8.912 19.756-46.818 0-57.643L334.841 28.364c-20.388-12.087-34.75-11.456-57.701 0L17.5 165.452c-19.757 12.737-20.388 46.818 0 57.643zM306 51.639l265.206 142.634L306 306.04 40.793 194.273 306 51.639z"></path></svg>`;

export default ({ main }) => (main ? `
<h5><span aria-label="where I used a ">${stackIcon()} </span>Tech Stack<span aria-label=" like"></span>:</h5>
<ul class="job-experience__tool-set">
  ${new List(Tool, main)}
</ul>
<span aria-label=";."></span>
` : '');
