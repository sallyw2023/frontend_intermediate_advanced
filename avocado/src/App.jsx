import './App.css'
import CrazyTable from './components/CrazyTable'

import {makeStyles} from '@griffel/react'

const useClasses = makeStyles({
  tableContainer : {
    color : 'red',
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    justifyContent : 'center', // not working as expected
    marginTop : '50%',
    marginBottom : '50%',
  }
})

function App() {
  const classes = useClasses();

  return (
    <div className={classes.tableContainer}>
      test
      <CrazyTable />
    </div>
  )
}

export default App
