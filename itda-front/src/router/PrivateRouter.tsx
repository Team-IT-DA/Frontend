import { Redirect, Route, RouteProps } from "react-router-dom";

const PrivateRoute = ({
  component: Component,
  redirectPath,
  validationFunc,
  ...parentProps
}: {
  component: React.ComponentType<RouteProps>;
  path: string;
  redirectPath: string;
  validationFunc: () => boolean;
}) => {
  return (
    <Route
      {...parentProps}
      render={(props) =>
        validationFunc() ? (
          <Component {...props} />
        ) : (
          <Redirect to={redirectPath} />
        )
      }
    />
  );
};

export default PrivateRoute;
