import "./About.css"
import aboutImage from "../../images/about-img.png"

const About = () => {
    return (
        <>
            <div class="grid-container-about">
                <div class="grid-child-about">
                <h1 class="about">About Us</h1>
                <p class="about-text">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All
                </p>
                <div class="about-more">
                    <button class="about-more-btn">READ MORE</button>
                </div>
                </div>
                <div class="grid-child-img">
                    <img class="about-img" src={aboutImage} alt="Image About" />
                </div>
            </div>
        </>
    )
} 

export default About;