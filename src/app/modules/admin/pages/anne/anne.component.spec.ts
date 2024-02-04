import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnneComponent } from './anne.component';

describe('AnneComponent', () => {
  let component: AnneComponent;
  let fixture: ComponentFixture<AnneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
