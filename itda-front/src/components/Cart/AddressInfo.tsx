import S from "./CartStyles";
import GradientButton from "components/common/Atoms/GradientButton";

const AddressInfo = () => {
  const showAddressFormModal = () => {};
  return (
    <S.AddressInfo.Layout>
      <S.AddressInfo.Title>배송지</S.AddressInfo.Title>
      <S.AddressInfo.Contents>배송지를 입력해주세요. </S.AddressInfo.Contents>
      <GradientButton width={"18rem"} onClick={showAddressFormModal}>
        배송지 입력
      </GradientButton>
    </S.AddressInfo.Layout>
  );
};

export default AddressInfo;