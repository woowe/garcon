import { GarconPage } from './app.po';

describe('garcon App', function() {
  let page: GarconPage;

  beforeEach(() => {
    page = new GarconPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
