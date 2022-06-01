function elevator(){
    let left = 4;
    let right = 2;
    let call = 0;
    
    if((left == call && left != right) || (call - left) > right){
        left == call;
        console.log("Prenez l'ascenceur de gauche");
    }
    else{
        right == call;
        console.log("Prenez l'ascenceur de droite");
    }
}

elevator();