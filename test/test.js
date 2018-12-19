let assert = require('assert');
let number = require('../number');
let util = require('./util');

const PrettyPrint = util.PrettyPrint;
const NodesFromArray = util.NodesFromArray;

describe('Node', ()=> {
    // (0) + (2)
    //  2
    let singleLeft = NodesFromArray([0]);
    let singleRight = NodesFromArray([2]);
    describe('given single node on each side', ()=> {
        describe(`(${PrettyPrint(singleLeft)}) + (${PrettyPrint(singleRight)})`, ()=> {
            it('returns populated result node of number 2', ()=> {
                let resultNode = Add(singleLeft, singleRight);

                // console.log('result:', '('+resultNode.toString()+')');
                assert.notEqual(resultNode, undefined, 'nothing returned from Add()')
                assert.equal(resultNode.value, 2);
                assert.equal(resultNode.next, null);
            });
        });
    });

    // (1 -> 2 -> 3) + (2 -> 2 -> 3)
    //  346
    let evenLeft = NodesFromArray([1, 2, 3]);
    let evenRight = NodesFromArray([2, 2, 3]);
    describe('given even length of nodes on both sides', ()=> {
        describe(`(${PrettyPrint(evenLeft)}) + (${PrettyPrint(evenRight)})`, ()=> {
            it('returns populated result node of number 643', ()=> {
                let resultNode = Add(evenLeft, evenRight);

                // console.log('result:', '('+resultNode.toString()+')');
                assert.notEqual(resultNode, undefined, 'nothing returned from Add()')
                assert.equal(resultNode.value, 3);
                assert.equal(resultNode.next.value, 4);
                assert.equal(resultNode.next.next.value, 6);
                assert.equal(resultNode.next.next.next, null);
            });
        });
    });

    // (0 -> 2) + (0 -> 8)
    //  001
    let evenCarryLeft = NodesFromArray([0, 2]);
    let evenCarryRight = NodesFromArray([0, 8]);
    describe('given even length of nodes on both sides with carry', ()=> {
        describe(`(${PrettyPrint(evenCarryLeft)}) + (${PrettyPrint(evenCarryRight)})`, ()=> {
            it('returns populated result node of number 100', ()=> {
                let resultNode = Add(evenCarryLeft, evenCarryRight);

                // console.log('result:', '('+resultNode.toString()+')');
                assert.notEqual(resultNode, undefined, 'nothing returned from Add()')
                assert.equal(resultNode.value, 0);
                assert.equal(resultNode.next.value, 0);
                assert.equal(resultNode.next.next.value, 1);
                assert.equal(resultNode.next.next.next, null);
            });
        });
    });

    // (5) + (2 -> 4)
    // 74
    let unevenLeft = NodesFromArray([5]);
    let unevenRight = NodesFromArray([2, 4]);
    describe('given uneven length of nodes', ()=> {
        describe(`(${PrettyPrint(unevenLeft)}) + (${PrettyPrint(unevenRight)})`, ()=> {
            it('returns populated result node of number 47', ()=> {
                let resultNode = Add(unevenLeft, unevenRight);

                // console.log('result:', '('+resultNode.toString()+')');
                assert.notEqual(resultNode, undefined, 'nothing returned from Add()')
                assert.equal(resultNode.value, 7);
                assert.equal(resultNode.next.value, 4);
                assert.equal(resultNode.next.next, null);
            });
        });
    });

    // (3 -> 4 -> 3 -> 9) + (9 -> 2 -> 3)
    // 2769
    let unevenCarryLeft = NodesFromArray([3, 4, 3, 9]);
    let unevenCarryRight = NodesFromArray([9, 2, 3]);
    describe('given uneven length of nodes with carry', ()=> {
        describe(`(${PrettyPrint(unevenCarryLeft)}) + (${PrettyPrint(unevenCarryRight)})`, ()=> {
            it('returns populated result node of number 9672', ()=> {
                let resultNode = Add(unevenCarryLeft, unevenCarryRight);

                // console.log('result:', '('+resultNode.toString()+')');
                assert.notEqual(resultNode, undefined, 'nothing returned from Add()')
                assert.equal(resultNode.value, 2);
                assert.equal(resultNode.next.value, 7);
                assert.equal(resultNode.next.next.value, 6);
                assert.equal(resultNode.next.next.next.value, 9);
            });
        });
    });
});
