You've been asked by your team to make a module for the upcoming travel service.

The data for the service is ready, and has been downloaded to `airlines.json`. The team also knows what functions they need for the app, your job is to implement the functions for them.

To help you out, they've made a spec (a test) that will ensure your code works the way they need it to for the app.

You should definitely have some additional tests for the logic you implement so your team trusts your work and it's easy to make changes in the future!

#### It should find records by:
- Airport code
  - `findByCodes(airportCode, carrierCode)`
    - `airportCode` and `carrierCode` are strings
    - Should return an `object` or `undefined` if the codes couldn't be found
- Number of flight delays (more or less than a certain amount)
  - `findByDelays(numberOfDelays, greaterThan)`
    - `numberOfDelays` is a number
    - `greaterThan` is a boolean that defaults to `true`
    - Should _always_ return an `array` - even if it's empty
- Amount of total minutes delayed
  - `findByMinutesDelayed(amountOfTime, greaterThan)`
    - `numberOfDelays` is a number
    - `greaterThan` is a boolean that defaults to `true`
    - Should _always_ return an `array` - even if it's empty

#### It should also be able to provide totals for airports:
- `getTotals(airports)`
  - `airports` is an array of `airport` records
  - Should return an array of objects with the form: `{ airportCode: 'XXX', totalFlights: 000, totalDelays: 000, totalDelayMinutes: 000 }`


# Airline records

Here's an example record:

```
{
  "airport": {
    "code": "ATL",
    "name": "Atlanta, GA: Hartsfield-Jackson Atlanta International"
  },
  "statistics": {
    "flights": {
      "cancelled": 5,
      "delayed": 186,
      "diverted": 0,
      "onTime": 561
    },
    "numberOfDelays": {
      "weather": 28,
      "security": 2,
      "carrier": 34,
      "lateAircraft": 18,
      "nationalAviationSystem": 105
    },
    "minutesDelayed": {
      "weather": 1722,
      "carrier": 1367,
      "security": 139,
      "lateAircraft": 1269,
      "nationalAviationSystem": 3817
    }
  },
  "time": {
    "label": "2003/6",
    "year": 2003,
    "month": 6
  },
  "carrier": {
    "code": "AA",
    "name": "American Airlines Inc."
  }
}
```
