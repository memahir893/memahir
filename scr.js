function adder(num1, num2){
    if(typeof num1=="number" && typeof num2=="number"){
        let sum =num1+num2;
        return sum;
    }
    else{
        return "sorry please input numbers only"
    }

}
document.write(adder(78,"as"))
























