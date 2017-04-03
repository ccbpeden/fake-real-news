import { FakeNewsPage } from './app.po';

describe('fake-news App', () => {
  let page: FakeNewsPage;

  beforeEach(() => {
    page = new FakeNewsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
