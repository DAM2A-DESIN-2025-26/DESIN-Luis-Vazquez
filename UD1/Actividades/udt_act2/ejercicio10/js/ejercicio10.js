import { Progenitor } from "../../ejercicio9/js/Progenitor.js";
import { Sucesor } from "../../ejercicio9/js/Sucesor.js";
import { Familia } from "./Familia.js";

const padre = new Progenitor("Jose Luis", "Vazquez", true);
const hijo = new Sucesor("Luis", "Vazquez", false);
const familia = new Familia("C/Ramon Asenjo", 1000, [padre, hijo]);

familia.llamadaAComer();
familia.vacaciones("Asturias", "Málaga")

