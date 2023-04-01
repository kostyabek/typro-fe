export const setFaviconBasedOnTheme = (themeMode: string): void => {
  const favicon = document.getElementById('favicon');
  favicon?.setAttribute('href', `/favicon_${themeMode}.ico`);
};
