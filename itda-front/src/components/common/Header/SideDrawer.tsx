import S from "../CommonStyles";
import StepperButton from "components/common/Atoms/StepperButton";
import ProductCard from "../ProductCard";
import { useRecoilState } from "recoil";
import { useState, useEffect, SetStateAction } from "react";
import { cartProductData } from "stores/CartAtoms";
import { ICartProduct, ISendingCartProduct } from "types/CartTypes";
import { GETCartData } from "util/mock/GETCartData";
import { Link } from "react-router-dom";

type TSideDrawer = {
  isSideDrawerClicked: undefined | boolean;
  setIsSideDrawerClicked: (value: boolean) => void;
};

const SideDrawer = ({
  isSideDrawerClicked,
  setIsSideDrawerClicked,
}: TSideDrawer) => {
  const MockData = GETCartData.data.detail;
  const [cartProductList, setCartProductList] = useRecoilState(cartProductData);
  const [cartProductsCount, setCartProductsCount] = useState<
    ISendingCartProduct[]
  >([]);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  const handleCloseButtonClick = () => {
    setIsSideDrawerClicked(false);
  };

  const removeItem = (id: number) => {
    const newProductData = cartProductList.filter(
      (item: ICartProduct) => item.id !== id
    );
    setCartProductList(newProductData);
  };

  const handleApplyNumberButtonClicked = () => {
    // todo: POST요청으로 장바구니 데이터 서버에 전달
    // todo: cartProductsCount의 수량과 cartProductList의 수량의 싱크 맞추기
  };

  useEffect(() => {
    setCartProductList(MockData);
  }, []);

  useEffect(() => {
    const cartItemCountArray = cartProductList.map(
      (cartItem: ISendingCartProduct) => {
        return {
          id: cartItem.id,
          price: cartItem.price,
          count: cartItem.count,
        };
      }
    );
    setCartProductsCount(cartItemCountArray);
  }, [cartProductList]);

  useEffect(() => {
    let total = 0;
    cartProductsCount.forEach((cartItem) => {
      total += cartItem.price * cartItem.count;
    });
    setCartTotalPrice(total);
  }, [cartProductsCount]);

  return (
    <S.SideDrawer.DrawerLayout isClicked={isSideDrawerClicked}>
      <S.SideDrawer.DrawerHeaderLayer>
        <div>담은 상품 목록</div>
        <S.SideDrawer.DrawerCardCloseButton
          isClicked={isSideDrawerClicked}
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
        <S.SideDrawer.ButtonLayer>
          <S.SideDrawer.ApplyNumbersButton
            onClick={handleApplyNumberButtonClicked}
          >
            수량변경
          </S.SideDrawer.ApplyNumbersButton>
          <S.SideDrawer.DrawerMoveToCartButton>
            <Link to="/cart"> 장바구니로 이동</Link>
          </S.SideDrawer.DrawerMoveToCartButton>
        </S.SideDrawer.ButtonLayer>
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

  useEffect(() => {
    const newCount = {
      id: productId,
      price: productPrice,
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
          horizontal={true}
        />
        <S.SideDrawer.DrawerCardDescription>
          <div>
            <StepperButton state={productCount} setState={setProductCount} />
          </div>
        </S.SideDrawer.DrawerCardDescription>
      </S.SideDrawer.DrawerCardCountDiv>
      <S.SideDrawer.DrawerCardBottom>
        <S.SideDrawer.DrawerCardPrice>
          {`총 합: ${productPrice * productCount}원`}
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
