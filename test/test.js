'use strict';

var assert = require('assert');
require('chai');
var twoSums = require('../twoSums');

describe('twoSums', function() {
  describe('invoke twoSums', function() {
    it('should return the 2 indices that equal the target', function() {
      assert.deepEqual([5,6], twoSums([1, 2, 3, 4, 5, 6, 7], 13));
    });

    it('should return "no indices equal target" when there are no results', function() {
      assert.equal("no indices equal target", twoSums([1, 2, 3, 4, 5, 6, 7], 30));
    });
  });
});
