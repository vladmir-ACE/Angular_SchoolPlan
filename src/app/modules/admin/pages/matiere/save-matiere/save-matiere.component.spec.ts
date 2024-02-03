import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveMatiereComponent } from './save-matiere.component';

describe('SaveMatiereComponent', () => {
  let component: SaveMatiereComponent;
  let fixture: ComponentFixture<SaveMatiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaveMatiereComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaveMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
