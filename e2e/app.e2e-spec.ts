import { NgEssentialsFinalProjectPage } from './app.po';

describe('ng-essentials-final-project App', () => {
  let page: NgEssentialsFinalProjectPage;

  beforeEach(() => {
    page = new NgEssentialsFinalProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
