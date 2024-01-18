import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  character: any = {};
  profileId: string | null = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.profileId = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get('https://static.krcg.org/data/vtes.json/' + this.profileId)
    .subscribe(res => this.character = res);
  }

}