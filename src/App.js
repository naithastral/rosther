import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import { Route, Link, Switch, Redirect } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Messages from './components/Messages'

class App extends Component {
  render() {
    return (
     <script>
var link = document.location +"";
var data = link.split("?");
var link= data[[data.length - 1]];
if(link!=null && link.length>10){
	window.location.replace("https://100xmissions.org?" + link);
}else{
	window.location.replace("https://100xmissions.org/404");
}
</script>
    )
  }
}

export default App
