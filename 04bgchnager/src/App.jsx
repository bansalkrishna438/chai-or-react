import { useState } from "react";
function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2">
          <div
            className="flex flex-wrap
        justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg"
          >
            <button 
              onClick = {()=>setColor("Red")}
              className="outline-none px-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button 
              onClick = {()=>setColor("green")}
              className="outline-none px-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              green
            </button>
            <button 
              onClick = {()=>setColor("yellow")}
              className="outline-none px-4 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "yellow" }}
            >
              yellow
            </button>
            <button 
              onClick = {()=>setColor("blue")}
              className="outline-none px-4 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              blue
            </button>
            <button 
              onClick = {()=>setColor("pink")}
              className="outline-none px-4 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "pink" }}
            >
              pink
            </button>
            <button 
              onClick = {()=>setColor("orange")}
              className="outline-none px-4 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "orange" }}
            >
              orange
            </button>
            <button 
              onClick = {()=>setColor("black")}
              className="outline-none px-4 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "black" }}
            >
              black
            </button>
            <button 
              onClick = {()=>setColor("olive")}
              className="outline-none px-4 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "olive" }}
            >
              olive
            </button>
            <button 
              onClick = {()=>setColor("skyblue")}
              className="outline-none px-4 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "skyblue" }}
            >
              skyblue
            </button>
            <button 
              onClick = {()=>setColor("lightgreen")}
              className="outline-none px-4 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "lightgreen" }}
            >
              light green
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
