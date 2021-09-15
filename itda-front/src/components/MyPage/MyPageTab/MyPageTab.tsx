import S from "../MyPageStyles";

interface IMyPageTabProps {
  category: string;
  currentSelectedTab: string;
  handleTabClick: (tabName: string) => void;
}

const MyPageTab = ({
  category,
  currentSelectedTab,
  handleTabClick,
}: IMyPageTabProps) => {
  const handleMouseEnter = () => {
    if (category === "개인 정보 수정") {
    }
    // todo: 탭에 마우스가 들어왔을 때 탭 이름이 "개인정보수정"이라면, 하위 탭의 "기본정보"와 "판매자정보"를 보여주기
  };

  return (
    <S.MyPageTab.Layout
      category={category}
      currentSelectedTab={currentSelectedTab}
      onClick={() => handleTabClick(category)}
      onMouseEnter={() => handleMouseEnter()}
    >
      {category}
    </S.MyPageTab.Layout>
  );
};

export default MyPageTab;
