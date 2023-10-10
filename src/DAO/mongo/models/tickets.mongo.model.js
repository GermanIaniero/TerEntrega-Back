import mongoose from 'mongoose';

const TicketModel = mongoose.model ('tickets', new mongoose.Schema({
    code: String,
    purchase_datetime: String,
    amount:Number,  //investigatar datastamp
    purchaser:String,
    //{ timestamps: true }
})

)

export default TicketModel