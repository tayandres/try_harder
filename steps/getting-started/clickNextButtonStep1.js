import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page, paymentPlanPage } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";



         When('I fill in the required fields', async function () {
            await fillForm(startApplicationPage, {
                firstName: 'Taylor',
                lastName: 'Jones',
                email: 'taylorjones@example.com',
                phoneNumber: '1234567890'
            });
         });

     
         When('I click the next button', async function () {
          await startApplicationPage.nextButton.click();
         });

   
         Then('I should see payment plan page', async function () {
          await expect (paymentPlanPage.chooseAPaymentPlanText).toBeVisible();
;         });

   
         async function fillForm(startApplicationPage, { firstName, lastName, email, phoneNumber}) {
            await page.locator('//mat-label[contains(., "First Name")]').fill(firstName);
            await page.locator('//mat-label[contains(., "Last Name")]').fill(lastName);
            await page.locator('//mat-label[contains(., "Email Address")]').fill(email);
            await page.locator('input[formcontrolname="phoneNumber"]').fill(phoneNumber);
        }