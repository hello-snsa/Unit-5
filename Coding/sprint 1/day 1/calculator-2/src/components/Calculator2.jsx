import { useState } from "react"

export default function Calculator1() {

    const [count, setCount] = useState(0);
    const [valx, setValx] = useState(Number(count));

    const incIt = () => {
        setCount(count + 1)
    }

    const decIt = () => {
        setCount(count - 1)
    }


    const subIt = (e) => {
        // let val = e.target.value;
        setCount(count - valx)


    }
    const addIt = (e) => {

        // let val = e.target.value;
        setCount(Number(count) + Number(valx))
    }
    const mulIt = (e) => {

        // let val = e.target.value;
        setCount(count * valx)
    }
    const divIt = (e) => {

        // let val = e.target.value;
        if (count < valx)
            alert("Error: Division not possible")
        else
            setCount(count / valx)
    }

    return (
        <div>
            <h1>{count}</h1>

            <input type="text" onChange={(e) => setValx(e.target.value)} />

            <button onClick={(e) => (decIt(e))} >Decrement</button>
            <button onClick={(e) => (incIt(e))} >Increment</button>
            <button onClick={(e) => (addIt(e))} >
                Add</button>
            <button onClick={(e) => (subIt(e))} >Substract</button>
            <button onClick={(e) => (mulIt(e))} >Multiply</button>
            <button onClick={(e) => (divIt(e))} >Divide</button>


        </div>



    )
}