import S from "components/Cart/CartStyles";
import TextInput from "components/common/Atoms/TextInput";
import PhoneNumberForm from "components/Cart/AddressForm/NewAddressForm/PhoneNumberForm";
import AddressSearchForm from "./AddressSearchForm";
import { useRecoilState } from "recoil";
import { consignee } from "stores/CartAtoms";

const NewAddressForm = () => {
  const [consigneeState, setConsigneeState] = useRecoilState(consignee);

  return (
    <>
      <S.AddressFormModal.Layer>
        <S.AddressFormModal.SubTitle>수령인</S.AddressFormModal.SubTitle>
        <TextInput
          state={consigneeState}
          setState={setConsigneeState}
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
