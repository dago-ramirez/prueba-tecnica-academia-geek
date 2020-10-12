import React, { useContext } from 'react';
import { DataContext } from '../App';

export default function Header() {
    const { cookies } = useContext(DataContext);
    return (
        <div>
            <div className="flex flex-col sm:flex-row mx-4 md:mx-24 mb-4" >
                <p className="text-lg text-gray-700 font-bold mr-1" >Nombres: </p>
                <p className="text-lg text-gray-700" >{cookies.nombres}</p>
            </div>
            <div className="flex flex-col sm:flex-row mx-4 md:mx-24 mb-4" >
                <p className="text-lg text-gray-700 font-bold mr-1" >Apellidos: </p>
                <p className="text-lg text-gray-700" >{cookies.apellidos}</p>
            </div>
            <div className="flex flex-col sm:flex-row mx-4 md:mx-24 mb-4" >
                <p className="text-lg text-gray-700 font-bold mr-1" >Cédula: </p>
                <p className="text-lg text-gray-700" >{cookies.cedula}</p>
            </div>
            <div className="flex flex-col sm:flex-row mx-4 md:mx-24 mb-4" >
                <p className="text-lg text-gray-700 font-bold mr-1" >Fecha de Nacimiento: </p>
                <p className="text-lg text-gray-700" >{cookies['fecha-nacimiento']}</p>
            </div>
            <div className="flex flex-col sm:flex-row mx-4 md:mx-24 mb-4" >
                <p className="text-lg text-gray-700 font-bold mr-1">E-mail: </p>
                <p className="text-lg text-gray-700 overflow-x-hidden" >{cookies.email}</p>
            </div>
            <div className="flex flex-col sm:flex-row mx-4 md:mx-24 mb-4" >
                <p className="text-lg text-gray-700 font-bold mr-1">Usuario Github: </p>
                <p className="text-lg text-gray-700" >{cookies['usuario-github']}</p>
            </div>
        </div>
    )
}
