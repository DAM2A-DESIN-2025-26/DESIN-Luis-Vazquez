import { Component, inject, signal } from '@angular/core';
import { IonList, IonItem, IonLabel, IonButton, IonContent } from '@ionic/angular/standalone';
import { Post } from '../interfaces/Posts';
import { PostService } from '../shared/services/post-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonList, IonItem, IonLabel, IonButton, IonContent],
})
export class HomePage {
  postService = inject(PostService);
  listaPosts = signal<Post[]>([]);

  // constructor() {
  //   let respuesta = this.postService.getDatos();
  //   respuesta.subscribe({
  //     next: (data) => {
  //       this.listaPosts.set(data);
  //     },
  //     error: (error) => {
  //       console.log(error);
  //     },
  //     complete: () => {
  //       console.log('Completado');
  //     },
  //   });
  // }

  cargarDatos() {
    console.log(this.getPostCapacitor())
  }

  async getPostCapacitor(){
    let respuesta:Post[] = await this.postService.getAllCapacitor();
    this.listaPosts.set(respuesta);
  }
}
