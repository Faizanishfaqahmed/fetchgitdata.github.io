import React,{useState,useEffect} from 'react'


const Card = ({login,url}) => {
    const [data,setData]=useState([]);
    console.log(data);
    useEffect(() => {
        gitdata();
    },[]);
    const gitdata =async()=>{
        const response = await fetch('https://api.github.com/users/Faizan');
        // console.log(response);
        const jsonData =await response.json();
        // console.log(jsonData);
        setData(jsonData);
    }
   
  return (
    
    <>
        <body className='h-screen bg-gray-400 flex flex-col justify-center items-center'>

{/*Card*/}
<div className='flex flex-col h-[700px] w-[500px] bg-white rounded-xl shadow-md gray-red-500/4'>
 
    {[data].map((values)=>{
        return(
            <>
             <div className='img-container'>
  <img className='rounded-t-xl min-h-[200px]' src='/images/Rectangle 1.png' />
 </div>
 <div className=''>
  <img className='max-w-[200px] rounded-full z-30 -my-40 ml-[30%]' src='/images/mypic.jpg'/>
 </div>
 <div className='content'>
<h1 className='font-bold mt-[20%] text-center font-arial text-xl text-gray-800' >FAIZAN ISHFAQ AHMED</h1>
<h2 className='text-center font-semibold text-gray-500'>Frontend Developer</h2>
<p className='text-center text-gray-500'>"I love design Forntend Web Applications because<br/> it lets me do fun like this stuff"</p>
<h3 className='text-center text-gray-600 font-bold mt-5'>Following are my github details</h3>
<h4 className='text-center'>Id : {data.id}</h4>
<h4 className='text-center'>Login Id : {data.login}</h4>
<h4 className='  ml-[30%] mt-4'>Avatar Image : <img  className='rounded-full max-w-[30px] ml-[35%] -mt-[20px]' src={data.avatar_url} alt='avatar'/></h4>
  
 </div>

            </>
        )
    })}
   
</div>
    </body>
    </>
  )
}

export default Card