/* global describe, it */
const should = require(`should`);

module.exports = function toDoListTests() {
  describe('Button unit test', function () {
    it('should do something better than this', async function (done) {
      should(1 + 1 === 2).equal(true);
      done();
    });
  });
};
