
import React from 'react'

async function serviceof(){
 let data = await fetch(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=service`, { cache: 'no-store' })
 if(!data.ok){
  throw new Error("failed to fetch data")
 }
 return data.json();
}

 async function service() {
  let services = await serviceof()
  console.log(service)

  return (
  
    <div className='bg-gray-500 grid grid-cols-4 gap-2 p-3'>
      {
        services.items.map((service:any)=>(
          <div className=' bg-slate-300 p-5'>
            <div>
              {
                services.includes.Asset.map((elem:any)=>(
                   <div>
                    {
                      service.fields.image.sys.id === elem.sys.id?
                      <img src={elem.fields.file.url} alt="" className='w-full h-[300px] object-cover' />:<div></div>
                    }
                     
                   </div>
                ))
              }
           
            </div>
      
          <h1>{service.fields.title} </h1>
          <p>{service.fields.desc}</p>
          <h4 className='font-semibold'>Rs: {service.fields.amount}</h4>
          <h5 className='font-semibold'>{service.fields.balance} </h5>
    
      </div>
        ))
      }
  
  </div>
  
  )
}

export default service

{/* <div>
{item.fields.picture.sys.id == a.sys.id? 
<Image src={"https:" + a.fields.file.url} alt="" width="100" height="100"/>: <div></div>}
</div> */}