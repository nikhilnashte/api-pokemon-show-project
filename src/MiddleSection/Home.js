import React, { Component, useEffect, useState } from "react";
import PokemonCards from "./PokemonCards";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setPosts(data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);



  // useEffect(() => {
  //   fetchDataSecond();
  // }, [posts]);
  //  console.log("state data ",posts[0].name);

  return (
    <section class="text-gray-600 body-font">
    <div class="container py-2 mx-auto">
    <div class="flex flex-wrap -m-2  m-1">
          {posts.map(function (item, i) {

        //  const Data=fetchDataSecond(item.url);
        //  console.log("🚀 ~ Data:", Data);

            return (
              <PokemonCards name={item.name} url={item.url}/>
            //   <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            //   <a class="block relative h-48 rounded overflow-hidden">
            //     <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260"/>
            //   </a>
            //   <div class="mt-4">
            //     <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{item.name}</h3>
            //     <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
            //     <p class="mt-1">$16.00</p>
            //   </div>
            // </div> 
            );
          })}

         
          {/* <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260"/>
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                <p class="mt-1">$16.00</p>
              </div>
            </div> */}
          </div>
          </div>
</section>
  );
};
export default Home;
