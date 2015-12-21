'use strict';

var assert = require('chai').assert
  , m = require('mithril')

require('..')(m)

describe('add headers', function() {

  afterEach(function(done) {
    m.getGlobalHeaders().length = 0
    done()
  })

  it('should add a single header', function(done) {
    assert.equal(m.getGlobalHeaders().length, 0)
    m.addGlobalHeader('key', 'value')
    assert.equal(m.getGlobalHeaders().length, 1)
    done()
  })

  it('should add multiple headers', function(done) {
    assert.equal(m.getGlobalHeaders().length, 0)
    m.addGlobalHeader('key', 'value')
    m.addGlobalHeader('key2', 'value2')
    assert.equal(m.getGlobalHeaders().length, 2)
    done()
  })

})

describe('remove headers', function() {

  it('should remove headers by key and value', function(done) {
    m.addGlobalHeader('key', 'value')
    assert.equal(m.getGlobalHeaders().length, 1)
    m.removeGlobalHeader('key', 'value')
    assert.equal(m.getGlobalHeaders().length, 0)
    m.addGlobalHeader('key', 'value')
    m.addGlobalHeader('key', 'value')
    assert.equal(m.getGlobalHeaders().length, 2)
    m.removeGlobalHeader('key', 'value')
    assert.equal(m.getGlobalHeaders().length, 0)
    done()
  })

  it('should remove headers by key', function(done) {
    m.addGlobalHeader('key', 'value')
    assert.equal(m.getGlobalHeaders().length, 1)
    m.removeGlobalHeader('key')
    assert.equal(m.getGlobalHeaders().length, 0)
    m.addGlobalHeader('key', 'value')
    m.addGlobalHeader('key', 'value2')
    assert.equal(m.getGlobalHeaders().length, 2)
    m.removeGlobalHeader('key')
    assert.equal(m.getGlobalHeaders().length, 0)
    done()
  })

})
