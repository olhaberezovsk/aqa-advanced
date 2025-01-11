function delayTextDisplaying (text, delay) {
    setTimeout(() => console.log(text), delay) 
}

delayTextDisplaying('Test Text To Display', 1000)