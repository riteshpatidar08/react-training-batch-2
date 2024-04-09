import React from 'react';
import { useContext } from 'react';
import { DataContext } from '../context/Context';

function FourthChild() {
  const { data, setData } = useContext(DataContext);
  return <div>{data}</div>;
}

export default FourthChild;
