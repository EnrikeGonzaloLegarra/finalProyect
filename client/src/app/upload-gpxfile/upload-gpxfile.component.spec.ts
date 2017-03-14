import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadGpxfileComponent } from './upload-gpxfile.component';

describe('UploadGpxfileComponent', () => {
  let component: UploadGpxfileComponent;
  let fixture: ComponentFixture<UploadGpxfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadGpxfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadGpxfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
