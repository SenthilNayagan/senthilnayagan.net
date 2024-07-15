document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.reference-link');
  const popup = document.createElement('div');
  popup.classList.add('reference-popup');
  document.body.appendChild(popup);

  links.forEach((link) => {
    link.addEventListener('mouseover', function () {
      const refId = link.getAttribute('data-ref');
      const refElement = document.getElementById(refId);
      let refContent = refElement.innerHTML;

      // Create a temporary element to manipulate the content
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = refContent;

      // Remove the last 'a.back-to-note' element
      const backToNoteLink = tempDiv.querySelector('a.back-to-note');
      if (backToNoteLink) {
        backToNoteLink.remove();
      }

      // Update the popup content
      popup.innerHTML = tempDiv.innerHTML;
      popup.style.display = 'block';

      const rect = link.getBoundingClientRect();
      popup.style.top = `${rect.bottom + window.scrollY + 5}px`;
      popup.style.left = `${rect.left + window.scrollX}px`;
    });

    link.addEventListener('mouseout', function () {
      popup.style.display = 'none';
    });
  });
});
