import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")
  //  const randomcoor =["green","red","pink","yellow"]
  let Colors = {
    Red: "red",
    Green: "green",
    Pink: "pink",
    Yellow: "yellow"
  }

  let buttons = [];

  for (const key in Colors) {
    buttons.push(
      <button
        className='outline-none px-4 py-1 rounded-full'
        key={key}
        style={{ backgroundColor: Colors[key], color: "white", margin: "5px" }}
        onClick={() => setColor(Colors[key])}
      >
        {key}
      </button>
    );
  }

  return (
    <>
      <div className='gap-4 flex w-full h-screen  ' style={{ backgroundColor: color }}>

        <div className='fixed flex flex-wrap justify-center bottom-12 px-12 '>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
            {buttons}

            {/*   
    {randomcoor.map((item)=>{
      return ( <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor:item}}  onClick={()=>setColor(item)}>
  {item}
    </button>)
    })} */}



            {/* <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>
  Green
    </button>
    <button className='outline-none px-4 py-1 rounded-full' style={{backgroundColor:"yellow"}} onClick={()=>setColor("yellow")}>
  Yellow
    </button> */}


          </div>
        </div>
      </div>

    </>
  )
}

export default App;

