class JumbotronImage extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <div class="jumbotron jumbotron-fluid" id="jumbotron-image">
            <div class="container">
                <h1 class="display-4">Welcome</h1>
                <p class="lead">Xinema17 is a clone of TMDb.org website</p>
            </div>
        </div>
        `;
    }
}
  
 customElements.define("jumbotron-image", JumbotronImage);