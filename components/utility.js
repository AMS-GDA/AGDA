export function isMobile() {
  return window !== null && typeof window !== 'undefined' && window.innerWidth < 550;
}
