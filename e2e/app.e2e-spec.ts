import { TestAnimatePage } from './app.po';

describe('test-animate App', () => {
  let page: TestAnimatePage;

  beforeEach(() => {
    page = new TestAnimatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
