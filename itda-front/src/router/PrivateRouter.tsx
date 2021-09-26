import { Redirect, Route, RouteProps } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
}: {
  component: React.ComponentType<RouteProps>;
  path: string;
}) => {
  return (
    <Route
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};

export default PrivateRoute;
