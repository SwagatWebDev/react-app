const Shimmer = () => {
    let filledArray = new Array(15).fill(0);
    return (
        <div className="shimmer-container">
            { filledArray.map(card => {
                return (<div className="shimmer-card"></div>);
            })}
        </div>
    );
}

export default Shimmer;
