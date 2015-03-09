/**
 * Created with IntelliJ IDEA.
 * User: AVT
 * Date: 08.02.15
 * Time: 20:45
 * To change this template use File | Settings | File Templates.
 */
function ShopService($resource) { //http://localhost:7777/api/v1/items/1
    var src = $resource('http://localhost:7777/api/v1/shops/:id:cmd',
        {id: "@id", cmd: "@cmd"}, //parameters default
        {
            ListShops: { method: "GET", isArray: true, params: {} },
            GetShop: { method: "GET", params: { id: 0 } },
            CreateShop: { method: "POST", params: { content: "", shop: 0, done: false } },
            UpdateShop: { method: "PUT", params: {content: "" } },
            DeleteShop: { method: "DELETE", params: { id: 0 } },
            ResetShops: { method: "GET", params: { cmd: "reset" } }
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