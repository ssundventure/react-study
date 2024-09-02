const scaleNames = {
    c: "섭씨",
    f: "화씨",
};

function TemperatureInput(props) {
    const handleChange = (event) => {
        // 아래 함수로 input 입력시 상위 컴포넌트에 변경된 값을 전달한다.
        props.onTemperatureChange(event.target.value);
    }

    return (
        <fieldset>
            <legend>
                온도를 입력해주세요(단위 : {scaleNames[props.scale]}):
            </legend>
            <input value={props.temperature} onChange={handleChange} />
        </fieldset>
    );

}

export default TemperatureInput;