import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { NotificationsService } from 'angular2-notifications';

import { AtendimentoModel } from './../../../../models/atendimento/atendimento.interface';
import { TecnicoModel } from '../../../../models/tecnico/tecnico.interface';
import { TECNICOSMOCK } from './../../../../utils/mocks/tecnicos.mock';
import { AtendimentosDisponiveisComponent } from './atendimentos-disponiveis/atendimentos-disponiveis.component';

@Component({
  selector: 'app-associar',
  templateUrl: './associar.component.html',
  styleUrls: ['./associar.component.scss'],
})
export class AssociarComponent implements OnInit {
  tecnicos: TecnicoModel[] = TECNICOSMOCK;
  atendimentos: AtendimentoModel[] = [];
  atendimentoASerRemovido;
  tecSelecionado: string;

  opcoesModalAtendimentos: NgbModalOptions = {
    size: 'lg',
  };

  opcoesModalNotificao = {
    position: ['top', 'right'],
    timeOut: 1500,
    lastOnBottom: true
  };

  constructor(private _servicoModal: NgbModal, private _servicoNotificacao: NotificationsService ) {}

  ngOnInit() {}

  openNotificacaoModal() {
    this._servicoNotificacao.success(
      'Removido com sucesso!',
      '',
      {
        timeOut: 1500,
        showProgressBar: false,
        pauseOnHover: false,
        clickToClose: false,
        maxLength: 10
      }
    );
  }

  openConfirmacaoModal(conteudo, atendimento, tecnico) {
    this.tecSelecionado = tecnico;
    this.atendimentoASerRemovido = atendimento;
      this._servicoModal.open(conteudo);
  }

  abrirModal(tecnicoSelecionado) {

    const modalRef = this._servicoModal
                    .open(AtendimentosDisponiveisComponent, this.opcoesModalAtendimentos);

    modalRef.componentInstance.tecnicoSelecionado = tecnicoSelecionado;
    
    modalRef.result.then((resultadoDaModal) => {

        const tecnicoProcurado = this.tecnicos
          .find(tecnico => tecnico.nome === tecnicoSelecionado);

        resultadoDaModal.forEach((atendimento) => {

          const atendimentoVerificado = tecnicoProcurado.atendimentos
          .find((atendimentoTecnico) => atendimentoTecnico  === atendimento);

          if ( atendimentoVerificado === undefined ) {
              tecnicoProcurado.atendimentos.push(atendimento);
          }
        });
    }).catch((e) => {
        return e;
    });
  }
  
  removerAtendimento(atendimento, tecnico) { 
    
    // Verificando se nome técnico é = técnico do atendimento
    const tecnicoAtendimentoClicado = atendimento.tecnico
                            .find((nome) => nome === tecnico);
        
    // Verificando se técnico armazenado é o mesmo do atd clicado
     const tecnicoArmazenado = this.tecnicos
                            .find((tecnicoProcurado) => 
                            tecnicoProcurado.nome === tecnicoAtendimentoClicado);
  
    // Removendo o atendimento do técnico
      tecnicoArmazenado.atendimentos
                           .splice(tecnicoArmazenado.atendimentos
                           .indexOf(atendimento), 1);
                           
     // Removendo o técnico do atendimento
      atendimento.tecnico
                          .splice(atendimento.tecnico
                          .indexOf(tecnico), 1);

      }
  }

