const character = document.querySelector('.character-running')
const stone = document.querySelector('.stone')
const clouds = document.querySelector('.clouds')

const jump = () => {
    character.classList.add('jump')

    setTimeout(() => {
        character.classList.remove('jump')
    },700)
}

const loop = setInterval(() =>{
    
    const stonePosition = stone.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;
    //Get the character's position in relation to jump and transform to number
    const characterPosition = +window.getComputedStyle(character).bottom.replace('px', '');
    
    if(stonePosition <= 130 && stonePosition > 0 && characterPosition < 55){
        
        stone.style.animation = 'none';
        stone.style.left = `${stonePosition}px`

        character.style.animation = 'none';
        character.style.bottom = `${characterPosition}px`

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`

        character.src = './images/death.gif'
         
        //character.onpause = stopGifAnimation

        clearInterval(loop);
    }
},10)  

document.addEventListener('keydown', jump) 