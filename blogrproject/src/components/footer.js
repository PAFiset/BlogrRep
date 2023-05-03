import Link from "next/link";

const Footer = () => {
  return ( 
    <footer>
      <nav>
        
        <Link href="/" ><img src="./images/blogr/logo.svg" alt="blogr logo" /></Link>
        <div>
          <h3>Product</h3>
          <Link href="/" >Overview</Link>
          <Link href="/" >Pricing</Link>
          <Link href="/" >Marketplace</Link>
          <Link href="/" >Features</Link>
          <Link href="/" >Integrations</Link>
        </div>
        <div>
          <h3>Compagny</h3>
          <Link href="/" >About</Link>
          <Link href="/" >Team</Link>
          <Link href="/" >Blog</Link>
          <Link href="/" >Career</Link>
        </div>
        <div>
          <h3>Connect</h3>
          <Link href="/" >Contact</Link>
          <Link href="/" >Newsletter</Link>
          <Link href="/" >Linkedin</Link>
        </div>
      </nav>
    </footer> 
  );
}
 
export default Footer;