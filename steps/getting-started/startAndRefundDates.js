import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";

 
  Given('user navigates to the enrollment page',async function () {
    await startApplicationPage.login();
    
  });


    Then('I see the program start date details are displayed', async function () {
      await expect(startApplicationPage.programStartDate).toBeVisible();
      
    });

    Then('I see the refund policy date details are displayed', async function () {
      await expect(startApplicationPage.refundEndDate).toBeVisible();
    });


  Then('I see the program start date is in the correct format', async function () {
   const ACTUAL_START_DATE =await startApplicationPage.programStartDate.innerText();
   const EXPECTED_START_DATE = productInfo.startDate;
   //console.log(`Actual Start date : ${ACTUAL_START_DATE}`);
   //console.log(`Expected Start date : ${EXPECTED_START_DATE}`);

   await expect(ACTUAL_START_DATE).toEqual(EXPECTED_START_DATE);
  });


  Then('I see the refund policy date is in the correct format', async function () {
    const ACTUAL_REFUND_DATE =await startApplicationPage.refundEndDate.innerText();
    const EXPECTED_REFUND_DATE = productInfo.refundDate;
    await expect(ACTUAL_REFUND_DATE).toEqual(EXPECTED_REFUND_DATE);
  });

