import { useState } from 'react'
import { Heading } from '@chakra-ui/react'


const index = () => {
    
    const [UserInput, setUserInput] = useState('')
    const [todolist, setTodolist] = useState([])

    const handleChange = (e) => {
        e.preventDefault()
        
        setUserInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        
        setTodolist([
            UserInput,
            ...todolist
        ])

        setUserInput('')
    }

    const handleDelete = todo =>{
        const updatedArr = todolist.filter(todoitem => todolist.indexOf(todoitem) != todolist.indexOf(todo))

        setTodolist(updatedArr)
    }





    return (
        <div>
            <h3>Todo Application</h3>
            <font>
            <input type="text" value={UserInput} placeholder='Enter Todo Item' onChange={handleChange}/><button onClick={handleSubmit}>Submit</button>
            <h4>
                Enter a Todo Item
            </h4>
            </font>
            <ul>
                {
                todolist.length >=1 ? todolist.map((todo, idx) => {
                    return<li key={idx}>{todo}<button onClick={(e)=>{
                        e.preventDefault()
                        handleDelete(todo)

                    }}>remove</button></li>
                })
                : 'Made by Rayyan'
            }
            </ul>
        </div>
    )
}
export default index