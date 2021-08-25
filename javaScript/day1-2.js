const num = [12,10,2,1,3];
const output = [];

const getresalt = num  => num  * 3;

for(const number of num){
    const reslt = getresalt(number);
    output.push(reslt)

}



const outfot2 = num.map(getresalt);
console.log(outfot2);