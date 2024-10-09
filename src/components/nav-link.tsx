import { Link, LinkProps, useLocation } from 'react-router-dom'

interface NavLinkProps extends LinkProps {}

export function NavLink({ to, ...props }: NavLinkProps) {
  const { pathname } = useLocation()

  return (
    <Link
      to={to}
      data-active={pathname === to}
      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground data-[active=true]:text-foreground"
      {...props}
    />
  )
}
