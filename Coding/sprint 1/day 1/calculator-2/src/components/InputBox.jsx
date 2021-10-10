import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/actions.js";


export const Todo = () => {

    const todos = useSelector((state) => state.todos);
    console.log("Todos", todos);

    const dispatch = useDispatch();

    const handleChange = (e) => {

        const val = e.target.value;
        console.log("val ", val)
        dispatch(addTodo(val))

        return;
    }


    return (

        <div>
            <input type="text" placeholder="Enter Value" />
            <button onClick={
                (e) => (
                    handleChange(e)
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