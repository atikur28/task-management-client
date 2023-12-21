import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <div className="h-[80vh] flex justify-center items-center">
      <div className="text-center" data-aos="flip-left">
        <h1 className="text-3xl md:text-6xl font-bold text-white">
          Task Management
        </h1>
        <p className="md:text-lg text-white text-center max-w-[800px] mx-auto mt-4">
          Your Command Center for Productivity! Streamline tasks, meet
          deadlines, and boost efficiency effortlessly. Sign up now for seamless
          task management!
        </p>
        <Link to="/dashboard">
          <button className="text-white bg-sky-600 hover:bg-sky-700 py-2 px-8 text-sm md:text-lg font-medium mt-8 rounded-full">
            Let’s Explore
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeBanner;
