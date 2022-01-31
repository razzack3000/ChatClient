import React from 'react';
import ReactDOM from 'react-dom'
import '../index.css'


class List extends React.Component {
    constructor(props){
      super(props)

      this.state = {
       listItem: ['Stuff'],
      }
    }

  render() {
    return (
    <div>
        <form>
        Add todo item:
        <input>
        </input>
        </form>
      <ul>
        {this.state.listItem.map((index) => {

         <li>
           {index}
         </li>
       })}
      </ul>

    </div>


      )
    }
}


export default List