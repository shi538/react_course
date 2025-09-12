
import React, { useEffect, useState } from 'react'
import  {useLoaderData} from 'react-router-dom'
function Github() {
    const gitData = useLoaderData()
    // const [gitData, setGitData] = useState([])
    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/shi538`)
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         console.log(data)
    //         return setGitData(data)
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
     Github Followers: {gitData?.followers}
     <img src={gitData?.avatar_url} alt='Git Picture' width={300}/>
    </div>
  )
}

export default Github


export const githubInfoLoader = async () =>{
           const resopnse = await fetch(`https://api.github.com/users/shi538`)
           return resopnse.json();

}