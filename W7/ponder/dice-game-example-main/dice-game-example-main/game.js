// 1. Add event listener to the button
document.querySelector('#rollButton').addEventListener("click", event => {
    // Animate the die
        
    const images = document.querySelectorAll('#gameboard img');
    images.forEach(image => {
        // switch the src to the die_rolling.gif animation
        if(isDieUnlocked(image)) {
            image.src = "assets/die_rolling.gif";
        }
        //image.src = "assets/die_rolling.gif";
    })
    // Change the value each die lands on randomly 
        // Changing the src image

    setTimeout(() => {
        // run what is in here after x milliseconds
        images.forEach(image => {
            if(isDieUnlocked(image)) {
                const randomNumber = Math.floor(Math.random() * 6) + 1;
                image.src = `assets/white_dice_${randomNumber}.gif`;
            }
        // switch the src to the die_rolling.gif animation
            // set the images to a random die
            // console.log(Math.floor(Math.random() * 6) + 1);

            
        });
    }, 1000);
    
});

// If dice is selected, don't re-roll
function isDieUnlocked(dieImage) {
    // is the corresponding checkbox checked? Return false
    const checkboxes = document.querySelectorAll("#gameboard input");
    // return a new array of just the checked ones
    const unchecked = Array.from(checkboxes).filter(checkbox => !checkbox.checked);

    return unchecked.find(unchecked => unchecked.className === dieImage.className);
}