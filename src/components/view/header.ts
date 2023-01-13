import { State } from '../types/types';

export default class Header {
  header: HTMLElement = document.createElement('header');

  garageBTN: HTMLButtonElement = document.createElement('button');

  winnersBTN: HTMLButtonElement = document.createElement('button');

  mainContainer: HTMLElement = document.createElement('div');

  drawHeader(callback: (obj: State) => void, callback1: (obj: State) => void, state: State) {
    this.createGarageBTN();
    this.createWinnersBTN();
    this.createMainContainer();
    this.header.append(this.garageBTN);
    this.header.append(this.winnersBTN);
    document.body.append(this.header);
    document.body.append(this.mainContainer);
    this.addListener(callback, callback1, state);
  }

  createGarageBTN() {
    this.garageBTN.classList.add('btn', 'garageBTN');
    this.garageBTN.textContent = 'Garage';
  }

  createWinnersBTN() {
    this.winnersBTN.classList.add('btn', 'winnersBTN');
    this.winnersBTN.textContent = 'Winners';
  }

  createMainContainer() {
    this.mainContainer.classList.add('mainContainer');
  }

  addListener(callback: (obj: State) => void, callback1: (obj: State) => void, obj: State) {
    const state = obj;
    this.garageBTN.addEventListener('click', () => {
      if (state.view === 'winners') {
        callback(state);
        state.view = 'garage';
      }
      return false;
    });

    this.winnersBTN.addEventListener('click', () => {
      const modalWindow = document.querySelector('.garageModal');
      const raceBtn = document.querySelector<HTMLButtonElement>('.btnStartRace');
      if (state.view === 'garage') {
        callback1(state);
        state.view = 'winners';
        if (modalWindow) {
          modalWindow.classList.remove('garageModal--active');
        }
        if (raceBtn) {
          raceBtn.disabled = false;
        }
      }
      return false;
    });
  }
}
