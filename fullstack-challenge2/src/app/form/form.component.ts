import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DadosService } from '../dados/service/dados-service.service';
import { Route } from '../../../node_modules/@angular/compiler/src/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  userForm: FormGroup;
  name: String;
  fullName: String;
  participacao: number;


  constructor(private formBuilder: FormBuilder,
    private userService: DadosService) { }

  ngOnInit() {

    this.userForm = this.formBuilder.group({
      name: [this.name, Validators.required],
      fullName: [this.fullName, Validators.required],
      participacao: [this.participacao, Validators.required]

    });
  }

  postUser() {
    console.log("postUser");
    this.userService.postUser(this.userForm.value).subscribe(
      response => console.log(response),
      err => console.log(err)
    );
  }
}
