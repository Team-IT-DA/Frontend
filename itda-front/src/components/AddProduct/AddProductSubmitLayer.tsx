import S from "./AddProductStyles";
import { useRecoilState, useRecoilValue } from "recoil";
import GradientButton from "components/common/Atoms/GradientButton";
import { finalAddProductValue, checkBlankInputs } from "stores/AddProductAtoms";

const AddProductSubmitLayer = () => {
  const [hasBlankInput, setBlank] = useRecoilState(checkBlankInputs);
  const productFinalInput = useRecoilValue(finalAddProductValue);

  const handleSubmitClick = () => {
    const blankInputs = Object.entries(productFinalInput).filter(
      (v) => v[1] === "" || v[1] === 0
    );

    blankInputs.length ? setBlank(true) : setBlank(false);
    console.log(productFinalInput);
    const newProduct = {
      productFinalInput,
    };

    /*여기서 hasBlankInput이 false면
    POST newProduct => axios.post(url, newProduct); */
  };

  return (
    <S.AddProductButtonLayer>
      <GradientButton width={"18rem"} onClick={handleSubmitClick}>
        SUBMIT
      </GradientButton>
    </S.AddProductButtonLayer>
  );
};

export default AddProductSubmitLayer;
