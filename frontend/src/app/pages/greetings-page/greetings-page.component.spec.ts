import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingsPageComponent } from './greetings-page.component';

describe('GreetingsPageComponent', () => {
  let component: GreetingsPageComponent;
  let fixture: ComponentFixture<GreetingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreetingsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
