import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMaterialDidaticoComponent } from './list-material-didatico.component';

describe('ListMaterialDidaticoComponent', () => {
  let component: ListMaterialDidaticoComponent;
  let fixture: ComponentFixture<ListMaterialDidaticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMaterialDidaticoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMaterialDidaticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
