// english.js
import classB from './classes/class-b';
import classC from './classes/class-c';

let engligh = {
	teacher: 'english',
	age: 47,
};
//  动态引入的js模块，打包的name值，还是按照[name]-bundle.js的格式输出
import(/* webpackChunkName:"async-classA" */ './classes/class-a.js').then(classA => {
	classA.push(engligh);
});
classB.push(engligh);
classC.push(engligh);
