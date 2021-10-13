import { Interface } from "readline";
import S from "./CommonStyles";

interface ISpinner {
  width?: string;
}

const LoadingSpinner = ({ width = "200px" }: ISpinner) => {
  return (
    <S.Loading.Layout>
      <S.Loading.Spinner width={width} />
    </S.Loading.Layout>
  );
};

export default LoadingSpinner;
