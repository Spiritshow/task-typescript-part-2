

//---------------------------------------------------------------------------------  
// Задание 4: Использование Utility Types для работы с интерфейсами
// Цель: Модифицировать интерфейсы для специфических нужд без изменения оригинальных интерфейсов.

// Определите интерфейс Employee
interface Employee {
  id: number;
  name: string;
  department: string;
  email: string;
}

// Используйте Utility Type для создания типа, который делает все свойства Employee опциональными
type PartialEmployee = Partial <Employee>// Заполните тип

// Используйте Utility Type для создания типа, который делает все свойства Employee доступными только для чтения
type ReadonlyEmployee = Readonly <Employee>// Заполните тип

// Создайте функцию, которая принимает PartialEmployee и выводит информацию о сотруднике
function printEmployeeInfo(employee: PartialEmployee) {
    const id = employee.id !== undefined? employee.id: new Error("id undefined");// Реализуйте логику функции, обрабатывая случай отсутствующих свойств
    const name = employee.name !== undefined? employee.name: 'No name';
    const department = employee.department !== undefined? employee.department: 'department undefined';
    const email = employee.email !== undefined? employee.email: new Error("email undefined");
    console.log(`Info employee: ${id}, ${name}, ${department}, ${email}`)
}

function printEmployeeInfo_Ver02(employee: PartialEmployee) {
    const {
        id = new Error("id undefined"),
        name ='No name',
        department = 'department undefined',
        email = new Error("email undefined")
    } = employee;
    console.log(`Info employee: ${id}, ${name}, ${department}, ${email}`);
}

//---------------------------------------------------------------------------------



