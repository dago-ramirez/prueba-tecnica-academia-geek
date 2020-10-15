import React, { useContext } from 'react';
import { useCookies } from 'react-cookie';
import { DataContext } from '../App';

export default function Registro() {
    const { setData } = useContext(DataContext);
    const [cookies, setCookie] = useCookies(['nombres',
        'apellidos',
        'cedula',
        'fecha-nacimiento',
        'email',
        'usuario-github']);

    const handleInputChange = (event) => {
        const target = event.target;
        setCookie(
            target.name,
            target.value,
            { path: '/' }
        );
    };

    const sendData = (event) => {
        event.preventDefault();
        setData(cookies);
        document.getElementById('my-form').reset();
    }

    return (
        <div className='flex flex-col items-center justify-center mx-4' >
            <h1 className="h1" >Registro de Información de Candidato</h1>
            <form id="my-form"
                onSubmit={sendData}
                className='form w-full sm:w-4/6 md:w-3/6' >
                <div className="mb-4 mx-6 lg:mx-24 mt-10">
                    <label className="label" htmlFor="nombres">
                        Nombres
                    </label>
                    <input id="nombres" name="nombres" type="text"
                        onChange={handleInputChange}
                        className="input input-type" placeholder="Nombres" required />
                </div>
                <div className="mb-4 mx-6 lg:mx-24">
                    <label className="label" htmlFor="apellidos">
                        Apellidos
                    </label>
                    <input id="apellidos" name="apellidos" type="text"
                        onChange={handleInputChange}
                        className="input input-type" placeholder="Apellidos" required />
                </div>
                <div className="mb-4 mx-6 lg:mx-24 w-56">
                    <label className="label" htmlFor="cedula">
                        Cédula
                    </label>
                    <input id="cedula" name="cedula" type="number"
                        onChange={handleInputChange} min="1"
                        className="input input-type" placeholder="Cédula" required />
                </div>
                <div className="mb-4 mx-6 lg:mx-24 w-56">
                    <label className="label" htmlFor="fecha-nacimiento">
                        Fecha de Nacimiento
                    </label>
                    <input id="fecha-nacimiento" name="fecha-nacimiento" type="date"
                        onChange={handleInputChange}
                        className="input input-type" placeholder="Fecha de Nacimiento" required />
                </div>
                <div className="mb-4 mx-6 lg:mx-24">
                    <label className="label" htmlFor="email">
                        E-mail
                    </label>
                    <input id="email" name="email" type="email"
                        onChange={handleInputChange}
                        className="input input-type" placeholder="E-mail" required />
                </div>
                <div className="mb-4 mx-6 lg:mx-24">
                    <label className="label" htmlFor="usuario-github">
                        Usuario GitHub
                    </label>
                    <input id="usuario-github" name="usuario-github" type="text"
                        onChange={handleInputChange}
                        className="input input-type" placeholder="Usuario Github" required />
                </div>
                <div className="flex flex-row items-center justify-evenly mx-2 sm:mx-24 mb-10">
                    <input id="enviar" type="submit" value="Enviar"
                        className="input input-submit submit-blue" />
                    <input id="cancelar" type="reset" value="Cancelar"
                        className="input input-submit submit-red" />
                </div>
            </form>
        </div>
    )
}