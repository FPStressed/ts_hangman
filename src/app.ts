import { scoreBowling } from './hangman';

function main() {
    const scoreCard = [1,2,3]
    const score = scoreBowling(scoreCard)
    console.log(score)
}

main()