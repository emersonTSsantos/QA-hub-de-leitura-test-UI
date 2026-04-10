/// <reference types="cypress" />

describe('Funcionalidade: Contato', () => {

  const url = 'index.html'

  const user = {
    nome: 'Emerson Teixeira',
    email: 'emerson@example.com',
    mensagemPreenchida: 'Olá, preciso de ajuda com meu pedido.'
  }

  beforeEach(() => {
    cy.visit(url)
  })

  const preencherFormulario = ({
    nome = user.nome,
    email = user.email,
    assunto = 'Suporte Técnico',
    mensagemPreenchida = user.mensagemPreenchida
  } = {}) => {

    if (nome) cy.get('[name="name"]').type(nome)
    if (email) cy.get('[name="email"]').type(email)
    if (assunto) cy.get('[name="subject"]').select(assunto)
    if (mensagemPreenchida) cy.get('[name="message"]').type(mensagemPreenchida)
  }

  const submeterFormulario = () => {
    cy.get('#btn-submit').click()
  }

  const validarMensagem = (Alertmensagem) => {
    cy.get('#alert-container')
      .should('be.visible')
      .and('contain', Alertmensagem)
  }

  it('Deve enviar contato com sucesso', () => {
    preencherFormulario()
    submeterFormulario()
    validarMensagem('Contato enviado com sucesso!')
  })

  it('Deve validar erro ao não preencher Nome', () => {
    preencherFormulario({ nome: null })
    submeterFormulario()
    validarMensagem('Por favor, preencha o campo Nome.')
  })

  it('Deve validar erro ao não preencher Email', () => {
    preencherFormulario({ email: null })
    submeterFormulario()
    validarMensagem('Por favor, preencha o campo E-mail.')
  })

  it('Deve validar erro ao não selecionar Assunto', () => {
    preencherFormulario({ assunto: null })
    submeterFormulario()
    validarMensagem('Por favor, selecione o Assunto.')
  })

  it('Deve validar erro ao não preencher Mensagem', () => {
    preencherFormulario({ mensagemPreenchida: null })
    submeterFormulario()
    validarMensagem('Por favor, escreva sua Mensagem.')
  })

})