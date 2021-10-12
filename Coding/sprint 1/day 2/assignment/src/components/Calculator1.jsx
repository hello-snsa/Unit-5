import { useState } from "react"

export default function Calculator1() {

    const [count, setCount] = useState(0);

    const addIt = () => {
        setCount(count + 1)
    }
    const subIt = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>{count}</h1>

            <button onClick={subIt} >Decrement</button>
            <button onClick={addIt} >Increment</button>


        </div>



    )
}