import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController) {

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {

  }

  async login() {
    
    const f = this.formularioLogin.value;
    const usuarioString = localStorage.getItem("usuario");

    if(usuarioString !==null){
      let usuario = JSON.parse(usuarioString);
      if (usuario.nombre === f.usuario && usuario?.password === f.password) {
        localStorage.setItem('sesion', 'true');
        console.log(localStorage);
      } else {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Credenciales incorrectas',
          buttons: ['OK']
        });
        await alert.present();
      }
    }else{
      console.log('No hay usuario');
    }
    
  } 

}
