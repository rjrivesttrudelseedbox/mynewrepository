import { getPositionIn1, getPositionIn2, getPositionIn3 } from './5-getPositionIn';

test("getPositionIn1", function () {
    var elements = ['a', 'b', 'c'];
    var searchString = 'b';

    var index = getPositionIn1(elements, searchString);
    expect(index).toBe(1);
})

test("getPositionIn2", function () {
    var elements = ['a', 'b', 'C'];
    var searchString = 'c';

    var index = getPositionIn2(elements, searchString);
    expect(index).toBe(2);
})

test("getPositionIn3", function () {
    var elements = ['a', 'b', 'C', 'sfsd', 'c', 'sdfsdfs'];
    var searchString = 'c';

    var index = getPositionIn3(elements, searchString);
    expect(index).toEqual([2, 4]);
})