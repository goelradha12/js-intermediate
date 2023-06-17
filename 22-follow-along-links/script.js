let triggers = document.querySelectorAll('a');
    const highlight = document.createElement('span');
    highlight.classList.add('highlight');
    document.body.append(highlight);

    triggers = Array.from(triggers);

    function highlightLink() {
      const linkCoordinates = this.getBoundingClientRect();

      console.table(linkCoordinates);
      highlight.style.height = `${linkCoordinates.height}px`;
      highlight.style.width = `${linkCoordinates.width}px`;
      highlight.style.top = `${linkCoordinates.top+window.scrollY}px`;
      highlight.style.left = `${linkCoordinates.left + window.scrollX}px`;

    }

    triggers.forEach(trigger =>
      trigger.addEventListener('mouseover', highlightLink));