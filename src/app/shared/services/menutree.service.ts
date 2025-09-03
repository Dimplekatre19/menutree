import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse, MenuItem } from '../models/menutree';

@Injectable({
  providedIn: 'root'
})
export class MenutreeService {
  BaseUrl: string= `${environment.BaseUrl}`;
  Url:string= `${this.BaseUrl}/MenuMasters/GetMenuMasterList/173/98/145`  
  constructor(
    private _http: HttpClient
  ) { }

  getMenu$(): Observable<MenuItem[]> {
    return this._http.get<ApiResponse<MenuItem[]>>(this.Url).pipe(
    map((res) => res?.data ?? [])
   );
  }


  buildTree = (list: MenuItem[]): MenuItem[] => {
          const map = new Map<number, MenuItem & { children: MenuItem[] }>();
          const roots: (MenuItem & { children: MenuItem[] })[] = [];


          for (const item of list) {
                map.set(item.id, { ...item, children: [] });
              }


          for (const item of list) {
                 const node = map.get(item.id)!;
                 if (item.refMenuId === null) {
                     roots.push(node);
                     }
                     else {
                        const parent = map.get(item.refMenuId);
                        if (parent) {
                            parent.children = parent.children ?? [];
                            parent.children.push(node);
                        }
                         else {
                                roots.push(node);
                        }
                    }
                }

    const sortTree = (nodes: MenuItem[]): MenuItem[] =>
       nodes
           .sort((a, b) => (a.orderNum ?? 0) - (b.orderNum ?? 0) || a.name.localeCompare(b.name))
           .map((n) => ({ ...n, children: n.children ? sortTree(n.children) : [] }));
            return sortTree(roots);
};

}
