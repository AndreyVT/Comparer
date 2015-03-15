/**
 * Created with IntelliJ IDEA.
 * User: AVT
 * Date: 01.03.15
 * Time: 15:36
 * To change this template use File | Settings | File Templates.
 */
function RecordService($resource) { //http://localhost:7777/api/v1/items/1
    var url = 'http://localhost:7777/api/v1';
    var severalRecordsPath = '/records/:id:cmd';
    var oneRecordPath = '/record/:id:cmd';
    var src = $resource(url,
        {id: "@id", cmd: "@cmd"}, //parameters default
        {
            ListRecords: { url: url + severalRecordsPath, method: "GET", isArray: true, params: { id : 1} },
            GetRecord: { url: url + oneRecordPath, method: "GET", params: { id: 0 } }, // id - покупки
            CreateRecord: { url: url + oneRecordPath,  method: "POST", params: { content: "", PurchaseId: 0} },
            UpdateRecord: { url: url + oneRecordPath, method: "PUT", params: {} },
            DeleteRecord: { url: url + oneRecordPath, method: "DELETE", params: { id: 0 } }
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
