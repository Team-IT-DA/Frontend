import RadioButton from "components/common/Atoms/RadioButton";
import { useState } from "react";
import S from "../CartStyles";
import AddressService from "../AddressService";

const LastAddressSelection = () => {
  const [state, setSelectedState] = useState("test");
  // const { defaultShippingAddress, shippingAddress } = AddressService();
  //TODO: shippingAddress로 RadioButton map 돌리기
  return (
    <S.LastAddressSelection.Layout>
      <RadioButton
        value={"크롱이네"}
        state={state}
        setState={setSelectedState}
      />
      <RadioButton
        value={"재롱이네"}
        state={state}
        setState={setSelectedState}
      />
      <RadioButton
        value={"메롱이네"}
        state={state}
        setState={setSelectedState}
      />
      <RadioButton
        value={"아롱이네"}
        state={state}
        setState={setSelectedState}
      />
    </S.LastAddressSelection.Layout>
  );
};

export default LastAddressSelection;
