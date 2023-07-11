const coffeeMenu = require("./coffee_data.js")

// console.log(coffeeMenu);

// we start at coffeeMenu for the entire array, then name the specific items in it --- coffeeItem

//const q2 = coffeeMenu.map( coffeeItem => coffeeItem.name )
// using map to print all the drink names on the menu
const q2 = coffeeMenu.map( ( coffeeItem ) => {
    return coffeeItem.name;
});
console.log(q2);


// used filter first to only get the items priced* <= 5 --- why we're looking at the return of price
// then used map to get the names of the drinks that are priced <= 5
// so from the filtered items map will pluck the names
const q3a = coffeeMenu.filter( (coffeeItem) => {
    return coffeeItem.price <= 5;
});

const q3b = q3a.map( (coffeeItem) => {
    return coffeeItem.name;
})
console.log(q3b);


// filter to get items that are evenly priced* --- this is why the return is coffeeMenu.price
// for even numbers we start at 0, % 2 === 0
// map to print out the drink names that are evenly priced
const q4a = coffeeMenu.filter( (coffeeItem) => {
    return ( coffeeItem.price % 2 ) === 0;
})
//console.log(q4a);

const q4b = q4a.map( (coffeeItem) => {
    return coffeeItem.name;
});
console.log(q4b);



// using reduce to add the previous value to the current one, adding up the item prices each time
// we use previous value starting at 0, then for the coffeeItem.price it will add the value each time
// 0+8=8 for the first one, 8+5=13 for the next 
const q5 = coffeeMenu.reduce( (previousValue, coffeeItem ) => {
    console.log(`previous: ${previousValue}, current: ${coffeeItem.price}`);
    return previousValue + coffeeItem.price;
}, 0);
console.log(q5);


// using filter to only include the items in the coffeeMenu that are true
// then use map bc we want the name of the items not the entire array
const q6a = coffeeMenu.filter( (coffeeItem) => {
    return coffeeItem.seasonal === true;
})
console.log(q6a);

const q6b = q6a.map( (coffeeItem) => {
    return coffeeItem.name;
});
console.log(q6b);


// used same as q6a bc we already filtered the seasonal item names
// then we add a string to the coffeeItem.name
const q7 = q6a.map( (coffeeItem) => {
    return coffeeItem.name + ' with imported beans.';
});
console.log(q7);
