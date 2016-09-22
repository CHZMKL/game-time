const chai = require('chai');
const assert = chai.assert;
const Stadium = require('../lib/world.js');

describe('Stadium', function() {

  context('has default size and position', function() {
    var options = ({});
    var stadium = new Stadium(options);

    it('should have a default width', function() {
      assert.equal(stadium.width, 500);
    });

    it('should have a default height', function() {
      assert.equal(stadium.height, 600);
    });
  });
});
