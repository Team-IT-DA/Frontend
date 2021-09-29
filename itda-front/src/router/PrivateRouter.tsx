import { Redirect, Route, RouteProps } from "react-router-dom";
import isLogin from "util/isLogin";

const PrivateRoute = ({
  component: Component,
  ...parentProps
}: {
  component: React.ComponentType<RouteProps>;
  path: string;
}) => {
  return (
    <Route
      {...parentProps}
      render={props =>
        isLogin() ? <Component {...props} /> : <Redirect to={"/login"} />
      }
    />
  );
};

export default PrivateRoute;
