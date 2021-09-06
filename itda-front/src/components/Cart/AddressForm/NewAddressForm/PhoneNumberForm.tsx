import SelectBox from "components/common/Atoms/SelectBox";
import TextInput from "components/common/Atoms/TextInput";
import { useState } from "react";

const PhoneNumberForm = () => {
  const [inputState, setInputState] = useState(""); //임시 상태
  const numberList = ["010", "02", "031"];
  return (
    <>
      <SelectBox selectArray={numberList} />
      -
      <TextInput width={"100px"} state={inputState} setState={setInputState} />
      -
      <TextInput width={"100px"} state={inputState} setState={setInputState} />
    </>
  );
};

export default PhoneNumberForm;
