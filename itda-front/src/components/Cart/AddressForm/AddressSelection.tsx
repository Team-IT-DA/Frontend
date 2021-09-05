import RadioButton from "components/common/Atoms/RadioButton";
import { useState } from "react";
import S from "../CartStyles";

const AddressSelection = () => {
  const [state, setSelectedState] = useState("test");
  return (
    <S.AddressSelection.Layout>
      <RadioButton
        value={"기본 배송지"}
        state={state}
        setState={setSelectedState}
      />
      <RadioButton
        value={"신규 배송지"}
        state={state}
        setState={setSelectedState}
      />
    </S.AddressSelection.Layout>
  );
};

export default AddressSelection;
