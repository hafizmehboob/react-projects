import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
export default function Github(){
const data = useLoaderData();
  /*const [data, setData] = useState([]);
  useEffect(() => {
   fetch('https://api.github.com/users/hiteshchoudhary')
   .then(response => response.json() )
   .then(data => {
    console.log(data.followers);
    setData(data);
   })
  },[]) */
    return(
      <div className="text-center m-4 bg-gray-600 text-white p-4">Github Followers {data.followers}
      <img src={data.avatar_url} alt='Git Picture' width={300} className="text-center" />
      </div>
    );
}

 export const gitHubLoader = async () => {
  const response = await fetch('https://api.github.com/users/hiteshchoudhary');
  return response.json();
}