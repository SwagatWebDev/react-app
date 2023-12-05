import {useEffect} from "react";

const Help = () => {
    useEffect(()=>{
        const timer = setInterval(() => {
            console.log("Inside set Interval componentDidMount called")
        }, 1000);
        console.log("useEffect called");
        // Used for unmounting phase
        return () => {
            clearInterval(timer);
            console.log("useEffect return called")
        }
    }, []);

    console.log("render called")
    return (
        <div className="help-page">
            <h1>Welcome to Foodies Customer Support</h1>
            <p>
                If you have any questions or need assistance, our customer support team is here to help you.
            </p>
            <h2>Contact Information</h2>
            <p>
                You can reach us via email at <strong>support@foodies.com</strong> or by phone at <strong>+1 (123) 456-7890</strong>.
            </p>
            <h2>Frequently Asked Questions (FAQs)</h2>
            <ul>
                <li>How do I place an order?</li>
                <li>What payment methods are accepted?</li>
                <li>How can I track my order?</li>
            </ul>
        </div>
    )
};

export default Help;
