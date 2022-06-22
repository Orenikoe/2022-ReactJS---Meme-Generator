import navPic from "../images/navbar-icon-removebg-preview.png"

export default function Navbar() {
    return (
      <div>
      <nav><img alt="" src={navPic}/><span className="nav-title">Meme Generator</span></nav>
      </div>
    );
  }