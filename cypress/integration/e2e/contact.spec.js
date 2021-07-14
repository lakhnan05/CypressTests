import Navbar from '../../../page-objects/components/Navbar'
import ContactModal from '../../../page-objects/components/Contactmodal'
import { url } from '../../../config'

describe('Contact Feature', () => {
	beforeEach(function() {
		cy.visit(url)
		Navbar.clickOnContact()
		cy.wait(555)
	})

	it('Successfully send message', () => {
		cy.fixture('contact').then(data => {
			ContactModal.inputEmail(data.email)
			ContactModal.inputName(data.name)
			ContactModal.inputMessage(data.message)
			ContactModal.clickOnSendMessage()
			cy.on('window:confirm', txt => {
				expect(txt).to.contains('Thanks for the message!!')
			})
			cy.isNotVisible('.modal-content')
		})
	})

	it('Successfully close Contact Modal', () => {
		cy.fixture('contact').then(data => {
			ContactModal.inputEmail(data.email)
			ContactModal.inputName(data.name)
			ContactModal.inputMessage(data.message)
			ContactModal.clickOnClose()
			cy.isNotVisible('.modal-content')
		})
	})
})
