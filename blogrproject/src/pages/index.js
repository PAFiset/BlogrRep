import Head from 'next/head';
import Footer from '@/components/footer';
import Header from '@/components/header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Blogr</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main >
        <div className="herobanner">
          <img src="./images/blogr/bg-pattern-intro-desktop.svg" alt="Backgrounds pattern" className="desktop_pattern"/>
          <img src="./images/blogr/bg-pattern-intro-mobile.svg" alt="Backgrounds pattern" className="mobile_pattern"/>
          <h1>
            A modern publishing platform
          </h1>
          <h2>
            Grow your audience and build your online brand
          </h2>
          <div className="options">
            <button>Start For Free</button>
            <button>Learn More</button>
          </div>
        </div>
        <div className="info1">
          <h2>
            Designed for the future
          </h2>
          <div className="info1_content" >
            <img src="./images/blogr/illustration-editor-desktop.svg" alt="Illustrator giant logo" className="info1_content_image desktop" />
            <img src="./images/blogr/illustration-editor-mobile.svg" alt="Illustrator giant logo" className="info1_content_image mobile" />
            <div className="info1_content_text" >
              <h3>Introducing an extensible editor</h3>
              <p>
                Blogr features as exceedingly intuitive interface which lets you focus 
                on one thing: creating content. The editor supports management of 
                multiple blogs and allow easy manipulation of embeds such as images, 
                videos, and Markdown. Extensibility with plugins and themes provide 
                easy ways to add functionality or change the looks of a blog. 
              </p>
              <h3>Robust content management</h3>
              <p>
                Flexible content management enables users to easily move through 
                posts. Increase the usability of your blog by adding customized 
                categories, sections, format, or flow. With this functionality, you're in 
                full control.
              </p>
            </div>
            
          </div>
        </div>
        <div className="info2">
          <div className="info2_content_text" >
            <h2>
              State of the art infrastructure
            </h2>
            <p>
              With reliability and speed in mind, worldwide data centers provide the
              backbone for ultra-fast connectivity, This ensures your site will load 
              instantly, no matter where your readers are, keeping your site competitive.
            </p>
          </div>
          <div className="cellphone_wrapper" >
            <img src="./images/blogr/illustration-phones.svg" alt="mobile phone front and back" />
          </div>
          <div className="pattern_wrapper" >
            <img src="./images/blogr/bg-pattern-circles.svg" alt="circles pattern" />
          </div>
        </div>
        <div className="info3">
          <img src="./images/blogr/illustration-laptop-mobile.svg" alt="Laptop Giant Logo" className="mobile" />
          <div className="info3_content_text" >
            <h3>
              Free, open, simple
            </h3>
            <p>
              Blogr is a free and open source application backed by a large 
              community of helpful developers. It supports features such as code 
              syntax highlighting, RSS feeds, social media integration, third-party 
              commenting tools, and works seamlessly with Google Analytic. The 
              architechture is clean and is realtively easy to learn. 
            </p>
            <h3>
              Powerful tooling
            </h3>
            <p>
              Battery included, We built a simple and straightforward CLI tool that 
              makes customization and deployment a breeze, but capable of 
              producing even the most complicated sites.
            </p>
          </div>
          <img src="./images/blogr/illustration-laptop-desktop.svg" alt="Laptop Giant Logo" className="desktop" />
        </div>
      </main>
      <Footer/>
    </>
  )
}
