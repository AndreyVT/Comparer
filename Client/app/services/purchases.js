/**
 * Created with IntelliJ IDEA.
 * User: AVT
 * Date: 25.02.15
 * Time: 21:48
 * To change this template use File | Settings | File Templates.
 */

function PurchasesService($resource, $cookies) {
    var url = 'http://localhost:7777/api/v1';
    var severalParchasesPath = '/purchases/:id:cmd';
    var onePurchasePath = '/purchase/:id:cmd';
    var src = $resource(url,
        {id: "@id", cmd: "@cmd"}, //parameters default
        {
            ListPurchases: { url: url + severalParchasesPath, method: "GET", isArray: true, params: { id : 1} },
            GetPurchase: { url: url  + onePurchasePath,  method: "GET", params: { id: 0 } },
            CreatePurchase: { url: url + onePurchasePath,  method: "POST", params: { content: "", shop: 0, done: false, userId: 0} },
            UpdatePurchase: { url: url + onePurchasePath, method: "POST", params: {} },
            DeletePurchase: { url: url + onePurchasePath, method: "DELETE", params: { id: 0 } }
            //ResetPurchase: { url: url + onePurchasePath, method: "GET", params: { cmd: "reset" } }
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
