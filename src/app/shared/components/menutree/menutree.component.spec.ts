import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenutreeComponent } from './menutree.component';

describe('MenutreeComponent', () => {
  let component: MenutreeComponent;
  let fixture: ComponentFixture<MenutreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenutreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenutreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
