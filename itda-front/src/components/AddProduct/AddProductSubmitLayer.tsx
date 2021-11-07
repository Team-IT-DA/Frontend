import S from "./AddProductStyles";
import GradientButton from "components/common/Atoms/GradientButton";
import AddProductService from "./AddProductService";

const AddProductSubmitLayer = () => {
  const { handleSubmitClick } = AddProductService();

  return (
    <S.AddProductButtonLayer>
      <GradientButton width={"18rem"} onClick={handleSubmitClick}>
        SUBMIT
      </GradientButton>
    </S.AddProductButtonLayer>
  );
};

export default AddProductSubmitLayer;
