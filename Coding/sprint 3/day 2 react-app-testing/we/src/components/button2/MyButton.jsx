import React from 'react';

export function MyButton({ label, onClick }) {
    return (



        <button data-testid="myBtn" onClick={onClick}>{label}</button>



    )
}
