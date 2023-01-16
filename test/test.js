var assert = require('assert');
const regi = require('../bin/regi')

describe('Array', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
});

describe('createWorkspace', function () {
  it('workspace should be created', function () {
    regi.createWorkspace()
  })
});

describe('generateExportName', function () {
  it('should match du export format', function () {
    const filename = regi.generateExportName('ACTIVITY_REPORTING', 'DV1')
    assert.match(filename, /DU_ACTIVITY_REPORTING_[\d]+_[\d]+_DV1\.tgz/i);
  });
});