import { describe, expect, test } from '@jest/globals';
import { sanitizeInput } from '../src/input';

describe('handles unsanitized inputs from user', () => {
  test('return a capital letter', () => {
    // Arrange
    let capitalLetter = 'A';
    let sanitizedInput = 'A';

    // Act
    let input = sanitizeInput(capitalLetter);

    // Assert
    expect(input).toBe(sanitizedInput);
  });
});