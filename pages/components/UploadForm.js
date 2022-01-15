import React from 'react';

export default function UploadForm() {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const data = Object.fromEntries(form.entries());

        console.log(data);

        const res = await fetch('/api/imgs', {
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST'
        });

        const result = await res.json();
        console.log(result);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="title" type="text" />
            <input name="description" type="text" />
            <input name="image" type="text" />

            <button type="submit">Upload Img</button>
        </form>
    );
}
