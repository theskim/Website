import { useState, useEffect } from "react";

const GetDate = () => {
    const [time, updateTime] = useState(new Date());
  
    useEffect(() => {
      const timer = setInterval(() => {updateTime(new Date())}, 1000);
      return (() => { clearInterval(timer)});
    }, []);
  
    return (
      <>
        {time.toLocaleTimeString('en', { 
          year: 'numeric', month: 'short', day: 'numeric',
          hour: 'numeric', hour12: true, minute: 'numeric', second: 'numeric'
        })}
      </>
    );
};

export default GetDate;