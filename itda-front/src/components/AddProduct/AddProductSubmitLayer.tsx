import S from "./AddProductStyles";
import { useRecoilState, useRecoilValue } from "recoil";
import GradientButton from "components/common/Atoms/GradientButton";
import { finalAddProductValue, checkBlankInputs } from "stores/AddProductAtoms";
import myPageAPI from "util/API/myPageAPI";
import { useMutation } from "react-query";
import { IAddProduct } from "types/AddProductTypes";

const AddProductSubmitLayer = () => {
  const [hasBlankInput, setBlank] = useRecoilState(checkBlankInputs);
  const productFinalInput = useRecoilValue(finalAddProductValue);

  const blockSubmitIfBlackInputExists = () => {
    const blankInputs = Object.entries(productFinalInput).filter(
      (v) => v[1] === "" || v[1] === 0
    );

    blankInputs.length ? setBlank(true) : setBlank(false);
  };

  const mutation = useMutation(async (productFinalInput: IAddProduct) => {
    myPageAPI.seller.addNewProduct(productFinalInput);
  });

  const handleSubmitClick = () => {
    blockSubmitIfBlackInputExists();

    if (hasBlankInput) return;
    mutation.mutate(productFinalInput);
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
