import { DevOpsTestPage } from './app.po';

describe('dev-ops-test App', () => {
  let page: DevOpsTestPage;

  beforeEach(() => {
    page = new DevOpsTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
