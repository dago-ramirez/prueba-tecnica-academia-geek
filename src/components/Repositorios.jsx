import React, { useState } from 'react';

export default function Repositorios() {
    const url = 'https://api.github.com/users';
    const client_id = 'Iv1.5ee9071e82a90ab4';
    const client_secret = '52d18d59c5e0985c751ffe88531ca0bd65f7f151';
    const [user, setUser] = useState('');
    // const [info, setInfo] = useState({});
    const [repos, setRepos] = useState([]);

    const handleInputChange = (event) => {
        setUser(event.target.value);
    };

    const getUser = async (user) => {
        let response = await fetch(`${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`);
        let profile = await response.json();

        let reposResponse = await fetch(`${url}/${user}/repos?client_id=${client_id}&client_secret=${client_secret}`);
        let repos = await reposResponse.json();
        return { profile, repos };
    };

    const checkRepo = (event) => {
        event.preventDefault();
        getUser(user).then(res => {
            // setInfo(res.profile);
            setRepos(res.repos);
        });
    };

    const repoInfo = repos.map((repo, i) => {
        
        return <tr key={repo.name} className={i % 2 === 0 ? 'bg-green-200' : 'bg-green-300'} >
            <td className="border px-4 py-2">{repo.name}</td>
            <td className="border px-4 py-2">{repo['description']}</td>
            <td className="border px-4 py-2">{repo['language']}</td>
            <td className="border px-4 py-2">{repo['default_branch']}</td>
            <td className="border px-4 py-2">{repo['git_url']}</td>
        </tr>
    })

    console.log(repoInfo)
    return (
        <div className='flex flex-col items-center justify-center mx-4 my-16'>
            <form id="my-form" onSubmit={checkRepo} className='mb-10 flex flex-col sm:flex-row shadow-xl border-2 border-gray-700 rounded-lg py-4' >
                <input id="usuario-github" name="usuario-github" type="text" value={user} onChange={handleInputChange} className="shadow appearance-none border rounded  py-2 px-3 mb-2 md:mb-0 mx-2 text-gray-700 text-lg sm:text-xl leading-tight focus:outline-none focus:shadow-outline" placeholder="Usuario Github" required />
                <input id="consultar" className="w-32 bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-2 px-4 mx-2 rounded focus:outline-none focus:shadow-outline cursor-pointer" type="submit" value="Consultar" />
            </form>
            <table className="table-fixed border-2 border-gray-700">
                <thead className="border-b-2 border-gray-700 bg-green-700">
                    <tr>
                        <th className="w-auto px-4 py-2 text-white">Nombre</th>
                        <th className="w-auto px-4 py-2 text-white">Descripción</th>
                        <th className="w-auto px-4 py-2 text-white">Lenguajes</th>
                        <th className="w-auto px-4 py-2 text-white">Rama</th>
                        <th className="w-auto px-4 py-2 text-white">URL</th>
                    </tr>
                </thead>
                <tbody>
                    {repoInfo}
                </tbody>
            </table>
        </div>
    );
}
