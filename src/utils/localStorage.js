export const loadState = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

export const saveState = (key, state) => {
  try {
    const serializedState = JSON.stringify(state);
    if (state.isAuthenticated) {
      localStorage.setItem(key, serializedState);
    } else {
      localStorage.removeItem(key);
    }
  } catch (e) {
    // console.error(e);
  }
};
