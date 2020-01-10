"use strict";
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
function sayHello() {
    console.log('Hello!');
    return myName;
}
sayHello();
