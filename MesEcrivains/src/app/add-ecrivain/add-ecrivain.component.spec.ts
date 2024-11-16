import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEcrivainComponent } from './add-ecrivain.component';

describe('AddEcrivainComponent', () => {
  let component: AddEcrivainComponent;
  let fixture: ComponentFixture<AddEcrivainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEcrivainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEcrivainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
