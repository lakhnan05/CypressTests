import Page from '../pages/Page'
export default class HomePage extends Page {
	static open() {
		super.open()
	}

	static filterBy(category) {
		if (category == 'Phones') {
			cy.get("a[id='itemc']")
				.first()
				.click()
		} else if (category == 'Laptops') {
			cy.get("a[id='itemc']")
				.eq(1)
				.click()
		} else if (category == 'Monitors') {
			cy.get("a[id='itemc']")
				.last()
				.click()
		}
	}

	static checkTotalItemsDisplayed(total) {
		cy.get('.card-title').should('have.length', total)
	}

	static selectFirstItem() {
		cy.get('.card-title a')
			.first()
			.click()
	}

	static selectLastItem() {
		cy.get('.card-title a')
			.last()
			.click()
	}

	static selectItemByName(name) {
		cy.get('.card-title a')
			.contains(name)
			.click()
	}

	static clickonNextButton() {
		cy.get('#next2').click()
	}
	static clickonNextButton() {
		cy.get('#prev2').click()
	}
}
