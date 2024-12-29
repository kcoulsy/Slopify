

const counter = document.getElementById('hitwebcounter');

const count = window.localStorage.getItem('count') ?? Math.floor(Math.random() * 1000000);

const newCount = Number(count) + 1;

window.localStorage.setItem('count', newCount);


function buildCounter() {
  counter.innerHTML = '';
  const parts = count.toString().split('');
  parts.forEach(part => {
    const num = Number(part);
    const span = document.createElement('img');
    span.src = `/static/images/counter/row-1-column-${num + 1}.png`;
    span.alt = `${num}`;
    counter.appendChild(span);
  });
}

buildCounter();