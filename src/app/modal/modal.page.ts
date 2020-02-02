import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor( private modalControler: ModalController) { }

  ngOnInit() {
  }
  close(){
    this.modalControler.dismiss();
  }

  buscar(){
    var x = "joao amaral";
  }
  

}
