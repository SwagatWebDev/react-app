import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="about-page">
            <h1>About Us</h1>
            <p>Welcome to Foodies Ltd, your go-to destination for delicious and diverse culinary experiences!</p>
            <p>At Foodies, we are passionate about delivering high-quality and mouth-watering food right to your doorstep. Our mission is to satisfy your taste buds and make every meal a delightful experience.</p>
            <h2>Our Story</h2>
            <p>Founded in 2023, Foodies Ltd started as a small kitchen with a big dream. Over the years, we have grown into a renowned culinary hub, offering a wide range of cuisines to cater to every palate.</p>
            <h2>Our Values</h2>
            <ul>
                <li>Quality: We source the finest ingredients to ensure the highest quality in every dish.</li>
                <li>Variety: From traditional favorites to innovative creations, we offer a diverse menu to suit every taste.</li>
                <li>Convenience: Our user-friendly platform makes it easy for you to explore, order, and enjoy your favorite meals.</li>
            </ul>
            <h2>Contact Information</h2>
            <p>Feel free to reach out to us for any inquiries or feedback. We value your thoughts and are here to assist you.</p>
            <User name={"Swagat"}/>
            <UserClass name={"Swagat"} location={"Bangalore"}/>
            <br/>
        </div>
    )
};

export default About;
