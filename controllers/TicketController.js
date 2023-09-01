const Ticket = require('../models/Tickets');


const createTicket = async (req , res) => { 
    const {title , description , status , price , StartDate,EndDate , capasity } = req.body;
    const ticket = new Ticket({
        title , description , status , price , StartDate,EndDate , capasity 
    });
    try {
        const savedTicket = await ticket.save();
        res.status(201).json(savedTicket);
    } catch (error) {
        res.status(400).json({message : error.message});
    }
}

module.exports = {createTicket};