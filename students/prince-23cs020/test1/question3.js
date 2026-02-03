const once = (fn)=>{
    let hasRun = false;
    const runOnce = ()=>{
        if(hasRun) return;
        hasRun= true;
        fn();
    }
    return runOnce;    
}

const greet = ()=> console.log("Hello");

const greetOnce = once(greet);

greetOnce();
greetOnce();
greetOnce();
greetOnce();