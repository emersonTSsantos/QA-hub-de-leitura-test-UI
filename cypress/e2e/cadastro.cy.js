/// <reference types="cypress" />

import { faker } from '@faker-js/faker'

describe('Funcionalidade: Cadastro', () => {

    const url = ('register.html')

    beforeEach(() => {
        cy.visit(url)
    })


    const gerarUsuario = () => ({
        nome: faker.person.fullName(),
        email: faker.internet.email(),
        telefone: faker.phone.number('119########'),
        senha: '123456@'
    })

    const preencherFormulario = (usuario, confirmarSenha = usuario.senha, aceitarTermos = true) => {
        if (usuario.nome) cy.get('#name').type(usuario.nome)
        if (usuario.email) cy.get('#email').type(usuario.email)
        if (usuario.telefone) cy.get('#phone').type(usuario.telefone)
        if (usuario.senha) cy.get('#password').type(usuario.senha)
        if (confirmarSenha) cy.get('#confirm-password').type(confirmarSenha)
        if (aceitarTermos) cy.get('#terms-agreement').check()
    }

    const submeter = () => {
        cy.get('#register-btn').click()
    }

    it('Deve realizar cadastro com sucesso', () => {
        const CadastrarUsuario = gerarUsuario()

        preencherFormulario(CadastrarUsuario)
        submeter()

        cy.url().should('include', 'dashboard.html')
        cy.get('#user-name').should('be.visible')
            .and('contain', CadastrarUsuario.nome)
    })

    it('Deve validar erro ao não preencher Nome', () => {
        const CadastrarUsuario = gerarUsuario()
        CadastrarUsuario.nome = null

        preencherFormulario(CadastrarUsuario)
        submeter()
        cy.get(':nth-child(1) > .invalid-feedback').should('be.visible')
    })

    it('Deve validar erro ao não preencher os campos obrigatórios', () => {
        const CadastrarUsuario = gerarUsuario()

        CadastrarUsuario.nome = null
        CadastrarUsuario.email = null
        CadastrarUsuario.telefone = null
        CadastrarUsuario.senha = null

        preencherFormulario(CadastrarUsuario)
        submeter()

        cy.get(':nth-child(1) > .invalid-feedback').should('be.visible')
        cy.get('#register-form > :nth-child(2) > .invalid-feedback')
    })

    it('Não deve cadastrar sem aceitar os termos', () => {
        const usuario = gerarUsuario()

        preencherFormulario(usuario, usuario.senha, false)
        submeter()

        cy.get('#terms-agreement').should('not.be.checked')
    })

    it('Não deve cadastrar com email já existente', () => {
        const usuario = gerarUsuario()

        preencherFormulario(usuario)
        submeter()

        // tentativa duplicada
        cy.visit(url)
        preencherFormulario(usuario)
        submeter()

        cy.get('#alert-container').should('be.visible')
            .and('contain', ' Erro ao criar conta. Tente novamente.')
    })

    it('Não deve cadastrar com senhas diferentes', () => {
        const usuario = gerarUsuario()

        preencherFormulario(usuario, 'senhaDiferente@123')
        submeter()

        cy.get(':nth-child(5) > .invalid-feedback').should('be.visible')
            .and('contain', 'Senhas não coincidem')
    })

    it('Não deve cadastrar com email inválido', () => {
        const usuario = gerarUsuario()
        usuario.email = 'email-invalido'

        preencherFormulario(usuario)
        cy.contains('Formato de email inválido').should('be.visible')
        submeter()

        cy.contains('Email válido é obrigatório').should('be.visible')
    })
})