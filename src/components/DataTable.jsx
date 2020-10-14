import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import MaterialTable from 'material-table';

const styles = makeStyles({
    tableStyle: {
        backgraounColor: 'bg-green-400'
    }
})

const tableHeader = [
    {
        title: "Nombre",
        field: "nombre"
    },
    {
        title: "Descripción",
        field: "descripcion"
    },
    {
        title: "Lenguaje",
        field: "lenguaje"
    },
    {
        title: "Rama",
        field: "rama"
    },
    {
        title: "URL",
        field: "url"
    }
]

export default function DataTable({ data }) {
    const style = styles;
    return (
        <>
            <MaterialTable
                columns={tableHeader} 
                data={data}
                title='Repositorios'
                color='primary'
                className={style.tableStyle}
            />
        </>
    )
}
