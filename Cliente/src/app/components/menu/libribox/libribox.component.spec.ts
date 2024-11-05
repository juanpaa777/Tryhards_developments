import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibriboxComponent } from './libribox.component';

describe('LibriboxComponent', () => {
  let component: LibriboxComponent;
  let fixture: ComponentFixture<LibriboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibriboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibriboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
