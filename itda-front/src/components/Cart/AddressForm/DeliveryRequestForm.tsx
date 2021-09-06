import TextInput from "components/common/Atoms/TextInput";
import { useState } from "react";

const DeliveryRequestForm = () => {
  const [inputState, setInputState] = useState(""); //임시 상태
  return (
    <TextInput
      width={"400px"}
      isRequired={false}
      state={inputState}
      setState={setInputState}
    />
  );
};

export default DeliveryRequestForm;
