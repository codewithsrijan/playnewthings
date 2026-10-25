import {test} from '@playwright/test';


test('My First test', async ({page}, testInfo) => {
    // let screenshotNumber = 0;

    // async function runStep(name: string, action: () => Promise<unknown>) {
    //     await test.step(name, async () => {
    //         await action();
    //         screenshotNumber += 1;
    //         const screenshotPath = testInfo.outputPath(`${screenshotNumber}-${name}.png`);
    //         await page.screenshot({path: screenshotPath, fullPage: true});
    //         await testInfo.attach(name, {path: screenshotPath, contentType: 'image/png'});
    //     });
    // }

    // await runStep('open-login-page', () => page.goto('https://rahulshettyacademy.com/loginpagePractise/'));
    // await runStep('fill-username', () => page.locator('#username').fill('rahulshettyacademy'));
    // await runStep('fill-password', () => page.locator('#password').fill('Learning@830$3mK2'));
    // await runStep('select-role', () => page.locator('.form-control').nth(2).selectOption('Teacher'));
    // await runStep('submit-login', () => page.locator('#signInBtn').click());


    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await  page.locator('#username').fill('rahulshettyacademy');
    await  page.locator('#password').fill('Learning@830$3mK2');
    await  page.locator('.form-control').nth(2).selectOption('Teacher');
    // await  page.locator('#signInBtn').click();
    await page.getByRole('button', { name: 'fsdfsd' }).click();
});