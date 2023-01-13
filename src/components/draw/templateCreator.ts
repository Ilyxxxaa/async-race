import { NewCar, CarInfo } from '../types/types';

export default class TemplateCreator {
  createTemplate(name: string, color: string, id: number) {
    return ` <div class="car__field" id ="${id}">
    <div class="car__field-top">
        <button class="car__field-select car__field-top-btn">Select</button>
        <button class="car__field-remove car__field-top-btn">Remove</button>
        <div class="car__field-model">${name}</div>
    </div>
    <div class="car__field-main">
        <button class="car__field-btn car-start-btn">A</button>
        <button class="car__field-btn car-stop-btn" disabled ='true'>B</button>
        <div class="car-image" data-color="${color}">
            ${this.returnSVG(color)}
        </div>
        <div class="flag-image">
            <img src="assets/images/flag.svg" alt="flag">
        </div>
    </div>
</div>`;
  }

  createRowTemplate(
    obj: { car: CarInfo; id: number; time: number; wins?: number | undefined },
    index: number,
    pageNumber: number,
  ) {
    return ` 
    <td class="tableData tableNumber">
        ${this.createWinnerNumber(pageNumber, index)}
    </td>
    <td class="tableData tableCar">
        ${this.returnSVG(obj.car.color)}
    </td>
    <td class="tableData tableName">
    ${obj.car.name}
   </td>
   <td class="tableData tableWins">
   ${obj.wins}
</td>
    <td class="tableData tableTime">
    ${obj.time}
    </td>
`;
  }

  createWinnerNumber(pageNumber: number, index: number) {
    if (pageNumber === 1) return index + 1;
    return 10 * (pageNumber - 1) + index + 1;
  }

  generateRandomCars() {
    const cars = new Array(100).fill(1).map(() => {
      const car: NewCar = {
        name: this.getRandomName(),
        color: this.getRandomColor(),
      };
      return car;
    });

    return cars;
  }

