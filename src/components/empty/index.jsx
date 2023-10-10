

function Empty(props){
    const { classname,title, discription}=props;
    return(
        <div className={classname}>
        <img src="/notFound.webp" alt="not found !!!" />
        <h1>{title}</h1>
        <p>{discription}</p>
        </div>
    )
}

export default Empty;