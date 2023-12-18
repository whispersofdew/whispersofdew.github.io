/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 * */
 
 type Category = {
    id: string;
    name: string;
    photo?: string;
 }
 
/**
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
* */

type Product = {
    id: string;
    name: string;
    photo: string;
    desc?: string;
    createdAt: string;
    oldPrice?: number;
    price: number;
    category: Category;
}

/**
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
* */

type Operation = Cost | Profit;

/**
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 * */

type Cost = {
    id: string;
    name: string;
    desc?: string;
    createdAt: string;
    amount: number;
    category: Category;
    type: 'Cost'
}

/**
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */

type Profit = {
    id: string;
    name: string;
    desc?: string;
    createdAt: string;
    amount: number;
    category: Category;
    type: 'Profit';
  };

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */

export const generateId = (): string => {
    return Math.floor(Math.random() * 1000).toString();
}

export const getRandomElementFromList = (lengthOfTheArray : number): number => {
    return Math.floor(Math.random() * lengthOfTheArray);
}

const productNames = ['Кока Колла', 'Фанта', 'Спрайт', 'Сок Яблочный', 'Вода'];
const productOldPrices = [100, 120, 125, 127, 130];
const productPrices = [101, 121, 126, 128, 131];

export const createRandomProduct = (createdAt: string): Product => {
    const id = generateId();
    const name = productNames[getRandomElementFromList(productNames.length)];
    const photo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5umYODpZcHERP0wswYDMIflZuPBB7IFEaDiOOg_OzokCcUYvbYRLNPYRnGM85wLozASo&usqp=CAU';
    const desc = 'Освежающий напиток';
    const oldPrice = productOldPrices[getRandomElementFromList(productOldPrices.length)];
    const price = productPrices[getRandomElementFromList(productPrices.length)];
    const category: Category = {
      id: generateId(),
      name: 'Напитки',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Soft_drink_shelf_2.jpg',
    };
    return {id, name, photo, desc, createdAt, oldPrice, price, category};
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */

const operationNames = ['Приемка', 'Инвентаризация', 'Учет', 'Продажа', 'Рекламация'];
const operationAmounts = [1, 2, 3, 4, 5];
type OperationType = 'Cost' | 'Profit';
const operationTypes: Array<OperationType> = ['Cost', 'Profit'];

export const createRandomOperation = (createdAt: string) : Operation => {
    const id = generateId();
    const name = operationNames[getRandomElementFromList(operationNames.length)];
    const desc = 'Критически важная для нашего бизнеса операция';
    const amount = operationAmounts[getRandomElementFromList(operationAmounts.length)];
    const category: Category = {
      id: generateId(),
      name: 'Инструменты',
    };
    const type = operationTypes[getRandomElementFromList(operationTypes.length)];
    return { id, name, desc, createdAt, amount, category, type};
};
