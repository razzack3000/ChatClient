import React from 'react';
import ReactDOM from 'react-dom'
import '../index.css'


class List extends React.Component {
    constructor(props){
      super(props)

      this.state = {
       listItem: [],
       value:'',
       text:''
      }

      this.valueSetter = this.valueSetter.bind(this);
    }


    valueSetter(e){
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    submitTodo(e){
      //console.log('submitting')
      this.setState({
        listItem: [...this.state.listItem, this.state.text]
      })
    }

  render() {
    return (
    <React.Fragment>
      <ul>
        {this.state.listItem.map((index) => (
        <li>
          {index}
        </li>
        )
       )}
      </ul>
        <form onSubmit={this.submitTodo}>
        Add todo item:
        <input value={this.state.text} name='text' onChange={this.valueSetter}/>

        <input type="submit" value="Add" />
        </form>


    </React.Fragment>


      )
    }
}


export default List