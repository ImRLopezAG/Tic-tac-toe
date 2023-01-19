import { Square } from './Square.jsx'

interface WinnerModalProps {
  winner: string | false | null
  resetGame: () => void
}

export function WinnerModal({ winner, resetGame }: WinnerModalProps) {
  if (winner === null) return null

  const winnerText = winner === false ? 'Draw 😱' : `${winner} wins`

  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>

        <header className="win">
          {winner && (
            <Square
              isSelected={false}
              updateBoard={function (index: number): void {
                throw new Error('Function not implemented.')
              }}
              index={0}
            >
              {winner}
            </Square>
          )}
        </header>

        <footer>
          <button onClick={resetGame}>Reset</button>
        </footer>
      </div>
    </section>
  )
}
