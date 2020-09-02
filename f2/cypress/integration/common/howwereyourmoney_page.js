import { After, When, And, Then } from 'cypress-cucumber-preprocessor/steps'

When('I fill Howwereyourmoney page forms', () => {
  cy.get('form').find('[name="demandedMoney"]').type('$10000 CAD')
  cy.get('form').find('[name="moneyTaken"]').type('$5000 CAD')
  cy.get('form')
    .find('[value="methodPayment.eTransfer"]')
    .check({ force: true })
  cy.get('form')
    .find('[value="methodPayment.creditCard"]')
    .check({ force: true })
  cy.get('form').find('[value="methodPayment.giftCard"]').check({ force: true })
  cy.get('form')
    .find('[value="methodPayment.cryptocurrency"]')
    .check({ force: true })
  cy.get('form').find('[value="methodPayment.other"]').check({ force: true })
  cy.get('form').find('[name="methodOther"]').type('Certified Cheque')
  cy.get('form').find('[name="transactionDay"]').type('1')
  cy.get('form').find('[name="transactionMonth"]').type('7')
  cy.get('form').find('[name="transactionYear"]').type('2019')
})

When('I fill Howwereyourmoney1 page forms', () => {
  cy.get('form').find('[name="demandedMoney"]').type('$10000 US')
  cy.get('form').find('[name="moneyTaken"]').type('$5000 US')
  cy.get('form')
    .find('[value="methodPayment.eTransfer"]')
    .check({ force: true })
  cy.get('form').find('[name="transactionDay"]').type('6')
  cy.get('form').find('[name="transactionMonth"]').type('6')
  cy.get('form').find('[name="transactionYear"]').type('2020')
})

When('I fill Howwereyourmoney2 page forms', () => {
  cy.get('form').find('[name="demandedMoney"]').type('$700 bitcoin')
  cy.get('form').find('[name="moneyTaken"]').type('$700 bitcoin')
  cy.get('form')
    .find('[value="methodPayment.creditCard"]')
    .check({ force: true })
  cy.get('form').find('[name="transactionDay"]').type('10')
  cy.get('form').find('[name="transactionMonth"]').type('7')
  cy.get('form').find('[name="transactionYear"]').type('2020')
})

When('I fill Howwereyourmoney3 page forms', () => {
  cy.get('form').find('[name="demandedMoney"]').type('$200 EUR')
  cy.get('form').find('[name="moneyTaken"]').type('$200 EUR')
  cy.get('form').find('[value="methodPayment.giftCard"]').check({ force: true })
})

When('I fill Howwereyourmoney4 page forms', () => {
  cy.get('form').find('[name="demandedMoney"]').type('$15000 CAD')
  cy.get('form').find('[name="moneyTaken"]').type('$7000 CAD')
  cy.get('form')
    .find('[value="methodPayment.cryptocurrency"]')
    .check({ force: true })
})

When('I fill Howwereyourmoney5 page forms', () => {
  cy.get('form').find('[name="demandedMoney"]').type('$1000 CAD')
  cy.get('form').find('[name="moneyTaken"]').type('$500 CAD')
  cy.get('form').find('[value="methodPayment.other"]').check({ force: true })
  cy.get('form').find('[name="methodOther"]').type('Certified Cheque')
  cy.get('form').find('[name="transactionDay"]').type('12')
  cy.get('form').find('[name="transactionMonth"]').type('07')
  cy.get('form').find('[name="transactionYear"]').type('2020')
})

When('I fill NoHowwereyourmoney page forms', () => {

})

When('I fill Howwereyourmoney in French page forms', () => {
  cy.get('form').find('[name="demandedMoney"]').type('$1000 US')
  cy.get('form').find('[name="moneyTaken"]').type('$1000 US')
  cy.get('form')
    .find('[value="methodPayment.eTransfer"]')
    .check({ force: true })
  cy.get('form')
    .find('[value="methodPayment.creditCard"]')
    .check({ force: true })
  cy.get('form').find('[value="methodPayment.giftCard"]').check({ force: true })
  cy.get('form')
    .find('[value="methodPayment.cryptocurrency"]')
    .check({ force: true })
  cy.get('form').find('[value="methodPayment.other"]').check({ force: true })
  cy.get('form').find('[name="methodOther"]').type('Agent')
  cy.get('form').find('[name="transactionDay"]').type('28')
  cy.get('form').find('[name="transactionMonth"]').type('2')
  cy.get('form').find('[name="transactionYear"]').type('2020')
})

