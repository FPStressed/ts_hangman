import { describe, expect, test } from '@jest/globals';
import { generateBoard } from '../src/board';

describe('tests to generate the board', () => {
    test('converts the word to a list', () => {
        // Arrange
        let word = 'BALLS';
    
        // Act
        let input = generateBoard(word);
    
        // Assert
        let wordConvertedToBoard = ['B', 'A', 'L', 'L', 'S'];
        expect(input).toBe(wordConvertedToBoard);
      });
});