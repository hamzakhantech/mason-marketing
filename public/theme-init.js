/* Sync theme before first paint — keep in <head> before CSS. */
(function () {
  var KEY = 'mason-theme';
  var saved = null;
  try {
    saved = localStorage.getItem(KEY);
  } catch (e) {}
  var theme;
  if (saved === 'dark' || saved === 'light') {
    theme = saved;
  } else {
    try {
      theme =
        window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
          ? 'light'
          : 'dark';
    } catch (e2) {
      theme = 'dark';
    }
  }
  var root = document.documentElement;
  root.setAttribute('data-theme', theme);
  if (theme === 'dark') root.classList.add('dark');
  else root.classList.remove('dark');
})();
