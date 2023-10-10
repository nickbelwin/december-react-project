import "./button.css"

const Button=(props)=>{
    const {classes, text, child}=props
    return(
        <>
            <button className={classes}>{text || child}</button>
        </>
    );
}
export default Button;