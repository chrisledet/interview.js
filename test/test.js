var assert = require('assert');
var number = require('../number');

describe('Node', function() {
  describe('Add(x, y)', function() {
    describe('given even number of nodes on both sides', function(){
      beforeEach(function(){
        this.leftNode = new number.Node(1,
            new number.Node(2,
              new number.Node(3, null)));

        this.rightNode = new number.Node(1,
            new number.Node(2,
              new number.Node(3, null)));
      });

      it('add numbers contained from x and y nodes', function() {
        var resultNode = Add(this.leftNode, this.rightNode);

        assert.equal(resultNode.value, 2);
        assert.equal(resultNode.next.value, 4);
        assert.equal(resultNode.next.next.value, 6);
      });
    });

    describe('given uneven number of nodes on left side', function(){
      beforeEach(function(){
        this.leftNode = new number.Node(1,
            new number.Node(2, null));

        this.rightNode = new number.Node(1,
            new number.Node(2,
              new number.Node(3, null)));
      });

      it('add numbers contained from x and y nodes', function() {
        var resultNode = Add(this.leftNode, this.rightNode);

        assert.equal(resultNode.value, 2);
        assert.equal(resultNode.next.value, 4);
        assert.equal(resultNode.next.next.value, 3);
      });
    });

    describe('given uneven number of nodes on right side', function(){
      beforeEach(function(){
        this.leftNode = new number.Node(1,
            new number.Node(2,
              new number.Node(6, null)));

        this.rightNode = new number.Node(1,
            new number.Node(2, null));
      });

      it('add numbers contained from x and y nodes', function() {
        var resultNode = Add(this.leftNode, this.rightNode);

        assert.equal(resultNode.value, 2);
        assert.equal(resultNode.next.value, 4);
        assert.equal(resultNode.next.next.value, 6);
      });
    });

    describe('given single empty nodes on both sides', function(){
      beforeEach(function(){
        this.leftNode = new number.Node(0, null);
        this.rightNode = new number.Node(0, null);
      });

      it('contains empty result', function() {
        var resultNode = Add(this.leftNode, this.rightNode);

        assert.equal(resultNode.value, 0);
        assert.equal(resultNode.next, null);
      });
    });

    describe('given empty nodes on both sides', function(){
      beforeEach(function(){
        this.leftNode = null;
        this.rightNode = null;
      });

      it('contains empty result', function() {
        var resultNode = Add(this.leftNode, this.rightNode);

        assert.equal(resultNode.value, 0);
        assert.equal(resultNode.next, null);
      });
    });
  });
});
