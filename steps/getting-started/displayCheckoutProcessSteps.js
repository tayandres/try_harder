import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";



  Then('user sees the step for the Start Application process', async function () {
  
  const step1 = await startApplicationPage.startApplicationStepCircle.textContent();
  expect(step1).toEqual('1');
  });


  Then('user sees the step for the Payment Plan process', async function () {
   const step2 = await startApplicationPage.paymentPlanStepCircle.textContent();
   await expect(step2).toEqual('2');
  });


  Then('user sees the step for the Review process', async function () {
  const step3 = await startApplicationPage.reviewStepCircle.textContent();
  expect(step3).toEqual('3');
  });