(function(){
  'use strict';

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('service-worker.js').then(function(reg) {

      }).catch(function(e) {
        console.error('Error during service worker registration:', e);
      });
    });
  }
})();