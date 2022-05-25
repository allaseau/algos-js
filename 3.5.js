var array = [ 1, 2, 3, 4, 5, -2, 23, -1, -13, 10, -52 ],
positive = array.filter(function (a) { return a >= 0; })

if(positive==0){
    console.log(0)
}else{
    sum = positive.reduce(function (a, b) { return a + b; });
    console.log(sum);
}
