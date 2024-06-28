// This class is like an Interface, by using methods in services class and run them on View class, make the page dynamic
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
            sortTableOnPrice: (order,q) => {
                orderType = order;
                query = q;
                this.priceSort();
            },
            sortTableOnDate: (order,q) => {
                orderType = order;
                query = q;
                this.dateSort();
            },
            searchTableOnInput: (q) => {
                query = q;
                this.searchTable();
            }
        }
    }
    async _refreshTable(){
        this.view.updateTable(await TransactionRepository.getAllData());
    }
    async priceSort(){
        this.view.updateTable(await TransactionRepository.sortOnPrice(orderType,query));
    }
    async dateSort(){
        this.view.updateTable(await TransactionRepository.sortOnDate(orderType,query));
    }
    async searchTable(){
        this.view.updateTable(await TransactionRepository.searchTable(query));
    }
}