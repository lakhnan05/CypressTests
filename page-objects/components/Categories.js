export default class Categories {
	static clickOnPhones() {
		cy.get('.list-group-item')
			.contains('Phones')
			.click()
	}
	static clickOnLaptops() {
		cy.get('.list-group-item')
			.contains('Laptops')
			.click()
	}
	static clickOnMonitors() {
		cy.get('.list-group-item')
			.contains('Monitors')
			.click()
	}
}
