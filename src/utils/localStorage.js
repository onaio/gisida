export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('AUTH');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

export const saveState = (state, isLoggedIn) => {
  try {
    const serializedState = JSON.stringify(state);
    if (isLoggedIn) {
      localStorage.setItem('AUTH', serializedState);
    } else {
      localStorage.removeItem('AUTH');
    }
  } catch (e) {
    // console.error(e);
  }
};
