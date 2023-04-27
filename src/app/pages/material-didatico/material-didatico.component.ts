import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetDesignsService } from 'src/service/getDesigns.service';

@Component({
  selector: 'app-material-didatico',
  templateUrl: './material-didatico.component.html',
  styleUrls: ['./material-didatico.component.scss']
})
export class MaterialDidaticoComponent {
  constructor(private getDesignsService : GetDesignsService, private router : Router){}

  designs!: Array<any>

  ngOnInit(){
    this.ListarDesigns();
  }

  ListarDesigns(){
    this.getDesignsService.ListarDesigns()
    .subscribe(designs => {
      console.log(designs)
      this.designs = designs.data;
    },
      error => {
        this.router.navigate(["/login"])
      }
    )
  }

}
