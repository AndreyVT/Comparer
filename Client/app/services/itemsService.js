app.service('itemsService', function () {

    var shops = [];
    var items = [];

    this.getItems = function () {
        return items;
    };

    this.addItem = function(item) {
      items.push(item);
    };

    this.getShops = function()  {
      
      shops.push({id:1, name:'Lenta'});
      shops.push({id:2, name:'Interspar'});
      shops.push({id:3, name:'FoodCity'});
      shops.push({id:4, name:'Abricos'});

      return shops;
    };
        
});
