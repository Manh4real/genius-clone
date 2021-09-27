export { animate };

function animate(el, { duration, draw }) {
  let start = performance.now();

  requestAnimationFrame(function run(time) {
    let timeFraction = (time - start) / duration;

    if (timeFraction >= 1) {
      cancelAnimationFrame(run);
      timeFraction = 1;
    }
    let progress = linear(timeFraction);
    draw(el, progress);

    if (timeFraction < 1) {
      requestAnimationFrame(run);
    }
  });
}

function linear(timeFraction) {
  return timeFraction;
}
// function easeOut(timing) {
//   return function (timeFraction) {
//     return 1 - timing(1 - timeFraction);
//   };
// }
