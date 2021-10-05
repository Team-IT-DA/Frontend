import { Redirect, Route, RouteProps } from "react-router-dom";
import isLogin from "util/isLogin";

const PrivateRoute = ({
  component: Component,
  redirectPath,
  ...parentProps
}: {
  component: React.ComponentType<RouteProps>;
  path: string;
  redirectPath: string;
}) => {
  return (
    <Route
      {...parentProps}
      render={(props) =>
        isLogin() ? <Component {...props} /> : <Redirect to={redirectPath} />
      }
    />
  );
};

export default PrivateRoute;
