console.log("we are at calulator exercise")
let inputText = document.getElementById('screen')

let buttons = document.querySelectorAll('button')
// console.log(btnallwidth)
// console.log(inputText)

let screenValue = ''
var string = inputText.value
let removechar =''

for (let button of buttons) {
    // console.log(button.innerText)
    button.addEventListener('click', (e) => {

        let buttonText = e.target.innerText
        if (buttonText == 'X') {
            buttonText = '*'
            screenValue += buttonText
            inputText.value = screenValue
        }
        else if (buttonText == 'C') {
            screenValue = ''
            inputText.value = screenValue
        }
        else if (buttonText == '=') {
            // let string = inputText.value
            let output = eval(string)
            inputText.value = output
            string = output

        }
        else if (buttonText == '<-') {
            
            // console.log("string::",string)
            // console.log("string length::",string.length)
            if(inputText.value.length != 0){
                removechar = inputText.value.substring(0, inputText.value.length-1)
                inputText.value = removechar
                screenValue = removechar
                // console.log("<- :::::::::",inputText.value)
            }
           
        }
        else if (buttonText == 'sqr') {
            let output = eval(string*string)
            inputText.value = output
            screenValue = inputText.value
            string = screenValue
            
           
        }
        else {
            
            screenValue += buttonText
            inputText.value = screenValue
            string = inputText.value
        }

    })

}

