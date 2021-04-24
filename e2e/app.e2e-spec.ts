import { WebScraperPage } from './app.po';

describe('web-scraper App', function() {
  let page: WebScraperPage;

  beforeEach(() => {
    page = new WebScraperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
