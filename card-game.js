document.addEventListener("DOMContentLoaded", () => {
  let card;
  let container = document.createElement("div");
  let row = document.createElement("div");
  let restartButton = document.createElement("button");

  document.body.append(container);
  container.classList.add("container");
  container.append(row);
  row.classList.add("row");
  container.append(restartButton);
  restartButton.classList.add(
    "btn",
    "btn-dark",
    "btn-lg",
    "btn-outline-primary",
    "mt-3"
  );
  restartButton.type = "button";
  restartButton.textContent = "сначала";
  restartButton.style.width = "100%";

  restartButton.addEventListener("click", () => {
    window.location.reload();
  });

  let listOfCards = [
    '<img src="./загруженное (1).jpg" alt="#"></img>',
    '<img src="./загруженное (2).jpg" alt="#">',
    '<img src="./загруженное (3).jpg" alt="#">',
    '<img src="./загруженное (4).jpg" alt="#">',
    '<img src="./загруженное (5).jpg" alt="#">',
    '<img src="./666.jpg" alt="#">',
    '<img src="./загруженное (7).jpg" alt="#">',
    '<img src="./загруженное.jpg" alt="#">',
    '<img src="./загруженное (1).jpg" alt="#"></img>',
    '<img src="./загруженное (2).jpg" alt="#">',
    '<img src="./загруженное (3).jpg" alt="#">',
    '<img src="./загруженное (4).jpg" alt="#">',
    '<img src="./загруженное (5).jpg" alt="#">',
    '<img src="./666.jpg" alt="#">',
    '<img src="./загруженное (7).jpg" alt="#">',
    '<img src="./загруженное.jpg" alt="#">',
  ];

  //перемешиваем массив с помощью алгоритма фишера йетса
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Обмен элементов
    }
    return array;
  }

  let openedPairs = 0;
  let count = 0;
  let firstCard;
  let secondCard;
  function createCard(name) {
    let card = document.createElement("button");
    card.classList.add("col");
    row.append(card);

    card.textContent = name;
    card.classList.add("flipped");
    card.textContent = "";

    card.addEventListener("click", () => {
      if (count === 0) {
        if (card.classList.contains("flipped")) {
          count++;
          firstCard = card;
          firstCard.classList.remove("flipped");
          card.innerHTML = name;
          return;
        } else return;
      }
      if (count === 1) {
        if (card.classList.contains("flipped")) {
          secondCard = card;
          secondCard.classList.remove("flipped");
          card.innerHTML = name;
          if (firstCard.innerHTML === secondCard.innerHTML) {
            openedPairs++;
            firstCard = 1;
            secondCard = 2;
            count = 0;
            //setTimeout(ifEquals, 400);
            if (openedPairs === 8) {
              setTimeout(function () {
                if (confirm("ВЫ ВЫИГРАЛИ!!\nСначала а??")) {
                  window.location.reload();
                }
              }, 1000);
            }
            return;
          } else {
            count = 0;
            function ifEquals() {
              firstCard.classList.add("flipped");
              firstCard.innerHTML = "";
              secondCard.classList.add("flipped");
              secondCard.innerHTML = "";
            }
            setTimeout(ifEquals, 400);
          }
          return;
        }
      }
    });
  }

  //создаем поле с карточками
  function createAllCards() {
    for (let item in shuffleArray(listOfCards)) {
      if (
        parseInt(item) === 4 ||
        parseInt(item) === 8 ||
        parseInt(item) === 12
      ) {
        let indent = document.createElement("div");
        indent.classList.add("w-100");
        row.append(indent);
        card = createCard(listOfCards[item]);
      } else {
        card = createCard(listOfCards[item]);
      }
    }
  }
  createAllCards();
});
