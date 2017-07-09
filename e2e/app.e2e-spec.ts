import { ComboCascadePage } from './app.po';

describe('combo-cascade App', () => {
  let page: ComboCascadePage;

  beforeEach(() => {
    page = new ComboCascadePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
