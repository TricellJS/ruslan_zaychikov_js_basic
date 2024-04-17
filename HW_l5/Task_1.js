function reverseString(str) {
    let inputText = '';
    for (let i = str.length - 1; i >= 0; i--) {
      inputText += str[i];
    }
    return inputText;
  }
  
  let inputString = prompt(`Введи свое слово или приложение, я его выведу с право на лево =):`);
  let inputText = reverseString(inputString);
  console.log(inputText);
  