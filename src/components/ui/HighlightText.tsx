export function HighlightText({
  children,
  animate = false,
}: {
  children: React.ReactNode
  animate?: boolean
}) {
  return (
    <mark className={`${animate ? 'highlight-animate' : 'highlight'} bg-transparent`}>
      {children}
    </mark>
  )
}
