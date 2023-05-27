import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onLoadingStart, onLoadingEnd } from '../../slices/user/userSlice'
import { Desembolsos, Formulario, Tabla } from '../components'
import { getDataByDocument } from '../helpers/getDataByDocument'
import { Spinner } from '../../ui'

export const HomePage = () => {

  const dispatch = useDispatch()
  const loading = useSelector((state) => state.user.isLoading)

  const [filter, setFilter] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {
    setData([])
    dispatch(onLoadingStart())

    setTimeout(() => {
      const { data } = getDataByDocument(filter)
      setData(data)
      dispatch(onLoadingEnd())
    }, 2000);
  }, [filter])

  return (
    <>
      <Desembolsos />

      <Formulario filter={filter} setFilter={setFilter} />

      {loading && <Spinner />}

      <Tabla data={data} loading={loading} />
    </>
  )
}
