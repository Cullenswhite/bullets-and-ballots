/** Desktop scroll choreography is on only when it can be smooth. */
export function scrollEnhanced() {
  if (typeof window === "undefined") return false;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const narrow = window.matchMedia("(max-width: 900px)").matches;
  const short = window.matchMedia("(max-height: 680px)").matches;
  return !reduce && !narrow && !short;
}

export function syncEnhanced() {
  const on = scrollEnhanced();
  if (on) document.documentElement.dataset.enhanced = "scroll";
  else delete document.documentElement.dataset.enhanced;
  return on;
}

export const ENHANCE_SCRIPT = `(function(){try{var reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;var narrow=matchMedia("(max-width: 900px)").matches;var short=matchMedia("(max-height: 680px)").matches;if(!reduce&&!narrow&&!short)document.documentElement.dataset.enhanced="scroll";}catch(e){}})();`;
