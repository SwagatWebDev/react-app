import { useEffect } from "react";

const Help = () => {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Inside set Interval componentDidMount called");
        }, 1000);
        console.log("useEffect called");
        // Used for unmounting phase
        return () => {
            clearInterval(timer);
            console.log("useEffect return called");
        };
    }, []);

    console.log("render called");
    return (
        <div className="help-page p-8">
            <h1 className="text-3xl font-bold mb-4 text-green-600">Welcome to Foodies Customer Support</h1>
            <p className="text-lg">
                If you have any questions or need assistance, our customer support team is here to help you.
            </p>
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
                <p>
                    You can reach us via email at <strong className="text-green-600">support@foodies.com</strong> or by phone at{" "}
                    <strong className="text-green-600">+1 (123) 456-7890</strong>.
                </p>
            </div>
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-2">Frequently Asked Questions (FAQs)</h2>
                <ul className="list-disc list-inside">
                    <li className="text-lg">How do I place an order?</li>
                    <li className="text-lg">What payment methods are accepted?</li>
                    <li className="text-lg">How can I track my order?</li>
                </ul>
            </div>
        </div>
    );
};

export default Help;
