import React, { useContext } from 'react';
import { DataContext } from '../App';

export default function Header() {
    const { cookies, btnSubmit } = useContext(DataContext);
    console.log(cookies, btnSubmit)
    return (
        <div>
            <p>{cookies.nombres}</p>
        </div>
    )
}
