export const PAGES_MENU = [{
  path: 'pages',
  children: [
    {
      path: 'tv',
       data: {
          menu: {
           title: 'Monitoramento',
           icon: 'ion-arrow-graph-up-right',
           selected: false,
           expanded: false,
           order: 250
         }
       }
     },
    // {
    //   path: 'monitoramento',
    //   data: {
    //     menu: {
    //       title: 'Monitoramento',
    //       icon: 'ion-arrow-graph-up-right',
    //       selected: false,
    //       expanded: false,
    //       order: 250
    //     }
    //   },
    //   children: [{
    //     path: 'monitoramento-tecnicos',
    //     data: {
    //       menu: {
    //         title: 'Monitoramento',
    //         icon: 'ion-arrow-graph-up-right'
    //       }
    //     }
    //   },
    //   {
    //     path: 'tv',
    //     data: {
    //       menu: {
    //         title: 'TV',
    //         icon: 'ion-clipboard'
    //       }
    //     }
    //   }
    //   ]
    // },
    {
      path: 'clientes',
      data: {
        menu: {
          title: 'Clientes',
          icon: 'ion-person',
          selected: false,
          expanded: false,
          order: 300
        }
      },
      children: [{
        path: 'novo',
        data: {
          menu: {
            title: 'Novo',
            icon: 'ion-plus'
          }
        }
      },
      {
        path: 'gerenciar',
        data: {
          menu: {
            title: 'Gerenciar',
            icon: 'ion-clipboard'
          }
        }
      }
      ]
    },
    {
      path: 'administrativo',
      data: {
        menu: {
          title: 'Administrativo',
          icon: 'ion-clipboard',
          selected: false,
          expanded: false,
          order: 300
        }
      },
      children: [
        {
          path: 'novo',
          data: {
            menu: {
              title: 'Novo Contrato',
              icon: 'ion-clipboard'
            }
          }
        },
        {
          path: 'gerenciar',
          data: {
            menu: {
              title: 'Gerenciar Contrato',
              icon: 'ion-clipboard'
            }
          }
        }
      ]
    },
    {
      path: 'mercado-livre',
      data: {
        menu: {
          title: 'Mercado Livre',
          icon: 'fa fa-archive',
          selected: false,
          expanded: false,
          order: 300
        }
      },
      children: [{
        path: 'novo',
        data: {
          menu: {
            title: 'Novo',
            icon: 'ion-plus'
          }
        }
      },
      {
        path: 'gerenciar',
        data: {
          menu: {
            title: 'Gerenciar',
            icon: 'ion-clipboard'
          }
        }
      }
      ]
    },

    {
      path: 'compra',
      data: {
        menu: {
          title: 'Compra',
          icon: 'fa fa-shopping-cart',
          selected: false,
          expanded: false,
          order: 300
        }
      },
      children: [
        {
          path: 'novo',
          data: {
            menu: {
              title: 'Nova',
              icon: 'ion-plus'
            }
          }
        },
        {
          path: 'gerenciar',
          data: {
            menu: {
              title: 'Gerenciar',
              icon: 'ion-clipboard'
            }
          }
        }
      ]
    },
    {
      path: 'estoque',
      data: {
        menu: {
          title: 'Estoque',
          icon: 'fa fa-random',
          selected: false,
          expanded: false,
          order: 300
        }
      },
      children: [
        {
          path: 'gerenciar',
          data: {
            menu: {
              title: 'Gerenciar',
              icon: 'ion-clipboard'
            }
          }
        },
        {
          path: 'liberar-produto',
          data: {
            menu: {
              title: 'Liberar',
              icon: 'fa fa-arrows-h'
            }
          }
        }
      ]
    },
    {
      path: 'produto',
      data: {
        menu: {
          title: 'Produto',
          icon: 'fa fa-archive',
          selected: false,
          expanded: false,
          order: 300
        }
      },
      children: [{
        path: 'novo',
        data: {
          menu: {
            title: 'Novo',
            icon: 'ion-plus'
          }
        }
      },
      {
        path: 'gerenciar',
        data: {
          menu: {
            title: 'Gerenciar',
            icon: 'ion-clipboard'
          }
        }
      }
      ]
    },
    {
      path: 'produto-disponivel',
      data: {
        menu: {
          title: 'Produto Disponível',
          icon: 'fa fa-shopping-bag',
          selected: false,
          expanded: false,
          order: 300
        }
      },
      children: [
      {
        path: 'gerenciar',
        data: {
          menu: {
            title: 'Gerenciar',
            icon: 'ion-clipboard'
          }
        }
      }
      ]
    },
    {
      path: 'funcionarios',
      data: {
        menu: {
          title: 'Funcionários',
          icon: 'ion-briefcase',
          selected: false,
          expanded: false,
          order: 300
        }
      },
      children: [{
        path: 'novo',
        data: {
          menu: {
            title: 'Novo',
            icon: 'ion-plus'
          }
        }
      },
      {
        path: 'gerenciar',
        data: {
          menu: {
            title: 'Gerenciar',
            icon: 'ion-clipboard'
          }
        }
      },
      {
        path: 'perfil',
        data: {
          menu: {
            title: 'Perfil',
            icon: 'ion-person'
          }
        }
      }
      ]
    },
    {
      path: 'atendimentos',
      data: {
        menu: {
          title: 'Atendimentos',
          icon: 'ion-settings',
          selected: false,
          expanded: false,
          order: 300
        }
      },
      children: [{
        path: 'novo',
        data: {
          menu: {
            title: 'Novo',
            icon: 'ion-plus'
          }
        }
      },
      {
        path: 'associar',
        data: {
          menu: {
            title: 'Associar',
            icon: 'ion-person'
          }
        }
      },
      {
        path: 'associar-map',
        data: {
          menu: {
            title: 'Associar Map',
            icon: 'fa fa-map-marker'
          }
        }
      },
      {
        path: 'gerenciar',
        data: {
          menu: {
            title: 'Gerenciar',
            icon: 'ion-clipboard'
          }
        }
      },
      {
        path: 'gerenciar-concluidos',
        data: {
          menu: {
            title: 'Concluídos',
            icon: 'ion-clipboard'
          }
        }
      }
      ]
    },
    {
      path: 'relatorios',
      data: {
        menu: {
          title: 'Relatorios',
          icon: 'ion-podium',
          selected: false,
          expanded: false,
          order: 300
        }
      },
      children: [
        {
          path: 'tecnicos',
          data: {
            menu: {
              title: 'Técnicos',
              icon: 'ion-pin'
            }
          }
        }
      ]
    },
    {
      path: '', // just leave the path empty
      data: {

        // and define your menu item
        menu: {
          title: 'Ir para novo estoque',
          url: `http://159.65.231.233/#/auth?token=${localStorage.getItem('token')}`,
          icon: 'ion-android-exit',
          order: 800,
          target: '_blank' // target property of <a> tag (_self, _blank, etc)
        }
      }
    }
    // {
    //   path: 'sac',
    //   data: {
    //     menu: {
    //       title: 'SAC',
    //       icon: 'ion-ios-chatboxes',
    //       selected: false,
    //       expanded: false,
    //       order: 250
    //     }
    //   },
    //   children: [{
    //     path: 'consulta',
    //     data: {
    //       menu: {
    //         title: 'Consulta',
    //         icon: 'ion-android-search'
    //       }
    //     }
    //   }]
    // }
  ]
}
];

