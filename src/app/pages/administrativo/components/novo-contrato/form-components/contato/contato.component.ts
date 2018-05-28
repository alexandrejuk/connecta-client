import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contato-cliente',
  templateUrl: './contato.component.html'
})
export class ContatoClienteComponent {

  @Input()
  public contatoControl;

  @Input()
  public clienteEncontrado;

  public contatoEscolhido;

  constructor() { }

  contatoSelecionado(contato) {
    this.contatoControl.get('contato.nome').patchValue(contato.nome);
    this.contatoControl.get('contato.telefone').patchValue(contato.telefone);
    this.contatoControl.get('contato.celular').patchValue(contato.celular);
    this.contatoControl.get('contato.email').patchValue(contato.email);
    this.contatoControl.get('contato.observacao').patchValue(contato.observacao);
  }
}

