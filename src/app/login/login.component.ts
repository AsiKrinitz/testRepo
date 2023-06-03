import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  currentUser: any;

  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    this.auth.user$.subscribe((response) => {
      this.currentUser = response;
    });
  }
}
