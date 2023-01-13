import CarSettings from './carSettings';
import Garage from './garage';
import { State } from '../types/types';

export default class MainSection {
  mainSection: HTMLElement;

  carSettings: CarSettings;

  garage: Garage;

  constructor() {
    this.mainSection = document.createElement('div');
    this.carSettings = new CarSettings();
    this.garage = new Garage();
  }

  drawMainSection(obj: State) {
    const mainContainer = document.querySelector('.mainContainer');
    this.carSettings.drawSettings();
    this.garage.drawGarage(obj);
    this.mainSection.append(this.carSettings.carSettingsContainer, this.garage.garageContainer);
    if (mainContainer) {
      mainContainer.innerHTML = '';
      mainContainer.append(this.mainSection);
    }
  }

  makeMainSection() {
    this.mainSection.classList.add('mainSection');
  }
}
