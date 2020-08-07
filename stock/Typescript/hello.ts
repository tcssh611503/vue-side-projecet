//編譯tsc hello.ts 

const mes: string ="Hello";

function say(something: string): void {
    console.log(something)

}

say(mes);

// 型別推論(Type Inference)
let ha ="haha"

// 型別斷言(Type Assertion)
// 第一種是<型別>值 (angle-bracket <>)寫法
let code: any = 123; 
let employeeCode = <number> code; 

// 第二種則是值 as 型別 (as keyword)寫法 開發 React 專案使用 JSX 語法時只能用第二種。
let code2: any = 123; 
let employeeCode2 = code2 as number;


//型別註解(Type Annotation)
const mount: number = 32

//函式參數的型別註解
function display(this_name: string){
    console.log(this_name);
}

//函式參數/回傳值的型別註解
function displayAdd(a: number,b: number): number{
    return a + b
}

// TypeScript 資料型別 - 原始型別 (Primitive Types)
//數字(Number)
let decLiteral: number = 6;
//16 進制表示法
let hexLiteral: number = 0xf00d;
// ES6 中的 2 進制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的 8 進制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;
// 字串(String) '' 和""皆可
let str1:string = 'bob'
let str2:string = "bob"
//ES6 的模板字串(template literal)
let templateName: string = 'Tony'
let age: number = 22
let sentence: string = `Hello, my name is ${templateName}.
I'll be ${age + 1} years old next month.`

// 布林值(Boolean)
let flag: boolean = false

// Undefined 和 Null 
let u: undefined = undefined;
let n: null = null;
// Note: 在 strictNullChecks: false 情況下 可以賦值 null 或 undefined 給其他資料型別如：數字、字串的變數
let num: number;
let str: string;
num = null;
str = undefined;

//使用者可以不用填姓
type User = {
    firstName: string;
    lastName: string | undefined;
  };
  
  let jack: User = { firstName: "Jack", lastName: undefined };
  let Donald: User = { firstName: "Donald", lastName: "Trump" };


  type User2 = {
    firstName: string;
    lastName?: string;
  };
  
  // 可以放入字串型別的值
  let joy: User2 = { firstName: "Joy", lastName: "Tsai" };
  
  // 可以讓值為 undefined 
  let jane: User2 = { firstName: "Jane", lastName: undefined };
  
  // 或者就不要 lastname 這個屬性了
  let rose: User2 = { firstName: "rose" };


//   Symbol 符號
//   symbol的值是透過 Symbol建構函式創建的
  let sym1 = Symbol();
  let sym2 = Symbol("key"); // 可選字串key
//   但symbol是不可改變且唯一的

  let sym3 = Symbol("key");
  sym2 === sym3; // false
//   symbol 可以像字串一樣作為物件屬性的key值
  
  let symq = Symbol();
  let obj = {[symq]: "value"};
//   console.log(obj[symq]); // ts會報錯，但可以編譯輸出 "value"

// TypeScript 資料型別 - 基礎物件型別(Basic Object)
let girl:object = {
    firstname: 'grace',
    lastname: 'Lin',
    age: 18,
    marriage: undefined,
    gender: null,
  };

//多了一個屬性greet => 型別推論會報錯，但型別註解OK
girl = {
    firstname: 'Kira',
    lastname: 'Yang',
    age: 18,
    marriage: undefined,
    gender: null,
    greet :'hello'
  }
  
  //少了一個屬性 => 型別推論會報錯，但型別註解OK
  girl = {
    firstname: 'Kira',
    lastname: 'Yang',
    marriage: undefined,
    gender: null,
  }
  
  //屬性全改變 => 型別推論會報錯，但型別註解OK
  girl = {
    greet :'hello'
  }


//   函式型別推論和 JS 一樣
  // 函式宣告(有名字的函式)
//   function add(x, y) {
//       return x + y;
//   }
  
//   // 函式表達式(匿名函式)
//   let myAdd = function(x, y) { return x + y; };

// 函式型別註記
//函式宣告式
function add(x: number, y: number):number {
    return x + y;
}    

