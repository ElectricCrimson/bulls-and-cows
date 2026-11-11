function createWrapper(className?: string): HTMLDivElement {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  if (className) wrapper.classList.add(`${className}`);
  return wrapper;
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
  const notationWrapper = createWrapper();
  const numberWrapper = createWrapper();

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

  const main = document.createElement('main');
  main.classList.add('main');

  const inputWrapper = createWrapper('wrapper-input');
  const input = document.createElement('input');
  input.classList.add('input');
  input.type = 'text';
  input.id = 'input';
  input.maxLength = 30;
  inputWrapper.append(input);

  const tableWrapper = createWrapper('wrapper-table');
  const historyWrapper = createWrapper('wrapper-history');

  const footer = document.createElement('footer');
  footer.classList.add('footer');

  headerWrapper.append(notationWrapper, numberWrapper);
  header.append(headerWrapper);
  main.append(historyWrapper, inputWrapper);
  footer.append(tableWrapper);
  body.append(header, main, footer);
}
