import S from "./ShoppingCartStyles";
import CheckButton from "components/common/Atoms/CheckButton";
import CounterButton from "components/common/Atoms/CounterButton";
import CancelButton from "components/common/Atoms/CancelButton";
import { useState } from "react";

import useToggle from "hooks/useToggle";
const ShoppingCartProduct = () => {
  const [productCount, setProductCount] = useState(1);
  const [isSelected, setIsSelected] = useToggle();

  return (
    <>
      <S.ShoppingCartProduct.ContentsLayout>
        <CheckButton checked={isSelected} onClick={setIsSelected} />
        <S.ShoppingCartProduct.Image src="https://pbs.twimg.com/profile_images/1290662596367065090/9vCsXfMS_400x400.jpg" />
        <S.ShoppingCartProduct.ProductNameLayer>
          [루피] 상품명상품명상품명길면 밑으로 내려가요가요길어도 괜찮지만
          하지만 2줄까지만 나오게... 하기
        </S.ShoppingCartProduct.ProductNameLayer>
        <CounterButton state={productCount} setState={setProductCount} />
        <S.ShoppingCartProduct.ProductPrice>
          10,000원
        </S.ShoppingCartProduct.ProductPrice>
        <CancelButton />
      </S.ShoppingCartProduct.ContentsLayout>
    </>
  );
};

export default ShoppingCartProduct;
