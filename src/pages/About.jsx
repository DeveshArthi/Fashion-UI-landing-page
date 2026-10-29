import Image from '../assets/ref/14.jpg'

const About = () => {
    return (
        <div className="about_wrapper">
            <div className="container">
                <div className="abt_img">
                    <img src={Image} alt="" />
                </div>
                <div className="abt_content">
                    <span>THE PHILOSOPHY</span>
                    <h2>
                        Luxury is not excess.
                    </h2>
                    <h2>It is <span>precision</span></h2>
                    <p>
                        Every Aurore formula begins with a single question: what does skin truly need? Not what will sell — what will transform. We source no more than twelve ingredients per product, each chosen for potency, purity, and provenance.
                        <br></br>
                        <br></br>

                        The result is a ritual, not a routine. A moment of intention in the morning and evening that your skin — and your senses — will thank you for.
                    </p>
                    <button>DISCOVER THE RITUAL</button>
                </div>
            </div>
        </div>
    )
}

export default About