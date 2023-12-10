import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // console.log("Parent componentDidMount called");
    }

    render() {
        return (
            <div className="about-page p-8">
                <h1 className="text-3xl font-bold mb-4 text-blue-600">About Us</h1>
                <p className="text-lg">
                    Welcome to Foodies Ltd, your go-to destination for delicious and diverse culinary experiences!
                </p>
                <p className="text-lg">
                    At Foodies, we are passionate about delivering high-quality and mouth-watering food right to your doorstep. Our mission is to satisfy your taste buds and make every meal a delightful experience.
                </p>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-2">Our Story</h2>
                    <p className="text-lg">
                        Founded in 2023, Foodies Ltd started as a small kitchen with a big dream. Over the years, we have grown into a renowned culinary hub, offering a wide range of cuisines to cater to every palate.
                    </p>
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-2">Our Values</h2>
                    <ul className="list-disc list-inside">
                        <li className="text-lg">Quality: We source the finest ingredients to ensure the highest quality in every dish.</li>
                        <li className="text-lg">Variety: From traditional favorites to innovative creations, we offer a diverse menu to suit every taste.</li>
                        <li className="text-lg">Convenience: Our user-friendly platform makes it easy for you to explore, order, and enjoy your favorite meals.</li>
                    </ul>
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
                    <p className="text-lg">Feel free to reach out to us for any inquiries or feedback. We value your thoughts and are here to assist you.</p>
                </div>
                <UserClass name={"First"} location={"Bangalore"} />
                <br />
            </div>
        );
    }
}

export default About;
