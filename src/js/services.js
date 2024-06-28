// This Class Communicate with DataBase and do 3 tasks: getDate, sortData and SearchData

// axios config
const transactionAPI = axios.create({
    baseURL: "http://localhost:3000",
});

// This Static Class Service the User three task which was explained above...
export default class TransactionRepository{
    static async getAllData(){
        try {
            const {data} = await transactionAPI.get("/transactions");
            return data;
        } catch (error) {
            alert("پایگاه داده در دسترس نیست");
        }
    }

    static async sortOnPrice(order,query){
        try {
            let result;
            if(query==""){
                result = "/transactions?";
            }
            else{
                result = `/transactions?refId_like=${query}&`
            }
            if(order === "asc"){
                const {data} = await transactionAPI.get(`${result}_sort=price&_order=asc`);
                return data;
            }
            if(order === "desc"){
                const {data} = await transactionAPI.get(`${result}_sort=price&_order=desc`);
                return data;
            }
        } catch (error) {
            alert("پایگاه داده در دسترس نیست");
        }
    }

    static async sortOnDate(order,query){
        try {
            let result;
            if(query==""){
                result = "/transactions?";
            }
            else{
                result = `/transactions?refId_like=${query}&`
            }
            if(order === "asc"){
                const {data} = await transactionAPI.get(`${result}_sort=date&_order=asc`);
                return data;
            }
            if(order === "desc"){
                const {data} = await transactionAPI.get(`${result}_sort=date&_order=desc`);
                return data;
            }
        } catch (error) {
            alert("پایگاه داده در دسترس نیست");
        }
    }

    static async searchTable(query){
        try {
            const {data} = await transactionAPI.get(`/transactions?refId_like=${query}`);
            return data;
        } catch (error) {
            alert("پایگاه داده در دسترس نیست");
        }
    }
}