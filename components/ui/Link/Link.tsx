import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { Link as MaterialLink, LinkProps } from '@mui/material'

type TLink = NextLinkProps & LinkProps

const Link: React.FC<TLink> = ({ href, passHref, children, ...props }) => {
  return (
    <NextLink href={href} passHref>
      <MaterialLink
        color='textPrimary'
        underline='none'
        rel='noopener noreferrer'
        {...props}
      >
        {children}
      </MaterialLink>
    </NextLink>
  )
}

export default Link
