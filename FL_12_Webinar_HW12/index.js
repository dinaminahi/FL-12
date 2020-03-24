async function request() {
    const req = await fetch('data.json');
    const jsonResp = await req.json();
    const employees = await jsonResp;
    return employees;
}


class Component {

    static countElems = 0;

    constructor({ id, rm_id, name, performance, last_vacation_date, salary, pool_name = "" }) {
        this.id = id;
        this.rm_id = rm_id;
        this.name = name;
        this.performance = performance;
        this.last_vacation_date = last_vacation_date;
        this.salary = salary;
        this.pool_name = pool_name;
        this.parentNum = 0;
        this.elemPrefix = '';
        this.elemsList = [];
        this.id = Component.countElems;
        Component.countElems++;
    }

    showHierarchy() {
        this.elemPrefix = this.setPrefixLength(this.parentNum);
    }


    Add(Component) {

    }

    Remove(Component) {

    }

    GetChild(key) {
        return this.chirdren[key];
    }

    GetAllChildren() { 
    }

    GetChildrenByParentId() {
    }

    setPrefixLength(count) {
        let pre = '';
        for (let i = 0; i < count; i++) {
            pre += '----';
        }
        return pre;
    }

}


class Developer extends Component { 
    constructor({ id, rm_id, name, performance, salary, last_vacation_date, pool_name }) {
        super({ id, rm_id, name, performance, salary, last_vacation_date, pool_name })
        console.log('Leaf created')
    }

    ShowHierarchy() {
        super.ShowHierarchy();
        console.log(this.elemPrefix + this.name)
    }
}


class RM extends Component {
    constructor({ id, rm_id, name, performance, salary, last_vacation_date, pool_name }) {
        super({ id, rm_id, name, performance, salary, last_vacation_date, pool_name })
        this.children = [];
        console.log('Composite created')
    }

    ShowHierarchy() {
        super.ShowHierarchy();
        console.log(this.elemPrefix + this.name + ' (Composite)')
        for (var i in this.children)
            this.children[i].ShowHierarchy()
    }

    Add(elem) {
        elem.parentsNum = this.parentsNum + 1;
        this.children.push(elem)
    }

    Remove(elem) {
        for (var i in this.children)
            if (this.children[i] === elem)
                this.children.splice(i, 1)
    }

    GetChild(key) {
        return this.children[key]
    }

    GetAllChildren(childrenArr) {
        if (!childrenArr) {
            this.elemsList = [];
            childrenArr = this.children;
        }
        for (var i in childrenArr) {
            this.elemsList.push(childrenArr[i]/*.name*/);
            if (childrenArr[i].children) {
                this.GetAllChildren(childrenArr[i].children)
            }
        }
        return this.elemsList;
    }

    GetChildrenByParentId(parentId) {
        this.GetAllChildren();
        const arrLength = this.elemsList.length;
        for (let i = 0; i < arrLength; i++) {
            if (this.elemsList[i].id == parentId) {
                console.log(this.elemsList[i].GetAllChildren());
            }
        }
    }

}

let developers = [];

fetch("data.json")
  .then(response => response.json())
  .then(json => json.forEach(el => developers.push(el)));

(async function buildTree() {
    const root = new RM(developers[0]);
})();


