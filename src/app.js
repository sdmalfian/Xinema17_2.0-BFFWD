import 'bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./styles/style.css";
import "./script/component/app-bar.js";
import "./script/component/jumbotron.js";
import "./script/component/footer.js";
import "./script/component/about-info.js";
import main from "./script/view/main.js";

document.addEventListener("DOMContentLoaded", main);