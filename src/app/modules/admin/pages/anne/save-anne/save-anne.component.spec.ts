import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveAnneComponent } from './save-anne.component';

describe('SaveAnneComponent', () => {
  let component: SaveAnneComponent;
  let fixture: ComponentFixture<SaveAnneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaveAnneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaveAnneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
