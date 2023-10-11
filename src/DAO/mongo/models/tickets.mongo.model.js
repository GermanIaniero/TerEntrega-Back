import mongoose from 'mongoose';

const TicketModel = mongoose.model ('tickets', new mongoose.Schema({
    code:  { type: String,
    unique: true
    },
    purchase_datetime: String,
    amount:Number,  //investigatar datastamp
    purchaser:String,
    //{ timestamps: true }
})

)

export default TicketModel