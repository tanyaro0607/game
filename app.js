const board = document.querySelector('#board');
const colors = ['#BA55D3', '#7953D3', '#36AED3', '#42D362', '#D3468F', '#C9D389', '#72D336', '#3A3CD3'];
const SQUARES_NUMBER = 560;

for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div'); //создаем квадрат
	square.classList.add('square'); //добавляем класс + свойства

	square.addEventListener('mouseover', setColor); //при наведении на квадрат вызывается функция

	square.addEventListener('mouseleave', removeColor);

	board.append(square); //добавляем в разметку
}

function setColor(event) {
	const element = event.target;
	const color = getRandomColor();
	element.style.backgroundColor = color;
	element.style.boxShadow = `0 0 4px ${color}, 0 0 12px ${color}`;
}

function removeColor(event) {
	const element = event.target;
	element.style.backgroundColor = '#1d1d1d';
	element.style.boxShadow = `0 0 4px #000`;
}

function getRandomColor() {
	const index = Math.floor(Math.random() * colors.length);
	return colors[index];
}