import React from 'react'
import { usePaginator } from '../hooks/usePaginator'
import { Paginador, Tbody } from './'

export const Tabla = ({ data, loading }) => {

    const { handleDecrement, handleIncrement, setCant, page, paginatedArray } = usePaginator(data)
    
    const paginatorTools = {
        handleDecrement,
        handleIncrement,
        setCant,
        page,
        paginatedArray
    }

    return (
        <>
            <div className='table-responsive'>
                <table className="table table-striped my-4">
                    <thead className='table-primary opacity-75'>
                        <tr>
                            <th scope="col">Fecha y hora</th>
                            <th scope="col">Número de desembolso</th>
                            <th scope="col">Tipo de documento</th>
                            <th scope="col">Número de documento </th>
                            <th scope="col">Monto</th>
                        </tr>
                    </thead>
                    <tbody className='overflow-y-auto'>
                        <Tbody paginatorTools={paginatorTools} />
                    </tbody>
                </table>
            </div>

            {!loading && <Paginador paginatorTools={paginatorTools}/>}
        </>
    )
}
