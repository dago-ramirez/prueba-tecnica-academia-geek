import React, { useContext } from 'react';
import { DataContext } from '../App';

export default function Header() {
    const { data } = useContext(DataContext);
    const KEYS = ['nombres',
                  'apellidos',
                  'cedula',
                  'fecha-nacimiento',
                  'email',
                  'usuario-github'];
    const INFO = KEYS.map(item => {
        // Se convierte a mayúscula inicial cada elemento de KEYS
        let key = item.split('-')
                  .map(elem => (elem[0].toUpperCase() + elem.slice(1)))
                  .join(' ');
        return <div key={item} className="flex flex-col sm:flex-row mx-4 md:mx-24 mb-4" >
                    <p className="text-lg text-gray-700 font-bold mr-1" >{key}: </p>
                    <p className="text-lg text-gray-700" >{data[item]}</p>
               </div>
    });
    return (
        <div className="bg-green-400 py-4" >
            {INFO}
        </div>
    )
}