import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavePlaningComponent } from './save-planing.component';

describe('SavePlaningComponent', () => {
  let component: SavePlaningComponent;
  let fixture: ComponentFixture<SavePlaningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SavePlaningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SavePlaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
