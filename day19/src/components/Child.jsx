import { useState } from 'react';
function Child({ sendDatafromChild }) {
  const [data, setData] = useState(null);

  const handleChange = () => {
    sendDatafromChild(data);
  };
  return (
    <div>
      <input
        onChange={(e) => setData(e.target.value)}
        type="text"
        value={data}
      />
      <button onClick={handleChange}>Send data to parent</button>
    </div>
  );
}

export default Child;
