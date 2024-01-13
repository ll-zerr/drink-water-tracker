const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

smallCups.forEach((cup, index) => {
    cup.addEventListener('click', () => highlightCups(index))
})

function highlightCups(index) {
    // toggle the last cup clicked so that if it is empty it will fill or if it is full, it will empty
    if(smallCups[index].classList.contains('full') && !smallCups[index].nextElementSibling.classList.contains('full')) {
        index--
    }
    // for each of the small cups, check the index of the cup clicked and if there are empty cups before the clicked cup, fill them as well as the clicked cup
    smallCups.forEach((cup, index2) => {
        if(index2 <= index) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })
}