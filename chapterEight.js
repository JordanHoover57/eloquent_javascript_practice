/**
 Chapter 8: Exercises
 */

/*
Exercise 1: Retry
 */


class MultiplicatorUnitFailure extends Error {};

function primitiveMultiply(a,b){
    let rando = Math.floor(Math.random() * 10);
    if(rando <= 2) return a * b;
    if(rando >2) throw new MultiplicatorUnitFailure("The values failed to multiply");
}

function test(x,y){
    //Continuously loop
    for(;;){
        try{
            let product = primitiveMultiply(x,y);
            console.log("The product is: " + product);
            break;
        }catch(e){
            if(e instanceof MultiplicatorUnitFailure) {
                console.log("Error Occurred: Trying again");
            }else{
                throw e;
            }
        }
    }
}

/**
 * Cleaner Version
 */

function primMult(a,b){
    if(Math.random() < 0.2){
        return a * b;
    }else{
        throw new MultiplicatorUnitFailure("The values failed to multiply");
    }
}

function reliableMult(x,y){
    for(;;){
        try{
            return primMult(x,y);
        }catch(e){
            if(!(e instanceof MultiplicatorUnitFailure)) throw e;
        }
    }
}

//test(5,6);
console.log(reliableMult(5,7));

/*
Exercise 2: The Locked Box
 */

const box = {
    locked : false,
    unlock() {this.locked = false},
    lock() {this.locked = true},
    _content: [1,2,3],
    get content(){
        if(this.locked) throw new Error("Locked up tight!");
        return this._content;
    }
};

function withBoxUnlocked(func){
    let originalLockStatus = box.locked;
    let content = [];
    if(box.locked) box.unlock();
    try{
        content = func(box.content);
    }catch(e){
        console.log("Caught an error" + e);
    }finally {
        if(originalLockStatus) box.lock();
        if(content.length > 0) return content;
    }


}

console.log(withBoxUnlocked(i => i.filter(i => i % 2 == 0)));
console.log(box.locked);