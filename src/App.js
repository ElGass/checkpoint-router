import './App.css';
import Nav from './Component/Navbar/NavBar';
import MovieList from './Component/Movielist/MovieList';
import React,{useState} from 'react'
import {Route, Switch } from "react-router-dom"
import card from './Component/Card/Card';
function App() {
  const [search,setSearch] =  useState("");
  const handlesearch=(val)=>{
    setSearch(val);
    }
  return (
    <div >
      <Switch >
<Route path="description" component={card}     />
<Nav handlesearch={handlesearch}/>
      <MovieList search={search}/>
    
      </Switch>
    </div>
  );
}

export default App;
