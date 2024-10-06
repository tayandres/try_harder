import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup.js";
import { productInfo } from "../../utilities/qa-data-reader.js";


        /* Then('user sees course title', async function () {
           
          const ACTUAL_PRODUCT_TITLE =await startApplicationPage.productName.innerText();
          const EXPECTED_PRODUCT_TITLE = productInfo.productName;
          await expect(ACTUAL_PRODUCT_TITLE).toEqual(EXPECTED_PRODUCT_TITLE);
         });
*/
   

         Then('user sees cost and upfront savings', async function () {
          const ACTUAL_BASE_PRICE_ui = await startApplicationPage.programBasePrice.innerText();
          const EXPECTED_BASE_PRICE_ui = productInfo.prices[0].baseAmount;
          expect(ACTUAL_BASE_PRICE_ui).toBe(EXPECTED_BASE_PRICE_ui);
          
         });
   

         Then('user sees flexible payments plan', async function () {
            const flexPaymentUI = await startApplicationPage.productInfo.flexPayment.innerText
            expect(flexPaymentUi).toEqual(startApplicationPage.productInfo.flexPayment);
           
         });

  
         Then('user sees the refund policy', async function () {
           const refundPolicy = await startApplicationPage.productInfo.refundPolicy.innerText();

           expect(refundPolicy).toEqual(startApplicationPage.productInfo.refundPolicy);
         });

         

