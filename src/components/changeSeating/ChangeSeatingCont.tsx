import { connect } from "react-redux";
import { Action, Dispatch } from "redux";
import ChangeSeating from "components/changeSeating/ChangeSeating";
import { rootReducer } from "store";

const mapStateToProps = (state: ReturnType<typeof rootReducer>) => {
  return {
    // severity: state.common.snackBarSeverity
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action<string>>) => {
  return {
    // getUser: () => dispatch(getUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeSeating);

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = ReturnType<typeof mapDispatchToProps>;
export type Props = StateProps & DispatchProps;
