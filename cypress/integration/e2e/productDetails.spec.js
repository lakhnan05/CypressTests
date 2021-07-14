import HomePage from '../../../page-objects/pages/HomePage'
import ProductPage from '../../../page-objects/pages/ProductPage'

describe('Product Page', () => {
	beforeEach(() => {
		HomePage.open()
	})
	it('Verify product details page', () => {
		cy.fixture('items').then(data => {
			HomePage.selectItemByName(data.item1.Title)
			cy.urlEndsWith(data.item1.path)
			ProductPage.checkProductDetails(data.item1)
		})
	})
})
