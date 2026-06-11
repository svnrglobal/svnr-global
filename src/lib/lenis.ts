import type Lenis from "lenis";

// Shared handle to the live Lenis instance (set by App's SmoothScroll).
// Lenis owns the scroll position while active, so programmatic scrolling must
// go through it; native scrollIntoView/scrollTo gets overridden by its rAF loop.
let lenis: Lenis | null = null;

export function setLenis(instance: Lenis | null) {
  lenis = instance;
}

export function scrollToTop(immediate = true) {
  if (lenis) lenis.scrollTo(0, { immediate });
  else window.scrollTo(0, 0);
}

export function scrollToEl(target: HTMLElement | string, offset = -88) {
  const el = typeof target === "string" ? document.getElementById(target) : target;
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset, duration: 1.1 });
  else el.scrollIntoView({ behavior: "smooth", block: "start" });
}
