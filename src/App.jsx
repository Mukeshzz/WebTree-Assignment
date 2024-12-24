import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );
        console.log(response.data.results);
        setDetails(response.data.results);
      } catch (error) {
        console.log("Error getting details", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="main">
      <div className=" flex gap-20 items-center mx-auto bg-[#e6fae6] h-[300px] w-[600px] rounded-xl border-[2px] border-[#2A9D8F]">
        { details.map((detail) => {
          return(

            <>
          
          <div className=" h-[200px] w-[200px] ml-11">
            <img src={detail.picture.large} alt="" className='h-[200px] w-[200px] object-cover rounded' />
          </div>
          <div className="flex flex-col gap-5 h-[200px] w-[300px] mr-10">
            <div className="flex gap-10">
              <div className="text-3xl text-[#264653]">{detail.name.first}</div>
              <div className="text-3xl text-[#264653]">{detail.name.last}</div>
            </div>
            <div className="text-2xl text-[#264653]">{detail.gender}</div>
            <div className="text-3xl text-[#264653]">{detail.phone}</div>
          </div>
        </>
          )

        })
          
        }
      </div>
    </div>
  );
}

export default App;
