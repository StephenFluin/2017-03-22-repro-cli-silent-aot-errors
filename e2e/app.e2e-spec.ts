import { CliSilentAotErrorsPage } from './app.po';

describe('cli-silent-aot-errors App', () => {
  let page: CliSilentAotErrorsPage;

  beforeEach(() => {
    page = new CliSilentAotErrorsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
