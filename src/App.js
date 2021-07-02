import html from '../lib/core.js';
import { connect } from '../lib/store.js';

function App({ cars }) {
    return html`
        <ul>
            ${cars.map(car => `<li>${car}</li>`)}
        </ul>
    `
}

export default connect()(App)
