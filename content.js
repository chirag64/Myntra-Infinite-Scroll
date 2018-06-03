// alert('Here u go');

// Get the show more button
const showMoreBtn = document.querySelector('.results-showmore');
// alert(showMoreBtn);

function ClickWhenButtonIsAlmostInView() {
  // If the 'Show More' button is below the bottom of the screen 2 times the height of the browser, click it and wait for the setTimeout period
  if (
    showMoreBtn &&
    showMoreBtn.getBoundingClientRect().top < innerHeight * 2
  ) {
    showMoreBtn.click();
    // alert('clicked');
    // console.log(showMoreBtn.getBoundingClientRect().top);

    // We need to stop clicking for the setTimout period otherwise the code will keep clicking the button till the content loads
    window.removeEventListener('scroll', ClickWhenButtonIsAlmostInView);
    setTimeout(function() {
      window.addEventListener('scroll', ClickWhenButtonIsAlmostInView);
    }, 1500);
  }
}

// Call our function when user scrolls
window.addEventListener('scroll', ClickWhenButtonIsAlmostInView);
