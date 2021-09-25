import S from "./CartStyles";
import Header from "components/common/Header";
import AddressInfo from "./AddressInfo";
import PaymentInfo from "./PaymentInfo";
import CartProduct from "./CartProduct/";
import AddressForm from "./AddressForm";
import useToggle from "hooks/useToggle";
const Cart = () => {
  const [isAddressFormOpen, toggleAddressForm] = useToggle(false);

  return (
    <S.Cart.Layout>
      <S.Cart.HeaderLayout>
        <Header />
      </S.Cart.HeaderLayout>
      <S.Cart.ModalLayout>
        {isAddressFormOpen && (
          <AddressForm toggleAddressForm={toggleAddressForm} />
        )}
      </S.Cart.ModalLayout>
      <S.Cart.CartHeaderLayout>장바구니</S.Cart.CartHeaderLayout>
      <S.Cart.MainLayout>
        <S.Cart.ContainerLayer>
          <S.Cart.ProductsLayer>
            <CartProduct />
          </S.Cart.ProductsLayer>
          <S.Cart.SummaryLayer>
            <AddressInfo toggleAddressForm={toggleAddressForm} />
            <S.Cart.DivisionLine />
            <PaymentInfo />
          </S.Cart.SummaryLayer>
        </S.Cart.ContainerLayer>
      </S.Cart.MainLayout>
    </S.Cart.Layout>
  );
};

export default Cart;
