/* Задание 1: "Управление персоналом компании"

Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:

Свойство name (имя) - строка, имя сотрудника.
Метод displayInfo() - выводит информацию о сотруднике (имя).
Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:

Свойство department (отдел) - строка, отдел, в котором работает менеджер.
Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).*/


class Employee {
    constructor(name) {
        this.name = name;
    }

    displayInfo() {
        console.log(`Name: ${this.name}`);
    }
}    

class Manager extends Employee {
    constructor(name, department) {
        super(name);
        this.department = department;
    }

    displayInfo() {
        console.log(`Name: ${this.name}\nDepartment: ${this.department}`);
    }

}
    
// Пример использования классов
const employee = new Employee("John Smith");
employee.displayInfo();
// Вывод:
// Name: John Smith
console.log(`----------`);
const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();
console.log(`----------`);
// Вывод:
// Name: Jane Doe
// Department: Sales

/* ========================

Задание 2: "Управление списком заказов"

Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
Свойство products (продукты) - массив, содержащий список продуктов в заказе.
Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.*/

class Order {
    constructor(orderNumber) {
        this.orderNumber = orderNumber;
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product)
    }

    getTotalPrice() {
        let total = 0;
        for (let i = 0; i < this.products.length; i++) {
            total += this.products[i].price;
        }
        return total;
    }
}

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const order = new Order(12345);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);
console.log(`Your order:`);
console.log(order.products);
console.log(`Total sum of order ${order.orderNumber}: ${order.getTotalPrice()}.`); // Вывод: 600

/* ==========================
Задача необязательная для выполнения

Задача: Создать класс "Студент", который имеет приватные свойства "имя", 
"возраст" и "средний балл". Класс должен иметь методы для установки и получения значений свойств, 
а также метод для вывода информации о студенте.*/


class Student {
    #nameValue = null;
    #ageValue = null;
    #averageGradeValue = null;
    constructor(name, age, averageGrade) {
        this.setName(name);
        this.setAge(age);
        this.setAverageGrade(averageGrade);
    }

    setName(newName) {
        this.#nameValue = newName;
    }

    setAge(newAge) {
        this.#ageValue = newAge;
    }

    setAverageGrade(newAverageGrade) {
        this.#averageGradeValue = newAverageGrade;
    }

    getName(){
        return this.#nameValue;
    }

    getAge(){
        return this.#ageValue;
    }

    getAverageGrade(){
        return this.#averageGradeValue;
    }

    displayInfo() {
        console.log(`name: ${this.#nameValue}\nage: ${this.#ageValue}\naverageGrade: ${this.#averageGradeValue}`);
    }
}

const student = new Student();
student.setName('Питер Паркер');
student.setAge(20);
student.setAverageGrade(85);
student.displayInfo();
console.log(`--------`);
console.log(student.getName());
console.log(student.getAge());
console.log(student.getAverageGrade());