import { useEffect, useState } from "react";

export default function Github() {

    const [data, setData] = useState([]);

    useEffect(() => {

        fetch("https://api.github.com/search/users?q=masai&per_page=3")
            .then((e) => e.json())

            .then((x) => {

                console.log(x.items);

                for (let i = 0; i < x.items.length; i++) {

                    setData([...data, x.items[i]]);
                    console.log(x.items[i])

                }
                console.log(data)
                // console.log(x.items[0].login)

            })
            .catch(console.error);

    }, []);
    return (
        <>
            <div>"List"</div>
            {
                data.map((e, i) => (

                    // { e }
                    <div key={i}>
                        <p>hello</p>
                        {/* <p>{data.[e].login}</p> */}
                    </div>
                ))

            }
            <div>"List2"</div>



        </>
    )
}