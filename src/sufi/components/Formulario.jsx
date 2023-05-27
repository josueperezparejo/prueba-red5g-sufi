import React, { useRef } from 'react'
import iconDelete from '../../assets/iconDelete.svg'
import './Formulario.css'

export const Formulario = ({ setFilter, filter }) => {

    const inputRef = useRef(null)

    const handleReset = (event) => {
        event.preventDefault()
        inputRef.current.selected = true
        setFilter('')
    }

    return (
        <>
            <form className='d-flex justify-content-center align-items-center flex-wrap gap-2 mt-4'>
                
                {(filter.length > 0) && <a onClick={handleReset} className='mx-2' href='/'><img src={iconDelete} alt="icon delete" width={'30px'} /></a>}
                
                <div className="form-floating">
                    <select onChange={(event) => setFilter(event.target.value)} defaultValue={"0"} className="form-select" id="floatingSelect">
                        <option ref={inputRef} value="0" disabled>Seleccionar</option>
                        <option value="cedula">Cédula</option>
                        <option value="pasaporte">Pasaporte</option>
                        <option value="tarjeta de identidad">Tarjeta de Identidad</option>
                    </select>
                    <label htmlFor="floatingSelect">Tipo doc.</label>
                </div>

                <div className="form-floating">
                    <input type="number" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword" style={{ color: '#ABB9C7' }}>Número de documento</label>
                </div>

                <div className="form-floating">
                    <input type="number" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword" style={{ color: '#ABB9C7' }}>Número de desembolso</label>
                </div>

                <div className="form-floating">
                    <input type="date" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword" style={{ color: '#ABB9C7' }}>Desde</label>
                </div>

                <div className="form-floating">
                    <input type="date" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword" style={{ color: '#ABB9C7' }}>Hasta</label>
                </div>
            </form>
        </>
    )
}
