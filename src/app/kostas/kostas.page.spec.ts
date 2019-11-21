import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KostasPage } from './kostas.page';

describe('KostasPage', () => {
  let component: KostasPage;
  let fixture: ComponentFixture<KostasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KostasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KostasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
