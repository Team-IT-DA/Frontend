import TextInput from "components/common/Atoms/TextInput";
import S from "components/Cart/CartStyles";
import { useState } from "react";
const AddressSearchForm = () => {
  const [inputState, setInputState] = useState(""); //임시 상태
  return (
    <div>
      <S.AddressSearchForm.LineLayer>
        <TextInput
          width={"100px"}
          state={inputState}
          setState={setInputState}
        />
        <S.AddressSearchForm.SearchButton>
          검색
        </S.AddressSearchForm.SearchButton>
      </S.AddressSearchForm.LineLayer>
      <S.AddressSearchForm.LineLayer>
        <TextInput
          width={"100px"}
          state={inputState}
          setState={setInputState}
        />
        <TextInput
          width={"200px"}
          state={inputState}
          setState={setInputState}
        />
      </S.AddressSearchForm.LineLayer>
    </div>
  );
};

export default AddressSearchForm;
