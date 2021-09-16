import { CustomDate } from './custom-date';

describe('CustomDate', () => {
  it('should create an instance', () => {
    expect(new CustomDate(2021, 6, 6)).toBeTruthy();
  });
});