  getRandomName() {
    const models = [
      'Opel',
      'Audi',
      'BMW',
      'Mersedes',
      'Lada',
      'Volkswagen',
      'Kia',
      'Tesla',
      'Hyundai',
      'Mazda',
    ];

    const names = [
      'Vectra',
      'Q7',
      'M5',
      'AMG',
      'Granta',
      'Polo',
      'Rio',
      'Model S',
      'Santa Fe',
      'CX-9',
    ];

    const model = models[Math.floor(Math.random() * 10)];
    const name = names[Math.floor(Math.random() * 10)];

    return `${model} ${name}`;
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  returnSVG(color: string) {
    return `<svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 180" width="120" height="43" fill="${color}">
<path fill-rule="evenodd" d="m2.2 125.4c0.9-4.5 2.2-9.9 2.2-9.9l-0.2-11.8c0 0 7.5-3.8 7.8-5.6 0.2-1.8 1.1-23.1 3.5-26.8 
2.5-3.8-1.1-17.1-1.1-17.1h17.4c0 0 17.6-15.1 30-20.7 0 0 2-8.7-5.3-13.3l-0.2-2.7c0 0 16-2.2 37.3-3.8 0 0 7.3-7.9 18-9.1 
10.7-1.2 135.3-10 166.2 13.4 30.9 23.4 53.1 39 53.1 39 0 0 126.9-0.8 157.2 31.6 0 0 0.4 11.1 0 16.9 0 0 3.1 5.3 7.3 6.6 
4.3 1.3-1.1 8.8-1.1 8.8 0 0-8.9 4.8-9.5 11.6-0.7 6.9-18.1 15.6-26.3 21.6 0 0 5.2-58-44.5-62.4-49.7-4.5-53.2 59.1-53.2 
59.1h-180.3c0 0-23.6 7.1-29.4 3.3 0 0-2.2-62.4-47.2-62.4-45 0-52.5 38.6-49 56 0 0-12.4 0.4-17.8-4.5-5.3-4.9-16.5-0.9-16.5-0.9 
0 0-12.9 0.5-9.3-5.8 0 0-10-6.5-9.1-11.1zm10.2 0.6l34.5 1.7c0 0 13.8-42.7 55.7-42.4 41.8 0.3 50.3 47.2 50.3 47.2l205.3 2.1c0 0 
2.1-45 50.6-49.3 48.6-4.3 54.4 49.3 54.4 49.3 0 0 12.2-0.1 15.3-2.5 0 0-8.7-0.9-11.1-3.1-2.5-2.2-4.7-48.4-56.3-48.4-51.7 0-57.9 
47.2-57.9 47.2l-195.9 0.3c0 0-8.7-39.8-49.6-46.4l0.2-19.3 3.1-4.8c35.2 2.4 70.9 3.4 102.4 3.6l1.2 63.4c6-29.4 1.9-53.9-0.3-63.4q6 
0 11.7 0c20.6 0 39-0.3 53.6-0.6l-0.5-1.2c-0.9-2.5-1.1-4.7-1-6.5-0.4-7.9 6.7-9.2 6.7-9.2-18.2-14.4-47.8-19.7-59.4-20.2-11.6-0.4-6.8 
9.7-6.8 9.7l6.6 24.5-11.8-0.2c0-0.1-0.1 0.1-0.1 0h-0.1c-3.8-0.1-7.5-0.2-11.3-0.2l-0.1-0.2-3-33.6c0 0-49.3-2.6-58 13.1l2.1 
19.3c-11.3-0.2-21.8 0.2-30.6 0.1l-0.5-0.1-26.9-0.4c8.3 0.7 16.7 1.4 25.1 2l-4.8 4.2-0.4 18.6c0 0-46.3-0.4-60.1 43.2 0 
0-9.6-8.3-10.7-17.6 0 0-14.7 3.1-26.7 0 0 0-2.5 8.6 5.1 20.1zm34.8-69.2c1.6-1.1 26.8-19.2 30.9-22.9 4.2-3.7 4.6-7.3 
4.6-7.3zm270.7 0.1c0 0-43.4-35-74.2-40.5-30.7-5.6-98.1-2.7-118.2 7.3-19.3 9.7-74 30.1-39.9 31.5-19.2-10.4 67.1-35 
67.1-35 0 0 75.2-7.8 103.3 2.4 28 10.2 59 36.7 59 36.7 3.3 0.1 5.1 0.2 5.1 0.2zm-205-47.3l5.3 4c95.3-8.9 133.8-0.6 
147.8 4.7-50.5-22.4-153.1-8.7-153.1-8.7zm-48.1 10.8v3.1c0 0 28.5-4.7 44.5-5.9zm232 39.8c0 0 7.1-4.6 
2.3-9.8-4.7-5.1-10.7-4.8-10.7-4.8 0 0 13 5.7 8.4 14.6zm27.1 1.9c21.3 16.9 9.2 59.3 8.3 62.2 21-50.5-8.3-62.2-8.3-62.2zm19.5 
62.4h7.8c3.3-22.1 17.5-32.1 17.5-32.1-17.5-1.5-25.3 32.1-25.3 32.1zm138.3-28c4.4-4.4 0-8.7 0-8.7-18.9-14-60.1-14.3-60.1-14.3 
29.1 9 33.1 17.6 39.9 21.2 6.8 3.6 20.2 1.8 20.2 1.8zm-457.2-32.4c-13.7 15.2 2 16.2 19.2 10.8 17.1-5.3 15.1-10.8 
15.1-10.8zm225.2 8c0-0.9-0.8-1.7-1.7-1.7h-25.9c-0.9 0-1.6 0.8-1.6 1.7 0 0.9 0.7 1.6 1.6 1.6h25.9c0.9 0 1.7-0.7 
1.7-1.6zm-104.9-2.2c0-0.9-0.7-1.5-1.5-1.5h-25.8c-0.9 0-1.5 0.6-1.5 1.5 0 0.8 0.6 1.4 1.5 1.4h25.8c0.8 0 1.5-0.6 1.5-1.4z"/>
<path d="m266 18.4q3.8 1.6 7 3.5c-0.1-0.1-1.9-1.6-7-3.5z"/>
<path fill-rule="evenodd" d="m101.9 108.1c16.4 0 29.7 13.2 29.7 29.5 0 16.3-13.3 29.5-29.7 29.5-16.4 0-29.7-13.2-29.7-29.5 
0-16.3 13.3-29.5 29.7-29.5zm-9.6 6.3l9.6 16.4 8-16.4c-7.1-5.9-17.6 0-17.6 0zm6.2 23.2c0 2.2 1.8 3.9 4 3.9 2.2 0 4-1.7 4-3.9 
0-2.2-1.8-3.9-4-3.9-2.2 0-4 1.7-4 3.9zm21-18.5l-10.1 16 18.2-0.4c2-9.1-8.1-15.6-8.1-15.6zm6.8 23.8l-19-0.4 9.7 15.3c8.9-2.8 
9.3-14.9 9.3-14.9zm-15.6 19.1l-9.2-16.5-8.4 16.1c7 6.2 17.6 0.4 17.6 0.4zm-24.5-3.8l10.1-16.1-18.2 0.5c-2 9 8.1 15.6 8.1 
15.6zm9.3-23.6l-11.7-13.9c-8.4 4.1-7.2 16.1-7.2 16.1z"/>
<path fill-rule="evenodd" d="m102.5 97.4c22.8 0 41.2 18.3 41.2 41 0 22.7-18.4 41-41.2 41-22.8 0-41.2-18.3-41.2-41 0-22.7 18.4-41 41.2-41zm-33.2 
40.2c0 17.9 14.6 32.5 32.6 32.5 18.1 0 32.7-14.6 32.7-32.5 0-18-14.6-32.5-32.7-32.5-18 0-32.6 14.5-32.6 32.5z"/>
<path fill-rule="evenodd" d="m101.9 108.1c16.4 0 29.7 13.2 29.7 29.5 0 16.3-13.3 29.5-29.7 29.5-16.4 0-29.7-13.2-29.7-29.5 
0-16.3 13.3-29.5 29.7-29.5zm-9.6 6.3l9.6 16.4 8-16.4c-7.1-5.9-17.6 0-17.6 0zm6.2 23.2c0 2.2 1.8 3.9 4 3.9 2.2 0 4-1.7 4-3.9 
0-2.2-1.8-3.9-4-3.9-2.2 0-4 1.7-4 3.9zm21-18.5l-10.1 16 18.2-0.4c2-9.1-8.1-15.6-8.1-15.6zm6.8 23.8l-19-0.4 9.7 15.3c8.9-2.8 
9.3-14.9 9.3-14.9zm-15.6 19.1l-9.2-16.5-8.4 16.1c7 6.2 17.6 0.4 17.6 0.4zm-24.5-3.8l10.1-16.1-18.2 0.5c-2 9 8.1 15.6 8.1 
15.6zm9.3-23.6l-11.7-13.9c-8.4 4.1-7.2 16.1-7.2 16.1z"/>
<path fill-rule="evenodd" d="m101.9 108.1c16.4 0 29.7 13.2 29.7 29.5 0 16.3-13.3 29.5-29.7 29.5-16.4 0-29.7-13.2-29.7-29.5 0-16.3 
13.3-29.5 29.7-29.5zm-9.6 6.3l9.6 16.4 8-16.4c-7.1-5.9-17.6 0-17.6 0zm6.2 23.2c0 2.2 1.8 3.9 4 3.9 2.2 0 4-1.7 
4-3.9 0-2.2-1.8-3.9-4-3.9-2.2 0-4 1.7-4 3.9zm21-18.5l-10.1 16 18.2-0.4c2-9.1-8.1-15.6-8.1-15.6zm6.8 23.8l-19-0.4 9.7 15.3c8.9-2.8 
9.3-14.9 9.3-14.9zm-15.6 19.1l-9.2-16.5-8.4 16.1c7 6.2 17.6 0.4 17.6 0.4zm-24.5-3.8l10.1-16.1-18.2 0.5c-2 9 8.1 15.6 8.1 
15.6zm9.3-23.6l-11.7-13.9c-8.4 4.1-7.2 16.1-7.2 16.1z"/>
<path fill-rule="evenodd" d="m409.1 108.1c16.4 0 29.7 13.2 29.7 29.5 0 16.3-13.3 29.5-29.7 29.5-16.4 0-29.7-13.2-29.7-29.5 0-16.3 
13.3-29.5 29.7-29.5zm-9.6 6.3l9.6 16.4 8-16.4c-7.1-5.9-17.6 0-17.6 0zm6.2 23.2c0 2.2 1.8 3.9 4 3.9 2.2 0 4-1.7 4-3.9 
0-2.2-1.8-3.9-4-3.9-2.2 0-4 1.7-4 3.9zm21-18.5l-10.2 16 18.2-0.4c2.1-9.1-8-15.6-8-15.6zm6.8 23.8l-19-0.4 9.7 15.3c8.9-2.8 
9.3-14.9 9.3-14.9zm-15.6 19.1l-9.3-16.5-8.3 16.1c7 6.2 17.6 0.4 17.6 0.4zm-24.5-3.8l10.1-16.1-18.2 0.5c-2 9 8.1 15.6 8.1 
15.6zm9.3-23.6l-11.8-13.9c-8.3 4.1-7.1 16.1-7.1 16.1z"/>
<path fill-rule="evenodd" d="m409.7 97.4c22.8 0 41.2 18.3 41.2 41 0 22.7-18.4 41-41.2 41-22.8 0-41.2-18.3-41.2-41 0-22.7 18.4-41 
41.2-41zm-33.2 40.2c0 17.9 14.6 32.5 32.6 32.5 18.1 0 32.7-14.6 32.7-32.5 0-18-14.6-32.5-32.7-32.5-18 0-32.6 14.5-32.6 32.5z"/>
<path fill-rule="evenodd" d="m409.1 108.1c16.4 0 29.7 13.2 29.7 29.5 0 16.3-13.3 29.5-29.7 29.5-16.4 0-29.7-13.2-29.7-29.5 0-16.3 
13.3-29.5 29.7-29.5zm-9.6 6.3l9.6 16.4 8-16.4c-7.1-5.9-17.6 0-17.6 0zm6.2 23.2c0 2.2 1.8 3.9 4 3.9 2.2 0 4-1.7 4-3.9 0-2.2-1.8-3.9-4-3.9-2.2 
0-4 1.7-4 3.9zm21-18.5l-10.2 16 18.2-0.4c2.1-9.1-8-15.6-8-15.6zm6.8 23.8l-19-0.4 9.7 15.3c8.9-2.8 9.3-14.9 9.3-14.9zm-15.6 19.1l-9.3-16.5-8.3 
16.1c7 6.2 17.6 0.4 17.6 0.4zm-24.5-3.8l10.1-16.1-18.2 0.5c-2 9 8.1 15.6 8.1 15.6zm9.3-23.6l-11.8-13.9c-8.3 4.1-7.1 16.1-7.1 16.1z"/>
<path fill-rule="evenodd" d="m409.1 108.1c16.4 0 29.7 13.2 29.7 29.5 0 16.3-13.3 29.5-29.7 29.5-16.4 0-29.7-13.2-29.7-29.5 
0-16.3 13.3-29.5 29.7-29.5zm-9.6 6.3l9.6 16.4 8-16.4c-7.1-5.9-17.6 0-17.6 0zm6.2 23.2c0 2.2 1.8 3.9 4 3.9 2.2 0 4-1.7 4-3.9 
0-2.2-1.8-3.9-4-3.9-2.2 0-4 1.7-4 3.9zm21-18.5l-10.2 16 18.2-0.4c2.1-9.1-8-15.6-8-15.6zm6.8 23.8l-19-0.4 9.7 15.3c8.9-2.8 
9.3-14.9 9.3-14.9zm-15.6 19.1l-9.3-16.5-8.3 16.1c7 6.2 17.6 0.4 17.6 0.4zm-24.5-3.8l10.1-16.1-18.2 0.5c-2 9 8.1 15.6 8.1 
15.6zm9.3-23.6l-11.8-13.9c-8.3 4.1-7.1 16.1-7.1 16.1z"/>
</svg>`;
  }
}