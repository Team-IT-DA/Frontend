import S from "../CommonStyles";
import StepperButton from "components/common/Atoms/StepperButton";
import StepperSubmitButton from "components/common/Atoms/StepperSubmitButton";
import ProductCard from "../ProductCard";
import { useRecoilState } from "recoil";
import { useState, useEffect, SetStateAction } from "react";
import { cartProductData } from "stores/CartAtoms";
import { ICartProduct, ISendingCartProduct } from "types/CartTypes";
import { GETCartData } from "util/mock/GETCartData";

type TSideDrawer = {
  isClicked: undefined | boolean;
  setIsClicked: (value: boolean) => void;
};

const SideDrawer = ({ isClicked, setIsClicked }: TSideDrawer) => {
  const MockData = GETCartData.data.detail;
  const [cartProductList, setCartProductList] = useRecoilState(cartProductData);
  const [cartProductsCount, setCartProductsCount] = useState<
    ISendingCartProduct[]
  >([]);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  const handleCloseButtonClick = () => {
    setIsClicked(false);
  };

  const removeItem = (id: number) => {
    const newProductData = cartProductList.filter(
      (item: ICartProduct) => item.id !== id
    );
    setCartProductList(newProductData);
  };

  const updateItemNumber = () => {};

  useEffect(() => {
    setCartProductList(MockData);
  }, []);

  useEffect(() => {
    const cartItemCountArray = cartProductList.map(
      (cartItem: ISendingCartProduct) => {
        return {
          id: cartItem.id,
          count: cartItem.count,
        };
      }
    );
    setCartProductsCount(cartItemCountArray);
  }, [cartProductList]);

  return (
    <S.SideDrawer.DrawerLayout isClicked={isClicked}>
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
        {cartProductsCount.length !== 0 &&
          cartProductList.map((cartItem) => {
            return (
              <SideDrawerItem
                // productSeller={} => // todo: API로 교체하면 seller 정보 넣기
                productId={cartItem.id}
                productImage={cartItem.imageUrl}
                productName={cartItem.productName}
                productPrice={cartItem.price}
                removeItem={removeItem}
                cartProductsCount={cartProductsCount}
                setCartProductsCount={setCartProductsCount}
              />
            );
          })}
      </S.SideDrawer.DrawerCardListLayer>
      <S.SideDrawer.DrawerBottom>
        <S.SideDrawer.DrawerTotalPrice>
          {`합계: ${cartTotalPrice}`}
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
  // productSeller: string
  productId: number;
  productImage: string;
  productName: string;
  productPrice: number;
  removeItem: (id: number) => void;
  cartProductsCount: ISendingCartProduct[];
  setCartProductsCount: React.Dispatch<SetStateAction<ISendingCartProduct[]>>;
};

const SideDrawerItem = ({
  productId,
  productImage,
  productName,
  productPrice,
  removeItem,
  cartProductsCount,
  setCartProductsCount,
}: drawerITemType) => {
  const [productCount, setProductCount] = useState(
    cartProductsCount.filter((cartItem) => cartItem.id === productId)[0].count
  );

  const updateItemNumber = () => {};

  useEffect(() => {
    const newCount = {
      id: productId,
      count: productCount,
    };
    const updatedCartProductsCount = cartProductsCount.map((cartItem) => {
      return cartItem.id === productId ? newCount : cartItem;
    });
    setCartProductsCount(updatedCartProductsCount);
  }, [productCount]);

  return (
    <S.SideDrawer.DrawerCardLayout>
      <S.SideDrawer.DrawerCardCountDiv>
        <ProductCard
          size="small"
          productImg={productImage}
          productName={productName}
          productPrice={productPrice}
          seller="박크롱" //seller 정보 넣을 것인가
          horizontal={true}
        />
        <S.SideDrawer.DrawerCardDescription>
          <div>
            <StepperButton state={productCount} setState={setProductCount} />
            <StepperSubmitButton onClick={updateItemNumber} />
          </div>
        </S.SideDrawer.DrawerCardDescription>
      </S.SideDrawer.DrawerCardCountDiv>
      <S.SideDrawer.DrawerCardBottom>
        <S.SideDrawer.DrawerCardPrice>
          총 합: 21400원
        </S.SideDrawer.DrawerCardPrice>
        <S.SideDrawer.DrawerCardDeleteButton
          onClick={() => removeItem(productId)}
        >
          삭제
        </S.SideDrawer.DrawerCardDeleteButton>
      </S.SideDrawer.DrawerCardBottom>
    </S.SideDrawer.DrawerCardLayout>
  );
};

export default SideDrawer;
