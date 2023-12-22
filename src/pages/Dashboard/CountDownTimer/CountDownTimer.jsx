import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const CountdownTimer = ({ date }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(date).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
        });
      } else {
        clearInterval(timerInterval);
      }
    };

    const timerInterval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timerInterval);
  }, [date]);

  return (
    <div className="flex justify-center items-center gap-2 bg-red-600 text-xs w-max px-2 mx-auto text-white font-bold py-1 rounded mt-3">
      <div>{timeLeft.days} days</div>
      <div>{timeLeft.hours} hours</div>
      <div>{timeLeft.minutes} min</div>
      <div>{timeLeft.seconds} sec</div>
    </div>
  );
};

CountdownTimer.propTypes = {
    date: PropTypes.string,
};

export default CountdownTimer;
