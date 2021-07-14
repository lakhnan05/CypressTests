import Page from '../pages/Page'
export default class ProductPage extends Page {
	static open() {
		super.open()
	}

	static checkProductDetails(item) {
		cy.get('.name').should('to.have.text', item.Title)
		cy.get('.price-container').should('to.have.text', item.Price)
		cy.get('#more-information p')
			.invoke('text')
			.then(text => {
				expect(text).equal(item.Description)
			})
		cy.get("div[class='item active'] img").should(
			'have.attr',
			'src',
			item.Image
		)
	}
}
