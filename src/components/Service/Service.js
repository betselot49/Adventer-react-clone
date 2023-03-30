import "./Service.css";
import image1 from "../../images/img-1.png"
import image2 from "../../images/img-2.png"
import image3 from "../../images/img-3.png"

const Service = () => {
    return (
        <>
            <div class="services-container">
                <div class="service">
                    <h1 class="service-comp">Services</h1>
                    <p class="service-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
                </div>

                <div class="service-row"  >
                    <div class="col">
                        <div class="service-imgs">
                            <img class="s-img" src={image1} alt="Image1" />
                        </div>
                        <div class="service-btn">
                            <button class="s-btn">RAFTING</button>
                        </div>
                    </div>
                    <div class="col">
                        <div class="service-imgs">
                            <img class="s-img" src={image2} alt="Image2" />
                        </div>
                        <div class="service-btn">
                            <button class="s-btn-middle">HICKING</button>
                        </div>
                    </div>
                    <div class="col">
                        <div class="service-imgs">
                            <img class="s-img" src={image3} alt="Image3" />
                        </div>
                        <div class="service-btn">
                            <button class="s-btn">CAMPING</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 

export default Service;