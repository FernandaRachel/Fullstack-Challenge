import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { DadosService } from './service/dados-service.service';
import { Users } from './model/user';
import { removeDebugNodeFromIndex } from '../../../node_modules/@angular/core/src/debug/debug_node';
import { debug } from 'util';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent implements OnInit {

  user: any;
  participacaoList: number[];
  listAux = [];

  constructor(private userService: DadosService) { }

  ngOnInit() {
    this.getDataFromAPI()
  }

  getDataFromAPI() {
    let participacaoTotal = 0.0;
    let listaux: Users[] = [];

    this.userService.getUser().subscribe(u => {
      console.log(u);
      this.user = u;

      for (let index = 0; index < this.user.length; index++) {
        const element = this.user[index];
        listaux.push(this.user[index])
        participacaoTotal += this.user[index].participacao;
        console.log(element);
      }
      console.log("participacaoTotal");
      console.log(participacaoTotal);

      this.getCorrectPercentage(listaux, participacaoTotal)

    });

  }

  getCorrectPercentage(listaux: Users[], participacaoTotal: number) {
    let obj = new Object();

    for (var x = 0; x < listaux.length; x++) {
      var p = parseInt(listaux[x].participacao);
      var name = listaux[x].name;

      obj["value"] = (p / participacaoTotal) * 100;
      obj["name"] = name;
      this.listAux.push(obj);
      obj = new Object();
      console.log(obj);
    }
    this.getCharData();
  }

  async getCharData() {
    const ctx = document.getElementById('myChart');
    let dataValue = [];
    let label: String[] = [];

    for (var x = 0; x < this.listAux.length; x++) {
      label.push(this.listAux[x]["name"]);
      dataValue.push(this.listAux[x]["value"])
    }

    const data = {
      datasets: [{
        data: dataValue,
        backgroundColor:
          [
            '#ff6384',
            '#ff6ff4',
            '#050545',
          ]
      }],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: label
    };

    const myPieChart = new Chart(ctx, {
      type: 'pie',
      data: data
    });
  }

}
