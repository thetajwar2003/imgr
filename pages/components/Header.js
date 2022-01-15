import React from 'react';

export default function Header() {
    return (
        <header>
            <div className='flex items-center justify-center flex-grow py-2 bg-blue-400'>
                <h1 className='font-mono font-bold text-3xl'>Imagr</h1>
            </div>
            {/* TODO: add profile pic thing */}
        </header>
    );
}
