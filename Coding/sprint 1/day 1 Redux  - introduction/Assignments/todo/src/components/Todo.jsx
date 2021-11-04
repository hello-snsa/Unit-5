// import React, { useState } from 'react'
// import React, { useEffect, useState } from 'react'  
import React from 'react'
import { v4 as uuid } from 'uuid';
import BasicModal from './Modal';

export default function Todo() {

    const [text, setText] = React.useState("");
    const [todos, setTodos] = React.useState([]);
    const [change, setChange] = React.useState("");



    const handleChange = (e) => {
        setText(e.target.value);
    }

    const hadleClick = () => {

        const payload = {
            id: uuid(),
            title: text,
            status: false,
            inp: false
        }
        setTodos([...todos, payload]);

        setText("")

    }

    const handleToggle = (e) => {
        e.status = !e.status;
        setTodos([...todos]);
        // return

    }
    const handleEdit = (e) => {

        // setIsModal(!isModal)
        e.inp = !e.inp;
        setChange(e.title);


        // e.title = change;

        setTodos([...todos]);
    }


    const handleDelete = (e) => {

        let temp = todos.filter(


            (el) => (el !== e))

        setTodos([...temp])

    }






    return (
        <div>
            <h1>Enter your Task</h1>


            <input type="text" placeholder="add todo " onChange={(e) => handleChange(e)} value={text}
            />

            <button onClick={hadleClick}>Add Task</button>

            {
                todos.map((e) => (
                    <div key={e.id}>

                        {/* <p>Id: {e.id}</p> */}
                        <p>Title: {e.title}</p>
                        <p>Status: {e.status ? "True" : "False"}</p>

                        <input type="text" value={change} className="inpV"
                            style={

                                { display: e.inp ? "block" : "none" }

                            }
                            onChange={(e) => setChange(e.target.value)

                            } />

                        <button style={

                            { display: e.inp ? "block" : "none" }

                        }

                            onClick={() => {

                                e.title = change
                                setTodos([...todos])
                                e.inp = false;

                            }}>Add</button>

                        <button onClick={() => handleToggle(e)}>Toggle
                        </button>

                        <button onClick={() => handleEdit(e)} >Edit
                        </button>

                        <button onClick={() => handleDelete(e)}>Delete
                        </button>

                        <BasicModal title={e.title} setTodos={setTodos} todos={todos} id={e.id} />
                    </div >
                )
                )
            }



        </div >
    )
}
