import { SetStateAction, Dispatch } from "react";
import S from "./MyPageStyles";

interface IMyPageTabProps {
  index: number;
  category: string;
  isSelected: boolean;
  setIsSelected: Dispatch<SetStateAction<number>>;
}

const MyPageTab = (props: IMyPageTabProps) => {
  return (
    <S.MyPageTab.Layout
      isSelected={props.isSelected}
      onClick={() => props.setIsSelected(props.index)}
    >
      {props.category}
    </S.MyPageTab.Layout>
  );
};

export default MyPageTab;
