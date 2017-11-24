const FN = (fullName) => {
    return fullName.split(' ')[0];
}

const fn = (fullName) => fullName.split(' ')[0];

console.log(FN('Ahmad Ali'));
console.log(fn('Ahmad Ali'));


const multiplier = {
    nums: [1,2,3,4],
    multiplyBy: 3,
    multiply(){
        return this.nums.map((x) => (x*this.multiplyBy));
    }
}

console.log(multiplier.multiply());