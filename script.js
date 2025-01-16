const text =
  "Поздравляю с днём рождения! Желаю денег, счастья, здоровья, удачи и пизды в придачу, а также множества новых и интересных проектов!";
const typedTextElement = document.getElementById("typed-text");
const asciiBg = document.getElementById("ascii-bg");
const linkContainer = document.getElementById("link-container");

let index = 0;

// Эффект набора текста
function typeText() {
  if (index < text.length) {
    typedTextElement.textContent += text[index];
    index++;
    setTimeout(typeText, 70);
  } else {
    setTimeout(() => {
      linkContainer.classList.remove("hidden");
      linkContainer.classList.add("visible");
    }, 500);
  }
}

// Создание одного ASCII-символа
function addAsciiSymbol() {
  const symbols = ["@", "#", "$", "%", "&", "*", "+", "!", "?"];
  const symbol = symbols[Math.floor(Math.random() * symbols.length)];
  const asciiSymbol = document.createElement("div");

  asciiSymbol.textContent = symbol;
  asciiSymbol.className = "ascii-symbol";

  // Случайная позиция
  asciiSymbol.style.left = `${Math.random() * 100}%`;
  asciiSymbol.style.top = `${Math.random() * 100}%`;

  // Случайный размер
  asciiSymbol.style.fontSize = `${Math.random() * 1.5 + 1}rem`;

  asciiBg.appendChild(asciiSymbol);

  // Удаление символа после завершения анимации
  setTimeout(() => asciiSymbol.remove(), 5000);
}

// Постоянное появление ASCII-символов
function startAsciiRain() {
  setInterval(addAsciiSymbol, 200); // Интервал между символами
}

// Запуск эффектов
typeText();
startAsciiRain();
