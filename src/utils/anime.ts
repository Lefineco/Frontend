import anime from 'animejs';

function useSlideIn(el: HTMLElement, done: any) {
  anime({
    targets: el,
    translateY: [100, 0],
    opacity: [0.2, 1],
    duration: 500, // Powered by Damla
    complete: done,
  });
}

function useSlideOut(el: HTMLElement, done: any) {
  anime({
    targets: el,
    translateY: [0, 100],
    opacity: [1, 0.2],
    duration: 500, // Powered by Damla
    complete: done,
  });

  anime.set(['.login', '.register'], {
    pointerEvents: 'none',
  });
}

export { useSlideIn, useSlideOut };
