/*Задание 1: "Управление библиотекой книг"

Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

Свойство title (название) - строка, название книги.
Свойство author (автор) - строка, имя автора книги.
Свойство pages (количество страниц) - число, количество страниц в книге.
Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).*/

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    displayInfo() {
        console.log(`Наименование: ${this.title}, автор: ${this.author}, количество страниц: ${this.pages}.`);
    }
}
const newBook = new Book('Белый клык', "Джек Лондон", 150);
newBook.displayInfo();


/*Задание 2: "Управление списком студентов"
Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

Свойство name (имя) - строка, имя студента.
Свойство age (возраст) - число, возраст студента.
Свойство grade (класс) - строка, класс, в котором учится студент.
Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).

// Пример использования класса
const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();
// Вывод:
// Name: John Smith
// Age: 16
// Grade: 10th grade

const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();
// Вывод:
// Name: Jane Doe
// Age: 17
// Grade: 11th grade"*/

class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    displayInfo() {
        console.log(`Name: ${this.name}\nAge: ${this.age}\nGrade: ${this.grade}.`);
    }
}
const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();
const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();


/** Задача необязательная для выполнения:
=========================
==     НЕ РАБОТАЕТ     ==
=========================
Это расширенная версия задачи с банком, которую мы решлали на семинаре:

Создайте класс "Банк", который будет иметь следующие свойства: название банка, список клиентов и список счетов. Класс должен иметь методы для добавления нового клиента, открытия нового счета для клиента, пополнения счета, снятия денег со счета и проверки баланса.

Пример работы:

const bank = new Bank("Мой Банк");

const client1 = new Client("Иван", 25);
const client2 = new Client("Мария", 30);

bank.addClient(client1);
bank.addClient(client2);

bank.openAccount(client1, 1000);
bank.openAccount(client2, 500);

bank.deposit(123456789, 200);
bank.withdraw(987654321, 100);
bank.checkBalance(123456789);
bank.checkBalance(987654321);*/

class Bank {
    constructor(bankName) {
        this.bankName = bankName;
        this.accountNumbers = [];
        this.clients = [];
        // this.balance = balance;

    }
    
    addClient(client) {
        this.clients.push(client);
    }

    openAccount(client, balance) {
        // const account = new BankAccount(client, accountNumber, balance);
        this.clients.push(client, balance);
        // return account;
    }

    deposit(accountNumber, amount) {
        this.balance += amount;
        console.log(`Deposited ${amount} into account ${accountNumber}. New balance: ${this.balance}.`);
    }
    withdraw(accountNumber, amount) {
        if (amount > this.balance) {
            console.log(`Insufficient funds in account ${accountNumber}.`);
        } else {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from account ${accountNumber}. New balance: ${this.balance}.`);
        }
    }

    checkBalance(accountNumber) {
        console.log(`The balance of account ${accountNumber} is ${balance}`);
    }

}

class Client {
    constructor(nameClient, age) {
        this.nameClient = nameClient;
        this.age = age;
    }
}


const bank = new Bank("Мой Банк");

const client1 = new Client("Иван", 25);
const client2 = new Client("Мария", 30);

bank.addClient(client1);
bank.addClient(client2);

bank.openAccount(client1, 1000);
bank.openAccount(client2, 500);

bank.deposit(123456789, 200);
bank.withdraw(987654321, 100);
bank.checkBalance(123456789);
bank.checkBalance(987654321);