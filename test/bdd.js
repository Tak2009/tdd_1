const expect = require('chai').expect;
const should = require('chai').should();

const math = require('../math.js'); 

//// BDD expect
describe('計算確認 with expect', () => {
	it('掛け算 expect', () => {
        expect(math.multi(2, 3)).to.equal(6, '戻り値は6');
    });
    it('割り算 expect', () => {
        expect(math.div(6, 3)).to.equal(2, '戻り値は2');
	});
});

////BDD should
describe('計算確認 with should', () => {
    it('掛け算 should', () => {
        math.multi(2, 3).should.equal(6,'戻り値は6')
    });
    it('割り算 should', () => {
        math.div(6, 3).should.equal(2,'戻り値は2')
    });
});

//// BDD expect with no message
expect(math.numbers).to.be.an('array').that.includes(2);
expect(math.numbers).to.have.lengthOf(5);

//// BDD should with no message
math.numbers.should.be.an('array').that.includes(2);
math.numbers.should.have.lengthOf(5);