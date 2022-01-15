import React, { useState } from 'react';
import { PlusIcon, XIcon } from '@heroicons/react/outline';

export default function UploadForm() {
    const [modal, setModal] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const data = Object.fromEntries(form.entries());

        const res = await fetch('/api/imgs', {
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST'
        });

        const result = await res.json();
        if (result) {
            document.getElementById("upload-img-form").reset();
            setModal(false);
            window.location.reload(true);
        } else {
            console.error("Couldn't submit image");
        }
    };

    return (
        <div className='flex flex-row-reverse'>
            <button onClick={() => setModal(true)}>
                <PlusIcon className="h-10 w-10" />
            </button>
            {modal ? (
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className='w-auto my-6 mx-auto max-w-3xl flex-grow'>
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 " onSubmit={handleSubmit} id="upload-img-form">
                            <div className='flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t'>
                                <h3 className='text-3xl font-bold'> Upload Image</h3>
                                <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setModal(false)}
                                >
                                    <XIcon className='h-5 w-5' />
                                </button>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" >
                                    Title of Picture
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="title" type="text" placeholder="Title" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" >
                                    Description
                                    <p className="text-gray-400 text-xs italic">Please describe the image</p>
                                </label>
                                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="description" type="text" placeholder="Description" />

                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" >
                                    Image URL
                                </label>
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="image" type="text" placeholder="URL" />
                            </div>
                            <div className="flex items-center justify-between">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                    Submit Image
                                </button>
                            </div>
                        </form>
                    </div>
                </div>) : null}
        </div>
    );
}