import { useState, useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useHistory } from "react-router-dom";
import S from "../CartStyles";
import CheckButton from "components/common/Atoms/CheckButton";
import StepperButton from "components/common/Atoms/StepperButton";
import CancelButton from "components/common/Atoms/CancelButton";
import StepperSubmitButton from "components/common/Atoms/StepperSubmitButton";
import { selectedProduct } from "stores/CartAtoms";
import cartAPI from "util/API/cartAPI";
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
  const [productCount, setProductCount] = useState(count);
  const [isSelected, setIsSelected] = useState(false);
  const history = useHistory();
  useEffect(() => {
    selectedProductState.has(id) ? setIsSelected(true) : setIsSelected(false);
  }, [selectedProductState]);

  const handleCheckButton = () => {
    if (!isSelected) {
      //check하기
      setSelectedProductState(prev => {
        const newState = new Map(prev);
        newState.set(id, { id, count });
        return newState;
      });
    } else {
      //check 풀기
      setSelectedProductState(prev => {
        const newState = new Map(prev);
        newState.delete(id);
        return newState;
      });
    }
  };

  const deleteProduct = () => {
    console.log("delete", id);
    //TODO: 장바구니 삭제 POST 에러 뜸
    //setCartProductState(prev => [...prev].filter(data => data.id !== id));
    cartAPI.delete.deleteCartProduct(id);
  };

  const changeProductCount = () => {
    cartAPI.post.updateCartProduct({ id: id, count: productCount });
    alert("수량이 변경되었습니다.");
  };
  const openProductDetailPage = () => history.push(`product/${id}`);

  return (
    <>
      <S.CartProduct.ContentsLayout>
        <CheckButton checked={isSelected} onClick={handleCheckButton} />
        <S.CartProduct.Image src={imageUrl} onClick={openProductDetailPage} />
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
