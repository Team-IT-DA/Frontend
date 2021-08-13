import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

type TGradientButton = {
  width: string;
  children: React.ReactChild;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
};

const GradientButton = ({
  width,
  children,
  onClick,
  disabled = false,
}: TGradientButton) => {
  const StyledButton = withStyles({
    root: {
      background: `${
        disabled ? "#cecece" : "linear-gradient(45deg, #3D84A8 30%,#16C79A 90%)"
      }`,
      borderRadius: 3,
      border: 0,
      color: "white",
      height: 48,
      width: width,
      boxShadow: "0 3px 5px 2px #cecece",
      fontSize: "18px",
      fontWeight: "bold",
    },
    label: {
      textTransform: "capitalize",
    },
  })(Button);
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default GradientButton;
