export const applyTheme = ({ color = 'steelblue' }) => {
  [
    'meta[name="theme-color"]',
    'meta[name="msapplication-navbutton-color"]',
    'meta[name="msapplication-TileColor"]',
    'meta[name="apple-mobile-web-app-status-bar-style"]'
  ]
  .forEach(selector => {
    
    document
      .querySelector(selector)
      .content = color;
      
  });
};

export default ({ color = 'steelblue'  }) => `
  <style>
    .hero {
      background-color: ${color};
    }
    
    h3, h4, h5, h6,
    .job-experience__tool,
    .education-experience__title-set,
    a:hover,
    a:focus {
      color: ${color};
    }

    .summary__title,
    .experience-set__title,
    .education-set__title {
      background: ${color};
    }
  </style>
`;
