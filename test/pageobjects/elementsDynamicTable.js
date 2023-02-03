

class ElementsDynamicTable {
    get table() {
        return $('[role=table]')
    }

    get columnHeaders() {
        return $$("[role='columnheader']")
    }

    get browserNames() {
        return $$("[role='cell']:nth-child(1)")
    }

    get warningLabelSelector() {
        return $('.bg-warning')
    }

    get completeTableData(){
        return $$("span[role='cell']")
    }

}
const pageElements = new ElementsDynamicTable()
export default pageElements