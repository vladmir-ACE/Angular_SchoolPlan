import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveCoursComponent } from './save-cours.component';

describe('SaveCoursComponent', () => {
  let component: SaveCoursComponent;
  let fixture: ComponentFixture<SaveCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SaveCoursComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaveCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
