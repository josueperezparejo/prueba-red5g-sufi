import iconDownload from '../../assets/iconDownload.svg'

export const Desembolsos = () => {
    return (
        <>
            <div className='d-flex justify-content-between mt-3 flex-wrap'>
                <h1 className="mx-2"
                    style={{
                        fontFamily: 'Open Sans',
                        fontWeight: '700',
                        fontSize: '20px'
                    }}>Mis desembolsos</h1>

                <button className='rounded-pill text-white px-3 py-2'
                    style={{
                        backgroundColor: '#DD3542',
                        fontFamily: 'Open Sans',
                        fontSize: '14px',
                        fontWeight: '700',
                        border: 'none'
                    }}>

                    <span className='mx-1'>
                        <img width={'24px'} src={iconDownload} alt="icon download" />
                    </span> Descargar
                </button>
            </div>
        </>
    )
}
