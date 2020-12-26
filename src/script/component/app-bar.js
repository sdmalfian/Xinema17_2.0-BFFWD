class AppBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark navbar-custom">
            <a class="navbar-brand" href="#">Xinema17</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                <a class="nav-link" href="#">Movies<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                <a class="nav-link" data-toggle="modal" data-target="#exampleModalCenter" href="#">About</a>
                </li>
            </ul>
            </div>
        </nav>
        `;
    }
}

customElements.define("app-bar", AppBar);