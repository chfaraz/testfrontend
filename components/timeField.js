const TimeField = ({ value, change, disable }) => {
    return (
        <div className="time_wrapper">
            <input type="time" value={value} disabled={disable} onChange={(e) => change(e)} />
        </div>
    );
};

export default TimeField;
