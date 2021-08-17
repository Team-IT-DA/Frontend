import React from "react";
import MDEditor from "@uiw/react-md-editor";

export default function Editor() {
  const [value, setValue] = React.useState<any>("");

  return (
    <div className="container">
      <MDEditor value={value} onChange={setValue} />
    </div>
  );
}
