import React, { useEffect, useRef, useState } from 'react'
import { useContractHook } from '../../context/contract.context'

function useCounter() {
     // timer counter state
  let [days, setDays] = useState("00");
  let [hours, setHours] = useState("00");
  let [mins, setMins] = useState("00");
  let [secs, setSecs] = useState("00");
  const [display, setDisplay] = useState(false);
  const contract = useContractHook();
//   console.log(new Date(timeDifference as number * 1000))
  let interval:any = useRef();
  // time counter function
  let startTimer = () => {
  const timeDifference = contract?.state &&  contract?.state?.deadline;
    let countdownDate = new Date(timeDifference as number * 1000).getTime();
    interval = setInterval(() => {
      let now = new Date().getTime();
      let distance = countdownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let secs = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        setDisplay(false);
      } else {
        setDisplay(true);
        setDays(days.toString());
        setHours(hours.toString());
        setMins(mins.toString());
        setSecs(secs.toString());
      }
    }, 1000);
  };
//   console.log(display, hours, mins, secs);
  
   // countdown functionality on load
   useEffect(() => {
    startTimer();
    const currentValue = interval.current;
    return () => {
      clearInterval(currentValue);
    };
  }, []);
    return [hours, mins, secs, display]
}

export default useCounter