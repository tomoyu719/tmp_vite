import {test, expect} from "@playwright/test";

test("count increases when button is clicked", async ({page}) => {
  // アプリケーションを開く
  await page.goto("http://localhost:5173"); // あなたのReactアプリがローカルで動いているURL

  // ボタンを取得
  const countButton = await page.locator("button");

  // ボタンが存在するか
  await expect(countButton).toBeVisible();

  // 初期状態で「count is 0」であることを確認
  await expect(countButton).toHaveText("count is 0");

  // ボタンをクリックしてカウントが1に増えることを確認
  await countButton.click();
  await expect(countButton).toHaveText("count is 1");

  // もう一度クリックしてカウントが2に増えることを確認
  await countButton.click();
  await expect(countButton).toHaveText("count is 2");
});
