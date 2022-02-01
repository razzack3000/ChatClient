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
      //e.preventDefault();
    }

    submitTodo(e){
      //console.log('submitting')
      this.setState({
        listItem: [...this.state.listItem, this.state.text]
      })
      e.preventDefault();
    }

    deleteListItem() {
      const newArray = this.state.listItem.filter(function(item) {
        return item !== index
      })
      this.setState({listItem: newArray})
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
        {this.state.listItem.map((element,index) => (
        <li key={`${index}Key`}>
          {element}
          <button onClick={() => {
            const newArray = this.state.listItem.filter(function(item) {
             return item !== element
          })
          this.setState({listItem: newArray}) }}
           >X</button>
        </li>
        )
       )}
      </ul>
    </React.Fragment>
      )
    }
}


export default List