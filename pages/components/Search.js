import React, { useState } from 'react';
import { SearchIcon } from "@heroicons/react/outline";
import DisplayImages from './DisplayImages';
import UploadForm from './UploadForm';

export default function Search() {
    const [results, setResults] = useState([]);
    const [query, setQuery] = useState('');

    const search = async (e) => {
        // don't search until the length of the search >=3
        const q = e.target.value;
        setQuery(q);
        if (q.length >= 2) {
            const params = new URLSearchParams({ q });
            // TODO: debounce this

            const res = await fetch('/api/search?' + params);

            const result = await res.json();
            console.log(result);
            setResults(result['images']);
        } else {
            setResults([]);
        }
    };
    return (
        <>
            <div className='flex'>
                <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer m-2 bg-gray-500 hover:bg-gray-600">
                    {/* onChange={search} */}
                    <input className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none' type="text" placeholder='Search' onChange={search} />
                    <button >
                        <SearchIcon className="h-12 p-4" />
                    </button>
                </div>
                <UploadForm />
            </div>
            <DisplayImages images={results} query={query} />
        </>
    );
}
