const sliderInput = document.querySelector(".slider__input");
const img = document.querySelector(".slider__image");

function SliderChange() {
  const value = sliderInput.value;
  img.style.width = `${value}%`;
}

sliderInput.addEventListener("input", _.debounce(SliderChange, 500));
