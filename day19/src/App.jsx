import { useState, useEffect, useContext } from 'react';

import Parent from './components/Parent';
import { DataContext } from './components/Contentapi';

//useEffect
//conditional rendering
//form input
//useRef
//child to parent data transfer
//prop drilling
//useContext

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { data, setData } = useContext(DataContext);
  console.log(data);
  // useEffect(fn , dependency)

  // useEffect(()=>{
  //     console.log('this effect will run every time because it doesnt have any dependenccy')
  // })

  // useEffect(()=>{
  //     console.log('this will run when we click on the login log out button')
  // },[isLoggedIn])

  // useEffect(()=>{
  //     console.log('this will run when we reload or app or refresh')
  // },[])

  return (
    <>
      {data}
      <Parent />
    </>
  );
}

export default App;
