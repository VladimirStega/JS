(() => {

    function createTitle(title) {
      const appTitle = document.createElement('h1');
      appTitle.innerHTML = title;
      appTitle.classList.add('title');
      return appTitle;
    }

    function marginSideSize() {
      const form = document.createElement('form');
      const input = document.createElement('input');
      const button = document.createElement('button');

      form.classList.add('form');
      form.innerText = 'Кол-во карточек по вертикали/горизонтали';
      input.classList.add('input');
      input.type = 'text';
      input.placeholder = 'Введите четное число от 2 до 10';
      button.classList.add('start-button');
      button.textContent = 'Запустить игру';

      form.append(input);
      form.append(button);

      return {
        form,
        input,
        button,
      };
    }

    let timerId;

    function initGame() {
      const formContainer = document.querySelector('.header');
      const gameAppTitle = createTitle('Игра в пары');
      const numberOfCardsForm = marginSideSize();

      formContainer.append(gameAppTitle);
      formContainer.append(numberOfCardsForm.form);

      numberOfCardsForm.form.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputValue = numberOfCardsForm.input.value;
        if (!inputValue) {
          return;
        }

        const validNumber = checkBoardSize(inputValue);
        if (!validNumber) {
          numberOfCardsForm.input.value = '4';
        } else {
          numberOfCardsForm.input.value = '';
          numberOfCardsForm.button.disabled = true;
          timerId = setTimeout(() => {
            alert('Время игры закончилось');
            window.location.reload();
          }, 60000);
          startOfGame(Math.pow(validNumber, 2));
        }
      });
    }

    function checkBoardSize(numb) {
      if (numb > 1 && numb < 11) {
        if (!(numb % 2)) {
          return numb;
        }
      }
      return null;
    }

    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let t = array[i];
        array[i] = array[j];
        array[j] = t;
      }
      return array;
    }

    function createCardList() {
      const list = document.createElement('ul');
      list.classList.add('cards_list');
      return list;
    }

    function createCard(idValue, numberOfCards) {
      const containerWidth = document.querySelector('.main').offsetWidth;
      const cardWidth = containerWidth * 0.85 / (Math.sqrt(numberOfCards));
      const card = document.createElement('li');
      const button = document.createElement('button');

      card.classList.add('card');
      card.setAttribute("style", `width: ${cardWidth}px; height: ${cardWidth}px;`);
      button.classList.add('btn');
      button.id = idValue;

      card.append(button);

      return {
        card,
        button,
      };
    }

    let numberOfCoincidences = 0;

    function startOfGame(numberOfCards) {

      const cards = [];
      let valueOfCards = numberOfCards / 2;

      for (let i = 0; i < numberOfCards; ++i) {
        cards.push(valueOfCards);
        if (i % 2) {
          --valueOfCards;
        }
      }

      const shuffledArray = shuffle(cards);

      createListOfCards(numberOfCards, shuffledArray);
    }


    function createListOfCards(numberOfCards, shuffledArray) {
      const section = document.querySelector('.main');
      const listOfCards = createCardList();

      for (let i = 0; i < numberOfCards; ++i) {
        let currentCard = createCard(i, numberOfCards);
        listOfCards.append(currentCard.card);
        currentCard.button.addEventListener('click', () => {
          let valueOfCard = shuffledArray[currentCard.button.id];
          currentCard.button.innerHTML = valueOfCard;
          comparePairs(currentCard, valueOfCard);
          if (numberOfCards === numberOfCoincidences * 2) {
            playAgain();
          }
        });
      }
      section.appendChild(listOfCards);
    }

    let firstOpenedCard = {};
    let secondOpenedCard = {};
    let isEqual = false;

    function comparePairs(card, value) {
      if (!Object.keys(firstOpenedCard).length) {
        firstOpenedCard = {
          card: card,
          value: value,
        };
        card.button.setAttribute('disabled', 'true');
      } else if (!Object.keys(secondOpenedCard).length) {
        secondOpenedCard = {
          card: card,
          value: value,
        };
        card.button.setAttribute('disabled', 'true');
        if (firstOpenedCard.value === secondOpenedCard.value) {
          isEqual = true;
          ++numberOfCoincidences;
          return;
        }
      } else {
        if (!isEqual) {
          firstOpenedCard.card.button.innerHTML = '';
          secondOpenedCard.card.button.innerHTML = '';
          firstOpenedCard.card.button.removeAttribute('disabled');
          secondOpenedCard.card.button.removeAttribute('disabled');
        } else {
          isEqual = false;
        }

        firstOpenedCard = {
          card: card,
          value: value,
        };

        card.button.setAttribute('disabled', 'true');
        secondOpenedCard = {};
      }
    }

    function playAgain() {
      const section = document.querySelector('.main');
      const button = document.createElement('button');
      button.innerText = 'Сыграть ещё раз';
      button.classList.add('start-button');
      section.after(button);

      clearTimeout(timerId);

      button.addEventListener('click', () => {
        console.log('Играем ещё раз!');
        window.location.reload();
      });
    }

    document.addEventListener('DOMContentLoaded', () => {
      initGame();
    });

  })();
