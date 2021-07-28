import S from "../CommonStyles";
import ProductCard from "../ProductCard";

const SideDrawer = () => {
  return (
    <S.SideDrawer.DrawerContainer>
      <div>
        <div>담은 상품 목록</div>
        <div>x</div>
      </div>
      <S.SideDrawer.DrawerCardList>
        <SideDrawerItem />
        <SideDrawerItem />
        <SideDrawerItem />
        <SideDrawerItem />
        <SideDrawerItem />
      </S.SideDrawer.DrawerCardList>
    </S.SideDrawer.DrawerContainer>
  );
};

const SideDrawerItem = () => {
  return (
    <S.SideDrawer.DrawerCardContainer>
      <S.SideDrawer.DrawerCardCountDiv>
        <ProductCard size="small" horizontal={true} />
        <S.SideDrawer.DrawerCardDescription>
          <div>
            <div>상품 재고: 56개</div>
            <S.SideDrawer.DrawerCardCountUpDown>
              <S.SideDrawer.DrawerCardCount>3</S.SideDrawer.DrawerCardCount>
              <div>{"∧"}</div>
              <div>{"∨"}</div>
            </S.SideDrawer.DrawerCardCountUpDown>
          </div>
          <div>X</div>
        </S.SideDrawer.DrawerCardDescription>
      </S.SideDrawer.DrawerCardCountDiv>
      <S.SideDrawer.DrawerCardPrice>
        총 합: 21400원
      </S.SideDrawer.DrawerCardPrice>
    </S.SideDrawer.DrawerCardContainer>
  );
};

export default SideDrawer;
