import React, { useState } from 'react';

export default function Search() {
    const [results, setResults] = useState([]);

    const search = async (e) => {
        const q = e.target.value;
        // don't search until the lenfth of the search >=3
        if (q.length >= 3) {
            const params = new URLSearchParams({ q });
            // TODO: debounce this

            const res = await fetch('/api/search?' + params);

            const result = await res.json();
            // console.log(result);
            setResults(result['images']);
        }
    };
    return (
        <div>
            <input onChange={search} type="text" />
            <ul>
                {results.map((i) => (
                    <li key={i.entityId}>
                        <img src={i.image} />
                        <p>{i.title} {i.description} </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
