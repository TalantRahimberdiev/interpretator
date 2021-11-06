export default function calculatePostFix(tokens) {
   let stack = []
   let [total, a, b] = [0, 0, 0]
   let operand = { '+': 1, '-': 1, '*': 1, '/': 1 }

   tokens.forEach(token => {
      if (token in operand) {
         b = parseInt(stack.pop())
         a = parseInt(stack.pop())

         if (token === '+') total = a + b
         if (token === '-') total = a - b
         if (token === '*') total = a * b
         if (token === '/') total = Math.trunc(a / b)
         stack.push(total)
      }
      else stack.push(token)
   })
   return stack.pop()
}