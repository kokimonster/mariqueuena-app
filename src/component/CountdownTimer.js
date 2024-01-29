import React, { useState, useEffect } from 'react';

const CountDownTimer =  ({peopleInLine}) => {
  const [timeLeft, setTimeLeft] = useState(null);
  const [estimatedTime, setEstimatedTime] = useState(null);

  useEffect(() => {
    const initialTime = calculateEstimatedTime();
    setTimeLeft(initialTime);

    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(timer);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const calculateEstimatedTime = () => {
    if (peopleInLine.length === 0) {
      return null;
    }

    const baseDuration = 3;
    const incrementPerUser = 3;
    const numUsers = peopleInLine.length;

    let calculatedTime = numUsers * incrementPerUser;
    console.log(`Calculated Time: ${Math.max(calculatedTime, 1)}`);

    return Math.max(calculatedTime, 1);
  };

  useEffect(() => {
    const estimatedTime = calculateEstimatedTime();
    console.log(`Initial Estimated Time: ${calculateEstimatedTime()}`)
    setEstimatedTime(estimatedTime);

  }, []);

  const formatTime = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
      <h4>{formatTime()}</h4>
    </div>
  );
};

export default CountDownTimer;
