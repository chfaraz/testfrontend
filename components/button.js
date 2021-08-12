const Button = ({ day, clas, click }) => {
    return (
        <button className={`day_button_inactive ${clas}`} onClick={() => click(day)}>
            {day}
        </button>
    );
};

export default Button;
