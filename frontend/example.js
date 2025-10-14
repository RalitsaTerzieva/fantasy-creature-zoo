import React, {useState, useEffect} from "react";

export default function Example( ) {
    const [name, setName] = useState('');
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/example?name=${name}`)
        .then(res => res.json())
        .then(data => setItems(data))
    }, [name])

    return (
        <>
            <div>Hello</div>
            {/* <select onChange={e => setName(e.target.value)}>
                <option>Milk</option>
                <option>Coffee</option>
            </select> */}
            <select onChange={e => setName(e.target.value)}>
                <option>All</option>
                <option>Milk</option>
                <option>
                    Coffee
                </option>
            </select>
            <ul>
                {items.map(i => <li key={i.id}>{i.name}</li>)}
            </ul>
        </>
    )
}