import { User } from "./warmap";

//---------------------------------------------------------------------------------
// Задание 2: Расширенное использование Generics
// Цель: Создать универсальную функцию обработки данных, которая может работать с различными типами данных.

// Определите Generic интерфейс Response с одним параметром типа T. Второй параметр status: number
interface Response0<T> {
  type: T;
  status: number
}

// Реализуйте и типизируйте функцию, которая возвращает объект Response для переданных данных
function createResponse <T>(data: T, status:number): Response0<T> {
  const obj:Response0<T> = {type: data, status: status};// Реализуйте создание и возврат объекта Response
  return obj;
}

// Используйте функцию createResponse для создания ответа с массивом чисел
const numericResponse = createResponse([9,8,7,6,4,3], 200); // Заполните вызов функции

// Используйте функцию createResponse для создания ответа с объектом пользователя (User)
const Client: User ={
  id: 15,
  name: "Nikolo",
  email: "Kolay@mail.ru"
}

const userResponse = createResponse(Client, 200)// Заполните вызов функции
//---------------------------------------------------------------------------------

