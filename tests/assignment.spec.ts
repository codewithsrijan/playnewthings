import {test, expect} from '@playwright/test';

test('Asignment', async ({page}) => {


    await page.addInitScript((value) => {
        window.localStorage.setItem('token', value);
    }, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjQ1YjE3YjM4ZDAwMDAxMjMiLCJlbWFpbCI6InNyaWphbjkyQGdtYWlsLmNvbSIsImlhdCI6MTY5Njk2NzQyMywiZXhwIjoxNzA1NTU3NDIzfQ.7g8r0nLqzv7l8V9uXK4Fh8s9d8f9g8h7j6k5l4m3n2o1p0q');          

    await page.goto('https://rahulshettyacademy.com/client');
    await expect(page.locator('#userEmail')).toBeVisible();
    await expect(page.locator('#userPassword')).toBeVisible();
    await expect(page.locator('#login')).toBeVisible();

    await page.goto('https://eventhub.rahulshettyacademy.com');
    await page.locator('#email').fill('srijan92@gmail.com');
    await page.locator('#password').fill('Bump20!!');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await expect(page.locator('#nav-events')).toBeVisible();
    await page.goto('https://eventhub.rahulshettyacademy.com/admin/events');
    const event = 'TestEvent' + await datefunc();
    await page.locator('#event-title-input').fill(event);
    await page.locator('#admin-event-form textarea').fill('This is a test event');
    await page.getByLabel('City').fill('Bangalore');
    await page.getByLabel('Venue').fill('Test Venue');
    await page.getByLabel('Event Date & Time').fill(await futureDateFunc());
    await page.getByLabel('Price ($)').fill('100');
    await page.getByLabel('Total Seats').fill('50');
    await page.locator('#add-event-btn').click();
    await expect(page.getByText('Event created!')).toBeVisible();


    await page.goto('https://eventhub.rahulshettyacademy.com/events');

});


async function datefunc() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}

async function futureDateFunc() {
    const date = new Date();
    date.setDate(date.getDate() + 7); // Add 7 days to the current date
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const time = String(date.getHours()).padStart(2, '0') + ':' + String(date.getMinutes()).padStart(2, '0');
    const formattedDate = `${day}-${month}-${year}T${time}`;
    return formattedDate;
}