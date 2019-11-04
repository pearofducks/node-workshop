const api = require('./main')
const assert = require('assert')

assert(api.findByCodes, 'The findByCode function exists')
assert(api.findByCodes('BOS', 'AA'), 'Boston airport exists')
assert.strictEqual(api.findByCodes('BOS', 'AA').statistics.flights.cancelled, 7, 'Boston airport has the right number of flights cancelled')
assert.strictEqual(api.findByCodes('ZZZ', 'ZZ'), undefined, 'A fake airport does not exist')

assert(api.findByDelays, 'The findByDelays function exists')
assert.strictEqual(api.findByDelays(900).length, 2765, 'The right number of airports are provided with more than 900 total delays')
assert.strictEqual(api.findByDelays(1000000).length, 0, 'No airports had one million delays, that would be crazy')
assert.strictEqual(api.findByDelays(0, false).length, 0, 'No airports had less than 0 delays, that would be crazy')

assert(api.findByMinutesDelayed, 'The findByMinutesDelayed function exists')
assert.strictEqual(api.findByMinutesDelayed(100000).length, 860)
assert.strictEqual(api.findByMinutesDelayed(10, false).length, 557)
assert.strictEqual(api.findByMinutesDelayed(0, false).length, 0)

assert(api.getTotals, 'The getTotals function exists')
const queryResult = api.findByCodes('ATL', 'AA')
assert.deepEqual(api.getTotals([queryResult]), [{
  airportCode: 'ATL',
  carrierCode: 'AA',
  totalFlights: 752,
  totalDelays: 186,
  totalDelayMinutes: 8314
}])
