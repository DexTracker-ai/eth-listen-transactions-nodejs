const DexTracker = require('./dex-tracker');

const tracker = new DexTracker();

tracker.on('trade', (trade) => {
  console.log('New trade:', trade);
});

tracker.on('connected', () => {
  console.log('Connected to DexTracker');
});

tracker.on('error', (error) => {
  console.error('DexTracker error:', error);
});

tracker.connect('0x9cdf242ef7975d8c68d5c1f5b6905801699b1940');

// Optional: Disconnect after 1 minute
setTimeout(() => {
  tracker.disconnect();
}, 60000);
