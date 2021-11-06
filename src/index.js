
import React, { useState } from "react"
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container, InputGroup, FormControl } from 'react-bootstrap'
import { razdrobit, shuntingYardAlgorithm } from "./calc"
import calculatePostFix from "./postfix"

function Glavka() {
  const [value, setValue] = useState('')
  const [result, setResult] = useState()

  const submit = () => {
    if (!value) return
    setResult(value + '=' + calculatePostFix(shuntingYardAlgorithm(razdrobit(value))))
    setValue('')
  }
  
  return (
    <Container>
      <h1 className='text-uppercase text-center'>интерпретатор</h1>
      <InputGroup>
        <FormControl
          value={value}
          onChange={e => setValue(e.target.value)}
          placeholder="введите даннные"
        />
        <Button
          variant="danger"
          id="button-addon1"
          onClick={() => submit()}
        >
          Вычислить
        </Button>
      </InputGroup>
      {
        result !== undefined ? (
          <>
            <h1 className='text-uppercase'>{result}</h1>
          </>
        ) : null
      }
    </Container>
  )
}

ReactDOM.render(<Glavka />, document.getElementById('root'))


