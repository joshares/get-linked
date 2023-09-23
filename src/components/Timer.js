"use client";
import React, { useState, useEffect } from "react";

function Timer({ targetDate }) {
  return (
    <div>
      {timeRemaining.total <= 0 ? (
        <div>Countdown expired</div>
      ) : (
        <div>
          <div>
            Countdown: {timeRemaining.hours}H {timeRemaining.minutes}M{" "}
            {timeRemaining.seconds}S
          </div>
        </div>
      )}
    </div>
  );
}

export default Timer;
