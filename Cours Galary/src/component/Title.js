import React from 'react'
import {filterData} from "../data"

export default function Title({catagareyhandlar}) {
    // let {id, title}=filterData
   
    return (
    <div className='flex flex-row gap-4   ' >
    {
        filterData.map(tit=> {
            return <button className='hover:text-yellow-50' key={tit.id} onClick={catagareyhandlar} >{tit.title}</button>
        })
    }
    </div>
  )
}
