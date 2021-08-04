import { useRecoilState } from "recoil";
import { detailProductCount } from "stores/ProductDetailAtoms";
import S from "./ProductDetailStyles";

const ProductInfo = () => {
  const [productCount, setProductCount] = useRecoilState(detailProductCount);

  return (
    <S.ProductInfo.InfoLayout>
      <S.ProductInfo.ProductDetailLayer>
        <S.ProductInfo.ImageBlock
          src="https://freshleader.co.kr/data/item/1f8_1060_0008/thumb-1f8_1_450x520.jpg"
          alt="상품 이미지"
        />
        <S.ProductInfo.DetailBlock>
          <S.ProductInfo.DetailName>크롱의 흙당근 2kg</S.ProductInfo.DetailName>
          <S.ProductInfo.DetailShortInfo>
            제주 바다 바람을 품은 친환경 흙당근
          </S.ProductInfo.DetailShortInfo>
          <S.ProductInfo.DetailPrice>19,900원</S.ProductInfo.DetailPrice>
          <S.ProductInfo.DetailProductInfo>
            <li>
              <dl>
                <dt>판매 단위</dt>
                <dd>1봉지</dd>
              </dl>
              <dl>
                <dt>중량/용량</dt>
                <dd>500g(2~4개입)</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>배송</dt>
                <dd>2,500원 (30,000원 이상 무료 배송)</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>원산지</dt>
                <dd>제주</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>포장타입</dt>
                <dd>냉장/종이포장</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>안내사항</dt>
                <dd>식품 특성상 중량은 5%내외의 차이가 있습니다.</dd>
              </dl>
            </li>
          </S.ProductInfo.DetailProductInfo>
          <S.ProductInfo.DetailBuyBlock>
            <S.ProductInfo.DetailCountDiv>
              <button
                disabled={productCount <= 0}
                onClick={() => setProductCount(productCount - 1)}
              >
                -
              </button>
              <div>{productCount}</div>
              <button onClick={() => setProductCount(productCount + 1)}>
                +
              </button>
            </S.ProductInfo.DetailCountDiv>
            <S.ProductInfo.DetailTotalPriceDiv>
              총 상품 금액:
              <S.ProductInfo.DetailTotalPrice>
                19,900원
              </S.ProductInfo.DetailTotalPrice>
            </S.ProductInfo.DetailTotalPriceDiv>
          </S.ProductInfo.DetailBuyBlock>
        </S.ProductInfo.DetailBlock>
      </S.ProductInfo.ProductDetailLayer>
      <S.ProductInfo.ProductPaymentLayer>
        <S.ProductInfo.SellerBlock>
          <S.ProductInfo.SellerImageWrapper>
            <S.ProductInfo.SellerImage
              src="http://img.segye.com/content/image/2021/07/29/20210729513138.jpg"
              alt="판매자사진"
            />
          </S.ProductInfo.SellerImageWrapper>
          <S.ProductInfo.SellerInfo>
            <S.ProductInfo.SellerName>
              크롱에게 문의하기
            </S.ProductInfo.SellerName>
            <S.ProductInfo.SellerDetail>
              "신선한 제품을 재배합니다"
            </S.ProductInfo.SellerDetail>
          </S.ProductInfo.SellerInfo>
        </S.ProductInfo.SellerBlock>
        <S.ProductInfo.PaymentBlock>
          <S.ProductInfo.AddToCartButton>
            장바구니 담기
          </S.ProductInfo.AddToCartButton>
          <S.ProductInfo.BuyButton>구매하기</S.ProductInfo.BuyButton>
        </S.ProductInfo.PaymentBlock>
      </S.ProductInfo.ProductPaymentLayer>
    </S.ProductInfo.InfoLayout>
  );
};

export default ProductInfo;
