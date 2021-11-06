import S from "./ProductDetailStyles";
import { IProductDetail } from "types/ProductDetailTypes";

const ProductDetailTableBlock = (product: IProductDetail) => {
  return (
    <S.ProductInfo.DetailProductInfo>
      <li>
        <dl>
          <dt>판매 단위</dt>
          <dd>{product.salesUnit.toLocaleString()}</dd>
        </dl>
        <dl>
          <dt>중량/용량</dt>
          <dd>{product.capacity}</dd>
        </dl>
      </li>
      <li>
        <dl>
          <dt>배송</dt>
          <dd>
            {product.deliveryFee.toLocaleString()}원 (
            {product.deliveryFeeCondition})
          </dd>
        </dl>
      </li>
      <li>
        <dl>
          <dt>원산지</dt>
          <dd>{product.origin}</dd>
        </dl>
      </li>
      <li>
        <dl>
          <dt>포장 타입</dt>
          <dd>{product.packagingType}</dd>
        </dl>
      </li>
    </S.ProductInfo.DetailProductInfo>
  );
};

export default ProductDetailTableBlock;
