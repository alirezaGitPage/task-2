export default class ViewUnit{
    constructor(root,inputField,handlers){
        this.root = root;
        this.inputField = inputField;
        const { sortTableOnPrice , sortTableOnDate , searchTableOnInput } = handlers;
        this.sortTableOnPrice = sortTableOnPrice;
        this.sortTableOnDate = sortTableOnDate;
        this.searchTableOnInput = searchTableOnInput;
        this.root.innerHTML = `
            <table class="transactions__table">
                <caption class="caption">
                لیست تراکنش های شما
                </caption>
                <thead>
                <th>ردیف</th>
                <th>نوع تراکنش</th>
                <th class="sort-price chevron">
                    مبلغ
                    <i class="price-chevron fa-solid fa-chevron-down"></i>
                </th>
                <th>شماره پیگیری</th>
                <th class="sort-date chevron">
                    تاریخ تراکنش
                    <i class="date-chevron fa-solid fa-chevron-down"></i>
                </th>
                </thead>
                <tbody class="tbody"></tbody>
            </table>
        `;
        const sortOnPrice = this.root.querySelector(".sort-price");
        const sortOnDate = this.root.querySelector(".sort-date");
        const priceChevron = this.root.querySelector(".price-chevron");
        const dateChevron = this.root.querySelector(".date-chevron");

        let order = "";

        sortOnPrice.addEventListener("click",() => {
            priceChevron.classList.toggle("rotate");
            if(priceChevron.classList.contains("rotate")){
                order = "asc";
            }
            else{
                order = "desc";
            }
            this.sortTableOnPrice(order);
        });
        sortOnDate.addEventListener("click",() => {
            dateChevron.classList.toggle("rotate");
            if(dateChevron.classList.contains("rotate")){
                order = "asc";
            }
            else{
                order = "desc";
            }
            this.sortTableOnDate(order);
        })
        this.inputField.addEventListener("input" , (e) => {
            let query = e.target.value;
            this.searchTableOnInput(query);
        })
    }

    #createTableData(id, type, price, refId, date){
        return `<tr>
            <td>${id}</td>
            <td class="${(type==="افزایش اعتبار") ? "deposit" : "withdrawl"}">${type}</td>
            <td>${price.toLocaleString()} ریال</td>
            <td>${refId}</td>
            <td class="date-time">${(new Date(date)).toLocaleString("fa-IR",{
                dateStyle: "full",
                timeStyle: "short"
            })}</td>
        </tr>`;
    }

    updateTable(transactions){
        const tbody = this.root.querySelector(".tbody");
        tbody.innerHTML = "";
        let dataList = "";
        transactions.forEach(transaction => {
            const { id, type, price, refId, date} = transaction;
            const html = this.#createTableData(id, type, price, refId, date);
            dataList += html;
        });
        tbody.innerHTML = dataList;
    }
}