const defaultUnSupAuthZ = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('user');
  localStorage.removeItem('authConfig');
};

export default defaultUnSupAuthZ;
