import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyWordComponent } from './key-word.component';

describe('KeyWordComponent', () => {
  let component: KeyWordComponent;
  let fixture: ComponentFixture<KeyWordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeyWordComponent]
    });
    fixture = TestBed.createComponent(KeyWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
