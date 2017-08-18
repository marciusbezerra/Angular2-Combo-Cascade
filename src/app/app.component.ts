import { DataserviceService } from './dataservice.service';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Pais } from './pais';
import { Cidade } from './cidade';

@Component({
  selector: 'app-lista-paises',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataserviceService]
})
export class AppComponent {
  title = 'Combo Cascade';
  paisSelecionado: Pais = new Pais(0, 'Brasil');
  paises: Pais[];
  cidades: Cidade[];

  constructor(private _dataService: DataserviceService) {
    this.paises = this._dataService.getPaises();
  }

  onSelect(id: string) {
    this.cidades = this._dataService.getCidades().filter((c) => c.paisid === parseInt(id, null));
  }
}
