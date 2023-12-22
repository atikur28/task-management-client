import { Link } from "react-router-dom";
import task from "../../assets/images/tasks.png";

const Footer = () => {
  return (
    <footer className="footer bg-gray-200 p-10">
      <aside>
        <img className="w-[100px]" src={task} alt="" />
        <p>
          <span className="text-xl font-bold">TaskPulse Management</span>
          <br />
          Copyright © 2023 TaskPulse - All rights reserved
        </p>
      </aside>
      <nav>
        <header className="footer-title">Services</header>
        <a className="link link-hover">Task Organization</a>
        <a className="link link-hover">Deadline Management</a>
        <a className="link link-hover">Collaboration Tools</a>
        <a className="link link-hover">Progress Tracking</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <Link to="/" className="link link-hover">Home</Link>
        <Link to="/about" className="link link-hover">About us</Link>
        <Link to="/contact" className="link link-hover">Contact</Link>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
