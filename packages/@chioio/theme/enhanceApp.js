import './styles/index.scss'

export default ({ Vue, options, router, siteData }) => {

  const htmlTag = document.querySelector('html')

  // set theme data
  if (localStorage.getItem('theme') === null) {
    // set theme data to local storage
    localStorage.setItem('theme', 'light')
    // set attribute to 'html' tag
    htmlTag.setAttribute('data-theme', localStorage.getItem('theme'))
  } else {
    htmlTag.setAttribute('data-theme', localStorage.getItem('theme'))
  }
}
