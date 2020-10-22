// console.log('ok');
import './chinese.js';
import './english.js';
import './math.js';
import React from 'react';
import ReactDOM from 'react-dom';
// li必须写在上面，const为ES6新语法，没有变量提升和预解析
const li = React.createElement('li', { key: 1 }, '列表项1');
const ul = React.createElement('ul', { title: '列表' }, li);
ReactDOM.render(ul, document.getElementById('app'));
