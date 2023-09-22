import mongoose from 'mongoose';

const TicketModel = mongoose.model ('tickets', new mongoose.Schema({
    id: Number,
    code:Number,
    purchase_datetime:TimeRanges,
    amount:Number,
    purchaser:String,
})

)

export default TicketModel