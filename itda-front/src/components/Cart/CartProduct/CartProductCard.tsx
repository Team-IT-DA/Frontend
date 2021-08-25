import { useState, useEffect } from "react";
import S from "../CartStyles";
import CheckButton from "components/common/Atoms/CheckButton";
import StepperButton from "components/common/Atoms/StepperButton";
import CancelButton from "components/common/Atoms/CancelButton";
import { selectedProduct } from "stores/CartAtoms";
import { useRecoilState } from "recoil";
import { ICartProduct } from "types/CartTypes";

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
  useEffect(() => {
    selectedProductState.has(id) ? setIsSelected(true) : setIsSelected(false);
  }, [selectedProductState]);

  const [productCount, setProductCount] = useState(count);
  const [isSelected, setIsSelected] = useState(false);
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

  return (
    <>
      <S.CartProduct.ContentsLayout>
        <CheckButton checked={isSelected} onClick={handleCheckButton} />
        <S.CartProduct.Image src={imageUrl} />
        <S.CartProduct.ProductNameLayer>
          {productName}
        </S.CartProduct.ProductNameLayer>
        <StepperButton state={productCount} setState={setProductCount} />
        <S.CartProduct.ProductPrice>
          {(productCount * price).toLocaleString()}
        </S.CartProduct.ProductPrice>
        <CancelButton />
      </S.CartProduct.ContentsLayout>
    </>
  );
};

export default CartProductCard;
