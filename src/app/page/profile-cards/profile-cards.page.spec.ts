import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileCardsPage } from './profile-cards.page';

describe('ProfileCardsPage', () => {
  let component: ProfileCardsPage;
  let fixture: ComponentFixture<ProfileCardsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfileCardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
