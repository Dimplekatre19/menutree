import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../models/menutree';


@Component({
  selector: 'app-menutree',
  templateUrl: './menutree.component.html',
  styleUrls: ['./menutree.component.scss']
})
export class MenutreeComponent implements OnInit {
@Input() node!:MenuItem
  constructor(
    
  ) { }

  ngOnInit(): void {
    
  }


  private isExpanded = false;


  toggle(): void {
    if (this.node.children?.length) {
      this.isExpanded = !this.isExpanded;
    }
  }


  expanded(): boolean {
    return this.isExpanded;
  }

}
