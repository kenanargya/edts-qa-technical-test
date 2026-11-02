const { test, expect } = require('@playwright/test');

const productName = 'Madurasa Madu Jahe Merah Lemon 160g';

test('Guest membuka produk madu dan diminta login saat menambah keranjang', async ({ page }) => {
  await test.step('Buka beranda tanpa login', async () => {
    await page.goto('https://www.klikindomaret.com/', { waitUntil: 'domcontentloaded' });
    const close = page.getByRole('button', { name: 'Close', exact: true });
    await page.addLocatorHandler(close, async () => {
      await close.click();
    });
    await expect(page.getByText('Makanan', { exact: true })).toBeVisible();
  });

  await test.step('Pilih meta kategori Makanan', async () => {
    await page.getByText('Makanan', { exact: true }).click();
    await expect(page).toHaveURL(/\/category\/makanan(?:[/?#]|$)/);
  });

  await test.step('Pilih kategori Madu', async () => {
    await page.getByText('Madu', { exact: true }).click();
    await expect(page.getByRole('heading', { name: productName, exact: true })).toBeVisible();
  });

  await test.step('Buka detail produk madu', async () => {
    await page.getByRole('heading', { name: productName, exact: true }).click();
    await expect(page).toHaveURL(/\/xpress\/madurasa-madurasa-madu-jahe-merah-btl-160g(?:[/?#]|$)/);
    await expect(page.getByRole('button', { name: 'Keranjang', exact: true })).toBeVisible();
  });

  await test.step('Klik Keranjang dan verifikasi permintaan login', async () => {
    const cart = page.getByRole('button', { name: 'Keranjang', exact: true });
    await expect(cart).toBeEnabled();
    await cart.click();
    await expect(page.getByText('Masuk Akun', { exact: true })).toBeVisible();
    await expect(page.getByPlaceholder('Masukkan nomor handphone atau email')).toBeVisible();
  });
});

