import {
  addProductInfos,
  checkBlankInputs,
  finalAddProductValue,
} from "stores/AddProductAtoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { IAddProductTextField } from "types/AddProductTypes";
import myPageAPI from "util/API/myPageAPI";
import { useMutation } from "react-query";
import { IAddProduct } from "types/AddProductTypes";
import { useHistory } from "react-router";

interface InameInput {
  name: string;
  label: string;
}

const AddProductService = (input?: InameInput) => {
  const [productInput, setProductInput] =
    useRecoilState<IAddProductTextField>(addProductInfos);

  const [hasBlankInput, setBlank] = useRecoilState(checkBlankInputs);

  const history = useHistory();

  const handleProductInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newInput = {
      ...productInput,
      [name]: value,
    };
    setProductInput(newInput);
  };

  const isError =
    hasBlankInput &&
    (productInput[(input as InameInput).name] === "" ||
      productInput[(input as InameInput).name] === 0)
      ? true
      : false;

  const helperText =
    hasBlankInput &&
    (productInput[(input as InameInput).name] === "" ||
      productInput[(input as InameInput).name] === 0)
      ? "필수 항목입니다!"
      : null;

  const productFinalInput = useRecoilValue(finalAddProductValue);

  const blockSubmitIfBlackInputExists = () => {
    const blankInputs = Object.entries(productFinalInput).filter(
      (v) => v[1] === "" || v[1] === 0
    );

    blankInputs.length ? setBlank(true) : setBlank(false);
  };

  const mutation = useMutation(async (productFinalInput: IAddProduct) => {
    myPageAPI.seller.addNewProduct(productFinalInput);
  });

  const handleSubmitClick = () => {
    blockSubmitIfBlackInputExists();

    if (hasBlankInput) return;
    mutation.mutate(productFinalInput);
    history.push("/products");
  };

  return { handleProductInputChange, handleSubmitClick, isError, helperText };
};

export default AddProductService;
