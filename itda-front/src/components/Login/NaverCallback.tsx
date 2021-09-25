import { useEffect } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
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
          `http://34.64.233.121:3000/api/login/naver?code=${code}&state=${state}`
        );

        localStorage.setItem("token", JSON.stringify(jwtToken));

        history.push("/");
      } catch (e) {}
    };
    getToken();
  }, []);

  return null;
};

export default NaverCallback;
