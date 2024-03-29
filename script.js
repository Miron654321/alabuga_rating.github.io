const svgNode1 = document.querySelector('.progressbar1');
const svgNode2 = document.querySelector('.progressbar2');
const progressbarThumb1 = document.querySelector('.progressbar__thumb1');
const progressbarThumb2 = document.querySelector('.progressbar__thumb2');
const progressbarPercent1 = document.querySelector('.progressbar__percent1 > tspan');
const progressbarPercent2 = document.querySelector('.progressbar__percent2 > tspan');

function onUpdateGsap() {
    const percent1 = gsap.getProperty(progressbarThumb1, '--percent1');
    progressbarPercent1.textContent = Math.round(percent1);

    const percent2 = gsap.getProperty(progressbarThumb2, '--percent2');
    progressbarPercent2.textContent = Math.round(percent2);
}

const tl1 = gsap.timeline()
    .to(svgNode1, { '--opacityThumb1': 3, duration: 0.2 })
    .to(svgNode1, { '--percent1': 100, duration: 1, ease: 'linear', onUpdate: onUpdateGsap });

const tl2 = gsap.timeline()
    .to(svgNode2, { '--opacityThumb2': 3, duration: 0.2 })
    .to(svgNode2, { '--percent2': 100, duration: 1, ease: 'linear', onUpdate: onUpdateGsap });

