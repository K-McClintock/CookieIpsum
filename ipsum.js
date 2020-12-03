const num =  document.querySelector('#number');
const btn = document.querySelector('button');
const showIpsum = document.querySelector('.showIpsum')

const words = [
    'fresh-baked',
    'free range',
    'egg',
    'micro-financed',
    'sugar',
    'organic',
    'flour',
    'decadent',
    'chocolate',
    'finest',
    'imported',
    'free trade',
    'vanilla',
    'hand-dipped',
    'plant-to-table',
    'bakery',
    'sweet',
    'semi-sweet',
    'cocoa',
    'delicious',
    'morsels',
    'artisanal',
    'ingredients',
    'scrumptious',
    'delectable',
    'dough',
    'recipe',
    'handmade',
    'dark',
    'rich'
]

function ipsum(){
    let ipsumArr = ['Cookie ipsum'];
    for (let i = 0; i < num.value; i++) {
        let randNum = Math.floor(Math.random() * words.length);
        ipsumArr.push(words[randNum])
    }
    showIpsum.textContent = ipsumArr.join(' ')
}


btn.addEventListener('click', function(e){
    e.preventDefault();
    if (num.value >= 201) {
        alert("That's too many cookies!")
    } if (num.value < 1){
        alert("I'm afraid I can't do that, Dave")
    } else {
        ipsum();
    }
});
