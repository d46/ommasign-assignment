import mocks from './mocks';

export const getPage = async (pageNumber) => {
  const page = mocks.pages[pageNumber];
  if (page) {
    return page;
  } else {
    throw Error('No next page found');
  }
}
