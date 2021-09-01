import { useState } from "react";
import S from "./MyPageStyles";
import MyPageTab from "components/MyPage/MyPageTab";

const MyPageTabs = () => {
  const tabs = ["주문 내역", "상품 후기", "잇다톡", "개인 정보 수정"];
  const [isSelected, setIsSelected] = useState(0);

  return (
    <S.MyPageTabs.Layout>
      <S.MyPageTabs.Layer>
        {tabs.map((tab, index) => (
          <MyPageTab
            index={index}
            category={tab}
            isSelected={isSelected === index}
            setIsSelected={setIsSelected}
          />
        ))}
      </S.MyPageTabs.Layer>
    </S.MyPageTabs.Layout>
  );
};

export default MyPageTabs;
