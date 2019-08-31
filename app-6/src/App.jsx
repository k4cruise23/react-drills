import React, {Component} from 'react'
import './App.css'
import Todo from './Todo'

export default class App extends Component {
    constructor(){
        super()

        this.state ={
            list: [],
            input: ''
        }
        this.handleAddTask = this.handleAddTask.bind(this)
    }

    handleAddTask(){
        this.setState({
            list: [...this.state.list, this.state.input],
            input: ''
        })
    }

    handleInputChange(value){
        this.setState({input: value})
    }

    render(){
        const displayList = this.state.list.map((el, i) => {
            return <Todo key={i} task={el}/>
        })
        return(
            <div className='App'>
                <h1>My todo list:</h1>
                <input onChange={e => this.handleInputChange(e.target.value)} value={this.state.input} placeholder='Enter new task' type="text"/>
                <button onClick={this.handleAddTask}>Add</button>
                {displayList}
            </div>
        )
    }
}