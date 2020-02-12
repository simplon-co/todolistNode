const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const TodoList = require('./todo-list');


const app = express();
const todoList = new TodoList();
todoList.add("todo1");
todoList.add("todo2");
todoList.add("todo3");
todoList.add("todo4");
todoList.add("todo5");


app.engine('ejs', ejs.renderFile);
app.use('/assets', express.static('assets'));

const urlencodedParser = bodyParser.urlencoded({extended: false});

app.get('/', (request, response) => {
    response
        .render('index.ejs', {todoList});
});

app.post("/add", urlencodedParser, (request, response) => {
    todoList.add(request.body.todo);
    console.log(todoList);
    response.render("index.ejs", {todoList});
});

app.post("/remove", urlencodedParser, (request, response) => {
    todoList.remove(request.body.index);
    response.render("index.ejs", {todoList});
});
app.listen(8080);