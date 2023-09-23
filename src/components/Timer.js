"use client";
import React, { useState, useEffect } from "react";

function Timer() {
  const targetDate = new Date("2023-09-30T12:00:00Z");
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const newTimeRemaining = calculateTimeRemaining();
      setTimeRemaining(newTimeRemaining);

      if (newTimeRemaining.total <= 0) {
        clearInterval(timerInterval);
      }
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => {
      clearInterval(timerInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //get rid of hydration warning
  useEffect(() => {
    setIsClient(true);
  }, []);

  function calculateTimeRemaining() {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    if (timeDifference <= 0) {
      return {
        total: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      total: timeDifference,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <main>
      {isClient ? (
        <div
          className="flex justify-center items-center gap-4 w-max mx-auto md:mx-0 pt-5 md:py-16 unica"
          suppressHydrationWarning={true}
        >
          <p className="text-5xl md:9xl font-medium">
            {timeRemaining.hours}
            <span className="text-base">H</span>
          </p>
          <p className="text-5xl md:9xl font-medium">
            {timeRemaining.minutes}
            <span className="text-base">M</span>
          </p>
          <p className="text-5xl md:9xl font-medium">
            {timeRemaining.seconds}
            <span className="text-base">S</span>
          </p>
        </div>
      ) : (
        <div
          className="flex justify-center items-center gap-4 w-max mx-auto md:mx-0 pt-5 md:py-16 unica"
          suppressHydrationWarning={true}
        >
          <p className="text-5xl md:9xl font-medium">
            00
            <span className="text-base">H</span>
          </p>
          <p className="text-5xl md:9xl font-medium">
            00
            <span className="text-base">M</span>
          </p>
          <p className="text-5xl md:9xl font-medium">
            00
            <span className="text-base">S</span>
          </p>
        </div>
      )}
    </main>
  );
}

export default Timer;
