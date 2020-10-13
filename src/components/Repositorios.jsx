import React, { useState } from 'react';
import DataTable from './DataTable';
// import Paginacion from './Paginacion';
// import Table from './Table';

export default function Repositorios() {
    const url = 'https://api.github.com/users';
    const client_id = 'Iv1.5ee9071e82a90ab4';
    const client_secret = '52d18d59c5e0985c751ffe88531ca0bd65f7f151';
    const [user, setUser] = useState('');
    const [repos, setRepos] = useState([]);
    // const totalRepos = repos.length;
    
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

    // const repoInfo = repos.map((repo, i) => {        
    //     return <tr key={repo.name} className={i % 2 === 0 ? 'bg-green-200' : 'bg-green-300'} >
    //         <td className="border px-4 py-2">{repo['name']}</td>
    //         <td className="border px-4 py-2">{repo['description']}</td>
    //         <td className="border px-4 py-2">{repo['language']}</td>
    //         <td className="border px-4 py-2">{repo['default_branch']}</td>
    //         <td className="border px-4 py-2">{repo['git_url']}</td>
    //     </tr>
    // });

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
            <form id="form-get-repos" onSubmit={getRepos} className='mb-10 flex flex-col sm:flex-row shadow-xl border-2 border-gray-700 rounded-lg py-4' >
                <input id="get-user" name="usuario-github" type="text" value={user} onChange={handleInputChange} className="shadow appearance-none border rounded  py-2 px-3 mb-2 md:mb-0 mx-2 text-gray-700 text-lg sm:text-xl leading-tight focus:outline-none focus:shadow-outline" placeholder="Usuario Github" required />
                <input id="consultar" className="w-32 bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-2 px-4 mx-2 rounded focus:outline-none focus:shadow-outline cursor-pointer" type="submit" value="Consultar" />
            </form>
            {/* <Table totalRepos={totalRepos} repoInfo={repoInfo} /> */}
            {/* <Paginacion totalRepos={totalRepos} /> */}
            <DataTable data={data} />
        </div>
    );
}