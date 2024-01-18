import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile-cards',
  templateUrl: './profile-cards.page.html',
  styleUrls: ['./profile-cards.page.scss'],
})
export class ProfileCardsPage implements OnInit {

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
