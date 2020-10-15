import React, { useState } from 'react';
import DataTable from './DataTable';

export default function Repositorios() {
    const url = 'https://api.github.com/users';
    const client_id = 'Iv1.5ee9071e82a90ab4';
    const client_secret = '52d18d59c5e0985c751ffe88531ca0bd65f7f151';
    const [user, setUser] = useState('');
    const [repos, setRepos] = useState([]);

    const handleInputChange = (event) => {
        setUser(event.target.value);
    };

    const getRepositories = async (user) => {
        let reposResponse = await fetch(`${url}/${user}/repos?client_id=${client_id}&client_secret=${client_secret}`);
        let repos = await reposResponse.json();
        return repos;
    };

    const getRepos = (event) => {
        event.preventDefault();
        getRepositories(user).then(res => {
            setRepos(res);
        });
    };

    const data = repos.map(repo => (
        {
            'nombre': repo.name,
            'descripcion': repo.description,
            'lenguaje': repo.language,
            'rama': repo.default_branch,
            'url': repo.git_url
        }
    ));

    return (
        <div className='flex flex-col items-center justify-center mx-4 my-10'>
            <form id="form-get-repos"
                onSubmit={getRepos}
                className='form sm:flex-row py-4' >
                <input id="get-user"
                    name="usuario-github"
                    type="text"
                    value={user}
                    onChange={handleInputChange}
                    className="input shadow appearance-none border text-gray-700 leading-tight mb-2 md:mb-0 mx-2"
                    placeholder="Usuario Github" required />
                <input id="consultar"
                    type="submit" value="Consultar"
                    className="input input-submit submit-blue w-32" />
            </form>
            <DataTable data={data} />
        </div>
    );
}