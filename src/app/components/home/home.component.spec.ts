import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { SpotifyService } from '../../services/spotify.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let spotifyServiceMock: jasmine.SpyObj<SpotifyService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [

        {
          provide: SpotifyService,
          useValue: jasmine.createSpyObj('SpotifyService', ['getTopTracks', 'getUserInfo'])
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
