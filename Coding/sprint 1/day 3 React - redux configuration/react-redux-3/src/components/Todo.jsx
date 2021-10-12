import axios from 'axios'

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodoSuccess, addTodoLoading, addTodoError } from "../redux/actions";

export const Todo = () => {

    const [text, setText] = useState("");

    const { data, isLoading, isError } = useSelector((state) => state.todos);

    const handleAddTodo = async () => {

        dispatch(addTodoLoading());

        try {
            const resp = await axios.post("http://localhost:3001/todos", {
                status: false,
                title: text
            })
            dispatch(addTodoSuccess(resp.data));
        } catch (e) {
            dispatch(addTodoError(e.message));
        }

    }

    const dispatch = useDispatch();

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