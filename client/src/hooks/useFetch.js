import React, {useEffect, useState} from 'react'
import axios from 'axios'
const useFetch = (url) => {
  const [loading,setLoading] = useState(false)
  const [data, setData] = useState([])
  const [error,setError] = useState(false)

  useEffect(() => {
    const fetchdata = async () => {
      setLoading(true)
      try {
       const res =  await axios.get(url)
        setData(res.data)
      } catch (err) {
        setError(err)
      }
      setLoading(false)
    }
      fetchdata();
  }, [url]);

  const reFetch = async () => {
    setLoading(true)
    try {
     const res =  await axios.get(url)
      setData(res.data)
    } catch (err) {
      setError(err)
    }
    setLoading(false)
  }

  return {error,data,loading,reFetch}
}

export default useFetch