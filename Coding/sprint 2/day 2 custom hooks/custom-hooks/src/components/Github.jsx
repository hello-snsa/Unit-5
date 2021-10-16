import { useEffect, useState } from "react";

export default function Github() {

    const [data, setData] = useState([]);

    useEffect(() => {

        const str = fetch("https://api.github.com/search/users?q=masai&per_page=3").then(((e) => e.json())).then((x) => {
            console.log(x.total_count);


            setData([...data, str]);
        })
            .catch(console.error);

    }, []);
    return (
        <>
            <div>"List"</div>
            {
                data.map((e) => {

                    // { e }

                    <p>hello</p>

                })

            }



        </>
    )
}