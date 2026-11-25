import { TextBoxComponent } from "./components/caixaDeTexto.js";

document.body.innerHTML = `

    ${new TextBoxComponent({
        className: "control-3d",
        placeholder: "Digite o seu nome",
        type: "text",
        label: "Nome:",


    }).render()}
    
    ${new TextBoxComponent({
        className: "control-3d",
        placeholder: "Digite o seu nome",
        type: "text",
        label: "Nome:",


    }).render()}
    
    
    `