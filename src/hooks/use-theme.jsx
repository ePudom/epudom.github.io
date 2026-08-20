import { useCallback, useSyncExternalStore } from "react";

const STORAGE_KEY = "portfolio-theme";
const listeners = new Set();

const readStored = () => {
  if (typeof window === "undefined") return "dark";
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "light" || v === "dark" ? v : "dark";
  } catch {
    return "dark";
  }
};

let current = readStored();

const apply = (theme) => {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
};

apply(current);

const subscribe = (cb) => {
  listeners.add(cb);
  return () => listeners.delete(cb);
};

const getSnapshot = () => current;
const getServerSnapshot = () => "dark";

const setTheme = (theme) => {
  current = theme;
  apply(theme);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* ignore */
  }
  listeners.forEach((l) => l());
};

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const toggle = useCallback(() => {
    setTheme(current === "dark" ? "light" : "dark");
  }, []);
  return { theme, toggle };
}
