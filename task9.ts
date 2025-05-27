
//---------------------------------------------------------------------------------
// Задание 9:
// Реализовать DeepReadonly<T>
// Задача:
// Создать тип, который делает все поля объекта (включая вложенные) доступными только для чтения (readonly).

// Что нужно сделать:

// Обработать объекты рекурсивно.

// Учесть массивы и другие структуры данных.

// Не трогать примитивы (string, number, boolean).
// Подсказки:
// Используйте условные типы (extends, infer) для сложных проверок.
// Для рекурсии ограничивайте глубину (иначе TypeScript может зависнуть):
// Мы делали нечто похожее в рамках задачи по Partial типу. Подумайте теперь как сделать свой readonly, еще и глубокий.

type DeepReadonly <T> = {
  readonly [K in keyof T]: T[K] extends Object ? T[K] extends Function ? T[K] : DeepReadonly<T[K]> : T[K]
};

//Прмер:
type User = {
  name: string;
  address: {
    city: string;
    street: string;
  };
  hobbies: string[];
};

type DeepReadonlyUser = DeepReadonly<User>;
/* Результат:
{
  readonly name: string;
  readonly address: {
    readonly city: string;
    readonly street: string;
  };
  readonly hobbies: readonly string[];
}
*/
//---------------------------------------------------------------------------------






