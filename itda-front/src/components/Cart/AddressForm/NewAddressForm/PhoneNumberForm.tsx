import SelectBox from "components/common/Atoms/SelectBox";
import TextInput from "components/common/Atoms/TextInput";
const PhoneNumberForm = () => {
  const numberList = ["010", "02", "031"];
  return (
    <>
      <SelectBox selectArray={numberList} />
      -
      <TextInput width={"small"} />
      -
      <TextInput width={"small"} />
    </>
  );
};

export default PhoneNumberForm;
