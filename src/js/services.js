export default class TransactionRepository{
    static async getAllData(){
        const {data} = await axios.get("http://localhost:3000/transactions");
        return data;
    }

    static async sortOnPrice(order){
        if(order === "asc"){
            const {data} = await axios.get("http://localhost:3000/transactions?_sort=price");
            return data;
        }
        if(order === "desc"){
            const {data} = await axios.get("http://localhost:3000/transactions?_sort=-price");
            return data;
        }
    }

    static async sortOnDate(order){
        if(order === "asc"){
            const {data} = await axios.get("http://localhost:3000/transactions?_sort=date");
            return data;
        }
        if(order === "desc"){
            const {data} = await axios.get("http://localhost:3000/transactions?_sort=-date");
            return data;
        }
    }

    static async searchTable(query){
        const {data} = await axios.get(`http://localhost:3000/transactions?refId_like=${query}`);
        return data;
    }
}