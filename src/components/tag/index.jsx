import "./tag.css"

function Tag(props){
    const {classes,discountprice}=props;
    return (<div className={classes}>{discountprice}</div>);
}

export default Tag;