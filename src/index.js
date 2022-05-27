{
    var data = "hello world";
    console.log(data);
    var id = 12;
    var isBoolean = true;
    var x = "hey";
    var numberArray = [1, 2, 3, 4, 5,];
    var anyArray = [1, "hey", true];
    //tuple
    var tupleData = [1, "string", false];
    var tupleArray = void 0;
    tupleArray = [
        [1, "hey", true],
        [2, "hello", false]
    ];
    //union
    var id1 = 22;
    //enum
    var xyz = void 0;
    (function (xyz) {
        xyz[xyz["a"] = 1] = "a";
        xyz[xyz["b"] = 2] = "b";
        xyz[xyz["c"] = 3] = "c";
        xyz[xyz["d"] = 4] = "d";
        xyz[xyz["e"] = 5] = "e";
    })(xyz || (xyz = {}));
    console.log(xyz);
    //objectss
    var user = {
        id: 1,
        name: "hardik"
    };
    var user1 = {
        id: 1,
        name: "hardik"
    };
    //type assertion
    var custId = 1;
    var cId = custId;
}
//functions
function addNum(x, y) {
    console.log(x + y);
    return x + y;
}
addNum(2, 3);
