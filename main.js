const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// method 1
const iWant = word => {
if (word.startsWith('a')){
    console.log(`I want to eat an ${word}`)
  } else {
  console.log(`I want to eat a ${word}`)
    }
  }

fruits.forEach(iWant);

//method 2
fruits.forEach(word => {
  if (word.startsWith('a')) {
    console.log(`I want to eat an ${word}`)
  } else {
    console.log(`I want to eat a ${word}`);
    }
  })

//method 3
fruits.forEach(fruit => function() {
for(let i = 0; i < fruits.length; i++){
  if (fruits[i].startsWith('a')){
    console.log(`I want to eat an ${fruits[i]}`)
  } else {
  console.log(`I want to eat a ${fruits[i]}`)
    }
  };
})

// method 4
let newArray = fruits.map(word => {
  if(word.startsWith('a')){
    return `I want to eat an ${word}`;
  } else {
    return `I want to eat a ${word}`
  }
})
console.log(newArray)
