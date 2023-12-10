import {useRouteError} from "react-router-dom";

const Error = () => {
    const error = useRouteError();

    return (
        <div className="text-center mt-20">
            <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
            <h2 className="text-2xl font-semibold mb-4">Something went wrong!</h2>
            <h3 className="text-lg text-gray-700">
                {error.status}: {error.statusText}
            </h3>
        </div>
    );
};

export default Error;
