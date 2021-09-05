import RadioButtonWithCancel from "components/common/Atoms/RadioButtonWithCancel";
import { useState } from "react";
import S from "../CartStyles";

const LastAddressSelection = () => {
  const [state, setSelectedState] = useState("test");
  return (
    <S.LastAddressSelection.Layout>
      <RadioButtonWithCancel
        value={"크롱이네"}
        state={state}
        setState={setSelectedState}
      />
      <RadioButtonWithCancel
        value={"재롱이네"}
        state={state}
        setState={setSelectedState}
      />
      <RadioButtonWithCancel
        value={"메롱이네"}
        state={state}
        setState={setSelectedState}
      />
      <RadioButtonWithCancel
        value={"아롱이네"}
        state={state}
        setState={setSelectedState}
      />
    </S.LastAddressSelection.Layout>
  );
};

export default LastAddressSelection;
