import React, { useContext } from 'react';
import { DataContext } from '../App';

export default function Registro() {
    const { cookies, setBtnSubmit, datos, setDatos } = useContext(DataContext);
    
    const handleInputChange = (event) => {
        const target = event.target;
        setBtnSubmit(false);
        setDatos({
            ...datos,
            [target.name]: target.value
        });
        createCookie(target.name, target.value);
    };

    const sendData = (event) => {
        event.preventDefault();
        console.log(cookies)
        // Se guardan las cookies en forma de objeto
        document.cookie.split(';')
        .map(item => item.split('='))
        .forEach(element => cookies[element[0]] = element[1]);
        setBtnSubmit(true);
        document.getElementById('my-form').reset();
        console.log(cookies)
    }

    const createCookie = (name, value) => {
        const date = new Date();
        // Se configura la fecha de caducidad de las cookies a 7 días
        date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
        const expires =  "; expires="+date.toGMTString();
        // Se guarda la cookie
        document.cookie = name + "=" + value + expires;
    }

    return (
        <div className='flex flex-col items-center justify-center mx-4' >
            <h1 className="text-2xl sm:text-3xl text-center text-gray-700 mt-24 mb-6 font-bold w-full sm:w-4/6 md:w-3/6" >Registro de Información de Candidato</h1>
            <form id="my-form" onSubmit={sendData} className='w-full sm:w-4/6 md:w-3/6 mb-24 flex flex-col shadow-xl border-2 border-gray-700 rounded-lg' >
                <div className="mb-4 mx-6 lg:mx-24 mt-10">
                    <label className="block text-gray-700 text-lg sm:text-xl font-bold mb-2" htmlFor="nombres">
                        Nombres
                    </label>
                    <input id="nombres" name="nombres" type="text" onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 text-lg sm:text-xl leading-tight focus:outline-none focus:shadow-outline" placeholder="Nombres" required />
                </div>
                <div className="mb-4 mx-6 lg:mx-24">
                    <label className="block text-gray-700 text-lg sm:text-xl font-bold mb-2" htmlFor="apellidos">
                        Apellidos
                    </label>
                    <input id="apellidos" name="apellidos" type="text" onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 text-lg sm:text-xl leading-tight focus:outline-none focus:shadow-outline" placeholder="Apellidos" required />                        
                </div>
                <div className="mb-4 mx-6 lg:mx-24 w-56">
                    <label className="block text-gray-700 text-lg sm:text-xl font-bold mb-2" htmlFor="cedula">
                        Cédula
                    </label>
                    <input id="cedula" name="cedula" type="number" onChange={handleInputChange} min="1" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 text-lg sm:text-xl leading-tight focus:outline-none focus:shadow-outline" placeholder="Cédula" required />
                </div>
                <div className="mb-4 mx-6 lg:mx-24 w-56">
                    <label className="block text-gray-700 text-lg sm:text-xl font-bold mb-2" htmlFor="fecha-nacimiento">
                        Fecha de Nacimiento
                    </label>
                    <input id="fecha-nacimiento" name="fecha-nacimiento" type="date" onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 text-lg sm:text-xl leading-tight focus:outline-none focus:shadow-outline" placeholder="Fecha de Nacimiento" required />                        
                </div>
                <div className="mb-4 mx-6 lg:mx-24">
                    <label className="block text-gray-700 text-lg sm:text-xl font-bold mb-2" htmlFor="email">
                        E-mail
                    </label>
                    <input id="email" name="email" type="email" onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 text-lg sm:text-xl leading-tight focus:outline-none focus:shadow-outline" placeholder="E-mail" required />                        
                </div>
                <div className="mb-4 mx-6 lg:mx-24">
                    <label className="block text-gray-700 text-lg sm:text-xl font-bold mb-2" htmlFor="usuario-github">
                        Usuario GitHub
                    </label>
                    <input id="usuario-github" name="usuario-github" type="text" onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 text-lg sm:text-xl leading-tight focus:outline-none focus:shadow-outline" placeholder="Usuario Github" required />
                </div>
                <div className="flex flex-row items-center justify-evenly mx-2 sm:mx-24 mb-10">
                    <input id="enviar" className="bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-2 px-4 mx-2 rounded focus:outline-none focus:shadow-outline cursor-pointer" type="submit" value="Enviar" />
                    <input id="cancelar" className="bg-red-500 hover:bg-red-700 text-white text-lg font-bold py-2 px-4 mx-2 rounded focus:outline-none focus:shadow-outline cursor-pointer" type="reset" value="Cancelar" />
                </div>            
            </form>
        </div>
    )
}
