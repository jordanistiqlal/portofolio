const {company, position} = require('../Model/company.model.js')

module.exports = class experienceService{
    find = async (req) => {
        const data = await company.findAll({
            include: [position],
            order: [['created_at', 'DESC']],
        })

        const response = data.map((item) => ({
            company: item.company,
            link: item.company_link || '', // Use empty string if company_link is null
            position: item.positions.map((positionItem) => ({
              [positionItem.position]: `${positionItem.position_begin} - ${positionItem.position_end}`,
            })),
          }));
        
        return response;
    }
    findOne = async (id) => {
        const data = await company.findAll({
            include: [position],
            where: {
                id : id
            }
        })
        const response = data.map((item) => ({
            company: item.company,
            link: item.company_link || '', // Use empty string if company_link is null
            position: item.positions.map((positionItem) => ({
              [positionItem.position]: `${positionItem.position_begin} - ${positionItem.position_end}`,
            })),
        }));

        return response
    }
    create = async (req, transaction) => {
        const data = await company.create({
            company: req.body.company,
            company_link: req.body.company_link
        }, {transaction})
        await Promise.all(
            req.body.position.map((item) =>
            position.create({
                induk_id: data.id,
                position: item.position,
                position_begin: item.start,
                position_end: item.end,
              }, {transaction})
            )
        );

        return req.body
    }
    update = async  (id, req, transaction) => {
        const numUpdated = await company.update({
            company: req.body.company,
            company_link: req.body.company_link
        }, {
            where: {id: id},
            transaction: transaction
        });

        await position.destroy({
            where: {
                induk_id: id
            },
            transaction: transaction
        });

        await Promise.all(
            req.body.position.map((item) =>
            position.create({
                induk_id: id,
                position: item.position,
                position_begin: item.start,
                position_end: item.end,
              }, {transaction})
            )
        );

        if (numUpdated == 0) {
            return { msg: 'Data Not Found' };
        }

        const response = await this.findOne(id)
    
        return response;
    }
    delete = async (id, transaction) => {
        const deleteData = await company.destroy({
            where: {
                id: id
            },
            transaction: transaction
        })
        const response = (deleteData == 0 ? { msg: 'Data Not Found' } : { msg: 'Data Deleted' })
        return response;
    }
}