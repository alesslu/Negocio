import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieshomeComponent } from './categorieshome.component';

describe('CategorieshomeComponent', () => {
  let component: CategorieshomeComponent;
  let fixture: ComponentFixture<CategorieshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieshomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorieshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
