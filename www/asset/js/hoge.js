var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calcCircum(diameter) {
        return diameter * PI;
    }
    MyMath.calcCircum = calcCircum;
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    function calcRect(height, width) {
        return height * width;
    }
    MyMath.calcRect = calcRect;
})(MyMath || (MyMath = {}));
/**
 * 型指定
 */
// 数字
var num = 100;
// 文字列
var hello;
hello = 'こんにちは';
// ルール型
var yes;
yes = true;
// なんでも
var car = 'BMW';
car = { brand: 'BMW' };
/**
 * 配列 - []
 */
var hobbies = ['読書', 'スポーツ'];
hobbies.push('100');
console.log(hobbies);
/**
 * タプル - [x, y]
 */
var olympic = ['東京', 2020];
console.log(olympic);
/**
 * 列挙型 - enum
 */
// 先頭を大文字
var Colors;
(function (Colors) {
    Colors[Colors["Gray"] = 0] = "Gray";
    Colors[Colors["Red"] = 1] = "Red";
    Colors[Colors["Green"] = 100] = "Green";
    Colors[Colors["Blue"] = 101] = "Blue";
})(Colors || (Colors = {}));
var myColor = Colors.Green;
console.log(myColor);
/**
 * 関数
 */
var myName = '太郎';
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// returnを許可しない
function sayHello() {
    console.log('Hello!');
}
sayHello();
/**
 * Never
 */
function noReturn() {
    throw new Error('エラーです！');
}
var something;
/**
 * 引数
 */
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(23, 7));
var myFunctionType;
myFunctionType = multiply;
console.log(myFunctionType(23, 89));
/**
 * オブジェクト
 */
var complex = {
    data: [100, 3.14, -3],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [123, 866, 1.9],
    output: function (flag) {
        return this.data;
    }
};
/**
 * union型 - 共同体型、合併型
 */
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
/**
 * アロー関数
 */
var addNum = function (value1, valuer2) { return value1 + valuer2; };
var mulNum = function (value) { return value * 2; };
console.log(mulNum(3));
var outputString = function (text) {
    console.log(text);
};
console.log('こんにちは！');
/**
 * デフォルト引数
 */
var countDown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        console.log(start);
        start--;
    }
    console.log('終了');
};
countDown();
/**
 * レスト演算子
 */
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 2));
// タプル
function printInfo() {
    var info = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        info[_i] = arguments[_i];
    }
    console.log("\u79C1\u306E\u540D\u524D\u306F" + info[0] + "\u3067\u3001" + info[1] + "\u6B73\u3067\u3059\u3002");
}
printInfo('太郎', 30);
/**
 * Clss
 */
var Person = /** @class */ (function () {
    function Person(name, place, age) {
        this.name = name;
        this.place = place;
        this.age = age;
        this.name = name;
        this.place = place;
        this.age = age;
    }
    return Person;
}());
var person = new Person('太郎', '東京', 30);
console.log(person);
/**
 * 静的メンバ
 */
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircum = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircum(83));
/**
 * Singleton
 */
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
var right = OnlyOne.getInstance();
console.log(right.name);
/**
 * Namespace
 */
console.log(MyMath.calcCircum(3));
console.log(MyMath.calcRect(20, 8));
var PI = 2.14;
console.log(PI);
