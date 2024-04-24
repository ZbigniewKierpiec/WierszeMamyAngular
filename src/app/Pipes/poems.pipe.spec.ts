import { PoemsPipe } from './poems.pipe';

describe('PoemsPipe', () => {
  it('create an instance', () => {
    const pipe = new PoemsPipe();
    expect(pipe).toBeTruthy();
  });
});
