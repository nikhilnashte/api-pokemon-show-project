import React, { Component, useEffect, useState } from 'react'

const PokemonCards=(data)=>{
    const [details, setDetails] = useState([]);

    const fetchDataSecond = async (link,name) => {
        const response = await fetch(link ,{name})
          .then((res) => res.json())
          .then((data) => {
            // console.log("2nd link data ///////////////////////",data);
            setDetails(data);
          })
          .catch((err) => {
            console.log(err.message);
          });
      };

      useEffect(() => {
        fetchDataSecond(data.url,data.name);
      }, [data.url]);

      console.log("🚀 ~ Data:", details);
    return ( 
       <>
            {/* {details.map(function (info,i) {
                console.log("🚀 ~ Data:", details);
                // return (  */}
                    {/* <div class="lg:w-1/4 md:w-1/2 p-4 w-full hover:border">
                    <a class="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" class="object-center w-full h-32 block" src={details?.sprites?.front_shiny}/>
                  </a>
                  <div class="mt-4">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                    <h2 class="text-gray-900 title-font text-lg font-medium">{data.name}</h2>
                    <p class="mt-1">id - {details.id}</p>
                  </div>
                  </div> */}
                
   
    
      <div class="p-2 lg:w-[24%] group hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ease-in-out w-full m-1 transform transition duration-500 hover:scale-110 group-hover:animate-shine">
        <div class="h-full flex items-center border-gray-200 p-4 rounded-lg border">
          <img alt="team" class="w-16 h-16 group-hover:w-32 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={details?.sprites?.front_shiny}/>
          <div class="flex-grow">
            <h2 class="text-gray-900  title-font font-medium">{data.name}</h2>
            <p class="text-gray-500 group-hover:text-white">id - {details.id}</p>
            <p class="text-gray-500 group-hover:text-white">height - {details.height}</p>
          </div>
        </div>
      </div>
      


                  
        {/* //     );
        //   })} */}

</>
    
    )
  }


export default PokemonCards