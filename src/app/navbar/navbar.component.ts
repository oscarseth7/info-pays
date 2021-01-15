import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
p='';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
recherche(){
  this.router.navigate(['countries/region',this.p])
}
}
