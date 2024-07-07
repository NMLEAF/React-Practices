import React from "react";
import TextExpander from "./TextExpander";

const testStyle = {
  padding: "30px",
  height: "100vh",
};

const TestTextExpander = () => {
  return (
    <div style={testStyle}>
      <h2 style={{ marginBottom: "30px" }}>Text expander test</h2>
      <TextExpander
        className={"expander-container"}
        fontSize="20px"
        showTextColor="#333"
      >
        Note that in order to manipulate elements in the DOM using JavaScript,
        the JavaScript code must be run after the relevant element has been
        created in the document. This can be achieved by putting the JavaScript
        tags after all of your other content. Alternatively, you can also use an
        event listener to listen to eg. window's onload event, adding your code
        to that event listener will delay running your code until after the
        whole content on your page has been loaded.
      </TextExpander>

      <TextExpander
        textLength={10}
        showTextColor="red"
        fontSize="18px"
        expanded={true}
      >
        Note that in order to manipulate elements in the DOM using JavaScript,
        the JavaScript code must be run after the relevant element has been
        created in the document. This can be achieved by putting the JavaScript
        tags after all of your other content. Alternatively, you can also use an
        event listener to listen to eg. window's onload event, adding your code
        to that event listener will delay running your code until after the
        whole content on your page has been loaded.
      </TextExpander>
    </div>
  );
};

export default TestTextExpander;
