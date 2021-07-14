import { url, login_username, login_password } from '../../../config'
import { randomUserId, randomPassword } from '../../../utility/helpers'
import Navbar from '../../../page-objects/components/Navbar'
import LoginModal from '../../../page-objects/components/Loginmodal'
import SignupModal from '../../../page-objects/components/SignupModal'

describe('SignUp Feature', () => {
	beforeEach(function() {
		cy.visit(url)
		Navbar.clickOnSignUp()
		cy.wait(555)
	})

	it('Successful SignUp when new user information is entered and able to login with signup information', () => {
		const user = randomUserId()
		const password = randomPassword()
		cy.log(user / password)
		SignupModal.signUp(user, password)
		cy.on('window:alert', txt => {
			expect(txt).to.contains('Sign up successful.')
		})
		cy.isNotVisible('#signInModal')
		cy.isVisible('#login2')
		cy.isVisible('#signin2')
		cy.isNotVisible('#logout2')

		Navbar.clickOnLogIn()
		LoginModal.login(user, password)
		cy.isVisible('#nameofuser')
		Navbar.clickOnLogOut()
		cy.isVisible('#login2')
		cy.isVisible('#signin2')
		cy.isNotVisible('#logout2')
		cy.isNotVisible('#nameofuser')
	})

	it('UnSuccessful Sign Up when existing username is used', () => {
		SignupModal.signUp(login_username, login_password)
		cy.on('window:alert', txt => {
			expect(txt).to.contains('This user already exist.')
		})
		cy.isVisible('.modal-content')
		SignupModal.clickOnClosebutton()
		cy.isNotVisible('.modal-content')
	})

	it('UnSuccessful Sign Up when signing up without password', () => {
		const user = randomUserId()
		SignupModal.enterSignUpUsername(user)
		SignupModal.clickOnSignUpbutton()
		cy.on('window:alert', txt => {
			expect(txt).to.contains('Please fill out Username and Password.')
		})
		cy.isVisible('.modal-content')
		SignupModal.clickOnClosebutton()
		cy.isNotVisible('.modal-content')
	})

	it('UnSuccessful Sign Up when signing up without username', () => {
		const password = randomPassword()
		SignupModal.enterSignUpPassword(password)
		SignupModal.clickOnSignUpbutton()
		cy.on('window:alert', txt => {
			expect(txt).to.contains('Please fill out Username and Password.')
		})
		cy.isVisible('.modal-content')
		SignupModal.clickOnClosebutton()
		cy.isNotVisible('.modal-content')
	})
})
