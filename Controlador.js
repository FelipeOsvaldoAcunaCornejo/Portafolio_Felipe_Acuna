const sliderIndices = {};

function navegarProyectos(idSlider, incremento) {
    if (sliderIndices[idSlider] === undefined) {
        sliderIndices[idSlider] = 0;
    }

    const contenedor = document.getElementById(idSlider);
    if (!contenedor) return;

    const slides = contenedor.querySelectorAll('.slide');
    if (slides.length === 0) return;

    slides[sliderIndices[idSlider]].classList.remove('active');

    sliderIndices[idSlider] += incremento;

    if (sliderIndices[idSlider] >= slides.length) {
        sliderIndices[idSlider] = 0;
    }
    if (sliderIndices[idSlider] < 0) {
        sliderIndices[idSlider] = slides.length - 1;
    }

    slides[sliderIndices[idSlider]].classList.add('active');
}