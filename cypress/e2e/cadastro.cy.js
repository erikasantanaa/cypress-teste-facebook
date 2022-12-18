describe('Cadastro usuário', ()=> {
  it('Usuário deve criar uma conta no app', ()=> {
    cy.viewport(1440, 900)
    cy.visit('https://www.facebook.com')

    cy.get('div[class="phl ptm uiInterstitialContent"] li .fcb a').click()
  })
})
