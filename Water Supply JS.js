function printDiv() {
  window.frames["print_frame"].document.body.innerHTML = document.getElementById("container2").innerHTML;
  window.frames["print_frame"].window.focus();
  window.frames["print_frame"].window.print();
}
document.getElementById('DTtype-type').addEventListener('change', function() {
  const selectedOption = this.options[this.selectedIndex];
  const url = selectedOption.getAttribute('href');

  if (url) {
    window.location.href = url; // Opens in the same tab
    //window.open(url, '_blank'); // Uncomment to open in a new tab
  }
});