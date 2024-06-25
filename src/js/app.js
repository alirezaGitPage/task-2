import ViewUnit from "./view.js";
import TransactionRepository from "./services.js";

let orderType = "";
let query = "";

export default class App{
    constructor(root, inputField){
        this.view = new ViewUnit(root, inputField,this._handlres());
        this._refreshTable();
    }
    _handlres(){
        return{
            sortTableOnPrice: (order) => {
                orderType = order;
                this.priceSort();
            },
            sortTableOnDate: (order) => {
                orderType = order;
                this.dateSort();
            },
            searchTableOnInput: (q) => {
                query = q;
                this.searchTable();
            }
        }
    }
    async _refreshTable(){
        this.view.updateTable(await TransactionRepository.getAllData())
    }
    async priceSort(){
        this.view.updateTable(await TransactionRepository.sortOnPrice(orderType));
    }
    async dateSort(){
        this.view.updateTable(await TransactionRepository.sortOnDate(orderType));
    }
    async searchTable(){
        this.view.updateTable(await TransactionRepository.searchTable(query));
    }
}