import { IHistory } from '../core/types/types';
import { createWrapper } from './createGameBoard';

export function createHistoryList(history: IHistory[]): HTMLUListElement {
  const historyList = document.createElement('ul');
  historyList.classList.add('list-history');

  history.forEach((item) => {
    const historyItem = document.createElement('li');
    historyItem.classList.add('list-item');

    const guessWrapper = createWrapper('wrapper-title');
    const scoreWrapper = createWrapper('wrapper-score');

    const guessText = document.createElement('p');
    guessText.innerHTML = `${item.guess}`;
    guessText.classList.add('guess-title');
    guessWrapper.append(guessText);

    const bullsText = document.createElement('p');
    bullsText.innerHTML = `${item.bulls}`;
    bullsText.classList.add('guess-title');
    const cowsText = document.createElement('p');
    cowsText.innerHTML = `${item.cows}`;
    cowsText.classList.add('guess-title');

    scoreWrapper.append(bullsText, cowsText);

    historyItem.append(guessWrapper, scoreWrapper);
    historyList.append(historyItem);
  });

  return historyList;
}
