// HANDLE FIXED HEADER WHEN SCROLL
const handleFixedHeaderWhenSroll = () => {
  const header = document.getElementById('header')

  if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.classList.add('fixed-header')
  } else {
    header.classList.remove('fixed-header')
  }
}

window.addEventListener('scroll', handleFixedHeaderWhenSroll)
