import { myDataBaseFunction } from './db/my-database-function';
import { myDatabaseClassic as mydatabaseClassicFromModuleA } from './module_a';

const myDatabaseClassic = myDataBaseFunction;
myDatabaseClassic.add({ name: 'Robson', age: 30 });
myDatabaseClassic.add({ name: 'Joana', age: 50 });
myDatabaseClassic.add({ name: 'Glaucio', age: 23 });
myDatabaseClassic.show();

console.log(myDataBaseFunction === mydatabaseClassicFromModuleA);
