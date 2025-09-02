let currentBounceIndex = 0;
const bounces = document.querySelectorAll('.bounce div');
console.log(bounces);

function switchBounce(){
    bounces[currentBounceIndex].classList.remove('active');
    currentBounceIndex = (currentBounceIndex + 1) % bounces.length;
    bounces[currentBounceIndex].classList.add('active');
}

setInterval(switchBounce, 800);