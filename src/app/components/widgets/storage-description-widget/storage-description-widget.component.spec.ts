import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageDescriptionWidgetComponent } from './storage-description-widget.component';

describe('StorageDescriptionWidgetComponent', () => {
  let component: StorageDescriptionWidgetComponent;
  let fixture: ComponentFixture<StorageDescriptionWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorageDescriptionWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageDescriptionWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
