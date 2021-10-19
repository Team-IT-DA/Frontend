import { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import axios from "axios";

const KakaoCallback = ({ history, location }: RouteComponentProps) => {
  useEffect(() => {
    const getToken = async () => {
      let params = new URLSearchParams(location.search);
      let code = params.get("code");
      try {
        const jwtToken = await axios.get(
          `http://15.164.97.165:8000/api/login/kakao?code=${code}`
        );
        localStorage.setItem("token", JSON.stringify(jwtToken.data.data.token));
        localStorage.setItem("name", JSON.stringify(jwtToken.data.data.name));
        history.push("/");
      } catch (e) {}
    };
    getToken();
  });

  return null;
};

export default KakaoCallback;
