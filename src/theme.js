const STORAGE_KEY = 'tv-theme';
const THEME_EVENT = 'tv-theme-change';

export function getStoredTheme() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === 'dark' || stored === 'light' ? stored : null;
}

export function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function resolveTheme() {
  return getStoredTheme() ?? getSystemTheme();
}

export function getAppliedTheme() {
  const attr = document.documentElement.getAttribute('data-theme');
  return attr === 'dark' || attr === 'light' ? attr : resolveTheme();
}

export function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  document.documentElement.style.colorScheme = theme;
  window.dispatchEvent(new CustomEvent(THEME_EVENT, { detail: { theme } }));
}

/**
 * Subscribe to theme changes (toggle, OS preference via applyTheme, other tabs).
 * Compatible with React useSyncExternalStore — always re-read via getAppliedTheme().
 */
export function subscribeTheme(onChange) {
  const onTheme = () => onChange();
  const onStorage = (e) => {
    if (e.key === STORAGE_KEY) applyTheme(resolveTheme());
  };
  window.addEventListener(THEME_EVENT, onTheme);
  window.addEventListener('storage', onStorage);
  return () => {
    window.removeEventListener(THEME_EVENT, onTheme);
    window.removeEventListener('storage', onStorage);
  };
}

export function setTheme(theme) {
  localStorage.setItem(STORAGE_KEY, theme);
  applyTheme(theme);
}

export function initTheme() {
  applyTheme(resolveTheme());
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!getStoredTheme()) applyTheme(e.matches ? 'dark' : 'light');
  });
}
