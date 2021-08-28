import S from "./AddProductStyles";
import React from "react";
import { useRecoilState } from "recoil";
import GradientButton from "components/common/Atoms/GradientButton";
import {
  productPreviewImage,
  addProductInfos,
  checkBlankInputs,
} from "stores/AddProductAtoms";

const AddProductSubmitLayer = () => {
  const [hasBlankInput, setBlank] = useRecoilState(checkBlankInputs);
  const [productInput, setProductInput] = useRecoilState(addProductInfos);

  const handleSubmitClick = () => {
    const blankInputs = Object.entries(productInput).filter(
      (v) => v[1] === "" || v[1] === 0
    );
    console.log(blankInputs);
    blankInputs.length ? setBlank(true) : setBlank(false);
    const newProduct = {
      productInput,
    };
    // post newProduct
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
