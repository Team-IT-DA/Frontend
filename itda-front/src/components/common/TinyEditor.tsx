import { Editor } from "@tinymce/tinymce-react";
import { useRecoilState } from "recoil";
import { editorValue } from "stores/AddProductAtoms";
import { addPhoto } from "util/API/awsStorageAPI";

export default function TinyEditor() {
  const [value, setValue] = useRecoilState<any>(editorValue);

  return (
    <>
      <input
        id="my-file"
        type="file"
        name="my-file"
        style={{ display: "none" }}
      />
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
          toolbar:
            "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | image",
          automatic_uploads: true,
          file_browser_callback_types: "image",
          image_advtab: true,
          file_picker_callback: function (callback, value, meta) {
            if (meta.filetype === "image") {
              let input = document.getElementById(
                "my-file"
              ) as HTMLInputElement;
              if (!input) return;
              input.click();
              input.onchange = function () {
                let file = (input as any)?.files[0];
                let reader = new FileReader();

                reader.onload = function (e: ProgressEvent<FileReader>) {
                  const { isSuccess, fileName } = addPhoto(
                    (input as any)?.files
                  );
                  if (isSuccess) {
                    callback(`${process.env.REACT_APP_S3_URL}/${fileName}`, {
                      alt: file.name,
                    });
                  }
                };
                reader.readAsDataURL(file);
              };
            }
          },
        }}
      />
    </>
  );
}
