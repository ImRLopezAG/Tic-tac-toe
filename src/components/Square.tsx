interface SquareProps {
  children: React.ReactNode
  isSelected: boolean
  updateBoard: (index: number) => void
  index: number
}

export const Square = ({ children, isSelected, updateBoard, index }: SquareProps) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}