// 函式表達式(匿名函式)
let add2 = function(x: number, y: number) { 
    return x + y; 
};    
  
//沒有回傳值
function add3(x: number, y: number) {
    console.log(x + y)
  }


//   剩餘參數(rest parameters)
//   預設參數和可選參數都有個共同點，那就是參數的數量明確。但如果想同時操作多個參數，但又不知道會有多少參數會傳進來，要怎麼做呢？
  
//   在 ES6 中出現了剩餘參數（rest parameter） 語法，可以把函式最後一個命名參數以...開頭，將後面不確定數量的參數視為一個陣列

  function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
  }
  
  let buildList = buildName("Joseph", "Samuel", "Lucas", "MacKinzie") 
  console.log(buildList ) //Joseph Samuel Lucas MacKinzie

// https://ithelp.ithome.com.tw/articles/10220507
// TypeScript 資料型別 - 陣列型別(Array Types)
// 陣列的宣告
//型別註記(Type Annotation)
let arr1: string[] = ['hello', 'ya', 'yeah'];  //較推薦 
//泛型(generic)
let arr2: Array<string> =['hello','ya','yeah'];
//聯合型別
let arr3: (string| number)[] = ['hello', 'ya', 'yeah',1];
let arr4: Array<string | number> = ['hello', 'ya', 'yeah',2];
//複製陣列使用 ES6 展開(spread)運算子將 origScores 陣列中的元素取出放入新的陣列 clonedScores。兩個陣列獨立，不互相影響。
let rawScores :number[] = [70, 80, 90];   
let copyScores = [...rawScores];
rawScores.push(10);
copyScores.push(100);
console.log("rawScores:" , rawScores,"copyScores:" , copyScores);
//合併陣列
let score1 :number[] = [10, 20, 30];  
let score2 :number[] = [40, 50, 60];  
let mergedScore = [...score1, ...score2];
console.log(mergedScore);  
//陣列解構
let splitArr:number[] = [12,13] 
let[x,y] = splitArr 
console.log("split1:",x)  //12
console.log("split2:",y)  //13
// 元組(Tuple) :TS 有而 JS 沒有的資料型別 
// 每個元素的型別已固定，不可隨意調整元素位置(除非型別相同)，也無法隨意增減元素。
// 來個重點整理吧：陣列與元組的差別
// 陣列只要內部的元素型別在註記的範圍內即可（例如 (string | number)[] 就只能存取字串跟數字），沒有限制元素的數量，順序也沒有限制；元組則是元素個數必須固定，各個元素格式也必須完全吻合。
//宣告一個元組陣列
let tuple:[number,string,boolean];
//賦值，初始化陣列
tuple = [10,'hello',true]; 

// 列舉(Enum)
// https://stackoverflow.com/questions/28818849/how-do-the-different-enum-variants-work-in-typescript
//Enum 可以想成就是將東西一個一個列出來，通常會用它來管理多個同系列的常數（不可修改的變數），將常數值一一列舉出來，且只能在列舉出來的範圍中選擇，
// 例如：交通號誌顏色的列舉，元素就是是紅、綠、黃三個。列舉又分三種型別，
// 分別為數字列舉(Number enum)、字串列舉(String enum)和異構列舉(Heterogeneous enum)，字串數字混和。

// 數字列舉(Number enum)
// 要如何定義數字列舉呢？ 在 TS 中，會使用關鍵字 enum 來定義列舉，例如下方的程式碼：

enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat}


function getPort(scheme: "http" | "https"): 80 | 443 {
    switch (scheme) {
      case "http":
        return 80;
      case "https":
        return 443;
    }
  }
  
  const httpPort = getPort("http"); //  80 
//   字面值型別也可以結合函式重載使用

  function getPort3(scheme: "http" | "https"): 80 | 443 {
    switch (scheme) {
      case "http":
        return 80;
      case "https":
        return 443;
    }
  }
  
  const httpPort2 = getPort3("http"); //  80
  const httpsPort = getPort3("https"); // 443