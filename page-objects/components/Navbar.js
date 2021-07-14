export default class Navbar {
	static clickOnLogo() {
		cy.get('#nava').click()
	}

	static clickOnHome() {
		cy.get('#navbarExample > ul > li.nav-item.active > a').click()
	}

	static clickOnContact() {
		cy.get("a[data-target='#exampleModal']").click()
	}

	static clickonAboutUs() {
		cy.get("a[data-target='#videoModal']").click()
	}

	static clickOnCart() {
		cy.get('#cartur').click()
	}

	static clickOnLogIn() {
		cy.get('#login2').click()
	}

	static clickOnSignUp() {
		cy.get('#signin2').click()
	}

	static clickOnLogOut() {
		cy.get('#logout2').click()
	}
}
