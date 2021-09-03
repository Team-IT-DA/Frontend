import S from "./MyPageStyles";

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
  return (
    <S.MyPageTab.Layout
      category={category}
      currentSelectedTab={currentSelectedTab}
      onClick={() => handleTabClick(category)}
    >
      {category}
    </S.MyPageTab.Layout>
  );
};

export default MyPageTab;
