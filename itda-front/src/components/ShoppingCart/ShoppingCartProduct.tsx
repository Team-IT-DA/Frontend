import { useState, useEffect } from "react";
import S from "./ShoppingCartStyles";
import CheckButton from "components/common/Atoms/CheckButton";
import StepperButton from "components/common/Atoms/StepperButton";
import CancelButton from "components/common/Atoms/CancelButton";
import { selectedProduct } from "stores/ShoppingCartAtoms";
import { useRecoilState } from "recoil";
import { IShoppingCartProduct } from "types/ShoppingCartTypes";

const ShoppingCartProduct = ({
  id,
  imageUrl,
  productName,
  price,
  count,
}: IShoppingCartProduct) => {
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
      <S.ShoppingCartProduct.ContentsLayout>
        <CheckButton checked={isSelected} onClick={handleCheckButton} />
        <S.ShoppingCartProduct.Image src={imageUrl} />
        <S.ShoppingCartProduct.ProductNameLayer>
          {productName}
        </S.ShoppingCartProduct.ProductNameLayer>
        <StepperButton state={productCount} setState={setProductCount} />
        <S.ShoppingCartProduct.ProductPrice>
          {(productCount * price).toLocaleString()}
        </S.ShoppingCartProduct.ProductPrice>
        <CancelButton />
      </S.ShoppingCartProduct.ContentsLayout>
    </>
  );
};

export default ShoppingCartProduct;
