import S from "components/Cart/CartStyles";
import TextInput from "components/common/Atoms/TextInput";
import { useRecoilState } from "recoil";
import {
  regionOneDepthName,
  regionTwoDepthName,
  regionThreeDepthName,
} from "stores/CartAtoms";

const AddressSearchForm = () => {
  const [regionOneState, setRegionOneState] = useRecoilState(
    regionOneDepthName
  );
  const [regionTwoState, setRegionTwoState] = useRecoilState(
    regionTwoDepthName
  );

  const [regionThreeState, setRegionThreeState] = useRecoilState(
    regionThreeDepthName
  );

  return (
    <div>
      <S.AddressSearchForm.LineLayer>
        <TextInput
          width={"100px"}
          state={regionOneState}
          setState={setRegionOneState}
        />
        <S.AddressSearchForm.SearchButton>
          검색
        </S.AddressSearchForm.SearchButton>
      </S.AddressSearchForm.LineLayer>
      <S.AddressSearchForm.LineLayer>
        <TextInput
          width={"100px"}
          state={regionTwoState}
          setState={setRegionTwoState}
        />
        <TextInput
          width={"200px"}
          state={regionThreeState}
          setState={setRegionThreeState}
        />
      </S.AddressSearchForm.LineLayer>
    </div>
  );
};

export default AddressSearchForm;
