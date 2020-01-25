/**
 * 型指定
 */
// 数字
let num: number = 100

// 文字列
let hello: string
hello = 'こんにちは'

// ルール型
let yes: boolean
yes = true

// なんでも
let car: any = 'BMW'
car = { brand: 'BMW' }

/**
 * 配列 - []
 */
let hobbies: string[] = ['読書', 'スポーツ']
hobbies.push('100')
console.log(hobbies)

/**
 * タプル - [x, y]
 */
let olympic: [string, number] = ['東京', 2020]
console.log(olympic)

/**
 * 列挙型 - enum
 */
// 先頭を大文字
enum Colors {
  Gray, // 0
  Red, // 1
  Green = 100, // 100
  Blue, // 101
}
let myColor: Colors = Colors.Green
console.log(myColor)

/**
 * 関数
 */

let myName = '太郎'
function returnMyName(): string {
  return myName
}
console.log(returnMyName())

// returnを許可しない
function sayHello(): void {
  console.log('Hello!')
}
sayHello()

/**
 * Never
 */
function noReturn(): never {
  throw new Error('エラーです！')
}

let something: never

/**
 * 引数
 */
function multiply(value1: number, value2: number): number {
  return value1 * value2
}
console.log(multiply(23, 7))

let myFunctionType: (val1: number, val2: number) => number
myFunctionType = multiply
console.log(myFunctionType(23, 89))

/**
 * オブジェクト
 */
let complex: {
  data: number[]
  output: (all: boolean) => number[]
} = {
  data: [100, 3.14, -3],
  output: function(all: boolean): number[] {
    return this.data
  },
}

/**
 * エイリアス
 */
type Complex = {
  data: number[]
  output: (all: boolean) => number[]
}
let complex2: Complex = {
  data: [123, 866, 1.9],
  output: function(flag: boolean): number[] {
    return this.data
  },
}

/**
 * union型 - 共同体型、合併型
 */
let thisYear: number | string = '2019'
thisYear = '2019'

function checkLength(str: string | null): number {
  if (str != null) {
    return str.length
  } else {
    return 0
  }
}

function controlMe(isTrue: boolean) {
  let result: number = 12
  return result
}

/**
 * アロー関数
 */
const addNum = (value1: number, valuer2: number): number => value1 + valuer2
const mulNum = (value: number): number => value * 2
console.log(mulNum(3))

const outputString = (text: string): void => {
  console.log(text)
}
console.log('こんにちは！')
