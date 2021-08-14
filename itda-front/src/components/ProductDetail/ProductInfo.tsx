import { useRecoilState } from "recoil";
import { detailProductCount } from "stores/ProductDetailAtoms";
import { IProductDetail } from "types/ProductDetailTypes";
import S from "./ProductDetailStyles";

const ProductInfo = () => {
  const [productCount, setProductCount] = useRecoilState(detailProductCount);
  const mockProduct: IProductDetail = {
    id: 1,
    name: "흙당근",
    imageUrl:
      "https://freshleader.co.kr/data/item/1f8_1060_0008/thumb-1f8_1_450x520.jpg",
    description: "제주 바다 바람을 품은 친환경 흙당근",
    price: 19900,
    salesUnit: "1봉지",
    weight: "500g (2~4개입)",
    deliveryFee: 2500,
    deliveryFeeCondition: "30,000원 이상 무료 배송",
    origin: "제주",
    packagingType: "냉장/종이포장",
    detailDescription: "###제목<br><p>내용들어가고 어쩌고</p>",
    notice: "주의하세요",
    seller: {
      id: 1,
      name: "박크롱",
      imageUrl:
        "http://img.segye.com/content/image/2021/07/29/20210729513138.jpg",
      description: "신선한 제품을 재배합니다.",
    },
  };
  return (
    <S.ProductInfo.InfoLayout>
      <S.ProductInfo.ProductDetailLayer>
        <S.ProductInfo.ImageBlock
          src={mockProduct.imageUrl}
          alt="상품 이미지"
        />
        <S.ProductInfo.DetailBlock>
          <S.ProductInfo.DetailName>
            {mockProduct.name}
          </S.ProductInfo.DetailName>
          <S.ProductInfo.DetailShortInfo>
            {mockProduct.description}
          </S.ProductInfo.DetailShortInfo>
          <S.ProductInfo.DetailPrice>
            {mockProduct.price.toLocaleString()}원
          </S.ProductInfo.DetailPrice>
          <S.ProductInfo.DetailProductInfo>
            <li>
              <dl>
                <dt>판매 단위</dt>
                <dd>{mockProduct.salesUnit.toLocaleString()}</dd>
              </dl>
              <dl>
                <dt>중량/용량</dt>
                <dd>{mockProduct.weight}</dd>
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
          <S.ProductInfo.DetailBuyBlock>
            <S.ProductInfo.DetailCountDiv>
              <button
                disabled={productCount <= 1}
                onClick={() => setProductCount(productCount - 1)}
              >
                -
              </button>
              <div>{productCount}</div>
              <button onClick={() => setProductCount(productCount + 1)}>
                +
              </button>
            </S.ProductInfo.DetailCountDiv>
            <S.ProductInfo.DetailPriceDiv>
              <span>총 상품 금액:</span>
              <S.ProductInfo.DetailTotalPrice>
                {(mockProduct.price * productCount).toLocaleString()}원
              </S.ProductInfo.DetailTotalPrice>
            </S.ProductInfo.DetailPriceDiv>
          </S.ProductInfo.DetailBuyBlock>
        </S.ProductInfo.DetailBlock>
      </S.ProductInfo.ProductDetailLayer>
      <S.ProductInfo.ProductPaymentLayer>
        <S.ProductInfo.SellerBlock>
          <S.ProductInfo.SellerImageWrapper>
            <S.ProductInfo.SellerImage
              src={mockProduct.seller.imageUrl}
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
