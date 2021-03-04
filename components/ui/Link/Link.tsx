import NextLink, {
  LinkProps as NextLinkProps,
} from 'next/link'
import {
  Link as MaterialLink,
  LinkProps,
} from '@material-ui/core'

type TLink = NextLinkProps & LinkProps

const Link: React.FC<TLink> = ({
  href,
  passHref,
  children,
  ...props
}) => {
  return (
    <NextLink href={href} passHref={passHref}>
      <MaterialLink
        style={{ cursor: 'pointer' }}
        {...props}
      >
        {children}
      </MaterialLink>
    </NextLink>
  )
}

export default Link
