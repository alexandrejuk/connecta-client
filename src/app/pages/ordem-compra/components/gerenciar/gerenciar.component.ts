import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { propNameQuery, formatQuery } from 'app/shared/utils/StringUtils';
import { OrdemCompraService } from './../../../../shared/services/';

@Component({
  selector: 'app-gerenciar',
  templateUrl: './gerenciar.component.html',
  styleUrls: ['./gerenciar.component.scss']
})
export class GerenciarComponent implements OnInit {

  public orderBuys$: Observable<any[]>;
  public carregando: boolean = true;

  public totalRecords;

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
    this.orderBuys$ = this.ordemCompraService.getAllOrderBuys()
      .map(({ orderBuys, count }) => {
        this.totalRecords = count;
        this.carregando = false;
        return orderBuys;
      });
  }

  filterEvents({ filters, first, rows }) {
    const queryFormatter = propNameQuery(filters);
    const newQuery: any = {
      ...queryFormatter('createdAt'),
      ...queryFormatter('description'),
      ...queryFormatter('createdBy'),
      ...queryFormatter('status')
    };
    return newQuery;
  }

  loadOrdersLazy(event) {
    const query = formatQuery('createdAt')(this.filterEvents(event));

    const skip = event.first;
    const limit = event.rows;

    this.orderBuys$ = this.ordemCompraService
      .orderLazyLoad(skip, limit, query)
        .map(({ orderBuys, count }) => {
          this.totalRecords = count;
          this.carregando = false;
          return orderBuys;
        });
  }

}
