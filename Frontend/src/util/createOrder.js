import axios from "axios"

// let instance = new Razorpay({ key_id: 'rzp_live_QIe3h6AzCpqGan', key_secret: '9WDO4V8q9kcUZCFEg9M87sNi' });
const createOrder =async()=>{
    instance.orders.create({
        amount: 100,
        currency: "INR",
        receipt: "receipt#1",
        notes: {
            key1: "value3",
            key2: "value2"
        }
        })
    await axios.post("https://api.razorpay.com/v1/orders" , instance).then((result)=>{
        console.log(result);
    })
};
export default createOrder;