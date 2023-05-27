import database from '../../db.json'

export const getDataByDocument = (tipo) => {

  const datos = database.usuarios
  const data = datos.filter((user) => user.tipo_documento == tipo)

  return {
    data: data.length ? data : datos
  }
}
