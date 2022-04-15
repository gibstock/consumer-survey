const URL = 'https://script.google.com/macros/s/AKfycbyXsCLKTe3iZsM-Ip4TF4rODNur4w4yQ0QyeCt9bCyos82bISvjdst93UwxonCvFZHF/exec'

const submitBtn = document.getElementById('submitBtn')
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
let sliderRangeValues = [slider1Range.value, slider2Range.value, slider3Range.value, slider4Range.value, slider5Range.value]
let sliders = [slider1, slider2, slider3, slider4, slider5]

const duplicateValueCheck = (sorted) => {
  let matchCheck = false
  for(const slider of sliders) {
    slider.style.backgroundColor = 'green'
  }
  for(const [i, v] of sorted.entries()) {
    if(sorted[i + 1] !== undefined) {
      if(v === sorted[i + 1]) {
        console.log(v, sorted[i + 1], "match")
        for(const slider of sliders) {
          if(slider.textContent === v) {
            slider.style.backgroundColor = 'red'
          } 
          // else if (slider.textContent !== v) {
          //   slider.style.backgroundColor = 'green'
          // }
        }

        matchCheck = true
      } 
    }
  }
  return matchCheck ? true : false
}

slider1Range.onchange = () => {
  slider1.textContent = slider1Range.value
  sliderRangeValues[0] = slider1Range.value
}
slider2Range.oninput = () => {
  slider2.textContent = slider2Range.value
  sliderRangeValues[1] = slider2Range.value
  // duplicateValueCheck(sliderRangeValues)
}
slider3Range.oninput = () => {
  slider3.textContent = slider3Range.value
  sliderRangeValues[2] = slider3Range.value
  // duplicateValueCheck(sliderRangeValues)
}
slider4Range.oninput = () => {
  slider4.textContent = slider4Range.value
  sliderRangeValues[3] = slider4Range.value
  // duplicateValueCheck(sliderRangeValues)
}
slider5Range.oninput = () => {
  slider5.textContent = slider5Range.value
  sliderRangeValues[4] = slider5Range.value
  // duplicateValueCheck(sliderRangeValues)
}

console.log('working')
window.addEventListener("load", function() {
  const form = document.getElementById('my-form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    console.log(sliderRangeValues)
    let sorted = sliderRangeValues.sort((a,b) => {
      return a - b
    })
    if(duplicateValueCheck(sorted)){
      alert("Please RANK the sliders on question 4 and resubmit. \n\nHint: No 2 sliders can have the same value \n\nHint 2: If your slider selection is correct, hit Submit again, it's probably just a bug...")
    } else {
      console.log("all good")
      console.log(duplicateValueCheck(sorted))
      const data = new FormData(form);
      const action = e.target.action;
      submitBtn.textContent = "Sending..."
      submitBtn.disabled = true;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        window.location.href = '/thanks.html';
      })
    }
  });
});
