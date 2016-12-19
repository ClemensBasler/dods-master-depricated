import { DodsMasterPage } from './app.po';

describe('dods-master App', function() {
  let page: DodsMasterPage;

  beforeEach(() => {
    page = new DodsMasterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
