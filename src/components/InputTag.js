import React, { useState } from "react";

const cStyle = {
  position: "relative",
  display: "inline-block",
  width: "300px",
  border: "1px solid lightblue",
  overflow: "auto"
};
const iStyle = {
  display: "inline-block",
  fontSize: "0.9em",
  margin: "5px",
  width: "90%",
  border: "0"
};

function InputTag({ defaultTags, onAddTag, onDeleteTag, placeHolder }) {
  const [tags, setTags] = useState([]);

  onKeyUp = e => {
    console.log(e.wich);
    // codice 188 per la virgola, 13 per invio
    if (e.wich === 18 || e.wich === 13) {
      let input = e.target.value.trim().split(",");
      //esci se non ci sono tag
      if (input.length === 0 || input[0] === "") return;
      onAddTag(input);
      e.target.value = "";
    }
  };

  onDeleteTag = tag => {
    onDeleteTag(tag);
  };

  return (
    <div style={cStyle}>
      <TagList tags={defaultTags} onDeleteTag={onDeleteTag} />
      <input
        style={iStyle}
        onKeyUp={e => onKeyUp(e)}
        type="text"
        placeholder={placeHolder}
      />
    </div>
  );
}

export default InputTag;
