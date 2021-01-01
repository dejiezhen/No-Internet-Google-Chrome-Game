const character = document.querySelector('.character');
const block = document.querySelector('.block');

function jump(){
    if(!character.classList.contains('animate')){
        character.classList.add('animate');
    }
    setTimeout(function(){
        character.classList.remove('animate')
    }, 500)
}

let checkIfLost= setInterval(() => {
    let charTopPos = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    let blockLeftPos = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    // 0 and 20 - meaning block is inside the character since width of character is 20
    //when you jump, top value decrease, thus if charTop is 130>= that means it has not jumped 
    if(blockLeftPos < 52 && blockLeftPos > 0 && charTopPos >= 130){
        block.style.animation = 'none';
        block.style.display ='none';
        alert('You snooze you lose!')
    }
}, 10);
  

document.addEventListener('keydown', function(e){
    if(e.code === 'Space'){
        jump();
        
    }
})