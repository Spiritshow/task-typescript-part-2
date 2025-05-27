//Разминка
// Определите интерфейс для пользователя
export interface User {
  id: number;
  name: string;
  email: string; // Добавьте свойство email типа string
}

// Определите интерфейс для активности пользователя
interface Activity {
  userId: number;
  activity: string;
  timestamp: Date;// Добавьте свойство timestamp типа Date
}

// Реализуйте функцию fetchData используя Generic. Функция должна возвращать Promise.
const fetchData = async <T>(url: string): Promise<T> => {
    const res = await fetch(url)
    return res.json();

  // Реализуйте получение данных с использованием fetch и возвращение их в формате json
}

// Используйте Utility Types для создания Partial и Readonly версий User и Activity
type PartialUser = Partial <User>;// Заполните тип
type ReadonlyActivity = Readonly <Activity>;// Заполните тип

//Типизируйте функцию. userId - число
function getUserActivities(userId: number): Promise<User> {
  return fetchData<User>(`/api/activities/${userId}`);
}
// Используйте ReturnType для создания типа возвращаемого значения функции getUserActivities
type ActivitiesReturnType = ReturnType<typeof getUserActivities>// Заполните тип

// Используйте extends в условных типах для создания типа Permissions
type AdminPermissions = { canBanUser: boolean };
type BasicPermissions = { canEditProfile: boolean };
// Заполните тип. Должен выявляться на основне некоторого дженерика и опредять, какой из пермишенов выдавать: Admin или Basic.
type Permissions0<T> = keyof T extends 'canBanUser'? AdminPermissions : keyof T extends 'canEditProfile'? BasicPermissions : null;

interface Admin {
    canEditProfile: boolean
}
const a: Permissions0<Admin> = {  // для прогверки
    canEditProfile: true
}


///ЧАСТЬ 2.

// Определите Type Alias для Union типа String или Number
type StringOrNumber = string | number;// Заполните тип

// Реализуйте функцию logMessage, которая принимает StringOrNumber и не возвращает значение (void)
function logMessage(message: StringOrNumber): void {
  console.log(message);// Реализуйте вывод сообщения в консоль
}

// Реализуйте функцию throwError, которая никогда не возвращает управление (never)
function throwError(errorMsg: string): never {
  throw new Error(errorMsg);// Бросьте исключение с errorMsg
}

// Реализуйте Type Guard для проверки, является ли значение строкой
function isString(value: StringOrNumber): value is string {
    if (typeof value === 'string'){
        return true;// Верните результат проверки типа
    } else {
        return false;
    }
}


// Реализуйте функцию assertIsNumber, которая использует asserts для утверждения типа number
function assertIsNumber(value: any): asserts value is number {
    if(typeof value !== 'number'){
        throwError("value is not number")
    }
}

// Завершите функцию processValue, используя isString и assertIsNumber
function processValue(value: StringOrNumber) {
  isString(value) ? console.log("Count symbol" + value.length) : value.toFixed(0);// Реализуйте логику проверки и обработки значения
}

// Type Alias и Union
// type StringOrNumber = string | number; кажется это лишнее


//сделайте  Type Guard для определения, является ли значение строкой
// function isString(value) {    Дублирование???
// }

// создайте asserts function на число.
// function assertIsNumber(value: any): asserts {  Дублирование.
  
// }

// // Использование Type Guard и Asserts
// function processValue(value: StringOrNumber) {   и зачем это?
//   if (isString(value)) {
//     console.log(`String value: ${value.toUpperCase()}`);
//   } else {
//     assertIsNumber(value);
//     console.log(`Number value: ${value.toFixed(2)}`);
//   }
// }

//---------------------------------------------------------------------------------

