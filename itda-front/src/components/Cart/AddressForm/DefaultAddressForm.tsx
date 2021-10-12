import S from "components/Cart/CartStyles";
//TODO: shippingInfos GET 한 거 atom으로 관리해서 defaultShippingAddress 값 여기에 넣기
const DefaultAddressForm = () => {
  return (
    <>
      <div>김크롱 (김크롱)</div>
      <div>010-1234-5678</div>
      <div>(우편번호) 서울특별시 ~~구 ~~길 12-2 (상세 주소 ~~ )</div>
    </>
  );
};

export default DefaultAddressForm;
