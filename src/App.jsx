import { useEffect, useState } from 'react'
import Index1 from './components/Index1'
import Index2 from './components/Index2'
import Services from './components/Services'

function App() {

  let [resData, setResData] = useState(null);

  useEffect(() => {
    return async () => {

      try {
        let res = await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")
        let data = await res.json();
        setResData(data.user);

      } catch (error) {
        console.error(error);
      }
    }
  }, [])

  console.log(resData);


  return (
    <Index1 data={resData} />
  )
}

export default App
