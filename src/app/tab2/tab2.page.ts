import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public modalController: ModalController) {}

  async openModal(){
    console.log("open modal")
    const modal = await this.modalController.create({
      component: ModalPage 
    });
    
    modal.present();
    this.buscar;
  }

  buscar(){
    alert("buscar")
  }

}
