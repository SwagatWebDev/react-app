const Shimmer = () => {
    return (
        <div className="shimmer-container flex flex-wrap">
            {[1, 2, 3, 4, 5].map((key) => (
                <div key={`shimmer-key-${key}`} className="shimmer-card m-4"></div>
            ))}
        </div>
    );
};

export default Shimmer;
