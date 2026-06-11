document.addEventListener('visibilitychange', e => e.stopImmediatePropagation(), true);

Object.defineProperty(document, 'visibilityState', { get: () => 'visible' });
Object.defineProperty(document, 'hidden', { get: () => false });

if (window.AudioContext) {
  const origAudioContext = window.AudioContext;
  window.AudioContext = function(...args) {
    const ctx = new origAudioContext(...args);
    return ctx;
  };
}

console.log('✅ TikTok tab mute bypass active!');