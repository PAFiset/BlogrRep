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

  const modalhandler = (event) => {


    event.currentTarget.classList.toggle("modalopen");

    console.log(
    document.querySelector(".navcontent"));

    document.querySelector(".navcontent").classList.toggle("modalopen");

  }

  return ( 
    <header>
      <div className="navbar">
        <img src="./images/blogr/logo.svg" alt="blogr logo" />
        <div className="navcontent" >
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
          <nav className="login" >
            <Link href="/" className="loginbtn">Login</Link>
            <Link href="/" className="signupbtn" >Sign up</Link>
          </nav>
        </div>
      </div>
      <button className="modalbtn" onClick={modalhandler} >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header> 
  );
}
 
export default Header;