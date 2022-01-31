import React from 'react';
import ReactDOM from 'react-dom'
import '../index.css'
import List from './list.js'

function App(props) {

  return (

    <React.Fragment>
      <h1 className="title"> Todo List </h1>
       <List />
    </React.Fragment>

  )

}

ReactDOM.render(<App/>, document.getElementById('app'));