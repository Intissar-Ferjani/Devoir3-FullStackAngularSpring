import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcrivainsComponent } from './ecrivains.component';

describe('EcrivainsComponent', () => {
  let component: EcrivainsComponent;
  let fixture: ComponentFixture<EcrivainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EcrivainsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EcrivainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
