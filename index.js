function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`
}

function nowServing(line) {
  if (line.length) {
    return `Currently serving ${line.shift()}.`
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if (!line.length) {
    return "The line is currently empty."
  }
  var people = []
  for (let i = 0, l = line.length; i < l; i++) {
    people.push(`${i + 1}. ${line[i]}`)
  }
  return `The line is currently: ${people.join(', ')}`
};
