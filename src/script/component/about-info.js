class AboutInfo extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <!-- Modal -->
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Welcome to Xinema17 2.0!</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                  <p>
                      This is my new version of Xinema17. Xinema17 is a movie web app project for Dicoding's BFFWD class final submission.
                  </p>
                  <p>
                      Created by Sadam Alfian.P
                  </p>
                  <ul class="socmed">
                      <li>
                          <a href="https://twitter.com/sdm_ap">
                            <i class="fab fa-twitter fa-2x"></i>
                          </a>
                      </li>
                      <li>
                          <a href="https://github.com/sadumb">
                            <i class="fab fa-github fa-2x"></i>
                          </a>
                      </li>
                      <li>
                          <a href="https://www.instagram.com/sadumb">
                            <i class="fab fa-instagram fa-2x"></i>
                          </a>
                      </li>
                  </ul>
                </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        `
    }
  }
  
customElements.define("about-info", AboutInfo);