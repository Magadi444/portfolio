document.addEventListener('DOMContentLoaded', () => {

    // Easter egg trigger - changes text to director mode after 5 clicks 

const logo = document.getElementById('easter-egg-trigger');
    
if (logo) {

       let clicks = 0;
       logo.addEventListener('click', () => {

           clicks++;

           if (clicks === 5) {

            logo.innerText = "DIRECTOR MODE.";
            logo.classList.add('egg-active');
                
        setTimeout(() => {

            // Reset logo back to default after 4 seconds

            logo.innerText = "Magadi.";
            logo.classList.remove('egg-active');
            clicks = 0;
            
            }, 4000);
        }
    });
}

// Init vanilla-tilt.js for project cards (glare kept low so it's not distracting)

const cards = document.querySelectorAll('.tilt-card');

    if (cards.length > 0) {

        VanillaTilt.init(cards, {

        max: 5,
        speed: 400,
        glare: true,
        "max-glare": 0.15
        
        });
    }
});