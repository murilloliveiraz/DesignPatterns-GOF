import { myDataBaseFunction } from './db/my-database-function';

const myDatabaseClassic = myDataBaseFunction;
myDatabaseClassic.add({ name: 'Luiz', age: 30 });
myDatabaseClassic.add({ name: 'Maria', age: 50 });
myDatabaseClassic.add({ name: 'Pedro', age: 23 });
myDatabaseClassic.show();

export { myDatabaseClassic };
