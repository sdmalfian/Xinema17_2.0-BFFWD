class FooterBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <div class="footer">
            <p>XINEMA17 2.0 <br>
            © 2020 Baparekraf Developer Day </p>
        </div>`
    }
  }
  
customElements.define("footer-bar", FooterBar);