const isTokenExpired = () => {
  const expiresIn = localStorage.getItem('expiry_time');
  if (!expiresIn) return false;
  const expiryTimeDiff = new Date(Number(expiresIn)) - new Date();
  const expiryInHours = (expiryTimeDiff % 86400000) / 3600000;
  return expiryInHours < 1;
};

export default isTokenExpired;
