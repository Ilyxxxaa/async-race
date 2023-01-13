import './components/styles/body.scss';

import Header from './components/view/header';
import DrawGarage from './components/draw/drawGarage';
import DrawWinners from './components/draw/drawWinners';
import { State } from './components/types/types';

class App {
  state: State;

  drawGarage: DrawGarage;

  header: Header;

  drawWinners: DrawWinners;

  constructor() {
    this.state = {
      view: 'garage',
      page: 1,
      animation: [],
      cars: [],
      winnersPage: 1,
      sort: 'id',
      order: 'ASC',
    };
    this.header = new Header();
    this.drawGarage = new DrawGarage();
    this.drawWinners = new DrawWinners();
  }

  start() {
    // alert('Самооценка в консоли');
    // console.log('%cOnline-store-task', 'font-weight: bold; font-size: 18px');
    // console.log('%c190/190', 'font-weight: bold; font-size: 18px');
    // console.log(
    //   'Selftest: \n https://ilyxxaa.notion.site/Async-race-self-test-4a0ddcb7014244f5a74949622aa8cf9d\n\n',
    // );

    this.header.drawHeader(this.drawGarage.drawGarage, this.drawWinners.drawWinners, this.state);
    this.drawWinners.drawWinners(this.state);
    this.drawWinners.addListeners(this.state);
    this.drawGarage.drawGarage(this.state);
    this.drawGarage.addListeners(this.state);
  }
}

const app = new App();
app.start();
