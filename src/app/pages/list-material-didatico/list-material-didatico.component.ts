import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetDesignsService } from 'src/service/getDesigns.service';

@Component({
  selector: 'app-list-material-didatico',
  templateUrl: './list-material-didatico.component.html',
  styleUrls: ['./list-material-didatico.component.scss']
})
export class ListMaterialDidaticoComponent {
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
