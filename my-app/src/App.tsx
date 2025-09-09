import { useSelector, useDispatch } from 'react-redux'
import type { RootState, AppDispatch } from './store/store'
import { increment, decrement } from './store/counterslice'
import { Container, Typography, Button, Stack, Paper } from '@mui/material'
import { Add, Remove } from '@mui/icons-material'

function App() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Counter: {count}
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            startIcon={<Add />}
            onClick={() => dispatch(increment())}
          >
            Increment
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<Remove />}
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </Button>
        </Stack>
      </Paper>
    </Container>
  )
}

export default App
