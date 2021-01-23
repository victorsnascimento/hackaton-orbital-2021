const api = require('../controllers/card-controller')

module.exports = (app) => {
    app.route('/cards')
        .get(api.findAll)
        .post(api.save)
        .delete(api.delete)
        .get(api.findOne)
        .put(api.put)
}