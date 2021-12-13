import React,{useState,useEffect} from 'react'
import './App.css'

const width=8;
const candyCrash=[
    'red',
    'blue',
    "orange",
    'yellow',
    'green',
    'purple'
]


function App() {
    const [currentColorArrangement,setCurrentColorArrangement]=useState([])


const createBoard=()=>{
    const currentColor=[]
    for(let i=0; i<width*width; i++)
    {
      
        const color=candyCrash[Math.floor(Math.random()*candyCrash.length)]
        currentColor.push(color)

    }
    setCurrentColorArrangement(currentColor)
   
 
}
useEffect(()=>{
    createBoard()
},[])
console.log(currentColorArrangement)
    return (
        <div className="app">
<div className="game">
    {currentColorArrangement.map((el,index)=>(
        <img
        
        style={{backgroundColor:el}}
        key={index}
        
        
        />
    ))}
</div>
            
        </div>
    )
}

export default App
