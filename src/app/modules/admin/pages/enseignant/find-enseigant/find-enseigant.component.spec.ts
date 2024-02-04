import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindEnseigantComponent } from './find-enseigant.component';

describe('FindEnseigantComponent', () => {
  let component: FindEnseigantComponent;
  let fixture: ComponentFixture<FindEnseigantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FindEnseigantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FindEnseigantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
