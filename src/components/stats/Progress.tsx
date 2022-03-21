type Props = {
  index: number
  size: number
  label: string
}

export const Progress = ({ index, size, label }: Props) => {
  return (
    <div className="flex justify-left m-1">
      <div className="items-center justify-center w-2">{index + 1}</div>
      <div className="rounded-full w-full ml-2">
        <div
          style={{ width: `${10 + size}%` }}
          className="bg-blue-300 dark:bg-blue-800 text-s font-medium text-center p-0.5 rounded-l-full rounded-r-full"
        >
          {label}
        </div>
      </div>
    </div>
  )
}
