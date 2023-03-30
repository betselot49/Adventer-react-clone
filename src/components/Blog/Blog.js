import "./Blog.css"
import playIcon from "../../images/play-icon.png";
import client from "../../images/client-img.png";
import quickIcon from "../../images/quick-icon.png";


const Blog = () => {
    return (
        <>
            <div class="see-our-video">
        <div class="bg-img-seeOurVideo">
            <div class="see-container">
                <h1 class="see-header">See Our Video</h1>
                <div class="see-text">
                    <p class="text">many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which</p>
                </div>
                <div class="see-icon">
                    <img class="play-icon" src={playIcon} alt="" />
                </div>
            </div>
        </div>
    </div>


    <div class="testimonial-text">
        <p class="text">Testimonial</p>
    </div>
    <div class="testimonial-container"> 
        <div class="testimonial-slide-show">
            <div class="slider1">
                <div class="left-part">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia
                    </p>
                </div>
                <div class="right-part">
                    <div class="model">
                        <img class="client" src={client} alt="" />
                        <div class="quick-icon">
                            <img src={quickIcon} alt="" />
                        </div>
    
                    </div>
                    <div class="customer">
                        <p class="dame">DAME</p>
                        <p class="cust-text">CUSTOMER</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="why-choose-container">
        <h1 class="why-choose-header">Why Choose Us</h1>
        <p class="why-choose-text">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All
        </p>
        <div class="why-choose-div">
            <button class="why-choose-btn">READ MORE</button>
        </div>
        <div class="why-choose-footer">
            <div class="footer-text-div">
                <h1 class="footer-text">Let Start Talk with Us</h1>
            </div>
            <div class="footer-btn-div">
                <button class="footer-btn">Get A Quote</button>
            </div>
        </div>
    </div>

        </>
    )
} 

export default Blog;