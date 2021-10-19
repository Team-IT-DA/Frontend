import S from "./CartStyles";
import GradientButton from "components/common/Atoms/GradientButton";
import AddressService from "./AddressService";
import { IShippingInfos } from "types/CartTypes";
import { useSetRecoilState } from "recoil";
import { useEffect } from "react";
import { shippingDefaultInfoState } from "stores/CartAtoms";

const AddressInfo = ({
  toggleAddressForm,
}: {
  toggleAddressForm: (e: React.MouseEvent<HTMLElement>) => void;
}) => {
  const { productsData, isLoading } = AddressService();
  const setShippingDefaultInfoState = useSetRecoilState(
    shippingDefaultInfoState
  );

  useEffect(() => {
    setShippingDefaultInfoState(false);
    //TODO: default 데이터가 있으면 false 없으면 true로 세팅
  }, []);

  // const { defaultShippingAddress } = productsData;
  //TODO: defaultShippingAddress 찾아서 바꾸기

  const tmpResponse: IShippingInfos = {
    id: 1,
    consignee: "크롱",
    phone: "010-4020-7042", //타입스크링이 나을듯?
    regionOneDepthName: "서울특별시",
    regionTwoDepthName: "강남구",
    regionThreeDepthName: "역삼동",
    mainBuildingNo: 40,
    subBuildingNo: 4,
    zoneNo: 36680,
    defaultAddrYn: true,
    message: "문 앞에 놓고 전화주세요.",
  };

  const parseShippingInfo = () => {
    const {
      consignee,
      phone,
      regionOneDepthName,
      regionTwoDepthName,
      regionThreeDepthName,
      mainBuildingNo,
      subBuildingNo,
      zoneNo,
      message,
    } = tmpResponse;
    // TODO: 이부분 진짜 데이터로 바꾸기

    const shippingInfos = [
      consignee,
      phone,
      `(${zoneNo}) ${regionOneDepthName} ${regionTwoDepthName} ${regionThreeDepthName} (${mainBuildingNo}) ${subBuildingNo}`,
      message,
    ];

    return shippingInfos.map((info, idx) => (
      <S.AddressInfo.Contents key={`shipping-${idx}`}>
        {info}
      </S.AddressInfo.Contents>
    ));
  };

  const renderAddressInfo = () => {
    return productsData ? parseShippingInfo() : "배송지를 입력해주세요."; //배송지를 입력해주세요.
  };

  return (
    <S.AddressInfo.Layout>
      <S.AddressInfo.Title>배송지</S.AddressInfo.Title>
      {renderAddressInfo()}
      <GradientButton width={"18rem"} onClick={toggleAddressForm}>
        배송지 입력
      </GradientButton>
    </S.AddressInfo.Layout>
  );
};

export default AddressInfo;
