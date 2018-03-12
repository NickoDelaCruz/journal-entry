import './styles.css';
import { numberOfWords, numberOfVowels, numberOfConsts, getTeaser} from './journal';

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var entry = $('#entry').val();
    var output1 = numberOfWords(entry);
    var output2 = numberOfVowels(entry);
    var output3 = numberOfConsts(entry);
    var output4 = getTeaser(entry);
    $('#solution').append("<p>words : " + output1 + "</p>");
    $('#solution').append("<p>vowels: " + output2 + "</p>");
    $('#solution').append("<p>consts: " + output3 + "</p>");
    $('#solution').append("<p>teaser: " + output4 + "</p>");
  });
});
