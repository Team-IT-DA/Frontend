import S from "./AtomsStyles";

type TTextInput = {
  label?: string | number;
  variant?: "outlined" | "filled" | "standard";
  size?: "small" | "medium";
  width?: string;
  isRequired?: boolean;
  state: string;
  setState: (input: string) => void; //textInput이니 string 타입을 상태로 가지게 했습니다.(변경가능)
};

const TextInput = ({
  label,
  size = "small", //size가 아닌 height로는 높이 조정이 불가능해서 주어진 높이 관련 속성인 size로 정했습니다.
  variant = "outlined",
  width = "100px",
  isRequired = true,
  state,
  setState,
}: TTextInput) => {
  const handleEmptyInput = () => {
    //공백일 때 false를 반환합니다.
    return isRequired && state === "" ? true : false;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  return (
    <S.TextInput
      error={handleEmptyInput()}
      type="text"
      label={label}
      variant={variant}
      size={size}
      onChange={handleInputChange}
      width={width}
    />
  );
};

export default TextInput;
