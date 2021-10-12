import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/actions.js";


export const Todo = () => {

    const todos = useSelector((state) => state.todos);
    console.log("Todos", todos);

    const dispatch = useDispatch();


    return (

        <div>
            <input type="text" placeholder="Enter Todo" />
            <button onClick={
                () => (
                    dispatch(addTodo("Learn Redux"))
                )

            }>

                Add Todo
            </button>



            {

                todos.map((e, i) => (


                    <p key={i}>
                        {e.title}
                    </p>

                )
                )
            }



        </div >



    )


}