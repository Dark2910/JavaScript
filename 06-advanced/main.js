import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { enviromentComponent } from './src/concepts/01-enviroment'
import { callBacksComponent } from './src/concepts/02-callbacks'
import { promisesComponent } from './src/concepts/03-promise'
import { promiseRaceComponent } from './src/concepts/04-promise-rece'
import { asyncComponent } from './src/concepts/05-async'
import { asyncAwaitComponet } from './src/concepts/06-async-await'
import { asyncAwaitComponent2 } from './src/concepts/07-async-await'
import { forAwaitComponent } from './src/concepts/08-for-await'
import { generatorFunctionComponent } from './src/concepts/09-generators'
import { generatorsAsyncComponent } from './src/concepts/10-generator-async'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">

    </div>

  </div>
`

const element = document.querySelector('.card');

//enviromentComponent(element);
//callBacksComponent(element);
//promisesComponent(element);
//promiseRaceComponent(element);
//asyncComponent(element);
//asyncAwaitComponet(element);
//asyncAwaitComponent2(element);
//forAwaitComponent(element);
//generatorFunctionComponent(element);
generatorsAsyncComponent(element);


