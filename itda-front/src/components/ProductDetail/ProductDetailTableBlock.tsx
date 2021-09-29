import S from "./ProductDetailStyles";
import { IProductDetail } from "types/ProductDetailTypes";

const ProductDetailTableBlock = (mockProduct: IProductDetail) => {
  return (
    <S.ProductInfo.DetailProductInfo>
      <li>
        <dl>
          <dt>판매 단위</dt>
          <dd>{mockProduct.salesUnit.toLocaleString()}</dd>
        </dl>
        <dl>
          <dt>중량/용량</dt>
          <dd>{mockProduct.capacity}</dd>
        </dl>
      </li>
      <li>
        <dl>
          <dt>배송</dt>
          <dd>
            {mockProduct.deliveryFee.toLocaleString()}원 (
            {mockProduct.deliveryFeeCondition})
          </dd>
        </dl>
      </li>
      <li>
        <dl>
          <dt>원산지</dt>
          <dd>{mockProduct.origin}</dd>
        </dl>
      </li>
      <li>
        <dl>
          <dt>포장 타입</dt>
          <dd>{mockProduct.packagingType}</dd>
        </dl>
      </li>
      <li>
        <dl>
          <dt>안내 사항</dt>
          <dd>{mockProduct.notice}</dd>
        </dl>
      </li>
    </S.ProductInfo.DetailProductInfo>
  );
};

export default ProductDetailTableBlock;
