import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
senha: any;
email: any;

  constructor() { }

  login = {
    "email":"sdf",
    "senha":"cfdfffffffff"
  }

  ngOnInit(): void {
  }

  chekLoginInputs(email: String, senha: String){
    console.log("Email: ", email)
    alert(`proceder para o login com o login de ${email} ?`);

  }

  criarConta(){
    alert("redirecionar para criação de conta!");
    const resp=prompt("Tem conta mesmo não, sequela...?")
    alert(`sua resposta: ${resp}`);
  }

}
