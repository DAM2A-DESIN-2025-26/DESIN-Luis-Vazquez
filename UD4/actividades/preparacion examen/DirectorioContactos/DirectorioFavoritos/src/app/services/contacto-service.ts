import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Contacto } from '../interfaces/contacto';
import { environment } from 'src/environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactoService {
  private httpClient = inject(HttpClient);

  contactos = signal<Contacto[]>([]);

  constructor() {
    this.cargarContactos();
  }

  async cargarContactos() {
    try {
      const datos = await firstValueFrom(this.httpClient.get<Contacto[]>(environment.apiURL))

      const datosListos = datos.map(usuario =>{
        return {
          ...usuario,
          esFavorito: false
        };
      })

      this.contactos.set(datosListos)

    } catch (error) {
        console.error(error)
    }

  }

   public cambiarEstado(id: number) {
    // Usamos .update() para modificar el valor actual de la señal
    this.contactos.update(listaActual =>
      // Recorremos la lista y buscamos la tarea con ese ID
      listaActual.map(contacto =>
        // Si es la tarea que busco, invierto su 'completed'. Si no, la dejo igual.
        contacto.id === id ? { ...contacto, esFavorito: !contacto.esFavorito } : contacto
      )
    );
  }

  public borrarItem(id: number) {
    // Usamos .update() para modificar el valor actual de la señal
    this.contactos.update(listaActual =>
      // Recorremos la lista y buscamos la tarea con ese ID
      listaActual.filter(contacto =>
        // Si es la tarea que busco, invierto su 'completed'. Si no, la dejo igual.
        contacto.id !== id
      )
    );
  }

  // Método para CREAR
public agregarContacto(nuevo: Omit<Contacto, 'id'>) {
  // Truco para generar ID: Buscamos el ID más alto y sumamos 1
  const idMax = this.contactos().length > 0
    ? Math.max(...this.contactos().map(c => c.id))
    : 0;

  const contactoFinal: Contacto = {
    ...nuevo,
    id: idMax + 1,
    esFavorito: false // Por defecto no es favorito
  };

  // Añadimos al array (Spread operator)
  this.contactos.update(lista => [...lista, contactoFinal]);
}

// Método para ACTUALIZAR (Editar)
public actualizarContacto(contactoModificado: Contacto) {
  this.contactos.update(lista =>
    lista.map(c => c.id === contactoModificado.id ? contactoModificado : c)
  );
}

// Método auxiliar para buscar un contacto por ID (para rellenar el formulario)
public getContactoPorId(id: number): Contacto | undefined {
  return this.contactos().find(c => c.id === id);
}


}
