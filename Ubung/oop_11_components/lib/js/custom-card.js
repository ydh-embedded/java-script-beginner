

class CostumCard extends HTMLElement{
    construktor(){
        super();
        this.root = this.attachShadow({ mode: "closed" });              //open wäre von außen auf die elemente zugreifbar close verhindert seiteneffekte
        this.root.innerHTML = `
        <style>h1{color: #fff;}</style>
        <h1>Hallo aus dem Component</h1>
        
        `;

    }

}


costumElements.define("costum-card" , CostumCard);