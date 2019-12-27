import React from "react";

// componente <Tag />
const tagStyle = {
  display: "inline-block",
  backgroundColor: "yellow",
  fontSize: "0.9em",
  margin: "5px",
  border: "1px solid lightblue",
  padding: "2px",
  cursor: "pointer"
};
function Tag({ onDeleteTag, value }) {
  var tag = (
    <div class="tag-item">
      <span onClick={e => onDeleteTag(e, value)} style={tagStyle}>
        &#x2716;{" "}
      </span>
      {value}
    </div>
  );
  return <React.Fragment>{tag}</React.Fragment>;
}

export default Tag;
