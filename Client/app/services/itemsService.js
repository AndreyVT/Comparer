function ItemService($resource, url) { //http://localhost:7777/api/v1/items/1
    //var url = 'http://localhost:7777/api/v1';
    var severalItemsPath = '/items/:id:cmd';
    var oneItemPath = '/item/:id:cmd';
    var src = $resource(url,
        {id: "@id", cmd: "@cmd"}, //parameters default
        {
            ListItems: { url: url + severalItemsPath, method: "GET", isArray: true, params: { id: ""} },
            GetItems: { url: url + oneItemPath, method: "GET", params: { id: 0 } },
            CreateItem: { url: url + oneItemPath, method: "POST", params: { content: "", shop: 0, done: false } },
            UpdateItem: { url: url + oneItemPath, method: "PUT", params: {content: "" } },
            DeleteItem: { url: url + oneItemPath, method: "DELETE", params: { id: 0 } },
            ResetItem: { url: url + oneItemPath, method: "GET", params: { cmd: "reset" } }
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
