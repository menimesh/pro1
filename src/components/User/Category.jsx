import Layout from "./Layout"
import { useState } from "react"
const Category =()=>{
    const [category, setCategory]= useState([
        {
            title:"Electronics"
        },
        {
            title:"Fashion"
        },       {
            title:"Smartphone"
        },       {
            title:"Furniture"
        },
        {
            title:"Mens"
        },       
        {
            title:"Electronics"
        },
        {
            title:"Mobile"
        },
        {
            title:"tab"
        }


    ])
    return(
  <Layout>
    <div className="md:p-16 p-8">
        <div className="w-10/12 mx-auto grid md:grid-cols-4 md:gap-16 gap-8">
{
    category.map((item,index)=>(
        <div key={index} className="border rounded-lg bg-white shadow-lg flex flex-col p-8 justify-center items-center hover:bg-orange-600 hover:text-white">
            <i class="ri-menu-search-line text-5xl"></i>
            <h1 className="text-2xl font-bold">{item.title}</h1>
        </div>
    ))
}
        </div>
    </div>
  </Layout>
    )
}
export default Category