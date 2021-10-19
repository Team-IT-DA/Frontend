import { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import axios from "axios";

const NaverCallback = ({ history, location }: RouteComponentProps) => {
  useEffect(() => {
    const getToken = async () => {
      let params = new URLSearchParams(location.search);
      let code = params.get("code");
      let state = params.get("state");

      // 에러 처리
      // let error = params.get("error");
      // let errorMessage = params.get("error_description");

      try {
        const jwtToken = await axios.get(
          `http://15.164.97.165:8000/api/login/naver?code=${code}&state=${state}`
        );
        localStorage.setItem("token", JSON.stringify(jwtToken.data.data.token));
        localStorage.setItem("name", JSON.stringify(jwtToken.data.data.name));

        history.push("/");
      } catch (e) {}
    };
    getToken();
  }, []);

  return null;
};

export default NaverCallback;
