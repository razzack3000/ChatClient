import React from 'react';
import ReactDOM from 'react-dom'
import '../index.css'


class List extends React.Component {
    constructor(props){
      super(props)

      this.state = {
       listItem: [],
       text:''
      }

      this.valueSetter = this.valueSetter.bind(this);
      this.submitTodo = this.submitTodo.bind(this);
    }


    valueSetter(e){
      this.setState({
        [e.target.name]: e.target.value
      })
      event.preventDefault();
    }

    submitTodo(e){
      //console.log('submitting')
      this.setState({
        listItem: [...this.state.listItem, this.state.text]
      })
      event.preventDefault();
    }

  render() {
    return (
    <React.Fragment>

        <form onSubmit={this.submitTodo}>
        <label>
        Add todo item:
        <input value={this.state.text} name='text' onChange={this.valueSetter}/>
        </label>

        <label>
        <input type="submit" value="Add" />
        </label>

        </form>

        <ul>
        {this.state.listItem.map((index) => (
        <li>
          {index}
        </li>
        )
       )}
      </ul>
    </React.Fragment>
      )
    }
}


export default List