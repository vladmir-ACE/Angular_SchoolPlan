import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMatiereComponent } from './find-matiere.component';

describe('FindMatiereComponent', () => {
  let component: FindMatiereComponent;
  let fixture: ComponentFixture<FindMatiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindMatiereComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
