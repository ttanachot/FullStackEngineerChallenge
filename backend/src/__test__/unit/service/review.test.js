import reviewService from '../../service/review';
import model from '../../model';

jest.mock('../../model', () => ({
  review: {
    findOne: jest.fn(),
    create: jest.fn(),
  },
}));

describe('review service: find', () => {
  it('should find by id successfully', async () => {
    expect.assertions(1);
    const mockData = {
      id: 1,
      reviewerId: 1,
    };
    const mockResult = {
      id: 1,
      reviewerId: 1,
      revieweeId: 1,
    };
    model.review.findOne = jest.fn(() => mockResult);

    const result = await reviewService.findById(mockData);
    expect(model.review.findOne).toHaveBeenCalledWith(
      expect.objectContaining({ where: mockData })
    );
  });
});
