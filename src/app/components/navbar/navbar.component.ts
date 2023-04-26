import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isActive = true
  currentPath?: string;
  hoje!: Date;
  logoUrl!: string;
  showButton!:boolean;
  constructor(
    private router : Router,
    private route:ActivatedRoute
  ){}

  trogleActive(){
    this.isActive = !this.isActive;
  }
  ngOnInit(): void {
    this.hoje = new Date();
    this.currentPath = this.route.snapshot.url[0].path;
    this.logoUrl = this.currentPath === 'main' ? 'assets/logo-navbar.svg' : 'assets/logo.svg';
    this.showButton = this.currentPath !== 'main'
  }

  sair(){
    this.router.navigate(["/login"])
  }

}
