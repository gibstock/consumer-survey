const URL = 'https://script.google.com/macros/s/AKfycbyXsCLKTe3iZsM-Ip4TF4rODNur4w4yQ0QyeCt9bCyos82bISvjdst93UwxonCvFZHF/exec'

const slider1 = document.getElementById('slider1')
const slider2 = document.getElementById('slider2')
const slider3 = document.getElementById('slider3')
const slider4 = document.getElementById('slider4')
const slider5 = document.getElementById('slider5')
const slider1Range = document.getElementById('slider1Range')
const slider2Range = document.getElementById('slider2Range')
const slider3Range = document.getElementById('slider3Range')
const slider4Range = document.getElementById('slider4Range')
const slider5Range = document.getElementById('slider5Range')

slider1Range.oninput = () => {
  slider1.textContent = slider1Range.value
}
slider2Range.oninput = () => {
  slider2.textContent = slider2Range.value
}
slider3Range.oninput = () => {
  slider3.textContent = slider3Range.value
}
slider4Range.oninput = () => {
  slider4.textContent = slider4Range.value
}
slider5Range.oninput = () => {
  slider5.textContent = slider5Range.value
}

console.log('working')
window.addEventListener("load", function() {
  const form = document.getElementById('my-form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      window.location.href = '/thanks.html';
    })
  });
});