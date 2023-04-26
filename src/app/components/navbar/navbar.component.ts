import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isActive = true
  hoje!: Date;
  constructor(private router : Router){}

  trogleActive(){
    this.isActive = !this.isActive;
  }
  ngOnInit(): void {
    this.hoje = new Date();
  }

  sair(){
    this.router.navigate(["/login"])
  }

}
