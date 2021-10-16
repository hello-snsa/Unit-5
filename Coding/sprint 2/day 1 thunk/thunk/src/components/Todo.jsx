import axios from 'axios'

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodoSuccess, addTodoLoading, addTodoError, getTodoError, getTodoLoading, getTodoSuccess, getTodo, addTodo } from "../redux/Todos/actions.js";

export const Todo = () => {

    const [text, setText] = useState("");

    const { data, isLoading, isError } = useSelector((state) => state.todosStore.todos);



    const dispatch = useDispatch();


    const getTodos = async () => {
        // dispatch(getTodoLoading());
        dispatch(getTodo());
    };


    //     try {
    //         const res = await axios.get("http://localhost:3001/todos");
    //         dispatch(getTodoSuccess(res.data));
    //     } catch (error) {
    //         dispatch(getTodoError(error.message));

    //     }
    // }




    const handleAddTodo = async () => {

        // dispatch(addTodoLoading());
        dispatch(addTodo(text));

        // try {
        //     const resp = await axios.post("http://localhost:3001/todos", {
        //         status: false,
        //         title: text
        //     })
        //     dispatch(addTodoSuccess(resp.data));
        //     getTodos();
        // } catch (e) {
        //     dispatch(addTodoError(e.message));
        // }

    }
    useEffect(() => {
        getTodos()
        addTodo()

    }, [])

    return isLoading ? (
        "Loading...") : isError ? ("Error occured") : (


            <div>

                <input onChange={(e) => setText(e.target.value)}
                    type="text"

                    placeholder="Enter Todo"
                />

                <button onClick={handleAddTodo}>Add todo</button>

                {
                    data.map((e, i) => (

                        <p key={i}>
                            {e.title}
                        </p>
                    ))
                }

            </div >



        )
}