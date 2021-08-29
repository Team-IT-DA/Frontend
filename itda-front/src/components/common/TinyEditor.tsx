import { Editor } from "@tinymce/tinymce-react";
import { useRecoilState } from "recoil";
import { editorValue } from "stores/AddProductAtoms";

export default function TinyEditor() {
  const [value, setValue] = useRecoilState<any>(editorValue);

  return (
    <Editor
      value={value.detailDescription}
      apiKey="0jy0itwdqb4xmmeblh148y5w6bd3j22tjmc7udno3ptkinxk"
      onEditorChange={(newValue, editor) => {
        setValue(newValue);
      }}
      init={{
        height: 500,
        plugins: [
          "advlist autolink lists link image charmap print preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table paste code help wordcount",
        ],
      }}
    />
  );
}
