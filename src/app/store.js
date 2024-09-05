import {configureStore} from '@reduxjs/toolkit'
import addTodo  from '../features/todo/todoSlice'

 const store =  configureStore({
    reducer: addTodo
})

export default store
