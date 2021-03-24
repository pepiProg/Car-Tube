import { html } from '../../node_modules/lit-html/lit-html.js'

const template = () => html`
<div id="main">
    <div id="welcome-container">
        <h1>Welcome To Car Tube</h1>
        <img src="./style/images/finance-car.png" alt="carIntro">
        <h2>Login or register to check out our listings or to make one</h2>
        <div id="button-div">
            <a href="/login" class="button">Login</a>
            <a href="/register" class="button">Register</a>
        </div>
    </div>
</div>
`

export function homePage(ctx){
    ctx.render(template())
}