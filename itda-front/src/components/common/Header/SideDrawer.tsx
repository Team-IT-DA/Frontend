import S from "../CommonStyles";
import ProductCard from "../ProductCard";

type TSideDrawer = {
  isClicked: boolean;
  setIsClicked: (value: boolean) => void;
};

const SideDrawer = ({ isClicked, setIsClicked }: TSideDrawer) => {
  console.log(isClicked);
  const handleCloseButtonClick = () => {
    setIsClicked(false);
  };

  return (
    <S.SideDrawer.DrawerLayout>
      <S.SideDrawer.DrawerHeaderLayer>
        <div>담은 상품 목록</div>
        <S.SideDrawer.DrawerCardCloseButton
          isClicked={isClicked}
          onClick={handleCloseButtonClick}
        >
          <S.SideDrawer.DrawerCloseIcon />
        </S.SideDrawer.DrawerCardCloseButton>
      </S.SideDrawer.DrawerHeaderLayer>
      <S.SideDrawer.DrawerCardListLayer>
        <SideDrawerItem />
        <SideDrawerItem />
        <SideDrawerItem />
        <SideDrawerItem />
        <SideDrawerItem />
      </S.SideDrawer.DrawerCardListLayer>
      <S.SideDrawer.DrawerBottom>
        <S.SideDrawer.DrawerTotalPrice>
          합계: 410000원
        </S.SideDrawer.DrawerTotalPrice>
        <S.SideDrawer.DrawerDeliveryFee>
          (배송비 불포함 금액)
        </S.SideDrawer.DrawerDeliveryFee>
        <S.SideDrawer.DrawerMoveToCartBtn>
          장바구니로 이동
        </S.SideDrawer.DrawerMoveToCartBtn>
      </S.SideDrawer.DrawerBottom>
    </S.SideDrawer.DrawerLayout>
  );
};

// 장바구니 아이템의 props로 받아올 type들
// 위에서 map 돌릴 것 같아요
type drawerITemType = {
  productStock: number;
  productImage: string;
  productName: string;
  productPrice: number;
};

const SideDrawerItem = () => {
  return (
    <S.SideDrawer.DrawerCardLayout>
      <S.SideDrawer.DrawerCardCountDiv>
        <ProductCard
          size="small"
          productImg="https://t1.daumcdn.net/news/202105/25/catlab/20210525054449077awum.jpg"
          productName="박크롱의 신선한 당근 2kg신선한 당근 2kg신선한 당근 2kg"
          productPrice={3000}
          seller="박크롱"
          horizontal={true}
        />
        <S.SideDrawer.DrawerCardDescription>
          <div>
            <div>상품 재고: 56개</div>
            <S.SideDrawer.DrawerCardCountUpDown>
              <button>
                <S.SideDrawer.DrawerCountUpIcon />
              </button>
              <S.SideDrawer.DrawerCardCount>3</S.SideDrawer.DrawerCardCount>
              <button>
                <S.SideDrawer.DrawerCountDownIcon />
              </button>
            </S.SideDrawer.DrawerCardCountUpDown>
          </div>
        </S.SideDrawer.DrawerCardDescription>
      </S.SideDrawer.DrawerCardCountDiv>
      <S.SideDrawer.DrawerCardBottom>
        <S.SideDrawer.DrawerCardPrice>
          총 합: 21400원
        </S.SideDrawer.DrawerCardPrice>
        <S.SideDrawer.DrawerCardDeleteButton>
          삭제
        </S.SideDrawer.DrawerCardDeleteButton>
      </S.SideDrawer.DrawerCardBottom>
    </S.SideDrawer.DrawerCardLayout>
  );
};

export default SideDrawer;
