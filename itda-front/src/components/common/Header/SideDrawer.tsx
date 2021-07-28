import S from "../CommonStyles";
import ProductCard from "../ProductCard";

const SideDrawer = () => {
  return (
    <S.SideDrawer.DrawerContainer>
      <S.SideDrawer.DrawerHeader>
        <div>담은 상품 목록</div>
        <S.SideDrawer.DrawerCardCloseButton>
          x
        </S.SideDrawer.DrawerCardCloseButton>
      </S.SideDrawer.DrawerHeader>
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
        </S.SideDrawer.DrawerCardDescription>
      </S.SideDrawer.DrawerCardCountDiv>
      <S.SideDrawer.DrawerCardBottom>
        <S.SideDrawer.DrawerCardPrice>
          총 합: 21400원
        </S.SideDrawer.DrawerCardPrice>
        <S.SideDrawer.DrawerCardDeleteButton>
          x
        </S.SideDrawer.DrawerCardDeleteButton>
      </S.SideDrawer.DrawerCardBottom>
    </S.SideDrawer.DrawerCardContainer>
  );
};

export default SideDrawer;
