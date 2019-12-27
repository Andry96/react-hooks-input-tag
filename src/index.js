import React from "react";
import ReactDOM from "react-dom";
import InputTag from "./components/InputTag";

import "./styles.css";

function App() {
  // NOTE:  If you are fetching from remote server/api, you can
  // also use the useEffect hook to initialize tags
  const [tags, setTags] = React.useState(["javascript", "web dev"]);

  const onAddTag = tag => {
    setTags([...tags, tag]);
  };

  const onDeleteTag = tag => {
    alert(`deleting ${tag}`);
    let remainingTags = tags.filter(t => {
      return t !== tag;
    });
    setTags([...remainingTags]);
  };

  return (
    <div>
      <InputTag
        onAddTag={onAddTag}
        onDeleteTag={onDeleteTag}
        defaultTags={tags}
        placeholder="enter tags separated by comma"
      />

      <div>You can also press &lt;return&gt;or&lt;enter&gt;key</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
