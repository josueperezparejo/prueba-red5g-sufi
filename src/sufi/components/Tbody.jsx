import React from 'react'

export const Tbody = ({paginatorTools}) => {

    const {paginatedArray, page} = paginatorTools

    return (
        <>
            {paginatedArray[page - 1]?.map(({ fecha_hora, monto, numero_documento, tipo_documento, desembolso }, index) => (
                <tr key={index}>
                    <td>{fecha_hora}</td>
                    <td>{desembolso}</td>
                    <td>{tipo_documento}</td>
                    <td>{numero_documento}</td>
                    <td>$ {monto}</td>
                </tr>
            ))}
        </>
    )
}
