const isLogin = () => {
  return localStorage.getItem("token") ? true : false;
};

export default isLogin;
