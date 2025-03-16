import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatBadge } from '@angular/material/badge';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { provideRouter, RouterLink, RouterOutlet } from '@angular/router';
import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        NavComponent,
        MatToolbar,
        MatSidenav,
        MatIcon,
        MatSidenavContainer,
        MatSidenavContent,
        MatNavList,
        MatListItem,
        MatIconButton,
        AsyncPipe,
        RouterOutlet,
        RouterLink,
        MatBadge,
        CurrencyPipe,
      ],
      providers: [provideExperimentalZonelessChangeDetection(), provideRouter([])],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
