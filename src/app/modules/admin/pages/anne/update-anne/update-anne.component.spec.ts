import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAnneComponent } from './update-anne.component';

describe('UpdateAnneComponent', () => {
  let component: UpdateAnneComponent;
  let fixture: ComponentFixture<UpdateAnneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateAnneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateAnneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
