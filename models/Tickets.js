const mongoose = require('mongoose');

const TicketSchema = mongoose.Schema({
    title: { 
        type: String,
        required: [true, "must provide with a valid title"],
        max: [255, "title must be less than 255 characters"],
        min: [6 , "title must be more than 6 characters"],
        unique: [true, "title must be unique"]
    }
    

    , description: { 
        type: String, 
        required: [true , "must provide with a valid description"], 
    }

    , status: { 
        type: Boolean,
        required: [true , "must provide with a valid status"], 
    }

    , price: { 
        type: String, 
        required: [true , "must provide with a valid price"], 
    }

    , StartDate: { 
        type: Date, 
        default: Date.now 
    }
    , EndDate: { 
        type: Date, 
        default: Date.now 
    }
    , capasity: { 
        type: Number, 
        required: true, 
        default: 1
     }
    
});

module.exports = mongoose.model('Ticket', TicketSchema);