const template = document.createElement("template")
    template.innerHTML =/*HTML*/`
    <style>

        .card {
            background-color: var(--primary-color-focus-border);
            border-radius:      7px  ;
        
            padding:            20px  ;
            margin-bottom:      10px  ;
            width:              100%  ;
            max-width:          360px ;

        }

        .card-header {
            display:        flex   ;
            align-items:    center ;
            justify-content: space-between;
        }
        .card-header > h2 {
            font-size:      1.5rem ;
            margin-bottom:      2px;
        }

        .card-body{
            margin:            20px;
        }

        .card-footer {
            display:    flex   ;
            align-items: center;
            justify-content: space-between;
        }

        custom-card {
            display: block;
            background: var(--primary-color-hover);
            color: #2c3e50  ;
            border-radius: 7px;
            padding-left: 11px;
        }

    </style>

    <div class="card">
        <div class="card-header">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit excepturi, temporibus exercitationem itaque, totam, natus expedita nesciunt necessitatibus quam non perferendis animi veritatis nisi. Fuga obcaecati maiores quo minus maxime.        </div>
        <div class="card-body"  >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi aspernatur laudantium eveniet quas qui praesentium aut accusantium adipisci necessitatibus nesciunt, ipsam, quibusdam sint? Velit, temporibus magnam incidunt molestias amet possimus.        </div>
        <div class="card-footer"><button type="submit" id="action-trigger">Klick Mich</button>        </div>

    </div>

    ` ;

class CostumCard extends HTMLElement{
    construktor(){
        super();
        this.root = this.attachShadow({ mode: "closed" });              //open wäre von außen auf die elemente zugreifbar close verhindert seiteneffekte

        /*         this.root.innerHTML = `
        <style>h1{color: #fff;}</style>
        <h1>Hallo aus dem Component</h1>`; */
        // wir verwenden statt der styles ein template erzeugt in Zeile 2


        this.root.appendChild(template.content.cloneNode(true));                // wir weisen den Inhalt den Root - Element zu


    }

}


costumElements.define("costum-card" , CostumCard);