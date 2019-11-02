import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import AddGist from './AddGist.component';
import * as selectors from 'src/redux/index.selector';
import { addNewGist, deleteGist, allowEdit, editGist } from 'src/redux/index.duck';

const mapStatetoProps = state => ({
  gist: selectors.moduleSelector(state)
});

const mapDispatchtoProps = dispatch => ({
  actions: bindActionCreators(
    {
      addNewGist,
      deleteGist,
      allowEdit,
      editGist
    },
    dispatch
  )
});

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(AddGist);
