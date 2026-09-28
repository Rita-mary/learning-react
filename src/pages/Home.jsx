// import React from 'react'
import { useState } from 'react';


const Home = () => {
  const [count, setCount] = useState(0);
  const [isShowing, setIsShowing] = useState(false);
  const text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, enim.Nam alias assumenda natus, esse sunt dolorum nisi aspernatur corporis.Provident tenetur ipsa quo dolores magni, quae perferendis laboreconsequuntur, nihil non fuga praesentium incidunt, porro in obcaecatiaperiam accusamus?"
  const shortText = text.slice(0,25)
  const addNumber = () => {
    setCount(count + 1);
    console.log(count);
  };
  const subNumber = () => {
    setCount(count - 1);
    console.log(count);
  };

  const toggleText =()=>{
    setIsShowing(!isShowing)
  }
  return (
    <div>
      <h1>This is the home page, feel at home.</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum eius
        tenetur reprehenderit!
      </p>
      <div className="flex items-center justify-center gap-5">
        <button
          className="bg-red-500 px-4 py-1 rounded-md cursor-pointer text-white"
          onClick={addNumber}
        >
          +
        </button>
        <h1 className="font-bold text-lg">{count}</h1>
        <button
          className="bg-blue-500 px-4 py-1 rounded-md cursor-pointer text-white"
          onClick={subNumber}
        >
          -
        </button>
      </div>
      <div className='flex gap-1 w-80'>
        <p >
          {isShowing? text: shortText}
        </p>
        <button className='underline text-blue-500' onClick={toggleText}>{isShowing? "See less": "See more"}</button>
      </div>
      <button>Get Started</button>
    </div>
  );
};

export default Home;
