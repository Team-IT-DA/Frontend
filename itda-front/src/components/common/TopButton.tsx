import S from "./CommonStyles";
import useScrollToggle from "hooks/useScrollToggle";
const TopButton = () => {
  const scrollFlag = useScrollToggle(false);

  const moveToTop = () => (document.documentElement.scrollTop = 0);

  return scrollFlag ? (
    <S.TopButton.Layout onClick={moveToTop}>
      <S.TopButton.Icon></S.TopButton.Icon>
    </S.TopButton.Layout>
  ) : (
    <></>
  );
};

export default TopButton;
