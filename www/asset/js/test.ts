/**
 * 型指定
 */
let num: number = 100

let hello: string
hello = 'こんにちは'

let yes: boolean
yes = true

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
