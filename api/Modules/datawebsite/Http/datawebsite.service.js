const {datawebsite, galleries} = require('../Model/datawebsite.model.js')


module.exports = class datawebsiteService{
    find = async (req) => {
        const response = await datawebsite.findAll({
            include: [galleries]
        })
        return response
    }
    findOne = async (id) => {
        const response = await datawebsite.findAll({
            include: [galleries],
            where: {
                id : id
            }
        })
        return response
    }
}