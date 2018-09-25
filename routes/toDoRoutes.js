//Route to load arrays of to do items

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

}