// Loop through the given links, and assign them a background color class
export function setHoverColors(linkArray, colorArray) {
  for (let linkIndex = 0; linkIndex < linkArray.length; linkIndex++) {
    let count = linkIndex % colorArray.length
    const element = linkArray[linkIndex]
    element.classList.add(colorArray[count])
  }
}
