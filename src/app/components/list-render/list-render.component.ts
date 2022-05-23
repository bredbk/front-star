import { Component, OnInit } from '@angular/core';

import { Patient } from 'src/app/intefaces/patient';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  patients: Patient[] = [
      {
        name: "Jhon",
        ethnicity: "branca",
        nationality: "brasileiro",
        cpf: "123456875",
        birth_date: "14-08-1993",
        marital_status: "solteiro",
        address: "Rua C",
        state: "Bahia",
        city: "vitória da conquista",
        gender: "masculino",
        phone_number: "77988662825"
      },
      {
        name: "Anderson",
        ethnicity: "branca",
        nationality: "brasileiro",
        cpf: "123456875",
        birth_date: "14-08-1993",
        marital_status: "solteiro",
        address: "Rua C",
        state: "Bahia",
        city: "vitória da conquista",
        gender: "masculino",
        phone_number: "77988662825"
      },
      {
        name: "Matheus",
        ethnicity: "branca",
        nationality: "brasileiro",
        cpf: "123456875",
        birth_date: "14-08-1993",
        marital_status: "solteiro",
        address: "Rua C",
        state: "Bahia",
        city: "vitória da conquista",
        gender: "masculino",
        phone_number: "77988662825"
      },
      {
        name: "Silvio",
        ethnicity: "branca",
        nationality: "brasileiro",
        cpf: "123456875",
        birth_date: "14-08-1993",
        marital_status: "solteiro",
        address: "Rua C",
        state: "Bahia",
        city: "vitória da conquista",
        gender: "masculino",
        phone_number: "77988662825"
      },
      {
        name: "Eduardo",
        ethnicity: "branca",
        nationality: "brasileiro",
        cpf: "123456875",
        birth_date: "14-08-1993",
        marital_status: "solteiro",
        address: "Rua C",
        state: "Bahia",
        city: "vitória da conquista",
        gender: "masculino",
        phone_number: "77988662825"
      }
      ] 

  

  constructor() { }

  ngOnInit(): void {
  }

}
