import { Progenitor } from "./Progenitor.js";
import { Sucesor } from "./Sucesor.js";

const padre = new Progenitor("Jose Luis", "Vazquez", true);
const hijo = new Sucesor("Luis", "Vazquez", false);

padre.desplazarse("Casa", "Trabajo");
padre.comer();
hijo.desplazarse("Casa", "Instituto");