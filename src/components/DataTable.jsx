import React from 'react';
import MaterialTable from 'material-table';

const tableHeader = [
    {
        tittle: "Nombre",
        field: "nombre"
    },
    {
        tittle: "Descripción",
        field: "descripcion"
    },
    {
        tittle: "Lenguaje",
        field: "lenguaje"
    },
    {
        tittle: "Rama",
        field: "rama"
    },
    {
        tittle: "URL",
        field: "url"
    }
]

export default function DataTable({ data }) {
    return (
        <>
            <MaterialTable
                columns={tableHeader} 
                data={data}
                title='Repositorios'
            />
        </>
    )
}
