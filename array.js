const ages = [19,22,19,24,20,25,26,24,25 ,24]
ages.sort((a,b)=>a-b);
const minage =ages[0]
const maxage =ages[ages.length-1]
console.log('sorted age ',ages)
console.log('Min age ',minage)
console.log('Max age ',maxage)


let medianage;
if (ages.length % 2 === 0) {
const mid1 = ages [Math.floor(ages.length/2)-1];
const mid2 = ages [Math.floor(ages.length/2)];
medianage = (mid1 + mid2)/2;
} else {
medianage = ages [Math.floor(ages.length/2)];
}
console.log('Median Age:', medianage);

const sumages = ages.reduce((sum, age) => sum + age, 0);
const averageage = sumages/ages.length;
console.log('Average Age:', averageage);

const agerange = maxage - minage;
console.log('Age Range:', agerange)

const mindifference = Math.abs(minage - averageage);
const maxdifference = Math.abs(maxage - averageage);
console.log('Age Range:', agerange)
console.log('Min Average Difference:', mindifference)
console.log('Max Average Difference:', maxdifference)
