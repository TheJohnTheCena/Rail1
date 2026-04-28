const CACHE_NAME = 'railone-v1';
const ASSETS = [
  './',
  './index.html',
  './ticket_background.png',
  './railone_icon.png'
  './barcode_sample.png'
  './Face_ID_logo.png'
  './finger_print_icon.png'
  './my_booking_BG.png'
  './No_Wifi_ICON.png'
  './railone_icon.png'
  './refresh_icon.png'
  './select_all_ticket.png'
  './select_completed_ticket.png'
  './select_upcoming_ticket.png'
  './selected_cancelled_ticket.png'
  './share_icon.png'
  './sort_icon.png'
  './ticket_background.png'
  './APP_railone_icon.png'
  // Add any other image names used in your app here
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});