// This Class Communicate with DataBase and do 3 tasks: getDate, sortData and SearchData

// axios config
const transactionAPI = axios.create({
    baseURL: "http://localhost:3000",
});

// This Static Class Service the User three task which was explained above...
export default class TransactionRepository{
    static async getAllData(){
        const {data} = await transactionAPI.get("/transactions");
        return data;
    }

    static async sortOnPrice(order){
        if(order === "asc"){
            const {data} = await transactionAPI.get("/transactions?_sort=price&_order=asc");
            return data;
        }
        if(order === "desc"){
            const {data} = await transactionAPI.get("/transactions?_sort=price&_order=desc");
            return data;
        }
    }

    static async sortOnDate(order){
        if(order === "asc"){
            const {data} = await transactionAPI.get("/transactions?_sort=date&_order=asc");
            return data;
        }
        if(order === "desc"){
            const {data} = await transactionAPI.get("/transactions?_sort=date&_order=desc");
            return data;
        }
    }

    static async searchTable(query){
        const {data} = await transactionAPI.get(`/transactions?refId_like=${query}`);
        return data;
    }
}