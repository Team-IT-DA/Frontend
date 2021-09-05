import TextInput from "components/common/Atoms/TextInput";
import S from "components/Cart/CartStyles";
import { useState } from "react";
const AddressSearchForm = () => {
  return (
    <div>
      <S.AddressSearchForm.LineLayer>
        <TextInput />
        <S.AddressSearchForm.SearchButton>
          검색
        </S.AddressSearchForm.SearchButton>
      </S.AddressSearchForm.LineLayer>
      <S.AddressSearchForm.LineLayer>
        <TextInput width={"medium"} />
        <TextInput width={"medium"} />
      </S.AddressSearchForm.LineLayer>
    </div>
  );
};

export default AddressSearchForm;
