import Link from "next/link";

const Header = () => {

  const dropdownhandler = (event) =>{ 
    if(!event.currentTarget.classList.contains("selected")){
      let collection = document.getElementsByClassName("dropdown");

      for (let i = 0; i < collection.length; i++) {
        collection[i].childNodes[0].classList.remove("selected");
        collection[i].childNodes[1].classList.remove("open");
      }

      let content = event.currentTarget.parentNode.children;
      content[0].classList.add("selected");
      content[1].classList.add("open");
    } 
    else {
      let content = event.currentTarget.parentNode.children;
      content[0].classList.remove("selected");
      content[1].classList.remove("open");
    }
  }

  return ( 
    <header>
      <div className="navbar">
        <div className="navcontent" >
          <img src="./images/blogr/logo.svg" alt="" />
          <div className="dropdown" >
            <div className="dropdowntext" onClick={dropdownhandler}  >
              <div>
                Product
              </div>
              <img src="./images/blogr/icon-arrow-light.svg" alt="white arrow icon" />
            </div>
            <nav className="dropdowncontent product" >
              <Link href="/" >Overview</Link>
              <Link href="/" >Pricing</Link>
              <Link href="/" >Marketplace</Link>
              <Link href="/" >Features</Link>
              <Link href="/" >Integrations</Link>
            </nav>
          </div>
          <div className="dropdown" >
            <div className="dropdowntext" onClick={dropdownhandler}  >
              <div>
                Compagny
              </div>
              <img src="./images/blogr/icon-arrow-light.svg" alt="white arrow icon" />
            </div>
            <nav className="dropdowncontent compagny" >
              <Link href="/" >About</Link>
              <Link href="/" >Team</Link>
              <Link href="/" >Blog</Link>
              <Link href="/" >Career</Link>
            </nav>
          </div>
          <div className="dropdown" >
            <div className="dropdowntext" onClick={dropdownhandler}  >
              <div>
                Connect
              </div>
              <img src="./images/blogr/icon-arrow-light.svg" alt="white arrow icon" />
            </div>
            <nav className="dropdowncontent connect" >
              <Link href="/" >Contact</Link>
              <Link href="/" >Newsletter</Link>
              <Link href="/" >Linkedin</Link>
            </nav>
          </div>
        </div>
        <nav className="login" >
          <Link href="/" >Login</Link>
          <Link href="/" className="signupbtn" >Sign up</Link>
        </nav>
        <button className="modalbtn" >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header> 
  );
}
 
export default Header;