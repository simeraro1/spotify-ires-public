import { ComponentFixture, TestBed } from '@angular/core/testing';
import { convertToParamMap } from '@angular/router';
import { CallbackComponent } from './callback.component';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { SpotifyService } from '../../services/spotify.service';
import { Observable, of } from 'rxjs';

describe('CallbackComponent', () => {
  let component: CallbackComponent;
  let fixture: ComponentFixture<CallbackComponent>;
  let authenticationServiceMock: jasmine.SpyObj<AuthenticationService>;
  let spotifyServiceMock: jasmine.SpyObj<SpotifyService>;

  beforeEach(async () => {
    authenticationServiceMock = jasmine.createSpyObj('AuthenticationService', ['getToken']);
    authenticationServiceMock.getToken.and.returnValue(of({ access_token: 'mock_token' }));

    await TestBed.configureTestingModule({
      imports: [
        CallbackComponent
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({ code: 'mock_code' }),
          },
        },
        { provide: AuthenticationService, useValue: authenticationServiceMock },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
