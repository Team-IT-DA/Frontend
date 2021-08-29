import { useState, useEffect } from "react";
import S from "../CartStyles";
import CheckButton from "components/common/Atoms/CheckButton";
import StepperButton from "components/common/Atoms/StepperButton";
import CancelButton from "components/common/Atoms/CancelButton";
import { selectedProduct, cartProductData } from "stores/CartAtoms";
import { useRecoilState, useSetRecoilState } from "recoil";
import { ICartProduct } from "types/CartTypes";
import StepperSubmitButton from "components/common/Atoms/StepperSubmitButton";
const CartProductCard = ({
  id,
  imageUrl,
  productName,
  price,
  count,
}: ICartProduct) => {
  const [selectedProductState, setSelectedProductState] = useRecoilState(
    selectedProduct
  );
  const [cartProductState, setCartProductState] = useRecoilState(
    cartProductData
  );

  const [productCount, setProductCount] = useState(count);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    selectedProductState.has(id) ? setIsSelected(true) : setIsSelected(false);
  }, [selectedProductState]);

  const handleCheckButton = () => {
    if (!isSelected) {
      setSelectedProductState(
        prev =>
          new Map([
            ...prev,
            [
              id,
              {
                id,
                imageUrl,
                productName,
                price,
                count,
              },
            ],
          ])
      );
    } else {
      setSelectedProductState(prev => {
        const newState = new Map(prev);
        newState.delete(id);
        return newState;
      });
    }
  };

  const deleteProduct = () => {
    //TODO: 장바구니 삭제 POST 적용하면 아래 내용 필요 없음
    setCartProductState(prev => [...prev].filter(data => data.id !== id));
  };
  const changeProductCount = () => {
    //TODO: 장바구니 수정 POST BODY
    //   {
    //     "products": [

    //               {
    //               "id" : 1,
    //           "count" : 6
    //             },
    //             {
    //               "id" : 2,
    //               "count" : 6
    //             }
    //   ]
    // }

    alert("수량이 변경되었습니다."); //TODO: alert말고 변경 완료~를 1초 정도 보여주고 사라지게
  };

  return (
    <>
      <S.CartProduct.ContentsLayout>
        <CheckButton checked={isSelected} onClick={handleCheckButton} />
        <S.CartProduct.Image src={imageUrl} />
        <S.CartProduct.ProductNameLayer>
          {productName}
        </S.CartProduct.ProductNameLayer>
        <StepperButton state={productCount} setState={setProductCount} />
        <StepperSubmitButton onClick={changeProductCount} />
        <S.CartProduct.ProductPrice>
          {(productCount * price).toLocaleString()}
        </S.CartProduct.ProductPrice>
        <CancelButton onClick={deleteProduct} />
      </S.CartProduct.ContentsLayout>
    </>
  );
};

export default CartProductCard;
