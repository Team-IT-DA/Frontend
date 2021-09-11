import RadioButton from "components/common/Atoms/RadioButton";
import { useState, useEffect } from "react";
import S from "../CartStyles";
import { isDefaultAddress } from "stores/CartAtoms";
import { useSetRecoilState } from "recoil";

const AddressSelection = () => {
  const setIsDefaultAddress = useSetRecoilState(isDefaultAddress);
  const [selectedValue, setsSelectedValue] = useState("기본 배송지");

  useEffect(() => {
    selectedValue === "기본 배송지"
      ? setIsDefaultAddress(true)
      : setIsDefaultAddress(false);
  }, [selectedValue]);

  return (
    <S.AddressSelection.Layout>
      <RadioButton
        value={"기본 배송지"}
        state={selectedValue}
        setState={setsSelectedValue}
      />
      <RadioButton
        value={"신규 배송지"}
        state={selectedValue}
        setState={setsSelectedValue}
      />
    </S.AddressSelection.Layout>
  );
};

export default AddressSelection;
