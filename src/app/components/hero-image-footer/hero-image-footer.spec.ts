import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroImageFooter } from './hero-image-footer';

describe('HeroImageFooter', () => {
  let component: HeroImageFooter;
  let fixture: ComponentFixture<HeroImageFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroImageFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroImageFooter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
