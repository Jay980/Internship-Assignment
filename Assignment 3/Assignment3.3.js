const min = document.getElementById('min')
const max = document.getElementById('max')
const mul = document.getElementById('mul')
// when validate button clicked this function will be run
const validate = () =>                                                                                                             {
  const minValue = Number(min.value)
  const maxValue = Number(max.value)
  const mulValue = Number(mul.value)

    // checking mul and min are the factor of max or not
  if(!(maxValue%minValue===0)&&(maxValue%mulValue===0))
  {
      max.classList.add('invalid')
  }
  // checking min is less than max and min is the factor of max
  if (minValue < maxValue &&
    maxValue % minValue === 0) min.classList.remove('invalid')
  else min.classList.add('invalid')
// checking mul is less than max and mul is less than or equal to min and mul is the factor max or not
  if (mulValue < maxValue &&
    mulValue <= minValue &&
    maxValue % mulValue === 0) mul.classList.remove('invalid')
  else mul.classList.add('invalid')

  

}