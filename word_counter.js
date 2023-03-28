  const textArea = document.getElementById('textArea');
  const character = document.getElementById('char');
  const words = document.getElementById('word');

    textArea.addEventListener('input', function(){
      let text = this.value;
      text = text.trim();
      let char = text.length;
      character.value = char;
      let newText = text.split(" ");
      let cleanWords = newText.filter((element) => {
          return element != " ";
      });
      words.value = cleanWords.length;
    });


