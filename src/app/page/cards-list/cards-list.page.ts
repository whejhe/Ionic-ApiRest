import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.page.html',
  styleUrls: ['./cards-list.page.scss'],
})
export class CardsListPage implements OnInit {

  cartas: any[] = []

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get<any>("https://static.krcg.org/data/vtes.json")
    .subscribe(res => {
      console.log(res);
      this.cartas = res;
    })
  }

}
