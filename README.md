# tdd_1

https://stackoverflow.com/questions/9795254/nodejs-mocha-suite-is-not-defined-error

to avoice ReferenceError: suite is not defined, need to tell Mocha to use the TDD interface, instead of the default BDD one:

mocha --ui tdd card.test.js


"scripts": {
    "tdd": "mocha --ui tdd test/tdd.js",
  },



  bdd ui always is called. So, bdd ui called twice if you specified --ui bdd.

  so do not put --ui bdd in the script

  "scripts": {
    "bdd": "mocha test/bdd.js"
  },