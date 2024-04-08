import Child from './Child';
import { useState } from 'react';
function Parent() {
  const [dataFromChild, setDataFromChild] = useState(null);

  const handleData = (data) => {
    setDataFromChild(data);
  };
  return (
    <div>
      <div>Child Component</div>
      <Child sendDatafromChild={handleData} />

      <div>Parent component</div>

      <h1>Data from child : {dataFromChild}</h1>
    </div>
  );
}

export default Parent;
