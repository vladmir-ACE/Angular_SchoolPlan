import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveClasseComponent } from './save-classe.component';

describe('SaveClasseComponent', () => {
  let component: SaveClasseComponent;
  let fixture: ComponentFixture<SaveClasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaveClasseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaveClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
