import { Fragment, useState } from "react";
import ButtonBox from "./components/Button/ButtonBox";
import Result from "./components/Result/Result";
import Wrapper from "./components/Wrapper/Wrapper";
import * as math from "mathjs";
import Bubbles from "./components/Bubbles/Bubbles";
import Header from "./components/Header/Header";
function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const textAdd = (value) => {
    setText((text) => [...text, value + ""]);
  };
  const calculateResult = () => {
    const input = text.join("");
    try {
      setResult(math.evaluate(input));
    } catch (error) {
      setTimeout(() => {
        setResult("");
      }, 1500);
      setResult("Sytnax Error");
      setText("");
    }
  };
  const resetInput = () => {
    setText("");
    setResult("");
  };
  const clear = () => {
    setText("");
  };
  return (
    <Fragment>
      <Bubbles />
      <Wrapper>
        <Header/>
        <Result text={text} result={result} />
        <ButtonBox
          add={textAdd}
          calculateResult={calculateResult}
          reset={resetInput}
          clear={clear}
        />
      </Wrapper>
    </Fragment>
  );
}

export default App;
