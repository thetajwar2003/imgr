import React, { useEffect, useState } from 'react';

export default function DisplayImages({ images, query }) {
    const [imgs, setImgs] = useState([]);
    useEffect(async () => {
        const res = await fetch("/api/all");
        const result = await res.json();
        console.log(result);
        setImgs(result['allImages']);
    }, []);
    return (
        <div className="container px-5 py-5 mx-auto">
            <div className="flex flex-wrap -m-4">
                {images && query ?
                    (images.map((i) => (
                        <div className="p-4 lg:w-1/4 md:w-1/2" key={i.entityId}>
                            <div className="h-full flex flex-col items-center text-center">
                                <img alt={i.description} className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-2" src={i.image} />
                                <div className="w-full">
                                    <h2 className="title-font font-normal text-lg ">{i.title}</h2>
                                </div>
                            </div>
                        </div>
                    ))) :
                    (imgs.map((i) => (
                        <div className="p-4 lg:w-1/4 md:w-1/2" key={i.entityId}>
                            <div className="h-full flex flex-col items-center text-center">
                                <img alt={i.description} className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-2" src={i.image} />
                                <div className="w-full">
                                    <h2 className="title-font font-normal text-lg ">{i.title}</h2>
                                </div>
                            </div>
                        </div>
                    )))
                    // null
                }
            </div>
        </div>
    );
}
