export function persistLocalStorage<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify({ ...value }));
}

export function clearLocalStorage(key: string) {
  localStorage.removeItem(key);
}