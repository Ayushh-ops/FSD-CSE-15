import React from 'react'
import Item from "./Item"
const ItemStore = () => {
    const itemdata=[
    {image:"",title:"ReactJS",price: 567},
    {image:"",title:"NodeJS",price: 371},
    {image:"",title:"ExpressJS",price: 842},
    {image:"",title:"ReactJS",price: 567},
    {image:"",title:"NodeJS",price: 371},
    {image:"",title:"ExpressJS",price: 842},
  ]
  return (
    <div className="home">
      {
        itemdata.map((i,index)=>{
          return <Item key={index} props={i}/>
        })
      }
    </div>
  )
}

export default ItemStore
