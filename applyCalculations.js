const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operators");
const resetButton = document.querySelector("#reset");
const deleteButton = document.querySelector("#delete");
const equalButton = document.querySelector("#equal");
const screen = document.querySelector('#result')
let result = [] // datastructure to operate with result
const operations = {
  PLUS: '+',
  MINUS: '-',
  DIV: '/',
  MULT: '*',
  MULT_2: 'x'
}

resetButton.addEventListener("click", () => {
  result = []
  screen.innerText = 0
})

deleteButton.addEventListener("click", () => {
  if (result.length === 0) return
  
  const lastValue = result.pop()
  const updatedValue = lastValue.toString().slice(0, -1)
  updateState(updatedValue)
})

equalButton.addEventListener("click", () => {
  if (result.length === 3) {
    const currenResult = calculateResult()
    screen.innerText = currenResult
    result = []
    result.push(currenResult)
  }
})

operationButtons.forEach(operation => {
  operation.addEventListener("click", handleOperationClick)
})
numberButtons.forEach(number => {
  number.addEventListener("click", handleNumberClick)
})

function updateState(updatedValue) {
  const indexToInsert = result.length > 0 ? result.length - 1 : 0
  const preparedValue = updatedValue === "" ? "0" : updatedValue
  result[indexToInsert] = preparedValue
  screen.innerText = result.join('')
}

function updateStateWithConcating(updatedValue) {
  screen.innerText = screen.innerText.concat(updatedValue)
  result.push(updatedValue)
}

function handleOperationClick({ target }) {
  const operation = target.innerText

  updateStateWithConcating(operation)
}

function calculateResult() {
  switch(result[1]) {
    case operations.PLUS: {
      return parseFloat(result[0]) + parseFloat(result[2])
    }
    case operations.MINUS: {
      return parseFloat(result[0]) - parseFloat(result[2])
    }
    case operations.MULT:
      case operations.MULT_2: {
      return parseFloat(result[0]) * parseFloat(result[2])
    }
    case operations.DIV: {
      return parseFloat(result[0]) / parseFloat(result[2])
    }
  }
}

function handleNumberClick({ target }) {
  const currentNumber = target.innerText
  const previousValue = result.length === 0 || result[0] == 0 ? '' : result[result.length - 1]
  const isPrevValueOperation = Object.values(operations).includes(previousValue)

  let fullNumber 
    
  if (isPrevValueOperation) {
    fullNumber = currentNumber
    updateStateWithConcating(fullNumber)
  } else {
    fullNumber = previousValue.toString().concat(currentNumber)
    updateState(fullNumber)
  }
}
