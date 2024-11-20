import React from "react";
import { data } from './data.tsx';
import DatabaseList from "./components/DatabaseList/databaseList.tsx";

import './App.css';

export default function App(props: { title : string }) {
  return (
      <div className='page'>
        <div className='font-bold header'>{props.title}</div>
        <DatabaseList data={data} />
      </div>
  );
}


