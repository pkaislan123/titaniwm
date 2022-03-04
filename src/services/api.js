import axios from 'axios';

/* Endereços para cada emulador/simulador:
** Genymotion:              http://10.0.3.2:3333/
** Emulador Android Studio: http://10.0.2.2:3333/
** Simulador IOS:           http://localhost:3333/
*/
const api = axios.create({
  baseURL: 'https://e24e-2804-bd8-cca5-8200-2094-e0e4-2849-2d66.ngrok.io',
 
});

//baseURL: 'http://aislanldarmazens-64531.portmap.io:64531'
 //baseURL: 'http://localhost:8080',

export default api;
