import { NutrifactsPwaPage } from './app.po';

describe('nutrifacts-pwa App', () => {
  let page: NutrifactsPwaPage;

  beforeEach(() => {
    page = new NutrifactsPwaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
