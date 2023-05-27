import React from 'react'
import iconArrow from '../../assets/iconArrow.svg'
import { usePaginator } from '../hooks/usePaginator'

export const Paginador = ({paginatorTools}) => {

    const { handleDecrement, handleIncrement, setCant, page, paginatedArray } = paginatorTools

    return (
        <>
            <nav className='mt-4 col-8 p-2 d-flex gap-3 justify-content-center align-items-end flex-wrap mb-5 pb-5 mx-auto' style={{ background: '#FFFFFF 0% 0% no-repeat padding-box', boxShadow: '0px 0px 16px #00000029', borderRadius: '12px', height: '150px' }}>
                <div className='mx-2'>
                    <ul className="pagination text-dark">
                        <li className="page-item border-0">
                            <a onClick={(event) => handleDecrement(event)} className="bg-white focus-ring focus-ring-light page-link border-0" href="#">
                                <img style={{ transform: 'rotate(90deg)' }} width={'22px'} src={iconArrow} alt="icon arrow" />
                            </a>
                        </li>
                        <li className="page-item"><a className="pe-none page-link text-dark rounded-3" href="#">{page}</a></li>
                        <li className="page-item border-0 text-decoration-none" style={{ textDecoration: 'none' }}><p className='bg-white user-select-none text-decoration-none text-dark page-link m-0 border-0' disabled style={{ textDecoration: 'none' }}>de {paginatedArray.length} </p></li>
                        <li className="page-item">
                            <a onClick={(event) => handleIncrement(event)} className="bg-white focus-ring focus-ring-light page-link text-dark border-0" href="#">
                                <img style={{ transform: 'rotate(270deg)' }} width={'22px'} src={iconArrow} alt="icon arrow" />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="form-floating flex-fill mx-2 mx-auto w-50">
                    <select onChange={(event) => setCant(Number(event.target.value))} defaultValue={5} className="form-select" id="floatingSelect">
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                    </select>
                    <label htmlFor="floatingSelect">Registros por paginas</label>
                </div>
            </nav>
        </>
    )
}
