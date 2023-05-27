import { useEffect, useState } from 'react'

export const usePaginator = (data) => {

  const [page, setpage] = useState(1)
  const [cant, setCant] = useState(5)

  const paginate = (array, pageSize) => {
    const paginatedArray = [];
    const totalPages = Math.ceil(array.length / pageSize);

    for (let i = 0; i < totalPages; i++) {
      const startIndex = i * pageSize;
      const page = array.slice(startIndex, startIndex + pageSize);
      paginatedArray.push(page);
    }

    return paginatedArray;
  }

  const myArray = data;
  const pageSize = cant;
  const paginatedArray = paginate(myArray, pageSize)

  const handleIncrement = (event) => {
    event.preventDefault()
    if (page >= paginatedArray.length) {
      return
    }
    setpage((count) => count + 1)
  }

  const handleDecrement = (event) => {
    event.preventDefault()
    if (page <= 1) {
      return
    }
    setpage((count) => count - 1)
  }

  useEffect(() => {
    setpage(1)
  }, [cant])

  useEffect(() => {
    setpage(1)
    setCant(5)
  }, [data])

  return (
    {
      handleDecrement,
      handleIncrement,
      setCant,
      page,
      paginatedArray
    }
  )
}
