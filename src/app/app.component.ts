import { Component, inject, OnInit } from '@angular/core';
import { MenutreeService } from './shared/services/menutree.service';
import { MenuItem } from './shared/models/menutree';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'menutask';

  private menuService = inject(MenutreeService)
  tree:MenuItem[]=[];
  ngOnInit(): void {
    this.menuService.getMenu$()
                    .subscribe({
                      next: (res)=>{
                      console.log(res); 
                      this.tree=this.menuService.buildTree(res) 
                      console.log(this.tree); 
                    },
                    error: (err) => {
                    console.error(err);
                    }
                  });
  }

}
