import S from "components/Cart/CartStyles";
import TextInput from "components/common/Atoms/TextInput";
import PhoneNumberForm from "components/Cart/AddressForm/NewAddressForm/PhoneNumberForm";
import AddressSearchForm from "./AddressSearchForm";
const NewAddressForm = () => {
  return (
    <>
      <S.AddressFormModal.Layer>
        <S.AddressFormModal.SubTitle>수령인</S.AddressFormModal.SubTitle>
        <TextInput />
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
