import { createHistoryList } from './createHistoryList';

export function createWrapper(className?: string): HTMLDivElement {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  if (className) wrapper.classList.add(`${className}`);
  return wrapper;
}

function handleHeaderBtns(e: Event, wrapper: HTMLDivElement) {
  if (!(e.target instanceof HTMLElement)) return;
  const currentBtn = e.target.closest('.btn');

  if (currentBtn) {
    const activeBtn = wrapper.querySelector('.btn-active');
    activeBtn?.classList.remove('btn-active');
    currentBtn.classList.add('btn-active');
  }
}

export function createGameBoard(): void {
  const notationButtons = ['bin', 'oct', 'dec', 'hex'];
  const notationIds = [2, 8, 10, 16];
  const numberButtons = Array.from({ length: 5 }, (_, i) => i + 2);

  const body = document.querySelector('.body');
  if (!body) return;

  const header = document.createElement('header');
  header.classList.add('header');

  const headerWrapper = createWrapper('wrapper-header');
  const notationWrapper = createWrapper('wrapper-notation');
  const numberWrapper = createWrapper('wrapper-number');

  notationWrapper.addEventListener('click', (e) => handleHeaderBtns(e, notationWrapper));
  numberWrapper.addEventListener('click', (e) => handleHeaderBtns(e, numberWrapper));

  notationButtons.forEach((button, i) => {
    const item = document.createElement('button');
    item.classList.add('btn');
    item.innerHTML = `${button}`;
    item.id = `not-${notationIds[i]}`;
    notationWrapper.append(item);
  });

  numberButtons.forEach((button, i) => {
    const item = document.createElement('button');
    item.classList.add('btn');
    item.innerHTML = `${button}`;
    item.id = `num-${numberButtons[i]}`;
    numberWrapper.append(item);
  });

  const startButton = document.createElement('button');
  startButton.innerHTML = 'start';
  startButton.classList.add('btn', 'btn-start');

  const historyTitleWrapper = createWrapper('wrapper-title');
  const guessText = document.createElement('p');
  guessText.innerHTML = 'YOUR GUESSES';
  guessText.classList.add('guess-title');

  const scoreWrapper = createWrapper('wrapper-score');
  const bullsText = document.createElement('p');
  bullsText.innerHTML = 'BULLS';
  bullsText.classList.add('guess-title');

  const cowsText = document.createElement('p');
  cowsText.innerHTML = 'COWS';
  cowsText.classList.add('guess-title');
  scoreWrapper.append(bullsText, cowsText);

  historyTitleWrapper.append(guessText, scoreWrapper);

  const main = document.createElement('main');
  main.classList.add('main');

  const form = document.createElement('form');
  form.classList.add('form');

  const inputWrapper = createWrapper('wrapper-input');
  const input = document.createElement('input');
  input.classList.add('input');
  input.type = 'text';
  input.id = 'input';
  input.maxLength = 30;
  input.addEventListener('input', (e) => {
    if (e.target instanceof HTMLInputElement) {
      const value = e.target.value;
      console.log(value);
    }
  });

  const checkButton = document.createElement('button');
  checkButton.classList.add('btn', 'btn-check');
  checkButton.innerHTML = 'check';

  form.append(input, checkButton);
  inputWrapper.append(form);

  const tableWrapper = createWrapper('wrapper-table');
  const historyWrapper = createWrapper('wrapper-history');
  const historyList = createHistoryList([]);
  historyWrapper.append(historyList);

  const footer = document.createElement('footer');
  footer.classList.add('footer');

  headerWrapper.append(notationWrapper, numberWrapper, startButton);
  header.append(headerWrapper);
  main.append(historyTitleWrapper, historyWrapper, inputWrapper);
  footer.append(tableWrapper);
  body.append(header, main, footer);
}
