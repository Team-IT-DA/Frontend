import S from "../CommonStyles";
import StepperButton from "components/common/Atoms/StepperButton";
import ProductCard from "../ProductCard";
import { useRecoilState } from "recoil";
import { useState, useEffect } from "react";
import { GetCart, PostCartAll } from "components/Cart/CartService";
import { cartProductData } from "stores/CartAtoms";
import { ICart, ISendingCartProduct } from "types/CartTypes";
import { TSideDrawer, TDrawerItem } from "types/SideDrawerTypes";
import { Link } from "react-router-dom";
import cartAPI from "util/API/cartAPI";

const SideDrawer = ({
  isSideDrawerClicked,
  setIsSideDrawerClicked,
}: TSideDrawer) => {
  GetCart(); // TODO: SideDrawer open할 때마다 리프레시가 되지 않음
  const [cartProductList, setCartProductList] = useRecoilState(cartProductData);
  const [cartProductsCount, setCartProductsCount] = useState<
    ISendingCartProduct[]
  >([]);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  const removeItem = (id: number) => {
    const newProductData = cartProductList.filter(
      (item: ICart) => item.productId !== id
    );
    setCartProductList(newProductData);
    cartAPI.delete.deleteCartProduct(id);
  };

  const findSameItemCount = (id: number) => {
    const sameItem = cartProductsCount.find(el => el.id === id);
    return sameItem?.count;
  };

  const handleCloseButtonClick = () => {
    setIsSideDrawerClicked(false);
    setTimeout(() => {
      setIsSideDrawerClicked(undefined);
    }, 1000);
  };

  const handleApplyNumberButtonClicked = () => {
    const newCartProductList = cartProductList.map(product => {
      if (findSameItemCount(product.productId)) {
        const updatedCount = findSameItemCount(product.productId);
        product = {
          ...product,
          productCount: updatedCount || product.productCount,
        };
      }
      return product;
    });
    setCartProductList(newCartProductList);
    PostCartAll(newCartProductList);
    alert("수량이 변경되었습니다.");
  };

  useEffect(() => {
    const cartItemCountArray = cartProductList?.map((cartItem: ICart) => {
      return {
        id: cartItem.productId,
        price: cartItem.price,
        count: cartItem.productCount,
      };
    });
    setCartProductsCount(cartItemCountArray);
  }, [cartProductList]);

  useEffect(() => {
    let total = 0;
    cartProductsCount.forEach(cartItem => {
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
        {(cartProductsCount.length &&
          cartProductList.map(({ productId, imgUrl, productName, price }) => {
            return (
              <SideDrawerItem
                // productSeller={} => // todo: API로 교체하면 seller 정보 넣기
                key={`item-${productId}`}
                productId={productId}
                productImage={imgUrl}
                productName={productName}
                productPrice={price}
                removeItem={removeItem}
                cartProductsCount={cartProductsCount}
                setCartProductsCount={setCartProductsCount}
              />
            );
          })) || (
          <>
            <S.SideDrawer.EmptyDrawerMessage>
              장바구니에 상품이 존재하지 않습니다.
            </S.SideDrawer.EmptyDrawerMessage>
          </>
        )}
      </S.SideDrawer.DrawerCardListLayer>
      <S.SideDrawer.DrawerBottom>
        <S.SideDrawer.DrawerTotalPrice>
          {`합계: ${cartTotalPrice.toLocaleString()}원`}
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

const SideDrawerItem = ({
  productId,
  productImage,
  productName,
  productPrice,
  removeItem,
  cartProductsCount,
  setCartProductsCount,
}: TDrawerItem) => {
  const [productCount, setProductCount] = useState(
    cartProductsCount.filter(cartItem => cartItem.id === productId)[0]?.count
  );

  const calculateTotalPrice = () => {
    const totalPrice = productPrice * productCount;

    return totalPrice.toLocaleString();
  };

  useEffect(() => {
    const newCount = {
      id: productId,
      price: productPrice,
      count: productCount,
    };
    const updatedCartProductsCount = cartProductsCount.map(cartItem => {
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
          {`총 합: ${calculateTotalPrice()}원`}
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
