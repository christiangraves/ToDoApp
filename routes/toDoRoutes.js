
const toDoList = require('../data/toDo-list.js');

module.exports = function(app){
    //Get all saved to-do Items
    app.get('/api/showList', function(req, res){
         res.json(toDoList);
    });

    //Adds new to do item to collections
     app.post('/api/addList', function(req, res){
        toDoList.push(req.body);
        res.json({sucess: true});
     });

    //Delete item from toDo List
    app.delete('/api/deleteList/:item', function(req, res){
        toDoList.splice(req.params.item, 1);
        res.json({success: true});
    });

}