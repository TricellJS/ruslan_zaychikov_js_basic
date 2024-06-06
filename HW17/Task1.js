function randomDelayPrint(message) {
  const delays = {
    'H': 600,  // Невелика затримка
    'e': 1200,  // Велика затримка
    'l': 300,  // Маленька затримка
    'o': 1200   // Велика затримка
  };

  for (let i = 0; i < message.length; i++) {
    const char = message[i];
    const delay = delays[char] || Math.random() * 1000;
    setTimeout(() => {
      console.log(char); 
    }, delay);
  }
}

randomDelayPrint("Hello");

