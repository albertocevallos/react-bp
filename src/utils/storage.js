export function getFromStorage(key) {
  if (!key) {
    return null;
  }

  try {
    const valueStr = sessionStorage.getItem(key);
    if (valueStr) {
      return JSON.parse(valueStr);
    }
    return null;
  } catch (err) {
    return null;
  }
}

export function setInStorage(key, obj) {
  if (!key) {
    console.error("Error: Key is missing");
  }
  try {
    sessionStorage.setItem(key, JSON.stringify(obj));
  } catch (err) {
    console.error(err);
  }
}
