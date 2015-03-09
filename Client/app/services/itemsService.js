function ItemService($resource) { //http://localhost:7777/api/v1/items/1
    var src = $resource('http://localhost:7777/api/v1/item/:id:cmd',
        {id: "@id", cmd: "@cmd"}, //parameters default
        {
            ListItems: { method: "GET", isArray: true, params: { string: ""} },
            GetItems: { method: "GET", params: { id: 0 } },
            CreateItem: { method: "POST", params: { content: "", shop: 0, done: false } },
            UpdateItem: { method: "PUT", params: {content: "" } },
            DeleteItem: { method: "DELETE", params: { id: 0 } },
            ResetItem: { method: "GET", params: { cmd: "reset" } }
        });

    //Usage:
    //GET without ID
    //it calls -> api/1/todo
    /* src.ListTodos();
     //GET with ID
     //it calls -> api/1/todo/4
     src.GetTodo({ id: 4 });
     //POST with content, order, done
     //it calls -> api/1/todo
     src.CreateTodo({ content: "learn Javascript", order: 1, done: false });
     //UPDATE content only
     //it calls -> api/1/todo/5
     src.UpdateTodo({ id: 5, content: "learn AngularJS" });
     //UPDATE done only
     //it calls -> api/1/todo/5
     src.UpdateTodo({ id: 5, done: true });
     //RESET with cmd
     //it calls -> api/1/todo/reset
     src.ResetTodos();*/
    return src;
}
