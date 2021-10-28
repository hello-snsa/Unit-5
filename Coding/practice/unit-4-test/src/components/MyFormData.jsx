import react, { useState } from 'react';
import axios from 'axios';

export default function MyFormData() {

    const [inp, setInp] = useState('')
    const [formData, setFormData] = react.useState([]);



    const handleOnchange = (e) => {

        const val = (e.target.value);
        // const val = Number(e.target.value);
        setInp(val);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setFormData([...formData, Number(inp)])

        axios.post("http://localhost:3004/datas/", formData)
            .then(() => {

            })
    }


    return (
        <div>
            <h1>Hello</h1>

            <form id="myForm" onSubmit={handleSubmit}>

                <input type="text" placeholder="enter no"
                    name="num" onChange={(e) => handleOnchange(e)} />


                <input type="submit" value="addIt" />



            </form>

        </div>
    )



}