import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular//forms';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;
  constructor(public fb: FormBuilder,
    public alertController: AlertController) { 
    this.formularioRegistro = this.fb.group({
      'user': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmPassword': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }

  async guardar() {
    let f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Todos los campos son obligatorios',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }
    
    let usuario = {
      user: f.user,
      password: f.password
    }

    localStorage.setItem('usuario', JSON.stringify(usuario));
    console.log(localStorage);
  }


}
