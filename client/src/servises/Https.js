import axios from "axios"

const exportedObject = {

    // baseURL: "http://localhost:5000/",
    baseURL: "/",

    async getAllProducts() {
        const res = await axios.post(this.baseURL + "getallprods");
        return res;
    },

    async getCartItems(user) {
        const res = await axios.post(this.baseURL + "get-cart-items", { user });
        return res;
    },

    async getUser(user) {
        const res = await axios.post(this.baseURL + "getuser", { user });
        return res;
    },

    async seeProduct(id) {
        const res = await axios.post(this.baseURL + "seeprod", { id });
        return res;
        // const res = await axios.post(this.baseURL + "seeprod", { id });
        // return res;
    },

    async addToCart(id, user) {
        const res = await axios.post(this.baseURL + "addtocart", { id, user });
        return res;
    },

    async getSingleCartData(id, user) {
        const res = await axios.post(this.baseURL + "getSingleCartData", { id, user });
        return res;
    },

    async removeFromCart(id,user) {
        const res = await axios.post(this.baseURL + "remove-from-cart",{id,user});
        return res;
    },

    async order(USER, OrderData) {
        const res = await axios.post(this.baseURL + "order",{username:USER, obj:OrderData});
        return res;
    },

    async cancelorder(obj) {        
        const res = await axios.post(this.baseURL + "cancelorder",{obj});
        return res;
    },

    async getorderdetails(id) {        
        const res = await axios.post(this.baseURL + "getorder",{orderId:id});
        // console.log(res);
        
        return res;
    },

    async handdleLike(id, val, username) {
        const res = await axios.post(this.baseURL + "handlelike",{id,val,username});
        return res;
    },

    async getLikedArr(user) {
        const res = await axios.post(this.baseURL + "getLikedArr",{user});
        return res;
    },

    async login(userData) {
        const res = await axios.post(this.baseURL + "login",userData);
        return res;
    },

    async signup(userData) {
        const res = await axios.post(this.baseURL + "signup",userData);
        return res;
    },

    async logout() {
        localStorage.removeItem('user')
    },

    async userverification(user) {        
       await axios.post(this.baseURL + "verification",{user}).then(async(res)=>{
           return res;
       }).catch((e)=>{
           this.logout();
       })
    },
 
};

export default exportedObject;

