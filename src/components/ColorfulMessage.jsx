export const ColorfulMessage = (props) => {
    console.log("--ColorfulMessage--");
    const contentStyle = {
        color: props.color,
        fontSize: "18px",
    };

    return (
        <p style={contentStyle}>{props.children}</p>
    )
};