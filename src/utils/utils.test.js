import moment from "moment";
import 'moment/locale/es';
moment.locale('es');
import { 
  convertToArray,
  formatedDatetime,
  showFee
 } from "./utils.js";
 

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

describe("formatedDatetime method test",()=>{
  it.each(
    [
      [moment(),"Today!!!"],
      [moment().add(2, "days"),"Tomorrow!!!"],
      [moment((new Date().getDate() + 30)),moment((new Date().getDate() + 30)).format("llll")]
    ])('should return today tomorrow or format date depende case', ( day, formatDate) => {
      expect(formatedDatetime(day)).toEqual(formatDate)
    
  });
})

describe("show method test",()=>{
  it.each(
    [
      ["5","fixed"," + $5"],
      ["10","percent"," + 10%"]
    ])('should return + fee or % fee depend of case ', ( fee, fee_type , return_fee) => {
      expect(showFee(fee, fee_type)).toEqual(return_fee)
    
  });
})