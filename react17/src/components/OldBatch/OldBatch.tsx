import React, {useState, useRef, useEffect} from 'react';
import {List} from 'antd';

export const OldBatch = () => {
  const [additionCount, setAdditionCount] = useState(0);
  const [subtractionCount, setSubtractionCount] = useState(0);
  const countRef = useRef(-1);

  const handleOnClick = () => {
    Promise.resolve().then(() => {
      setAdditionCount(additionCount + 1);
      setSubtractionCount(subtractionCount - 1);
    })
  };

  countRef.current++;

  return (
    <List>
      <button style = {{ width: "50%", height: "30%" }} onClick = {()=> handleOnClick()}>Click Me!</button>
      <List.Item>
        Add Count: {additionCount}
      </List.Item>
      <List.Item>
        Substraction Count: {subtractionCount}
      </List.Item>
      <List.Item>
        Render count: {countRef.current}
      </List.Item>
    </List>
  );
};