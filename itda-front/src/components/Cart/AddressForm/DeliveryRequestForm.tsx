import { useRecoilState } from "recoil";
import { shippingMessage } from "stores/CartAtoms";
import TextInput from "components/common/Atoms/TextInput";

const DeliveryRequestForm = () => {
  const [shippingMessageState, setShippingMessageState] = useRecoilState(
    shippingMessage
  );
  return (
    <TextInput
      width={"400px"}
      isRequired={false}
      state={shippingMessageState}
      setState={setShippingMessageState}
    />
  );
};

export default DeliveryRequestForm;
