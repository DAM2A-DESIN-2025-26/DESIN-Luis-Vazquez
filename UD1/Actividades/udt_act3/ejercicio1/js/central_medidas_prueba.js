const central = new CentralMedidas();

central.insertaAleatorio("Oviedo");
central.insertaAleatorio("Madrid");

console.log("Media Oviedo:", central.mediaMedidas("Oviedo"));
console.log("Media total:", central.mediaMedidasTotal());

central.toConsole();