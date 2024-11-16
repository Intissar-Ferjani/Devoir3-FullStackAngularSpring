import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEcrivainComponent } from './update-ecrivain.component';

describe('UpdateEcrivainComponent', () => {
  let component: UpdateEcrivainComponent;
  let fixture: ComponentFixture<UpdateEcrivainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateEcrivainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateEcrivainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
