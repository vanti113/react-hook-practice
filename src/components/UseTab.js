import React, { useState } from "react";

const content = [
  { tab: "Section 1", contents: "I'm the content of Section 1" },
  { tab: "Section 2", contents: "I'm the content of Section 2" },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    setCurrentIndex,
  };
};

const App = () => {
  const { currentItem, setCurrentIndex } = useTabs(0, content); // 컴포넌트에서 외부에 정의된 스테이트 훅에 데이터를 보내고 다시 리턴받는 형태.
  let count = 0;
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => setCurrentIndex(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.contents}</div>
      <h4>{count + 1}</h4>
    </div>
  );
};

export default App;
