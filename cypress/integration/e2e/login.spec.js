import { url, login_username, login_password } from '../../../config'
import Navbar from '../../../page-objects/components/Navbar'
import LoginModal from '../../../page-objects/components/Loginmodal'

describe('Login Feature', () => {
	beforeEach(function() {
		cy.visit(url)
		Navbar.clickOnLogIn()
		cy.wait(555)
	})

	it('Successful Login when valid credential is entered', () => {
		LoginModal.login(login_username, login_password)
		cy.isVisible('#nameofuser')
		Navbar.clickOnLogOut()
		cy.isVisible('#login2')
		cy.isVisible('#signin2')
		cy.isNotVisible('#logout2')
		cy.isNotVisible('#nameofuser')
	})

	it('UnSuccessful Login when user does not exist', () => {
		LoginModal.login('invalidusername', 'invalidpassword')
		cy.on('window:alert', txt => {
			expect(txt).to.contains('User does not exist.')
		})
		cy.wait(555)
		cy.isVisible('.modal-content')
		LoginModal.clickOnClosebutton()
		cy.isNotVisible('.modal-content')
	})

	it('UnSuccessful Login when incorrect password is entered', () => {
		LoginModal.login(login_username, 'invalidpassword')
		cy.on('window:alert', txt => {
			expect(txt).to.contains('Wrong password.')
		})
		cy.wait(555)
		cy.isVisible('.modal-content')
		LoginModal.clickOnClosebutton()
		cy.isNotVisible('.modal-content')
	})
})
