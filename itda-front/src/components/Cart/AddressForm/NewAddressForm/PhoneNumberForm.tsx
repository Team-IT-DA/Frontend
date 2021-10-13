import SelectBox from "components/common/Atoms/SelectBox";
import TextInput from "components/common/Atoms/TextInput";
import { useRecoilState } from "recoil";
import {
  phoneFirstPart,
  phoneSecondPart,
  phoneThirdPart,
} from "stores/CartAtoms";

const PhoneNumberForm = () => {
  const [phoneFirstPartState, setPhoneFirstPartState] = useRecoilState(
    phoneFirstPart
  );
  const [phoneSecondPartState, setPhoneSecondPartState] = useRecoilState(
    phoneSecondPart
  );
  const [phoneThirdPartState, setPhoneThirdPartState] = useRecoilState(
    phoneThirdPart
  );
  const numberList = ["010", "02", "031"];

  return (
    <>
      <SelectBox
        selectArray={numberList}
        state={phoneFirstPartState}
        setState={setPhoneFirstPartState}
      />
      -
      <TextInput
        width={"100px"}
        state={phoneSecondPartState}
        setState={setPhoneSecondPartState}
      />
      -
      <TextInput
        width={"100px"}
        state={phoneThirdPartState}
        setState={setPhoneThirdPartState}
      />
    </>
  );
};

export default PhoneNumberForm;
