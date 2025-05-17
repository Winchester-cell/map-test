import L from 'leaflet';

export const blinkingIcon = L.divIcon({
  className: '',
  html: `<div class="blinking-circle"></div>`,
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});