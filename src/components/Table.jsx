import React from 'react'

export default function Table({ totalRepos, repoInfo }) {
    if( totalRepos >= 5 ) {
        return (
            <table className="table-fixed border-2 border-gray-700">
                    <thead className="border-b-2 border-gray-700 bg-green-700">
                        <tr>
                            <th className="w-1/6 px-4 py-2 text-white">Nombre</th>
                            <th className="w-1/4 px-4 py-2 text-white">Descripción</th>
                            <th className="w-1/6 px-4 py-2 text-white">Lenguajes</th>
                            <th className="w-1/6 px-4 py-2 text-white">Rama</th>
                            <th className="w-1/4 px-4 py-2 text-white">URL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {repoInfo}
                    </tbody>
                </table>
        );
    }
    return <></>
}
