import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbuttonDataComponent } from './addbutton-data.component';

describe('AddbuttonDataComponent', () => {
  let component: AddbuttonDataComponent;
  let fixture: ComponentFixture<AddbuttonDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddbuttonDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddbuttonDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
