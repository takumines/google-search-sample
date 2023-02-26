export const getWordParam = () => {
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const word = urlParams.get('word')

  return word === null ? '' : word
}
