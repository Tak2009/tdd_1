# tdd_1


need to tell Mocha to use the TDD interface, instead of the default BDD one:

mocha --ui tdd card.test.js


"scripts": {
    "tdd": "mocha --ui tdd test/tdd.js",
  },