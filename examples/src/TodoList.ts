import {Component,Input, NgFor} from 'angular2/angular2';
import {Footer} from "./Footer";
import {Todo} from "./Todo";
import {List} from 'immutable';


@Component({
    selector: 'todo-list',
    directives: [Footer, NgFor],
    template: `

        <section id="main" ng-show="todos.size > 0">
            <input id="toggle-all" type="checkbox" (click)="markAllCompleted()">
            <label for="toggle-all">Mark all as complete</label>
            <ul id="todo-list">
                <li ng-repeat="todo in todos | filter:statusFilter track by $index" ng-class="{completed: todo.completed, editing: todo == editedTodo}">
                    <div class="view">
                        <input class="toggle" type="checkbox" ng-model="todo.completed" ng-change="toggleCompleted(todo)">
                        <label ng-dblclick="editTodo(todo)">todo.title</label>
                        <button class="destroy" ng-click="removeTodo(todo)"></button>
                    </div>
                    <form ng-submit="saveEdits(todo, 'submit')">
                        <input class="edit" ng-trim="false" ng-model="todo.title" todo-escape="revertEdits(todo)" ng-blur="saveEdits(todo, 'blur')" todo-focus="todo == editedTodo">
                    </form>
                </li>
            </ul>
        </section>

        <todo-footer></todo-footer>
    `
})
export class TodoList {

    @Input() todos: List<Todo>;

    markAllCompleted() {

    }

}