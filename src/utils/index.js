export const debounce= (func, delay=100)=>{
    let timer=null;
    return (...args)=>{
        clearTimeout(timer);
        timer=setTimeout((delay)=>{
            func(...args);
        },delay);
    }
}