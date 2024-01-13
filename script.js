const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

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

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length
    
    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}