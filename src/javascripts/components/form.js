import utils from '../helpers/utils';

const displayForm = () => {
  let domString = '';
  domString += '<form>';
  domString += '<div class="form-group">';
  domString += '<label for="form-text">Text</label>';
  domString += '<input type="text" class="form-control" id="form-text">';
  domString += '</div>';
  domString += '<button type="submit" class="btn btn-primary">Submit</button>';
  domString += '</form>';
  utils.printToDom('form-container', domString);
};

export default { displayForm };
