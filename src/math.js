// math.js
import classB from './classes/class-b';
import classC from './classes/class-c';

let math = {
	teacher: 'math',
	age: 47,
};
import(/* webpackChunkName:"async-classA" */ './classes/class-a.js').then(classA => {
	classA.push(math);
});
classB.push(math);
classC.push(math);
