import S from "./AddProductStyles";
import { useRecoilState, useRecoilValue } from "recoil";
import GradientButton from "components/common/Atoms/GradientButton";
import { finalAddProductValue, checkBlankInputs } from "stores/AddProductAtoms";
import { addNewProduct } from "util/apis/seller";
import { useMutation } from "react-query";

const AddProductSubmitLayer = () => {
  const [hasBlankInput, setBlank] = useRecoilState(checkBlankInputs);
  const productFinalInput = useRecoilValue(finalAddProductValue);

  const blockSubmitIfBlackInputExists = () => {
    const blankInputs = Object.entries(productFinalInput).filter(
      (v) => v[1] === "" || v[1] === 0
    );

    blankInputs.length ? setBlank(true) : setBlank(false);
  };

  const mutation = useMutation((newProduct) => addNewProduct(newProduct));

  const handleSubmitClick = () => {
    blockSubmitIfBlackInputExists();

    // const newProduct = {
    //   productFinalInput,
    // };

    /*여기서 hasBlankInput이 false면
    POST newProduct => axios.post(url, newProduct); */

    // mutation.mutate(newProduct);
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
