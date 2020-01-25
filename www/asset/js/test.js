"use strict";
var num = 100;
var hello;
hello = 'こんにちは';
var yes;
yes = true;
var car = 'BMW';
car = { brand: 'BMW' };
var hobbies = ['読書', 'スポーツ'];
hobbies.push('100');
console.log(hobbies);
var olympic = ['東京', 2020];
console.log(olympic);
var Colors;
(function (Colors) {
    Colors[Colors["Gray"] = 0] = "Gray";
    Colors[Colors["Red"] = 1] = "Red";
    Colors[Colors["Green"] = 100] = "Green";
    Colors[Colors["Blue"] = 101] = "Blue";
})(Colors || (Colors = {}));
var myColor = Colors.Green;
console.log(myColor);
var myName = '太郎';
function returnMyName() {
    return myName;
}
console.log(returnMyName());
function sayHello() {
    console.log('Hello!');
}
sayHello();
function noReturn() {
    throw new Error('エラーです！');
}
var something;
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(23, 7));
var myFunctionType;
myFunctionType = multiply;
console.log(myFunctionType(23, 89));
var complex = {
    data: [100, 3.14, -3],
    output: function (all) {
        return this.data;
    },
};
var complex2 = {
    data: [123, 866, 1.9],
    output: function (flag) {
        return this.data;
    },
};
var thisYear = '2019';
thisYear = '2019';
function checkLength(str) {
    if (str != null) {
        return str.length;
    }
    else {
        return 0;
    }
}
function controlMe(isTrue) {
    var result = 12;
    return result;
}
var addNum = function (value1, valuer2) { return value1 + valuer2; };
var mulNum = function (value) { return value * 2; };
console.log(mulNum(3));
var outputString = function (text) {
    console.log(text);
};
console.log('こんにちは！');
var countDown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        console.log(start);
        start--;
    }
    console.log('終了');
};
countDown();
