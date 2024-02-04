import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePlaningComponent } from './update-planing.component';

describe('UpdatePlaningComponent', () => {
  let component: UpdatePlaningComponent;
  let fixture: ComponentFixture<UpdatePlaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatePlaningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatePlaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
