"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
  const data = "hello world";
  console.log(data);
  let id = 12;
  let isBoolean = true;
  let x = "hey";
  let numberArray = [1, 2, 3, 4, 5];
  let anyArray = [1, "hey", true];
  //tuple
  let tupleData = [1, "string", false];
  let tupleArray;
  tupleArray = [
    [1, "hey", true],
    [2, "hello", false],
  ];
  //union
  let id1 = 22;
  //enum
  let xyz;
  (function (xyz) {
    xyz[(xyz["a"] = 1)] = "a";
    xyz[(xyz["b"] = 2)] = "b";
    xyz[(xyz["c"] = 3)] = "c";
    xyz[(xyz["d"] = 4)] = "d";
    xyz[(xyz["e"] = 5)] = "e";
  })(xyz || (xyz = {}));
  console.log(xyz);
  //objectss
  const user = {
    id: 1,
    name: "hardik",
  };
  const user1 = {
    id: 1,
    name: "hardik",
  };
  //type assertion
  let custId = 1;
  let cId = custId;
}
//functions
function addNum(x, y) {
  console.log(x + y);
  return x + y;
}
addNum(2, 3);
