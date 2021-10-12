import S from "../CartStyles";
import GradientButton from "components/common/Atoms/GradientButton";
import AddressSelection from "./AddressSelection";
import LastAddressSelection from "./LastAddressSelection";
import NewAddressForm from "./NewAddressForm/";
import DefaultAddressForm from "./DefaultAddressForm";
import DeliveryRequestForm from "./DeliveryRequestForm";
import CancelButton from "components/common/Atoms/CancelButton";
import { isDefaultAddress } from "stores/CartAtoms";
import { useRecoilValue } from "recoil";
import { shippingData } from "stores/CartAtoms";
import { useMutation } from "react-query";
import cartAPI from "util/API/cartAPI";
import { IShippingInfos } from "types/CartTypes";

const AddressFormModal = ({
  toggleAddressForm,
}: {
  toggleAddressForm: React.MouseEventHandler<SVGElement | HTMLElement>;
}) => {
  const isDefaultAddressState = useRecoilValue(isDefaultAddress);
  const shippingDataState = useRecoilValue(shippingData);

  const mutation = useMutation(async (shippingDataState: IShippingInfos) => {
    cartAPI.shipping.post.postShippingInfos(shippingDataState);
  });

  const saveAddressInfo = (e: React.MouseEvent<HTMLElement>) => {
    toggleAddressForm(e);
    mutation.mutate(shippingDataState);
  };

  return (
    <S.AddressFormModal.Wrapper className="address-form">
      <S.AddressFormModal.Layout>
        <S.AddressFormModal.Header>
          <S.AddressFormModal.Title>
            배송지 정보
            <S.AddressFormModal.CancelLayer>
              <CancelButton hoverEffect={false} onClick={toggleAddressForm} />
            </S.AddressFormModal.CancelLayer>
          </S.AddressFormModal.Title>
        </S.AddressFormModal.Header>
        <S.AddressFormModal.Main>
          <S.AddressFormModal.Layer>
            <S.AddressFormModal.SubTitle>
              배송지 선택
            </S.AddressFormModal.SubTitle>
            <AddressSelection />
          </S.AddressFormModal.Layer>
          <S.AddressFormModal.Layer>
            <S.AddressFormModal.SubTitle>
              최근 배송지
            </S.AddressFormModal.SubTitle>
            <LastAddressSelection />
          </S.AddressFormModal.Layer>
          {isDefaultAddressState ? <DefaultAddressForm /> : <NewAddressForm />}
          <S.AddressFormModal.Layer>
            <S.AddressFormModal.SubTitle>
              배송메모(선택)
            </S.AddressFormModal.SubTitle>
            <DeliveryRequestForm />
          </S.AddressFormModal.Layer>
          <S.AddressSearchForm.BottomLayer>
            <GradientButton width={"200px"} onClick={saveAddressInfo}>
              저장하기
            </GradientButton>
          </S.AddressSearchForm.BottomLayer>
        </S.AddressFormModal.Main>
      </S.AddressFormModal.Layout>
    </S.AddressFormModal.Wrapper>
  );
};

export default AddressFormModal;
