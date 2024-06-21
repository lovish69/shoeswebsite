import React from 'react'
import "./Landingpage.css";
const Landingpage = () => {
  return (
    <>
         <body style={{ backgroundImage: `url(${"./banner.png"})` }}>
        {/* <div className='landing-page'>
            <div className='video-container'>
            <video autoPlay loop muted className="background-video">
          <source src="./video3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
       
            </div>
        </div> */} */}
        <div className='main-box'>
                <div className="main-title">
                    <div className="title">
                        <p>Welcome to</p>
                        <p className='pa'>Sole Sneakers</p>
                        <div className="title-para-and-button">
                            <p>Step into a World of Comfort and Style with Every Pair</p>
                            <div  className="title-button">
                                <button>Buy Now</button>
                                <button>See More...</button>
                            </div>
                           
                        </div>
                    </div>
                    <div className='login-signin'>
                        <button>Login</button>        
                    </div>
                </div>
                <div className="title-image">
                    <img src='./shoes.png' style={{height:"600px", position:'relative', top:"35px"}} alt='not find'/>
                </div>
            </div> 
            </body>
        


        
            
    </>
  )
}

export default Landingpage