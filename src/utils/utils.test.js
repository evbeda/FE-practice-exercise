import { convertToArray } from "./utils.js";

describe('ConvertToArray method', () => {
    
  it.each(
    [
      [1, [0, 1]],
      [2, [0, 1, 2]],
      [3, [0, 1, 2, 3]],
      [4, [0, 1, 2, 3, 4]],
      [5, [0, 1, 2, 3, 4, 5,]],
      [6, [0, 1, 2, 3, 4, 5, 6]],
      [7, [0, 1, 2, 3, 4, 5, 6, 7]],
    ])('should return an array from 1 to the number indicated', ( n, expected_array) => {
      expect(convertToArray(n)).toEqual(expected_array)
    
  });
});