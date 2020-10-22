// chinese.js
import classC from './classes/class-c';

let engligh = {
	teacher: 'english',
	age: 47,
};
import(/* webpackChunkName:"async-classA" */ './classes/class-a.js').then(classA => {
	classA.push(engligh);
});
import(/* webpackChunkName:"async-classB" */ './classes/class-b.js').then(classB => {
	classB.push(engligh);
});
classC.push(engligh);
