/*Declaration of global variables*/ 
const mainDiv = document.querySelector('.main-div')
let word1 = 'WELCOME  TO ' 
let word2 = 'JAVASCRIPT  LEARNING'
let word3 = '       MANGALAM KRISHNAN'
const div1 = document.querySelector('.div1')
const div2 = document.querySelector('.div2')
const div3 = document.querySelector('.div3')

/*Function to display random font weights*/
const randomFontWeight = () => {
    const fontWeightArray = ['100','200','300','400','500','600','700','800','900']
    let index = Math.floor(Math.random() * fontWeightArray.length)
    let fontWeight = fontWeightArray[index]
    return fontWeight
}

/*Function to display random colors */
const randomHexaId = () => {
    let hexaChar= '0123456789abcdef'
    let hexaLen = hexaChar.length
    let hexaId = '#'
    for (let i=0; i<6; i++) {
        
        let hexaIdIndex = Math.floor(Math.random()*hexaLen)
        hexaId = hexaId + hexaChar[hexaIdIndex]

    }
    
    return hexaId
}
/*Function to create the word divs*/
const createDivs = (word,div) => {
    for (let i=0; i<word.length; i++) {
        const alpha = document.createElement('div')
        alpha.style.fontSize = '40px'
        alpha.textContent = word[i]
        alpha.style.color = randomHexaId()
        div.appendChild(alpha)
    }
}

/*Function to display random hexa colors of the background*/ 
const backgroundTimer = () => {
    mainDiv.style.backgroundColor = randomHexaId()
    mainDiv.style.fontWeight = randomFontWeight()
}
/*Function to display the word divs*/ 
const divTimer = () => {
    const subDiv = document.createElement('div')
    subDiv.setAttribute('class','sub-div')
    div1.textContent = ''
    div2.textContent = ''
    div3.textContent = ''
    createDivs(word1,div1)
    createDivs(word2,div2)
    createDivs(word3,div3)
    subDiv.appendChild(div1)
    subDiv.appendChild(div2)
    subDiv.appendChild(div3)
    mainDiv.appendChild(subDiv)

}

/*Setting the times for background and the words*/ 
const mainDivTimer = setInterval(backgroundTimer,3000)
const wordTimer = setInterval(divTimer,3000)

