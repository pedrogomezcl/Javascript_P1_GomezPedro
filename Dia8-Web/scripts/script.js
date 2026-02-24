// Web Component
// Permite crear etiquetas personalizadas con código fuente de HTML
// Entre sus componentes está lo siguiente
// 1. Custom Elements: Etiquetas personalizadas (ej: <x-counter>).
// 2. Shadow DOM : Encapsulamiento de DOM + estilos que conlleva.
//(Evitar que los estilos de "afuera" rompan el componente)

// REGLA DE ORO: Si quiero tener etiquetas personalizadas : WebComponent
// Si quiero tener estilos encapsulados : ShadowDOM

//Implementación de un CustomElement
//<hello-card name="Pedro"></hello-card>
class HelloCard extends HTMLElement{
    connectedCallback(){
        const name = this.getAttribute("name") ?? "mundo";
        this.innerHTML=`
        <div style="padding:12px;border:1px solid #ccc;border-radius:12px">
        <strong>Hola, ${name} 👋</strong>
        <p>Este es un Custom Element sin Shadow DOM......</p>
      </div>
        `;
    }
};
customElements.define("hello-card",HelloCard);