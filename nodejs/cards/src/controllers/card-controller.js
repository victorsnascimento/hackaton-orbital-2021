const neDB = require('../configurations/database')
const api = {}

api.findAll = (request, response) => {
    neDB.find({}).sort({ name: 1 }).exec((exception, cards) => {
        if (exception) {
            const sentence = "Failled on attempt to list the cards"
            console.log(sentence, exception)
            response.status(exception.status | 400)
            response.json({ 'mensagem': sentence })
        }
        response.json(cards)
    })
}

api.save = (request, response) => {
    const canonical = request.body
    neDB.insert(canonical, (exception, cards) => {
        if (exception) {
            console.log('Opa, deu merda!', exception)
        }
        response.json(cards)
        response.status(201)
    })
}

/*api.delete = (request, response) => {
    
    neDB.remove({ _id: "test" }, {}, ((exception, cards) => {
        if (exception) {
            const sentence = "_Id not found"
            console.log(sentence, exception)
            response.status(exception.status | 400)
            response.json({ 'mensagem': sentence })
        }
        response.json(cards)
    })
}
*/
api.findOne = (request, response) => {
    canonical = request._id
    neDB.findOne({ _id : " "  }).exec((exception, cards) => {
        if (exception) {
            const sentence = "_Id not found"
            console.log(sentence, exception)
            response.status(exception.status | 400)
            response.json({ 'mensagem': sentence })
        }
        response.json(cards)
    })
}

/*api.put = (request, response) => {
    db.update({ _id: 'test' }, { $addToSet: { address: 'test' } }, {}.exec((excetion, cards) => {
        if (exception) {
            const sentence = "_Id not found"
            console.log(sentence, exception)
            response.status(exception.status | 400)
            response.json({ 'mensagem': sentence })
        }
        response.json(cards)
    })
}
*/






module.exports = api