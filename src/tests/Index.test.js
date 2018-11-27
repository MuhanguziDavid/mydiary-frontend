import Index from '../index';

it('should render correctly', () => {
  expect(
    JSON.stringify(
      Object.assign({}, Index, { _reactInternalInstance: 'censored' }),
    ),
  ).toMatchSnapshot();
});
