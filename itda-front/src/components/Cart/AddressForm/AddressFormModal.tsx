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
const AddressFormModal = () => {
  const isDefaultAddressState = useRecoilValue(isDefaultAddress);
  const saveAddressInfo = () => {};
  return (
    <>
      <S.AddressFormModal.Layout>
        <S.AddressFormModal.Header>
          <S.AddressFormModal.Title>
            배송지 정보
            <S.AddressFormModal.CancelLayer>
              <CancelButton hoverEffect={false} />
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
    </>
  );
};

export default AddressFormModal;

//GET기본 주소지와 최근 4개 주소지 조회
// {
// 	"consignee": "크롱",
// 	"phone": "01040207042",
//     "regionOneDepthName":"서울특별시" ,
//     "regionTwoDepthName":"강남구",
// 	"regionThreeDepthName":"역삼동",
// 	"mainBuildingNo":40,
// 	"subBuildingNo":4,
// 	"zoneNo": 36680,
// 	"defaultAddrYn": true,
//     "message": "문 앞에 놓고 전화주세요."
// }
