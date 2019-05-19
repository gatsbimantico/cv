let a = new Date(),
  s = '-1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ⚀⚁⚂⚃⚄⚅⚊⚋⚌⚍⚎⚏☰☲☴☶☷☵☳☱☀☁☂★☆☉☐☑☒☕☘☝☠☢☣☯';

console.log(
  s[a.getYear() - 100] +
  s[a.getMonth() + 1] +
  s[a.getDate()]
);
