import Winners from '../view/winners';
import Controller from '../controller/controller';
import TemplateCreator from './templateCreator';
import { GetWinners, State } from '../types/types';

export default class DrawWinners {
  winners = new Winners();

  controller = new Controller();

  templateCreator = new TemplateCreator();

  drawWinners: (obj: State) => void = async (obj) => {
    this.winners.drawWinners();
    this.updateWinners(obj);
  };

  async updateWinners(obj: State) {
    const winnersTitle = document.querySelector('.winnersTitle');
    const tableBody = document.querySelector('.tableBody');
    const winnersPageNumber = document.querySelector('.winnersPageNumber');

    if (tableBody) {
      tableBody.innerHTML = '';
    }
    const winners = await this.controller.getWinners({
      page: obj.winnersPage,
      sort: obj.sort,
      order: obj.order,
    });

    this.checkPaginationsButtons(obj, winners);

    if (winnersTitle) {
      winnersTitle.textContent = ` Winners (${winners.count})`;
    }
    if (winnersPageNumber) {
      winnersPageNumber.textContent = `Page #${obj.winnersPage}`;
    }
    winners.items.forEach((winner, index) => {
      const tableRow = document.createElement('tr');
      tableRow.innerHTML = this.templateCreator.createRowTemplate(winner, index, obj.winnersPage);
      tableBody?.append(tableRow);
    });
  }

  addListeners(obj: State) {
    this.addListenersToPagination(obj);
    this.addListenerToTable(obj);
  }

  addListenersToPagination(obj: State) {
    const paginationBtnNext = document.querySelector<HTMLButtonElement>('.winnersPaginationNext');
    const paginationBtnPrev = document.querySelector<HTMLButtonElement>('.winnersPaginationPrev');
    const winnersPageNumber = document.querySelector('.winnersPageNumber');
    const state = obj;

    if (paginationBtnNext && winnersPageNumber) {
      paginationBtnNext.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target) {
          state.winnersPage += 1;
          winnersPageNumber.textContent = `Page #${state.winnersPage}`;
          this.updateWinners(obj);
        }
      });
    }

    if (paginationBtnPrev && winnersPageNumber) {
      paginationBtnPrev.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;
        if (target) {
          if (state.winnersPage > 1) {
            state.winnersPage -= 1;
            winnersPageNumber.textContent = `Page #${state.winnersPage}`;
            this.updateWinners(obj);
          }
        }
      });
    }
  }

  checkPaginationsButtons(obj: State, winnersObj: GetWinners) {
    const paginationBtnNext = document.querySelector<HTMLButtonElement>('.winnersPaginationNext');
    const paginationBtnPrev = document.querySelector<HTMLButtonElement>('.winnersPaginationPrev');
    const { count } = winnersObj;
    if (paginationBtnNext && count) {
      if (+count / 10 <= obj.winnersPage) {
        paginationBtnNext.disabled = true;
      } else paginationBtnNext.disabled = false;
    }
    if (paginationBtnPrev) {
      if (obj.winnersPage === 1) {
        paginationBtnPrev.disabled = true;
      } else paginationBtnPrev.disabled = false;
    }
  }

  addListenerToTable(obj: State) {
    const state = obj;
    const winsBtn = document.querySelector('.tableHeadWins');
    const timeBtn = document.querySelector('.tableHeadTime');

    winsBtn?.addEventListener('click', () => {
      state.sort = 'wins';
      if (state.order === 'ASC') {
        state.order = 'DESC';
        winsBtn.textContent = 'Wins ↑';
      } else {
        state.order = 'ASC';
        winsBtn.textContent = 'Wins ↓';
      }

      this.updateWinners(obj);
    });

    timeBtn?.addEventListener('click', () => {
      state.sort = 'time';
      if (state.order === 'ASC') {
        state.order = 'DESC';
        timeBtn.textContent = 'Time ↑';
      } else {
        state.order = 'ASC';
        timeBtn.textContent = 'Time ↓';
      }
      this.updateWinners(obj);
    });
  }
}
