    





import React, {useEffect,useState} from 'react'
import axios from "axios"

function App() {
  const [data,setData]=useState();
  const[date,setDate]=useState("");

  useEffect(()=>{
axios.get('https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json')
.then(res=>setData(res.data[date]))
.catch(err=>console.log(err))
  },
  [data,date])
   return (
    <div>

      <div className='container'>
        <div className='row'>
          <div className='col-md-8 mx-auto mt-4'>
            <h2 className='text-center text-white display-3' >
              Covid-19 Statistika
            </h2>
            <input type='text' placeholder='GG/AA/YY' className='form-control' onChange={(e)=>setDate(e.target.value)}>
            </input>
            <table class="table mt-1">
  <thead>
    <tr >
      <th scope="col">#</th>
      <th scope="col">Test sayi</th>
      <th scope="col">Xeste sayi</th>
      <th scope="col">Olum Sayi</th>
    </tr>
  </thead>
  <tbody >
    <tr className='bg-dark' >
      <th scope="row" className={data===undefined ? "bg-danger":"bg-success"}>1</th>
      <td className={data===undefined ? "bg-danger":"bg-success"}>{data===undefined ? "Gozleyir" : data.totalTests}</td>
      <td className={data===undefined ? "bg-danger":"bg-success"}>{data===undefined ? "Gozleyir" : data.totalPatients}</td>
      <td className={data===undefined ? "bg-danger":"bg-success"}>{data===undefined ? "Gozleyir" : data.deaths}</td>
    </tr>
   
  </tbody>
</table>

          </div>

        </div>

      </div>
    </div>
  )
}

export default  App