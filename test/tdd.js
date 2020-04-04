const assert = require('chai').assert;
const math = require('../math.js')

//// TDD suiteは UI TDD の時のみ check script
suite('計算確認　with assert', ()=> {
    test('掛け算 assert', () => {
      assert.equal(6, math.multi(2, 3), '戻り値は6');
    });
    test('割り算 assert', () => {
      assert.equal(2, math.div(6, 3), '戻り値は3');
    });
});

//// TDD with no message
assert.equal(math.multi(2,  3), 6, '戻り値は6');
assert.equal(math.div(6,  3), 2, '戻り値は2');


////TDD with message 
suite('モジュール内のオブジェクトの確認 with assert', () =>{
    test('配列かどうかの確認')
})



//// TDD with no message
assert.isArray(math.numbers, 'is array of numbers');
assert.include(math.numbers, 2, 'array contains 2');
assert.lengthOf(math.numbers, 5, 'array contains 5 numbers');