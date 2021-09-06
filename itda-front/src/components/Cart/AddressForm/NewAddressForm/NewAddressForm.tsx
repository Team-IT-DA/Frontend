import S from "components/Cart/CartStyles";
import TextInput from "components/common/Atoms/TextInput";
import PhoneNumberForm from "components/Cart/AddressForm/NewAddressForm/PhoneNumberForm";
import AddressSearchForm from "./AddressSearchForm";
import { useState } from "react";
const NewAddressForm = () => {
  const [inputState, setInputState] = useState(""); //임시 상태
  return (
    <>
      <S.AddressFormModal.Layer>
        <S.AddressFormModal.SubTitle>수령인</S.AddressFormModal.SubTitle>
        <TextInput
          state={inputState}
          setState={setInputState}
          width={"100px"}
        />
      </S.AddressFormModal.Layer>
      <S.AddressFormModal.Layer>
        <S.AddressFormModal.SubTitle>연락처</S.AddressFormModal.SubTitle>
        <PhoneNumberForm />
      </S.AddressFormModal.Layer>
      <S.AddressFormModal.Layer>
        <S.AddressFormModal.SubTitle>주소</S.AddressFormModal.SubTitle>
        <AddressSearchForm />
      </S.AddressFormModal.Layer>
    </>
  );
};

export default NewAddressForm;
