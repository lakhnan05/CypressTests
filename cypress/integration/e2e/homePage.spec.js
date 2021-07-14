import HomePage from '../../../page-objects/pages/HomePage'

describe('Home Page Feature', () => {
	beforeEach(() => {
		HomePage.open()
	})

	it('Verify total items listed in site without any filter', () => {
		cy.fixture('items').then(data => {
			HomePage.checkTotalItemsDisplayed(data.Total.TotalItemsPage1)
			cy.wait(555)
			HomePage.clickonNextButton(data.Total.TotalItemsPage2)
		})
	})

	it('Verify total items listed under phone category', () => {
		HomePage.filterBy('Phones')
		cy.fixture('items').then(data => {
			HomePage.checkTotalItemsDisplayed(data.Total.TotalPhones)
		})
	})

	it('Verify total items listed under laptop category', () => {
		HomePage.filterBy('Laptops')
		cy.fixture('items').then(data => {
			HomePage.checkTotalItemsDisplayed(data.Total.TotalLaptops)
		})
	})

	it('Verify total items listed under monitor category', () => {
		HomePage.filterBy('Monitors')
		cy.fixture('items').then(data => {
			HomePage.checkTotalItemsDisplayed(data.Total.TotalMonitors)
		})
	})
})
