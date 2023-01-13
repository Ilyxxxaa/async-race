export default class CarSettings {
  carSettingsContainer: HTMLElement = document.createElement('div');

  sectionCreate: HTMLElement = document.createElement('div');

  sectionUpdate: HTMLElement = document.createElement('div');

  sectionButtons: HTMLElement = document.createElement('div');

  inputCreateCar: HTMLElement = document.createElement('input');

  inputUpdateCar: HTMLElement = document.createElement('input');

  inputCreateColor: HTMLElement = document.createElement('input');

  inputUpdateColor: HTMLElement = document.createElement('input');

  btnCreateCar: HTMLButtonElement = document.createElement('button');

  btnUpdateCar: HTMLButtonElement = document.createElement('button');

  btnStartRace: HTMLButtonElement = document.createElement('button');

  resetBTN: HTMLButtonElement = document.createElement('button');

  btnGenerateCars: HTMLButtonElement = document.createElement('button');

  async drawSettings() {
    this.makeElements();

    this.sectionCreate.append(this.inputCreateCar, this.inputCreateColor, this.btnCreateCar);
    this.sectionUpdate.append(this.inputUpdateCar, this.inputUpdateColor, this.btnUpdateCar);
    this.sectionButtons.append(this.btnStartRace, this.resetBTN, this.btnGenerateCars);
    this.carSettingsContainer.append(this.sectionCreate, this.sectionUpdate, this.sectionButtons);
  }

  makeElements() {
    this.makeCarSettingsContainer();
    this.makeSectionCreate();
    this.makeSectionUpdate();
    this.makeSectionButtons();
    this.makeInputCreateCar();
    this.makeInputUpdateCar();
    this.makeInputCreateColor();
    this.makeInputUpdateColor();
    this.makeBtnCreateCar();
    this.makeBtnStartRace();
    this.makeBtnUpdateCar();
    this.makeResetBTN();
    this.makeBtnGenerateCars();
  }

  makeCarSettingsContainer() {
    this.carSettingsContainer.classList.add('carSettingsContainer');
  }

  makeSectionCreate() {
    this.sectionCreate.classList.add('section', 'sectionCreate');
  }

  makeSectionUpdate() {
    this.sectionUpdate.classList.add('section', 'sectionUpdate');
  }

  makeSectionButtons() {
    this.sectionButtons.classList.add('section', 'sectionButtons');
  }

  makeInputCreateCar() {
    this.inputCreateCar.setAttribute('type', 'text');
    this.inputCreateCar.classList.add('input', 'createCarInput');
  }

  makeInputUpdateCar() {
    this.inputUpdateCar.setAttribute('type', 'text');
    this.inputUpdateCar.setAttribute('disabled', 'true');
    this.inputUpdateCar.classList.add('input', 'updateCarInput');
  }

  makeInputCreateColor() {
    this.inputCreateColor.setAttribute('type', 'color');
    this.inputCreateColor.setAttribute('value', '#e66465');
    this.inputCreateColor.classList.add('color-input', 'createColorInput');
  }

  makeInputUpdateColor() {
    this.inputUpdateColor.setAttribute('type', 'color');
    this.inputUpdateColor.setAttribute('value', '#e12583');
    this.inputUpdateColor.classList.add('color-input', 'updateColorInput');
  }

  makeBtnCreateCar() {
    this.btnCreateCar.classList.add('createCarBtn', 'btn1');
    this.btnCreateCar.textContent = 'CREATE';
  }

  makeBtnUpdateCar() {
    this.btnUpdateCar.classList.add('updateCarBtn', 'btn1');
    this.btnUpdateCar.textContent = 'UPDATE';
  }

  makeBtnStartRace() {
    this.btnStartRace.classList.add('btnStartRace', 'btn2');
    this.btnStartRace.textContent = 'RACE';
  }

  makeResetBTN() {
    this.resetBTN.classList.add('resetBtn', 'btn2');
    this.resetBTN.textContent = 'RESET';
    this.resetBTN.setAttribute('disabled', 'true');
  }

  makeBtnGenerateCars() {
    this.btnGenerateCars.classList.add('btnGenerateCars', 'btn2');
    this.btnGenerateCars.textContent = 'GENERATE CARS';
  }
}
