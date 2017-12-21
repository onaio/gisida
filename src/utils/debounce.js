const debounce = (func, wait, now) => {
  let timeout;
  return function deb(...args) {
    const context = this;
    const later = () => {
      timeout = null;
      if (!now) func.apply(context, args);
    };
    const callNow = now && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

export default debounce;
