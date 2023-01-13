export default class Winners {
  winnersContainer = document.createElement('div');

  winnersTitle = document.createElement('h1');

  winnersPageNumber = document.createElement('div');

  winnersTable = document.createElement('div');

  winnersTableHead = document.createElement('thead');

  winnersTableHeadNumber = document.createElement('th');

  winnersTableHeadCar = document.createElement('th');

  winnersTableHeadName = document.createElement('th');

  winnersTableHeadWins = document.createElement('th');

  winnersTableHeadTime = document.createElement('th');

  winnersTableBody = document.createElement('tbody');

  winnersPagination = document.createElement('div');

  paginationPrev = document.createElement('button');

  paginationNext = document.createElement('button');

  drawWinners() {
    const mainContainer = document.querySelector('.mainContainer');
    this.makeWinnersContainer();
    if (mainContainer) {
      mainContainer.innerHTML = '';
      mainContainer.append(this.winnersContainer);
    }
  }

  makeWinnersContainer() {
    this.winnersContainer.classList.add('winnersContainer');
    this.makeTitle();
    this.makeTable();
    this.makePagination();
    this.winnersContainer.append(
      this.winnersTitle,
      this.winnersPageNumber,
      this.winnersTable,
      this.winnersPagination,
    );
  }

  makeTitle() {
    this.winnersTitle.classList.add('winnersTitle');
    this.winnersTitle.textContent = 'Winners (0)';
    this.winnersPageNumber.classList.add('winnersPageNumber');
    this.winnersPageNumber.textContent = 'Page #1';
  }

  makeTable() {
    this.makeTableHeads();
    this.makeTableBody();
    this.makeTableHead();
    this.winnersTable.classList.add('winnersTable');
    this.winnersTable.append(this.winnersTableHead, this.winnersTableBody);
  }

  makeTableHead() {
    this.winnersTableHead.classList.add('tableHead');
    this.winnersTableHead.append(
      this.winnersTableHeadNumber,
      this.winnersTableHeadCar,
      this.winnersTableHeadName,
      this.winnersTableHeadWins,
      this.winnersTableHeadTime,
    );
  }

  makeTableHeads() {
    this.winnersTableHeadNumber.classList.add('tableHeadNumber', 'tableHead');
    this.winnersTableHeadNumber.textContent = 'Number';
    this.winnersTableHeadCar.classList.add('tableHeadCar', 'tableHead');
    this.winnersTableHeadCar.textContent = 'Car';
    this.winnersTableHeadName.classList.add('tableHeadName', 'tableHead');
    this.winnersTableHeadName.textContent = 'Name';
    this.winnersTableHeadWins.classList.add('tableHeadWins', 'tableHead');
    this.winnersTableHeadWins.textContent = 'Wins';
    this.winnersTableHeadTime.classList.add('tableHeadTime', 'tableHead');
    this.winnersTableHeadTime.textContent = 'Time';
  }

  makeTableBody() {
    this.winnersTableBody.classList.add('tableBody');
  }

  makePagination() {
    this.winnersPagination.classList.add('winnersPaginations');
    this.makePaginationPrev();
    this.makePaginationNext();
    this.winnersPagination.append(this.paginationPrev, this.paginationNext);
  }

  makePaginationPrev() {
    this.paginationPrev.classList.add('winnersPaginationPrev', 'pagination-btn');
    this.paginationPrev.setAttribute('id', 'winnersPaginationPrev');
    this.paginationPrev.textContent = 'PREV';
  }

  makePaginationNext() {
    this.paginationNext.classList.add('winnersPaginationNext', 'pagination-btn');
    this.paginationNext.textContent = 'NEXT';
    this.paginationNext.setAttribute('id', 'winnersPaginationNext');
  }
}
