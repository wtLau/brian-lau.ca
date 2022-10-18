import { Link as MaterialLink, LinkProps } from '@mui/material'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

type TLink = NextLinkProps & LinkProps

const Link: React.FC<TLink> = ({ href, passHref, children, ...props }) => {
  return (
    <NextLink href={href} passHref>
      <MaterialLink
        color='textPrimary'
        underline='hover'
        rel='noopener noreferrer'
        {...props}
      >
        {children}
      </MaterialLink>
    </NextLink>
  )
}

export default Link
