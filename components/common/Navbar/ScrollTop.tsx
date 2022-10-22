import { useScrollTrigger, Fade, Box, Fab, Tooltip } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

const ScrollTop = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const documentHTML = (event.target as HTMLDivElement).ownerDocument
    const anchor = documentHTML.querySelector('#back-to-top-anchor')

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      })
    }
  }

  return (
    <Fade in={trigger}>
      <Box
        onClick={(e) => handleClick(e)}
        role='presentation'
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        <Tooltip title='Scroll to top'>
          <Fab size='small' aria-label='scroll back to top'>
            <KeyboardArrowUpIcon />
          </Fab>
        </Tooltip>
      </Box>
    </Fade>
  )
}

export default ScrollTop
