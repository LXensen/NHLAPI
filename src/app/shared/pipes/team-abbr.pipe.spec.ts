import { TeamAbbr } from './team-abbr.pipe';

describe('TeamAbbrPipe', () => {
  it('create an instance', () => {
    const pipe = new TeamAbbr();
    expect(pipe).toBeTruthy();
  });
});
