
function razdrobit(s) {
   let transfered = []
   let numbers = '12345678900'
   for (let i = 0; i < s.length; i++) {
      if (!numbers.includes(s[i]))
         transfered.push(s[i])
      else {
         let left = i, n = ''
         while (numbers.includes(s[left])) {
            n += s[left]
            left++
         }
         i = left - 1
         transfered.push(n)
      }
   }
   return transfered
}

function shuntingYardAlgorithm(infix) {
   let operations = { '+': 1, '-': 1, '*': 2, '/': 2 }
   let peek = (a) => a[a.length - 1]
   let stack = []

   return infix.reduce((total, item) => {
      if (parseInt(item)) total.push(item)
      if (item in operations) {
         while (peek(stack) in operations && operations[item] <= operations[peek(stack)])
            total.push(stack.pop())
         stack.push(item)
      }
      if (item == '(') stack.push(item)
      if (item == ')') {
         while (peek(stack) !== '(')
            total.push(stack.pop())
         stack.pop()
      }
      return total
   }, []).concat(stack.reverse())
}

export { razdrobit, shuntingYardAlgorithm }