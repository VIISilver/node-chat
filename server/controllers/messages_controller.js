var messages = [];

var id = 0;

module.exports = {
    create: function(req, res, next) {
        var { text, time } = req.body;
        messages.push({ id, text, time });
        id++;
        res.status(200).send( messages );
    },

    read: function(req, res, next) {
        res.status(200).send(messages);
    },

    update: function(req, res, next){
        var {text} = req.body;
        var updateID = req.params.id;
        var messageIndex = messages.findIndex( message => message.id == updateID );
        var message = messages[ messageIndex ];

        messages[ messageIndex ] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        };
        res.status(200).send( messages );
    },

    delete: function(req, res, next){
        var deleteID = req.params.id;
        var messageIndex = messages.findIndex( message => message.id == deleteID );
        messages.splice(messageIndex, 1);
        res.status(200).send( messages );
    }

}