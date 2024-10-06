import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";


         Then('user sees course title', async function () {
           const cardTitle = startApplicationPage.productInfo.productName.innerText();
          expect(cardTitle).toEqual(productInfo.productName);
         });

   

         Then('user sees upfront cost saving', async function () {
           const upFrontCostUI= await startApplicationPage.productInfo.upFrontCost.innerText()
;
           expect(upFrontCostUI).toEqual(productInfo.upfrontCost);});

   

         Then('user sees flexible payments plan', async function () {
            const flexPaymentUI = await startApplicationPage.productInfo.flexPayment.innerText
            expect(flexPaymentUi).toEqual(productInfo.flexPayment);
           
         });

  
         Then('user sees the refund policy', async function () {
           const refundPolicy = await startApplicationPage.productInfo.refundPolicy.innerText();

           expect(refundPolicy).toEqual(productInfo.refundPolicy);
         });

         

