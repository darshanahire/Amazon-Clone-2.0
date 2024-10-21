
const Debounce = (callback,delay) =>{
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(()=>{
        callback(...args);
    }, delay)
}
}

module.exports = Debounce;